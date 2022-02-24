import { count } from "console";
import fs from "fs";

/**
 * Interfaces
 */

interface MethodGroup extends Record<string, Method> {}

interface Method {
    endpoint: string;
    pagination: boolean;
    extended: boolean;
    filters: boolean;
    oauth: boolean;
    emojis: boolean;
    parameters?: Record<string, MethodParameter>;
    verb: "GET" | "POST" | "PUT" | "DELETE";
    request: {
        headers?: Record<string, string>;
        body?: Record<string, MethodParameter>;
    };
    response: {
        headers?: Record<string, string>;
        body: any;
    };
}

interface MethodParameter {
    values: Array<string>;
    required: boolean;
    default?: string;
    type: string;
}

/**
 * Utility Classes
 */

const toTabs = (n: number) => "\t".repeat(n);

const toPascalCase = (...args: string[]) =>
    args
        .map((s) => {
            if (!s[0]) return "";

            return s[0].toUpperCase() + s.substring(1);
        })
        .join("");

const createInterfaceName = (groupName: string, methodName: string, suffix: string) =>
    toPascalCase("Trakt", groupName, methodName, suffix);

/**
 * Read data from apib parsing
 */

const output = fs.readFileSync("data.json", { encoding: "utf8", flag: "r" });
const data: Record<string, MethodGroup> = JSON.parse(output);
const writer = fs.createWriteStream("../methods.ts");

let interfaces = "";

/**
 * Class Open
 */

writer.write(`import TraktBase, { TraktOptions, TraktFilter } from "./base";
import got, { Response } from "got";

class TraktMethods extends TraktBase {    
    constructor(options: TraktOptions) {
        super(options);
    }
`);

/**
 * Class Methods
 */

const classRequiredOptions = ["client_id", "client_secret"];
const classOptionalOptions = ["access_token", "redirect_uri"];
const classAllValues = [...classRequiredOptions, ...classOptionalOptions];

/**
 * Crew departments have invalid characters for object properties - added manually
 */
const problemInterfaces: Record<string, string> = {
    crew: "TraktCrew",
};

/**
 * Just for ease of use in applications, the common object interfaces are separate
 */
const commonInterfaces: Record<string, any> = {
    user: {},
    show: {},
    movie: {},
    season: {},
    episode: {},
    comment: {},
    list: {},
    person: {},
};

/**
 * Shorthand methods when parsing the Method object
 */
const hasParameters = (method: Method) => !!method.parameters || method.extended || method.pagination || method.filters;
const hasRequestHeaders = (method: Method) => Object.keys(method.request.headers ?? {}).length > 0;
const hasRequestBody = (method: Method) => Object.keys(method.request.body ?? {}).length > 0;
const hasUserRequestBody = (method: Method) =>
    Object.keys(method.request.body ?? {}).filter((f) => classAllValues.indexOf(f) < 0).length > 0;
const hasResponseBody = (method: Method) => Object.keys(method.response.body ?? {}).length > 0;

/**
 * When merging response arrays, check for any props that do not appear in all items
 */
const getOptionalProperties = (objects: Array<Record<string, any>>): string[] => {
    const len = objects.length;
    const allProps = objects.map((o) => Object.keys(o)).flat();
    const countProps: Record<string, number> = {};
    allProps.forEach((p) => (countProps.hasOwnProperty(p) ? countProps[p]++ : (countProps[p] = 1)));

    return Object.entries(countProps)
        .filter(([key, value]) => value < len)
        .map(([key, value]) => key);
};

/**
 * Convert the response JSON into a typescript interface by analysing the prop values
 */
