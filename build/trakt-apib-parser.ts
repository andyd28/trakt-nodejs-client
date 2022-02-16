import { AnyCnameRecord } from "dns";
import { captureRejectionSymbol } from "events";
import * as fs from "fs";
import * as readline from "readline";

type KeyObjectPairs = Record<string, any> | null;

const fileStream = fs.createReadStream("trakt.apib");

const RX_GROUP = /^# Group\s(?<name>[a-z]+)/i;
const RX_METHOD = /^## (?<name>[a-z\s]+) \[(?<endpoint>.+)\]$/i;
const RX_VERB = /^###.+\[(?<verb>.+)\]$/i;
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

        const match3 = RX_METHODPROP.exec(line);
        if (match3?.groups && currentMethod) {
            currentMethodProp = addMethodProperty(currentMethod, match3.groups);
            currentMethodPropName = match3.groups.name;
            currentParameter = null;
            currentParameterName = "";
            currentResponseBody = "";
        }

        const match4 = RX_PARAMETER.exec(line);
        const match5 = RX_PROPERTY.exec(line);
        if (match4?.groups && currentMethodProp) {
            currentParameter = addParameter(currentMethodProp, match4.groups);
            currentParameterName = match4.groups.name;
            currentResponseBody = "";
        } else if (match5?.groups) {
            currentParameter = addProperty(currentMethodProp, match5.groups);
            currentParameterName = match5.groups.name;
            currentResponseBody = "";

            if (currentParameterName == "Body" && currentMethodPropName == "Request") assignProperty(currentMethodProp, currentParameterName, currentRequestBody);
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
            currentMethod["verb"] = match8.groups.verb;
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
        if (match12 && isRequestBody && match12.groups.name.trim() !== "---" && match12.groups.name.trim() !== "Key") {
            currentRequestBody[match12.groups.name.trim().split(" ")[0].replace(/`/g, "")] = addRequestParameter(match12.groups);
        }

        if (line.length == 0 && isRequestBody) isRequestBody = false;

        // TODO for body, create a dictionary that adds to, use once complete to create interfaces
        // PeopleResponse
        //  cast: Array<CastResponse>
        // characters Array<string>
        // person PersonResponse name: string, ids: IdsResponse
        // IdsResponse trakt? number
    }

    fs.writeFileSync("./data.json", JSON.stringify(methodGroups, null, 2));
};

const addKeyValue = (parameter: any | null, groups: Record<string, string>) => {
    if (!parameter) return;

    parameter[groups.name] = groups.value;
};

const addValue = (parameter: any | null, groups: Record<string, string>) => {
    if (!parameter) return;

    parameter.values.push(groups.value);
};

const assignProperty = (methodProp: KeyObjectPairs, name: string, value: any) => {
    if (!methodProp) return;

    methodProp[name.toLowerCase()] = value;
};

const addRequestParameter = (groups: Record<string, string>) => {
    var param = { values: [], required: false, default: "", type: "" };

    param.type = groups.type.trim();

    if (groups.name.indexOf(">*<") > -1) param.required = true;

    if (groups.item2) {
        param.default = groups.item1.trim().replace(/`/g, "");

        if (groups.item2.indexOf("`, `") > -1) {
            param.values = groups.item2
                .replace(/`/g, "")
                .split(",")
                .map((v) => v.trim());
        }
    }

    return param;
};

const addProperty = (methodProp: KeyObjectPairs, groups: Record<string, string>): any | null => {
    var propertyName = groups.name.toLowerCase();

    if (!methodProp) return null;

    methodProp[propertyName] = {};

    return methodProp[propertyName];
};

const addParameter = (methodProp: KeyObjectPairs, groups: Record<string, string>): any | null => {
    var param = { values: [], required: false, type: "" };
    var paramName = groups.name;
    var props = groups?.props ? groups.props.split(", ") : [];

    if (!methodProp) return null;

    if (props.length > 0) param.required = props[0] === "required";
    if (props.length > 1) param.type = props[1];

    methodProp[paramName] = param;

    return param;
};

const addMethodProperty = (method: KeyObjectPairs, groups: Record<string, string>): KeyObjectPairs => {
    var name = sanitiseName(groups.name);

    if (!method) return null;

    method[name] = {};

    return method[name];
};

const addMethod = (methodGroup: KeyObjectPairs, groups: Record<string, string>): KeyObjectPairs => {
    var name = sanitiseName(groups.name);

    if (!methodGroup) return null;

    methodGroup[name] = {
        endpoint: groups.endpoint,
    };

    return methodGroup[name];
};

const ensureMethodGroup = (methodGroups: KeyObjectPairs, groups: Record<string, string>): KeyObjectPairs => {
    var name = sanitiseName(groups.name);
    if (!methodGroups) return null;

    if (Object.keys(methodGroups).indexOf(name) == -1) methodGroups[name] = {};

    if (!methodGroups[name]) return null;

    return methodGroups[name];
};

const sanitiseName = (name: string): string => {
    const nameArr = name.split(" ");

    for (var ix = 0; ix < nameArr.length; ix++) {
        if (ix === 0) {
            nameArr[ix] = nameArr[ix][0].toLowerCase() + nameArr[ix].substring(1);
        } else {
            nameArr[ix] = nameArr[ix][0].toUpperCase() + nameArr[ix].substring(1);
        }
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
