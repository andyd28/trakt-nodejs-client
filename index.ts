import TraktMethods, { TraktAuthenticationGetTokenResponse, TraktAuthenticationDeviceCodeResponse } from "./methods";
import { TraktOptions } from "./base";

// TODO export all interfaces from this class

class Trakt extends TraktMethods {
    constructor(options: TraktOptions) {
        super(options);
    }

    public pollToken(params: TraktAuthenticationDeviceCodeResponse) {
        let attempts = 0;
        const interval = params.interval * 1000;

        const poll = async (resolve: (value: any | PromiseLike<any>) => void, reject: (reason?: any) => void) => {
            const token = await this.authentication.getToken({
                code: params.device_code,
            });

            if (token.statusCode == 200 && token.body && token.body["access_token"]) {
                this.access_token = token.body["access_token"];
                return resolve(token);
            } else if (params.expires_in / params.interval <= attempts) {
                return reject("Code has expired, please start the process again to generate a new device code.");
            } else {
                attempts++;
                setTimeout(poll, interval, resolve, reject);
            }
        };

        return new Promise(poll);
    }

    public async ensureToken(params: TraktAuthenticationGetTokenResponse): Promise<TraktAuthenticationGetTokenResponse> {
        const expiry = new Date(params.created_at + params.expires_in);

        if (expiry < new Date()) {
            const token = await this.authentication.refreshToken({
                refresh_token: params.refresh_token,
                grant_type: "refresh_token",
            });
            this.access_token = token.body.access_token;
            return token.body;
        } else {
            this.access_token = params["access_token"];
            return params;
        }
    }
}

export default Trakt;

export * from "./methods";
export * from "./base";
