import fs from "fs";
import readline from "readline";

// TODO refactor using a call stack method, looking back for methods and groups rather than
// variables i.e. push and pop

// TODO look for extended and filter properties
// How does this affect the body return object

// TODO as previous, check if OAuth required, then reject if access_token not set.

// TODO finally add paging

type KeyObjectPairs = Record<string, any> | null;

const fileStream = fs.createReadStream("trakt.apib");

const RX_GROUP = /^#{1,2} Group\s(?<name>[a-z]+)/i;
const RX_METHOD = /^## (?<name>[a-z\s]+) \[(?<endpoint>.+)\]$/i;
const RX_OPTIONALS = /^\#{4}\s\&\#[0-9]+/i;
const RX_VERB = /^### (?<name>.+) \[(?<verb>.+)\]$/i;
const RX_METHODPROP = /^\+\s(?<name>[a-z]+)/i;
const RX_PARAMETER = /^\s{4}\+ (?<name>[a-z_]+) \((?<props>.+)\) /i;
const RX_PARAMETERVALUE = /^\s{12}\+?\s?`(?<value>[a-z]+)`/i;
const RX_PROPERTY = /^\s{4}\+ (?<name>[a-z]+)/i;
const RX_PROPERTYVALUE = /^\s{12}(?<name>[a-z-_]+)\: (?<value>.+)/i;
const RX_REQUESTBODYSTART = /^#### JSON POST DATA$/;
const RX_REQUESTBODYVALUE = /^\|(?<name>[^\|]+)\|(?<type>[^\|]+)\|(?<item1>[^\|]+)\|(?<item2>[^\|]+)?\|?$/;
const RX_RESPONSEBODYSTART = /^\s{12}[\{\[]$/;
const RX_RESPONSEBODYEND = /^\s{12}[\}\]]$/;

const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
});

const methodGroups: KeyObjectPairs = {};

