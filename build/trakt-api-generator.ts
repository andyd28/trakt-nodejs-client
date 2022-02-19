import fs from "fs";
import { arrayBuffer } from "stream/consumers";
import { isatty } from "tty";

// TODO
// create get and post methods with gotOptions
// import got, {Options} from 'got';
// Then in those methods we can handle failed responses, etc.

const output = fs.readFileSync("data.json", { encoding: "utf8", flag: "r" });
const data: Record<string, MethodGroup> = JSON.parse(output);

const classRequiredOptions = ["client_id", "client_secret"];
const classOptionalOptions = ["access_token", "redirect_uri"];
const classOptionalValues = ["", "urn:ietf:wg:oauth:2.0:oob", "code", "", ""];
const classStaticValues: string[] = [];
const classAllValues = [...classRequiredOptions, ...classOptionalOptions];

const toTabs = (n: number) => "\t".repeat(n);

const toPascalCase = (...args: string[]) =>
    args
        .map((s) => {
            if (!s[0]) return "";

            return s[0].toUpperCase() + s.substring(1);
        })
        .join("");

const openGroup = (groupName: string) => "\t" + groupName + " = {";

const closeBrace = (tabs: number = 0, suffix: string = "") => `${toTabs(tabs)}}${suffix}\n\n`;

const createInterfaceName = (groupName: string, methodName: string, suffix: string) => "Trakt" + toPascalCase(groupName, methodName) + suffix;

