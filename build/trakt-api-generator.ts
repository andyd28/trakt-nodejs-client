const fs = require("fs");

const output = fs.readFileSync("data.json", { encoding: "utf8", flag: "r" });
const data = JSON.parse(output);
const classRequiredOptions = ["client_id", "client_secret"];
const classOptionalOptions = ["access_token", "redirect_uri"];
const classOptionalValues = ["", "urn:ietf:wg:oauth:2.0:oob", "code", "", ""];
const classStaticValues = ["grant_type"];
const classAllValues = [...classRequiredOptions, ...classOptionalOptions];

const toPascalCase = (...args: string[]) => args.map((s) => {
    if(!s[0]) return "";
    
    return s[0].toUpperCase() + s.substring(1)
}).join("");

const openGroup = (groupName: string) => "\t" + groupName + " = {";

const closeBrace = (tabs: number = 0, suffix: string = "") => `${"\t".repeat(tabs)}}${suffix}\n\n`;

const createInterfaceName = (groupName: string, methodName: string, suffix: string) => "Trakt" + toPascalCase(groupName, methodName) + suffix;

const addParametersInterface = (interfaceName: string, params: Record<string, MethodParameter>) => {
    var paramString = Object.keys(params)
        .filter(key => classAllValues.indexOf(key) < 0)
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

            return "\n\t" + key + ((value?.required ?? false) ? ": " : "?: ") + t + ";";
        })
        .join("");

    return `    
export interface ${interfaceName} { ${paramString}
}
`;
};

const addMethod = (groupName: string, methodName: string, method: any) => {
    let paramsDeclaration: string = "";
    let routeMethod = "endpoint";

    // headers - body - query
    // headers "KEY": "VALUE [PARAM]"
    // body "KEY": "value"
    // parameters: if class property then update

    // Querystring Parameters
    const sourceParams = method["parameters"];
    if (!!sourceParams) {
        routeMethod = "this.parseEndpoint(endpoint, params)";
        paramsDeclaration = "params: " + createInterfaceName(groupName, methodName, "Params");
    }

    // Body Parameters
    let body = "";
    const sourceBody = method["request"].hasOwnProperty("body") ? method["request"]["body"] : {};
    if (!!sourceBody && Object.keys(sourceBody).length > 0) {
        paramsDeclaration = "params: " + createInterfaceName(groupName, methodName, "Body");
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
    if(sourceBody && Object.keys(sourceBody).filter(f => classAllValues.indexOf(f) < 0).length == 0)
        paramsDeclaration = "";

    // Header Parameters
    let headers = "";
    const sourceHeaders = method["request"].hasOwnProperty("body") ? method["request"]["headers"] : {};
    if (!!sourceHeaders && Object.keys(sourceHeaders).length > 0) {
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

    return `
        ${methodName}: async (${paramsDeclaration}) => {
            const endpoint = "${method["endpoint"]}";
            const route = ${routeMethod};

            const {headers, body} = await got(route, {
                method: "${method["verb"]}",${headers}${body}                          
            });

            return { headers, body: JSON.parse(body) };
        },`;
};

const openClass = () => `import got from "got";

class Trakt {
${classRequiredOptions.map((opt) => `\tprivate ${opt}: string;`).join("\n")}
${classOptionalOptions.map((opt) => `\tprivate ${opt}: string;`).join("\n")}
    
    constructor(options: TraktOptions) {
${classRequiredOptions.map((opt) => `\t\tthis.${opt} = options.${opt};`).join("\n")}
${classOptionalOptions.map((opt) => `\t\tthis.${opt} = options.${opt} ?? "${classOptionalValues[classOptionalOptions.indexOf(opt)]}";`).join("\n")}
    }
    
    private parseEndpoint(endpoint: string, params: Record<string, any>): string {
        const matches = /{(.+)}/g.exec(endpoint);

        if(!matches)
            return endpoint;

        for (var im = 0; im < matches.length; im++) {
            const repl = matches[im];
            // If querystring
            if (repl && repl[0] === "?") {
                const sourceArray = repl.substring(1).split(",");
                const destArray = [];
                for (const s in sourceArray) {
                    destArray.push(encodeURIComponent(s + "=" + encodeURIComponent(params[s])));
                }

                endpoint = endpoint.replace("{" + repl + "}", "?" + destArray.join("&"));
            } else if(repl) {
                endpoint = endpoint.replace("{" + repl + "}", params[repl]);
            }
        }

         return endpoint;
    };

`;

let interfaces = "";

const generateParameterInterfaces = () => {
    for (const groupName in data) {
        const group = data[groupName];

        for (const methodName in data[groupName]) {
            const method = group[methodName];
            const paramsInterface = createInterfaceName(groupName, methodName, "Params");

            const params = method["parameters"];
            if (!!params) interfaces += addParametersInterface(paramsInterface, params);
        }
    }
};

const generateBodyInterfaces = () => {
    for (const groupName in data) {
        const group = data[groupName];

        for (const methodName in data[groupName]) {
            const method = group[methodName];
            const paramsInterface = createInterfaceName(groupName, methodName, "Body");

            const params = method["request"].hasOwnProperty("body") ? method["request"]["body"] : {};
            if (!!params && Object.keys(params).length > 0) interfaces += addParametersInterface(paramsInterface, params);
        }
    }
};

const generateOptionsInterface = () => {
    interfaces += `export interface TraktOptions {
${classRequiredOptions.map((opt) => `\t${opt}: string;`).join("\n")}
${classOptionalOptions.map((opt) => `\t${opt}?: string;`).join("\n")}
}
`;
};

const generateMethods = () => {
    const writer = fs.createWriteStream("../index.ts");
    //const typeWriter = fs.createWriteStream("../index.d.ts");

    writer.write(openClass());

    for (const groupName in data) {
        const group = data[groupName];

        writer.write(openGroup(groupName));

        for (const methodName in group) {
            const method = group[methodName];

            writer.write(addMethod(groupName, methodName, method));
        }

        // Close Method Group
        writer.write("\n" + closeBrace(1, ";"));
    }

    // Close Class
    writer.write(closeBrace());
    writer.write("\nexport default Trakt;\n\n")
    
    writer.write(interfaces);
};

generateOptionsInterface();
generateParameterInterfaces();
generateBodyInterfaces();
generateMethods();

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
