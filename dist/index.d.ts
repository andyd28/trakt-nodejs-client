import TraktMethods, { TraktAuthenticationGetTokenResponse, TraktAuthenticationDeviceCodeResponse } from "./methods";
import { TraktOptions } from "./base";
declare class Trakt extends TraktMethods {
    constructor(options: TraktOptions);
    pollToken(params: TraktAuthenticationDeviceCodeResponse): Promise<any>;
    ensureToken(params: TraktAuthenticationGetTokenResponse): Promise<TraktAuthenticationGetTokenResponse>;
}
export default Trakt;
