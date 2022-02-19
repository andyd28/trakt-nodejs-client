class TraktBase {
    protected client_id: string;
    protected client_secret: string;
    protected access_token: string;
    protected redirect_uri: string;
    protected baseUrl = "https://api.trakt.tv";

    constructor(options: TraktOptions) {
        this.client_id = options.client_id;
        this.client_secret = options.client_secret;
        this.access_token = options.access_token ?? "";
        this.redirect_uri = options.redirect_uri ?? "urn:ietf:wg:oauth:2.0:oob";
    }

    protected parseEndpoint(endpoint: string, params: Record<string, any>): string {
        const matches = endpoint.matchAll(/{([^}]+)}/g);

        if (!matches) return endpoint;

        for (const match of matches) {
            const repl = match[1];
            // If querystring
            if (repl && repl[0] === "?") {
                const sourceArray = repl.substring(1).split(",");
                const destArray = [];
                for (const s of sourceArray) {
                    if (!params[s]) continue;
                    destArray.push(encodeURIComponent(s) + "=" + encodeURIComponent(params[s]));
                }

                endpoint = endpoint.replace("{" + repl + "}", "?" + destArray.join("&"));
            } else if (repl) {
                endpoint = endpoint.replace("{" + repl + "}", params[repl] ?? "");
            }
        }

        endpoint = endpoint.replace(/\/+/g, "/");

        return endpoint;
    }
}

export default TraktBase;

export interface TraktOptions {
    client_id: string;
    client_secret: string;
    access_token?: string;
    redirect_uri?: string;
}