const parse = async () => {
    let currentMethodGroup: KeyObjectPairs = null;
    let currentMethod: KeyObjectPairs = null;
    let currentMethodProp: KeyObjectPairs = null;
    let currentMethodPropName: string = "";
    let currentParameter: any | null = null;
    let currentParameterName: string = "";
    let isResponseBody: boolean = false;
    let isRequestBody: boolean = false;
    let currentRequestBody: KeyObjectPairs = {};
    let currentResponseBody = "";

    for await (const line of rl) {
        // Find and set the current method group
        const match = RX_GROUP.exec(line);
        if (match?.groups) {
            currentMethodGroup = ensureMethodGroup(methodGroups, match.groups);
            currentMethod = null;
            currentMethodProp = null;
            currentMethodPropName = "";
            currentParameter = null;
            currentParameterName = "";
        }

        // Add methods to the current group
        const match2 = RX_METHOD.exec(line);
        if (match2?.groups && currentMethodGroup) {
            currentMethod = addMethod(currentMethodGroup, match2.groups);
            currentMethodProp = null;
            currentMethodPropName = "";
            currentParameter = null;
            currentParameterName = "";
            currentRequestBody = {};
        }

        if (RX_OPTIONALS.test(line) && currentMethod) {
            var lineArr = line.split(/\&\#[0-9]+\;/);
            lineArr.shift();
            lineArr
                .map((s) => s.split(" ")[1].trim())
                .forEach((s) => {
                    if (currentMethod) currentMethod[s.toLowerCase()] = true;
                });
        }

        const match3 = RX_METHODPROP.exec(line);
        if (match3?.groups && currentMethod) {
            currentMethodProp = addMethodProperty(currentMethod, match3.groups);
            currentMethodPropName = match3.groups["name"] ?? "";
            currentParameter = null;
            currentParameterName = "";
            currentResponseBody = "";
        }

        const match4 = RX_PARAMETER.exec(line);
        const match5 = RX_PROPERTY.exec(line);
        if (match4?.groups && currentMethodProp) {
            currentParameter = addParameter(currentMethodProp, match4.groups);
            currentParameterName = match4.groups["name"] ?? "";
            currentResponseBody = "";
        } else if (match5?.groups) {
            currentParameter = addProperty(currentMethodProp, match5.groups);
            currentParameterName = match5.groups["name"] ?? "";
            currentResponseBody = "";

            if (currentParameterName == "Body" && currentMethodPropName == "Request")
                assignProperty(currentMethodProp, currentParameterName, currentRequestBody);
        }

        const match6 = RX_PARAMETERVALUE.exec(line);
        if (match6?.groups) {
            addValue(currentParameter, match6.groups);
        }

        const match7 = RX_PROPERTYVALUE.exec(line);
        if (match7?.groups) {
            addKeyValue(currentParameter, match7.groups);
        }

        const match8 = RX_VERB.exec(line);
        if (match8?.groups && currentMethod) {
            if (currentMethod["verb"].length === 0) {
                currentMethod["verb"] = match8.groups["verb"] ?? "GET";
            } else if (match8?.groups) {
                match8.groups["endpoint"] = currentMethod["endpoint"];

                const verb = match8.groups["verb"] ?? "GET";
                const parameters = currentMethod["parameters"];

                // If delete, then copy the method, change the name as uses previous params
                if (verb === "DELETE") {
                    currentMethod = cloneMethod(currentMethodGroup, match8.groups, currentMethod);

                    if (currentMethod) currentMethod.response = {};
                    if (currentMethod) currentMethod.body = {};
                } else {
                    currentMethod = addMethod(currentMethodGroup, match8.groups);
                }

                if (currentMethod) {
                    currentMethod["parameters"] = parameters;
                    currentMethod["verb"] = verb;
                    currentMethodProp = null;
                    currentMethodPropName = "";
                    currentParameter = null;
                    currentParameterName = "";
                    currentRequestBody = {};
                }
            }
        }

        const match9 = RX_RESPONSEBODYSTART.test(line);
        if (match9 && currentParameterName == "Body" && currentMethodPropName == "Response") isResponseBody = true;

        if (isResponseBody) {
            currentResponseBody += line;
        }

        const match10 = RX_RESPONSEBODYEND.test(line);
        if (match10 && currentParameterName == "Body" && currentMethodPropName == "Response") {
            isResponseBody = false;
            assignProperty(currentMethodProp, currentParameterName, JSON.parse(currentResponseBody));
            currentResponseBody = "";
        }

        const match11 = RX_REQUESTBODYSTART.test(line);
        if (match11) {
            isRequestBody = true;
        }

        const match12 = RX_REQUESTBODYVALUE.exec(line);
        if (match12 && match12.groups && match12.groups["name"] && isRequestBody) {
            var name = match12.groups["name"].trim();
            var nameArr = name.split(" ");

            if (name !== "---" && name !== "Key" && nameArr[0])
                currentRequestBody[nameArr[0].replace(/`/g, "")] = addRequestParameter(match12.groups);
        }

        if (line.length == 0 && isRequestBody) isRequestBody = false;
    }

    fs.writeFileSync("./data.json", JSON.stringify(methodGroups, null, 2));
};

const addKeyValue = (parameter: any | null, groups: Record<string, string>) => {
    if (!parameter || !groups["name"] || !groups["value"]) return;

    parameter[groups["name"]] = groups["value"];
};

const addValue = (parameter: any | null, groups: Record<string, string>) => {
    if (!parameter || !groups["value"]) return;

    parameter.values.push(groups["value"]);
};

const assignProperty = (methodProp: KeyObjectPairs, name: string, value: any) => {
    if (!methodProp) return;

    methodProp[name.toLowerCase()] = value;
};

const addRequestParameter = (groups: Record<string, string>) => {
    var param = { values: [] as Array<string>, required: false, default: "", type: "" };

    param.type = (groups["type"] ?? "").trim();

    if (groups["name"] && groups["name"].indexOf(">*<") > -1) param.required = true;

    if (groups && groups["item1"] && groups["item2"]) {
        param.default = groups["item1"].trim().replace(/`/g, "");

        if (param && groups["item2"] && groups["item2"].indexOf("`, `") > -1) {
            param.values = groups["item2"]
                .replace(/`/g, "")
                .split(",")
                .map((v) => v.trim());
        }
    }

    return param;
};

const addProperty = (methodProp: KeyObjectPairs, groups: Record<string, string>): any | null => {
    if (!groups["name"]) return null;

    var propertyName = groups["name"].toLowerCase();

    if (!methodProp) return null;

    methodProp[propertyName] = {};

    return methodProp[propertyName];
};

const addParameter = (methodProp: KeyObjectPairs, groups: Record<string, string>): any | null => {
    if (!groups["name"]) return null;

    var param = { values: [], required: false, type: "" };
    var paramName = groups["name"];
    var props = groups["props"] ? groups["props"].split(", ") : [];

    if (!methodProp) return null;

    if (props.length > 0) param.required = props[0] === "required";
    if (props.length > 1) param.type = props[1] ?? "";

    methodProp[paramName] = param;

    return param;
};

const addMethodProperty = (method: KeyObjectPairs, groups: Record<string, string>): KeyObjectPairs => {
    if (!groups["name"]) return null;

    var name = sanitiseName(groups["name"]);

    if (!method) return null;

    method[name] = {};

    return method[name];
};

const addMethod = (methodGroup: KeyObjectPairs, groups: Record<string, string>): KeyObjectPairs => {
    if (!groups["name"] || !groups["endpoint"]) return null;

    var name = sanitiseName(groups["name"]);

    if (!methodGroup) return null;

    methodGroup[name] = {
        endpoint: groups["endpoint"],
        verb: "",
        extended: false,
        pagination: false,
        filters: false,
        emojis: false,
        oauth: false,
    };

    return methodGroup[name];
};

const cloneMethod = (
    methodGroup: KeyObjectPairs,
    groups: Record<string, string>,
    method: KeyObjectPairs
): KeyObjectPairs => {
    if (!groups["name"] || !groups["endpoint"]) return null;

    var name = sanitiseName(groups["name"]);

    if (!methodGroup) return null;

    methodGroup[name] = JSON.parse(JSON.stringify(method));

    return methodGroup[name];
};

const ensureMethodGroup = (methodGroups: KeyObjectPairs, groups: Record<string, string>): KeyObjectPairs => {
    if (!groups["name"]) return null;

    var name = sanitiseName(groups["name"]);
    if (!methodGroups) return null;

    if (Object.keys(methodGroups).indexOf(name) == -1) methodGroups[name] = {};

    if (!methodGroups[name]) return null;

    return methodGroups[name];
};

const sanitiseName = (name: string): string => {
    const nameArr = name.replace(/[^\d\w\s]/gi, "").split(" ");

    for (var ix = 0; ix < nameArr.length; ix++) {
        var cur = nameArr[ix];
        if (!cur || !cur[0]) continue;

        if (ix === 0) {
            cur = cur[0].toLowerCase() + cur.substring(1);
        } else {
            cur = cur[0].toUpperCase() + cur.substring(1);
        }

        nameArr[ix] = cur;
    }

    return nameArr.join("");
};

parse();

//npx ts-node .\trakt-apib-parser.ts

// interface MethodGroup {
//     [key: string]: Method;
// }

// interface Method {
//     endpoint?: string;
//     verb?: "GET" | "POST" | "PUT" | "DELETE";
//     parameters?: { [key: string]: MethodParameter };
//     request?: MethodRequest;
//     response?: MethodResponse;
// }

// interface MethodParameter {
//     required?: boolean;
//     type?: string;
//     values?: Array<string>;
// }

// interface MethodRequest {
//     headers?: { [key: string]: string };
// }

// interface MethodResponse {
//     headers?: { [key: string]: string };
//     body?: {};
// }
