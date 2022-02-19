"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TraktBase {
    constructor(options) {
        this.baseUrl = "https://api.trakt.tv";
        this.client_id = options.client_id;
        this.client_secret = options.client_secret;
        this.access_token = options.access_token ?? "";
        this.redirect_uri = options.redirect_uri ?? "urn:ietf:wg:oauth:2.0:oob";
    }
    parseEndpoint(endpoint, params) {
        const matches = endpoint.matchAll(/{([^}]+)}/g);
        if (!matches)
            return endpoint;
        for (const match of matches) {
            const repl = match[1];
            // If querystring
            if (repl && repl[0] === "?") {
                const sourceArray = repl.substring(1).split(",");
                const destArray = [];
                for (const s in sourceArray) {
                    if (!params[sourceArray[s]])
                        continue;
                    destArray.push(encodeURIComponent(sourceArray[s]) + "=" + encodeURIComponent(params[sourceArray[s]]));
                }
                endpoint = endpoint.replace("{" + repl + "}", "?" + destArray.join("&"));
            }
            else if (repl) {
                endpoint = endpoint.replace("{" + repl + "}", params[repl] ?? "");
            }
        }
        endpoint = endpoint.replace(/\/+/g, "/");
        return endpoint;
    }
}
exports.default = TraktBase;
//# sourceMappingURL=base.js.map