const propsToString = (obj: Record<string, any> | Array<Record<string, any>>, depth: number): string => {
    let interfaceProps: string = "";
    let optional: string[] = [];

    if (!obj) return "";

    // If array then merge the props - typing for arrays is done outside in responseInterface/declaration
    if (Array.isArray(obj) && typeof obj[0] === "object" && depth == 1) {
        optional = getOptionalProperties(obj);
        obj = Object.assign({}, ...obj);
    } else if (Array.isArray(obj) && depth == 1) {
        obj = obj[0];
    }

    let lastValue;

    for (let [prop, value] of Object.entries(obj)) {
        let isArray = false,
            opt = optional.indexOf(prop) >= 0 ? "?" : "",
            outType = "object";

        // If array then merge the props
        if (Array.isArray(value) && typeof value[0] === "object") {
            isArray = true;
            value = Object.assign({}, ...value);
        } else if (Array.isArray(value)) {
            isArray = true;
            value = value[0];

            // If the value at zero is undefined (empty array) then use previous value
            // as they will be the same
            if (typeof value == "undefined") value = lastValue;
        }

        // If the props are numeric, then wrap
        if (/^[0-9].*/.test(prop)) prop = `"${prop}"`;

        // Get the type for the interface
        outType = typeof value;

        if (outType === "object") {
            if (commonInterfaces.hasOwnProperty(prop)) {
                commonInterfaces[prop] = { ...commonInterfaces[prop], ...value };
                interfaceProps += `\n${toTabs(depth)}${prop}${opt}: ${toPascalCase("Trakt", prop)}`;
            } else if (problemInterfaces.hasOwnProperty(prop)) {
                interfaceProps += `\n${toTabs(depth)}${prop}${opt}: ${problemInterfaces[prop]}`;
            } else {
                interfaceProps += `\n${toTabs(depth)}${prop}${opt}: {`;
                interfaceProps += propsToString(value, depth + 1);
                interfaceProps += `\n${toTabs(depth)}}`;
            }
        } else {
            interfaceProps += `\n${toTabs(depth)}${prop}${opt}: ${typeof value}`;
        }

        // isArray and semi-colon, save the last value for empty siblings
        interfaceProps += isArray ? "[];" : ";";
        lastValue = value;
    }

    return interfaceProps;
};

/**
 * Converts the request JSON into an interface
 */
const addRequestInterface = (groupName: string, methodName: string, method: Method) => {
    const params = { ...(method.parameters ?? {}), ...(method.request.body ?? {}) };

    if (method.pagination) {
        params["page"] = { required: false, type: "number", values: [] };
        params["limit"] = { required: false, type: "number", values: [] };
    }

    if (method.extended) {
        params["extended"] = { required: false, type: "string", values: ["full", "metadata"] };
    }

    if (method.filters) {
        params["filters"] = { required: false, type: "{ [key in TraktFilter]?: string }", values: [] };
    }

    const interfaceName = createInterfaceName(groupName, methodName, "Request");

    if (Object.keys(params).length == 0) return "";

    const paramString = Object.entries(params)
        .filter(([key, value]) => classAllValues.indexOf(key) < 0)
        .map(([key, value]) => {
            let t = value?.type ?? "any";

            switch (t) {
                case "integer":
                case "float":
                case "flloat":
                    t = "number";
                    break;
                case "array":
                    t = "Array<any>";
                    break;
            }

            if (value && value.values && value.values.length > 0) {
                t = t == "number" ? value.values.join("|") : '"' + value.values.join('"|"') + '"';
            }

            return "\n\t" + key + (value?.required ?? false ? ": " : "?: ") + t + ";";
        })
        .join("");

    interfaces += `    
export interface ${interfaceName} { ${paramString}
}
`;
};

/**
 * Converts the response JSON body into an interface
 */
const addResponseInterface = (groupName: string, methodName: string, method: Method): string => {
    const interfaceName = createInterfaceName(groupName, methodName, "Response");
    let body = method.response.body ?? {};

    const isArray = Array.isArray(body);
    let oType = isArray ? typeof body[0] : typeof body;

    interfaces += `    
export interface ${interfaceName} { ${propsToString(body, 1)} ${method.extended ? "\n\t[key: string]: any;" : ""}
}
`;

    return (oType === "object" ? interfaceName : oType) + (isArray ? "[]" : "");
};

