declare class TraktBase {
    protected client_id: string;
    protected client_secret: string;
    protected access_token: string;
    protected redirect_uri: string;
    protected baseUrl: string;
    private commonParameters;
    constructor(options: TraktOptions);
    protected parseEndpoint(endpoint: string, params: Record<string, any>): string;
}
export default TraktBase;
export interface TraktOptions {
    client_id: string;
    client_secret: string;
    access_token?: string;
    redirect_uri?: string;
}
export declare type TraktFilter = "query" | "years" | "genres" | "languages" | "countries" | "runtimes" | "ratings" | "certifications" | "networks" | "status";
