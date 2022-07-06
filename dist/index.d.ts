import TraktMethods, { TraktAuthenticationAuthorizeRequest, TraktAuthenticationGetTokenResponse, TraktAuthenticationDeviceCodeResponse } from "./methods";
import { TraktOptions } from "./base";
declare class Trakt extends TraktMethods {
    constructor(options: TraktOptions);
    authentication: {
        generateAuthorizeUrl: (params: TraktAuthenticationAuthorizeRequest) => string;
        isAuthenticated: () => boolean;
        authorize: (params: TraktAuthenticationAuthorizeRequest) => Promise<import("got/dist/source").Response<any>>;
        getToken: (params: import("./methods").TraktAuthenticationGetTokenRequest) => Promise<import("got/dist/source").Response<TraktAuthenticationGetTokenResponse>>;
        refreshToken: (params: import("./methods").TraktAuthenticationRefreshTokenRequest) => Promise<import("got/dist/source").Response<TraktAuthenticationGetTokenResponse>>;
        revokeToken: (params: import("./methods").TraktAuthenticationRevokeTokenRequest) => Promise<import("got/dist/source").Response<any>>;
        deviceCode: () => Promise<import("got/dist/source").Response<TraktAuthenticationDeviceCodeResponse>>;
    };
    pollToken(params: TraktAuthenticationDeviceCodeResponse): Promise<any>;
    ensureToken(params: TraktAuthenticationGetTokenResponse): Promise<TraktAuthenticationGetTokenResponse>;
}
export default Trakt;
export * from "./methods";
export * from "./base";