/**
 * Creates the interface and returns the name for the parameter declaration on the method
 */
const getParameterDeclaration = (groupName: string, methodName: string, method: Method): string => {
    if (!hasParameters(method) && !hasUserRequestBody(method)) return "";

    addRequestInterface(groupName, methodName, method);
    return "params: " + createInterfaceName(groupName, methodName, "Request");
};

/**
 * Creates the response interface and returns the response type of the method
 */
const getResponseDeclaration = (groupName: string, methodName: string, method: Method): string => {
    let declaration = "any";

    if (hasResponseBody(method)) {
        declaration = addResponseInterface(groupName, methodName, method);
    }

    // HACK refreshToken response type is for errors in apib
    if (methodName == "refreshToken") declaration = createInterfaceName(groupName, "getToken", "Response");

    return declaration;
};

/**
 * Checks if the route requires parsing and returns the appropiate method.
 */
const getMethodRoute = (method: Method): string => {
    if (hasParameters(method) || hasUserRequestBody(method)) return `this.parseEndpoint("${method.endpoint}", params)`;

    return `"${method.endpoint}"`;
};

/**
 * Parses the request headers and replaces the variables with class properties of request parameters
 */
const getRequestHeaders = (method: Method): string => {
    if (!hasRequestHeaders(method)) return "";

    const rx = /([\w\s]+)?\[([^\]]+)\]/;

    let headers = Object.entries(method.request.headers ?? {})
        .map(([key, value]) => {
            if (!rx.test(value)) return `"${key}": "${value}"`;

            value = value.replace(rx, (match: any, p1: any, p2: any) => {
                if (match && !!p1) return `"${p1}" + this.${p2}`;

                return `this.${p2}`;
            });

            return `"${key}": ${value}`;
        })
        .join(",\n" + toTabs(5));

    return `
                headers: {
                    ${headers}
                },`;
};

/**
 * If the POST requires a body, pull the information from the JSON object
 */
const getRequestBody = (method: Method): string => {
    if (!hasRequestBody(method)) return "";

    let body = Object.keys(method.request.body ?? {})
        .map((key) => {
            if (classAllValues.indexOf(key) >= 0) return `"${key}": this.${key}`;
            else return `"${key}": params.${key}`;
        })
        .join(",\n" + toTabs(5));

    return `
                json: {
                    ${body}
                },`;
};

for (const [groupName, group] of Object.entries(data)) {
    writer.write("\t" + groupName + " = {");

    for (const [methodName, method] of Object.entries(group)) {
        const paramsDeclaration = getParameterDeclaration(groupName, methodName, method);
        const responseDeclaration = getResponseDeclaration(groupName, methodName, method);
        const route = getMethodRoute(method);

        writer.write(`
        ${methodName}: async (${paramsDeclaration}): Promise<Response<${responseDeclaration}>> => {
            const route = this.baseUrl + ${route};
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "${method.verb}",${getRequestHeaders(method)}${getRequestBody(method)}                          
            });   
        },`);
    }

    writer.write("\n\t};");
}

/**
 * Class Close
 */

writer.write(`}
export default TraktMethods;

`);

/**
 * Non-Confirming Interfaces
 */

interfaces += `
export interface TraktCrew extends Record<string, TraktDepartment> { }
    
export interface TraktDepartment extends Array<TraktStaff> { }

export interface TraktStaff {
    jobs: Array<string>;
    episode_count: number;
    person: TraktPerson;
}
`;

/**
 * Write the common interfaces to file
 */
for (const [key, value] of Object.entries(commonInterfaces))
    writer.write(`    
export interface ${toPascalCase("Trakt", key)} { ${propsToString(value, 1)} 
    [key: string]: any;
}
`);

writer.write(interfaces);
