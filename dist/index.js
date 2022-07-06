"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = __importDefault(require("./methods"));
class Trakt extends methods_1.default {
    constructor(options) {
        super(options);
        this.authentication = {
            ...super.authentication,
            generateAuthorizeUrl: (params) => {
                const search = new URLSearchParams({ ...params });
                return "https://trakt.tv/oauth/authorize?" + search.toString();
            },
            isAuthenticated: () => {
                return this.access_token.length > 0;
            },
        };
    }
    pollToken(params) {
        let attempts = 0;
        const interval = params.interval * 1000;
        const poll = async (resolve, reject) => {
            const token = await this.authentication.getToken({
                code: params.device_code,
            });
            if (token.statusCode == 200 && token.body && token.body.access_token) {
                this.access_token = token.body.access_token;
                return resolve(token);
            }
            else if (params.expires_in / params.interval <= attempts) {
                return reject("Code has expired, please start the process again to generate a new device code.");
            }
            else {
                attempts++;
                setTimeout(poll, interval, resolve, reject);
            }
        };
        return new Promise(poll);
    }
    async ensureToken(params) {
        const expiry = new Date((params.created_at + params.expires_in) * 1000);
        if (expiry < new Date()) {
            const token = await this.authentication.refreshToken({
                refresh_token: params.refresh_token,
                grant_type: "refresh_token",
            });
            this.access_token = token.body.access_token;
            return token.body;
        }
        else {
            this.access_token = params.access_token;
            return params;
        }
    }
}
exports.default = Trakt;
__exportStar(require("./methods"), exports);
__exportStar(require("./base"), exports);
//# sourceMappingURL=index.js.map