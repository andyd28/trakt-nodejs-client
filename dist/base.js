"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TraktBase {
    constructor(options) {
        this.baseUrl = "https://api.trakt.tv";
        this.commonParameters = ["extended", "filters", "page", "limit"];
        this.client_id = options.client_id;
        this.client_secret = options.client_secret;
        this.access_token = options.access_token ?? "";
        this.redirect_uri = options.redirect_uri ?? "urn:ietf:wg:oauth:2.0:oob";
    }
    parseEndpoint(endpoint, params) {
        const matches = endpoint.matchAll(/{([^}]+)}/g);
        if (Object.keys(params).findIndex((p) => this.commonParameters.indexOf(p) >= 0) >= 0) {
        }
        else if (!matches) {
            return endpoint;
        }
        for (const match of matches) {
            const repl = match[1];
            // If querystring
            if (repl && repl[0] === "?") {
                const sourceArray = repl.substring(1).split(",");
                const destArray = [];
                for (const s of sourceArray) {
                    if (!params[s])
                        continue;
                    destArray.push(encodeURIComponent(s) + "=" + encodeURIComponent(params[s]));
                }
                endpoint = endpoint.replace("{" + repl + "}", "?" + destArray.join("&"));
            }
            else if (repl) {
                endpoint = endpoint.replace("{" + repl + "}", params[repl] ?? "");
            }
        }
        for (const common of this.commonParameters) {
            if (!params[common])
                continue;
            endpoint += endpoint.indexOf("?") < 0 ? "?" : "&";
            if (common == "filters")
                endpoint += Object.keys(params[common])
                    .map((p) => p + "=" + params[common][p])
                    .join("&");
            else
                endpoint += common + "=" + params[common];
        }
        endpoint = endpoint.replace(/\/+/g, "/");
        console.log(endpoint);
        return endpoint;
    }
}
exports.default = TraktBase;
//# sourceMappingURL=base.js.map