const addParametersInterface = (interfaceName: string, params: Record<string, MethodParameter>) => {
    var paramString = Object.keys(params)
        .filter((key) => classAllValues.indexOf(key) < 0)
        .map((key) => {
            const value = params[key];
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

    return `    
export interface ${interfaceName} { ${paramString}
}
`;
};

const addApiMethod = (groupName: string, methodName: string, method: Method) => {
    let paramsDeclaration: string = "";
    let routeMethod = "endpoint";

    // headers - body - query
    // headers "KEY": "VALUE [PARAM]"
    // body "KEY": "value"
    // parameters: if class property then update

    // Querystring Parameters
    if (!!method.parameters) {
        routeMethod = "this.parseEndpoint(endpoint, params)";
        paramsDeclaration = "params: " + createInterfaceName(groupName, methodName, "Params");
    }

    // Body Parameters
    let body = "";
    const sourceBody = method.request.body ?? {};
    if (Object.keys(sourceBody).length > 0) {
        paramsDeclaration = "params: " + createInterfaceName(groupName, methodName, "Body");
        routeMethod = "this.parseEndpoint(endpoint, params)";
        body = Object.keys(sourceBody)
            .map((key) => {
                if (classAllValues.indexOf(key) >= 0) return `"${key}": this.${key}`;
                else if (classStaticValues.indexOf(key) >= 0) return `"${key}": "${sourceBody[key]}"`;
                else return `"${key}": params.${key}`;
            })
            .join(",\n\t\t\t\t\t");

        body = `
                json: {
                    ${body}
                },`;
    }

    // If all params are in the class props then do not use as params
    if (!!sourceBody && Object.keys(sourceBody).length > 0 && Object.keys(sourceBody).filter((f) => classAllValues.indexOf(f) < 0).length == 0) {
        paramsDeclaration = "";
        routeMethod = "endpoint";
    }

    // Header Parameters
    let headers = "";
    const sourceHeaders = method.request.headers ?? {};
    if (Object.keys(sourceHeaders).length > 0) {
        headers = Object.keys(sourceHeaders)
            .map((key) => {
                const rx = /([\w\s]+)?\[([^\]]+)\]/;
                let value = sourceHeaders[key];

                if (!rx.test(value)) return `"${key}": "${value}"`;

                value = value.replace(rx, (match: any, p1: any, p2: any) => {
                    if (match && !!p1) return `"${p1}" + this.${p2}`;

                    return `this.${p2}`;
                });

                return `"${key}": ${value}`;
            })
            .join(",\n\t\t\t\t\t");

        headers = `
                headers: {
                    ${headers}
                },`;
    }

    // Check for response
    let responseDeclaration = "any";
    if (method.response.body && Object.keys(method.response.body).length > 0) {
        responseDeclaration = createInterfaceName(groupName, methodName, "Response");
        if (Array.isArray(method.response.body)) responseDeclaration += "[]";
    }

    // HACK refreshToken response type is for errors in apib
    if (methodName == "refreshToken") responseDeclaration = createInterfaceName(groupName, "getToken", "Response");

    return `
        ${methodName}: async (${paramsDeclaration}): Promise<Response<${responseDeclaration}>> => {
            const endpoint = "${method.endpoint}";
            const route = this.baseUrl + ${routeMethod};
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "${method.verb}",${headers}${body}                          
            });   
        },`;
};

const openClass = () => `import TraktBase, { TraktOptions } from "./base";
import got, { Response } from "got";

class TraktMethods extends TraktBase {    
    constructor(options: TraktOptions) {
        super(options);
    }
`;

let commonInterfaces = "";
let interfaces = "";

const generateParameterInterfaces = () => {
    for (const groupName in data) {
        const group = data[groupName];

        for (const methodName in group) {
            const method = group[methodName];
            const paramsInterface = createInterfaceName(groupName, methodName, "Params");

            if (!!method.parameters) interfaces += addParametersInterface(paramsInterface, method.parameters);
        }
    }
};

const generateBodyInterfaces = () => {
    for (const groupName in data) {
        const group = data[groupName];

        for (const methodName in group) {
            const method = group[methodName];
            const paramsInterface = createInterfaceName(groupName, methodName, "Body");

            if (!method.request) {
                console.log(methodName);
                continue;
            }

            const params = method.request.body ?? {};
            if (Object.keys(params).length > 0) interfaces += addParametersInterface(paramsInterface, params);
        }
    }
};

const generateProblemInterfaces = () => {
    interfaces += `
export interface TraktCrew extends Record<string, TraktDepartment> { }
    
export interface TraktDepartment extends Array<TraktStaff> { }

export interface TraktStaff {
    jobs: Array<string>;
    episode_count: number;
    person: TraktPerson;
}
`;
};

const generateResponseInterfaces = () => {
    const problems: Record<string, string> = {
        crew: "TraktCrew",
    };

    const common: Record<string, boolean> = {
        user: false,
        show: false,
        movie: false,
        season: false,
        episode: false,
        comment: false,
        list: false,
        person: false,
    };

    const addCommonInterface = (name: string, obj: Record<string, any>) => {
        common[name] = true;
        return `    
export interface Trakt${toPascalCase(name)} { ${propsToString(obj, 1)}
}
`;
    };

    const propsToString = (obj: Record<string, any>, depth: number): string => {
        let interfaceProps: string = "";

        for (let prop in obj) {
            let isArray = false,
                value: any = obj[prop],
                arr = "";

            if (/^[0-9].*/.test(prop)) prop = `"${prop}"`;

            if (Array.isArray(value)) {
                isArray = true;
                value = value[0];
                arr = "[]";
            }

            if (typeof value == "object" && Object.keys(common).indexOf(prop) >= 0) {
                if (!common[prop]) {
                    commonInterfaces += addCommonInterface(prop, value);
                    common[prop] = true;
                }
                interfaceProps += `\n${toTabs(depth)}${prop}: Trakt${toPascalCase(prop)};`;
            } else if (typeof value == "object" && Object.keys(problems).indexOf(prop) >= 0) {
                interfaceProps += `\n${toTabs(depth)}${prop}: ${problems[prop]};`;
            } else if (typeof value == "object") {
                interfaceProps += `\n${toTabs(depth)}${prop}: {`;
                interfaceProps += propsToString(value, depth + 1);
                interfaceProps += `\n${toTabs(depth)}}${arr};`;
            } else {
                interfaceProps += `\n${toTabs(depth)}${prop}: ${typeof value}${arr};`;
            }
        }

        return interfaceProps;
    };

    for (const groupName in data) {
        const group = data[groupName];

        for (let methodName in group) {
            const method = group[methodName];

            const interfaceName = createInterfaceName(groupName, methodName, "Response");

            if (!method.request) {
                console.log(methodName);
                continue;
            }

            // REMEMBER - on main type addition, check if array<t>
            // TODO - not all responses are objects see updatedIds

            let body = method.response.body ?? {};
            const isArray = Array.isArray(body);
            if (isArray) body = body[0];

            if (typeof body !== "object") {
                let ext: string = typeof body;
                if (isArray) ext = "Array<" + ext + ">";
                interfaces += `    
export interface ${interfaceName} extends ${ext} { }
`;
            } else if (Object.keys(body).length > 0)
                interfaces += `    
export interface ${interfaceName} { ${propsToString(body, 1)}
}
`;
        }
    }
};

const generateMethods = () => {
    const writer = fs.createWriteStream("../methods.ts");

    writer.write(openClass());

    for (const groupName in data) {
        const group = data[groupName];

        writer.write(openGroup(groupName));

        for (const methodName in group) {
            const method = group[methodName];

            writer.write(addApiMethod(groupName, methodName, method));
        }

        // Close Method Group
        writer.write("\n" + closeBrace(1, ";"));
    }

    // Close Class
    writer.write(closeBrace());
    writer.write("\nexport default TraktMethods;\n\n");

    writer.write(commonInterfaces);
    writer.write(interfaces);
};

generateParameterInterfaces();
generateBodyInterfaces();
generateProblemInterfaces();
generateResponseInterfaces();
generateMethods();

interface MethodGroup extends Record<string, Method> {}

interface Method {
    endpoint: string;
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

// interface TraktRequest {
//     body: string;
// }

// interface TraktResponse {
//     body: string;
// }
