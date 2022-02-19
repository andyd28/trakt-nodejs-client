"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("./base"));
const got_1 = __importDefault(require("got"));
class TraktMethods extends base_1.default {
    constructor(options) {
        super(options);
        this.authentication = {
            authorize: async (params) => {
                const endpoint = "/oauth/authorize{?response_type,client_id,redirect_uri,state}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                });
            },
            getToken: async (params) => {
                const endpoint = "/oauth/device/token";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    json: {
                        "code": params.code,
                        "client_id": this.client_id,
                        "client_secret": this.client_secret
                    },
                });
            },
            refreshToken: async (params) => {
                const endpoint = "/oauth/token";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    json: {
                        "refresh_token": params.refresh_token,
                        "client_id": this.client_id,
                        "client_secret": this.client_secret,
                        "redirect_uri": this.redirect_uri,
                        "grant_type": params.grant_type
                    },
                });
            },
            revokeToken: async (params) => {
                const endpoint = "/oauth/revoke";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    json: {
                        "token": params.token,
                        "client_id": this.client_id,
                        "client_secret": this.client_secret
                    },
                });
            },
            deviceCode: async () => {
                const endpoint = "/oauth/device/code";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    json: {
                        "client_id": this.client_id
                    },
                });
            },
        };
        this.calendars = {
            myShows: async (params) => {
                const endpoint = "/calendars/my/shows/{start_date}/{days}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            myNewShows: async (params) => {
                const endpoint = "/calendars/my/shows/new/{start_date}/{days}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            mySeasonPremieres: async (params) => {
                const endpoint = "/calendars/my/shows/premieres/{start_date}/{days}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            myMovies: async (params) => {
                const endpoint = "/calendars/my/movies/{start_date}/{days}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            myDVD: async (params) => {
                const endpoint = "/calendars/my/dvd/{start_date}/{days}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            allShows: async (params) => {
                const endpoint = "/calendars/all/shows/{start_date}/{days}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            allNewShows: async (params) => {
                const endpoint = "/calendars/all/shows/new/{start_date}/{days}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            allSeasonPremieres: async (params) => {
                const endpoint = "/calendars/all/shows/premieres/{start_date}/{days}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            allMovies: async (params) => {
                const endpoint = "/calendars/all/movies/{start_date}/{days}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            allDVD: async (params) => {
                const endpoint = "/calendars/all/dvd/{start_date}/{days}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.checkin = {
            checkin: async () => {
                const endpoint = "/checkin";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.certifications = {
            list: async (params) => {
                const endpoint = "/certifications/{type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.comments = {
            comments: async (params) => {
                const endpoint = "/comments";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "item": params.item,
                        "comment": params.comment,
                        "spoiler": params.spoiler,
                        "sharing": params.sharing
                    },
                });
            },
            comment: async (params) => {
                const endpoint = "/comments/{id}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            replies: async (params) => {
                const endpoint = "/comments/{id}/replies";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "comment": params.comment,
                        "spoiler": params.spoiler
                    },
                });
            },
            item: async (params) => {
                const endpoint = "/comments/{id}/item";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            likes: async (params) => {
                const endpoint = "/comments/{id}/likes";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            like: async (params) => {
                const endpoint = "/comments/{id}/like";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            trending: async (params) => {
                const endpoint = "/comments/trending/{comment_type}/{type}{?include_replies}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            recent: async (params) => {
                const endpoint = "/comments/recent/{comment_type}/{type}{?include_replies}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            updates: async (params) => {
                const endpoint = "/comments/updates/{comment_type}/{type}{?include_replies}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.countries = {
            list: async (params) => {
                const endpoint = "/countries/{type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.genres = {
            list: async (params) => {
                const endpoint = "/genres/{type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.languages = {
            list: async (params) => {
                const endpoint = "/languages/{type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.lists = {
            trending: async () => {
                const endpoint = "/lists/trending";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            popular: async () => {
                const endpoint = "/lists/popular";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            list: async (params) => {
                const endpoint = "/lists/{id}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            listLikes: async (params) => {
                const endpoint = "/lists/{id}/likes";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            listItems: async (params) => {
                const endpoint = "/lists/{id}/items/{type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            listComments: async (params) => {
                const endpoint = "/lists/{id}/comments/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.movies = {
            trending: async () => {
                const endpoint = "/movies/trending";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            popular: async () => {
                const endpoint = "/movies/popular";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            recommended: async (params) => {
                const endpoint = "/movies/recommended/{period}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            played: async (params) => {
                const endpoint = "/movies/played/{period}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            watched: async (params) => {
                const endpoint = "/movies/watched/{period}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            collected: async (params) => {
                const endpoint = "/movies/collected/{period}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            anticipated: async () => {
                const endpoint = "/movies/anticipated";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            boxOffice: async () => {
                const endpoint = "/movies/boxoffice";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            updates: async (params) => {
                const endpoint = "/movies/updates/{start_date}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            updatedIDs: async (params) => {
                const endpoint = "/movies/updates/id/{start_date}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            summary: async (params) => {
                const endpoint = "/movies/{id}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            aliases: async (params) => {
                const endpoint = "/movies/{id}/aliases";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            releases: async (params) => {
                const endpoint = "/movies/{id}/releases/{country}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            translations: async (params) => {
                const endpoint = "/movies/{id}/translations/{language}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            comments: async (params) => {
                const endpoint = "/movies/{id}/comments/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            lists: async (params) => {
                const endpoint = "/movies/{id}/lists/{type}/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            people: async (params) => {
                const endpoint = "/movies/{id}/people";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            ratings: async (params) => {
                const endpoint = "/movies/{id}/ratings";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            related: async (params) => {
                const endpoint = "/movies/{id}/related";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            stats: async (params) => {
                const endpoint = "/movies/{id}/stats";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            watching: async (params) => {
                const endpoint = "/movies/{id}/watching";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.networks = {
            list: async () => {
                const endpoint = "/networks";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.people = {
            summary: async (params) => {
                const endpoint = "/people/{id}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            movies: async (params) => {
                const endpoint = "/people/{id}/movies";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            shows: async (params) => {
                const endpoint = "/people/{id}/shows";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            lists: async (params) => {
                const endpoint = "/people/{id}/lists/{type}/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.recommendations = {
            movies: async (params) => {
                const endpoint = "/recommendations/movies{?ignore_collected}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            hideMovie: async (params) => {
                const endpoint = "/recommendations/movies/{id}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            shows: async (params) => {
                const endpoint = "/recommendations/shows{?ignore_collected}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            hideShow: async (params) => {
                const endpoint = "/recommendations/shows/{id}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.scrobble = {
            start: async (params) => {
                const endpoint = "/scrobble/start";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "item": params.item,
                        "progress": params.progress,
                        "app_version": params.app_version,
                        "app_date": params.app_date
                    },
                });
            },
            pause: async (params) => {
                const endpoint = "/scrobble/pause";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "item": params.item,
                        "progress": params.progress,
                        "app_version": params.app_version,
                        "app_date": params.app_date
                    },
                });
            },
            stop: async (params) => {
                const endpoint = "/scrobble/stop";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "item": params.item,
                        "progress": params.progress,
                        "app_version": params.app_version,
                        "app_date": params.app_date
                    },
                });
            },
        };
        this.search = {
            textQuery: async (params) => {
                const endpoint = "/search/{type}{?query}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            iDLookup: async (params) => {
                const endpoint = "/search/{id_type}/{id}{?type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.shows = {
            trending: async () => {
                const endpoint = "/shows/trending";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            popular: async () => {
                const endpoint = "/shows/popular";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            recommended: async (params) => {
                const endpoint = "/shows/recommended/{period}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            played: async (params) => {
                const endpoint = "/shows/played/{period}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            watched: async (params) => {
                const endpoint = "/shows/watched/{period}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            collected: async (params) => {
                const endpoint = "/shows/collected/{period}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            anticipated: async () => {
                const endpoint = "/shows/anticipated";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            updates: async (params) => {
                const endpoint = "/shows/updates/{start_date}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            updatedIDs: async (params) => {
                const endpoint = "/shows/updates/id/{start_date}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            summary: async (params) => {
                const endpoint = "/shows/{id}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            aliases: async (params) => {
                const endpoint = "/shows/{id}/aliases";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            certifications: async (params) => {
                const endpoint = "/shows/{id}/certifications";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            translations: async (params) => {
                const endpoint = "/shows/{id}/translations/{language}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            comments: async (params) => {
                const endpoint = "/shows/{id}/comments/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            lists: async (params) => {
                const endpoint = "/shows/{id}/lists/{type}/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            collectionProgress: async (params) => {
                const endpoint = "/shows/{id}/progress/collection{?hidden,specials,count_specials,last_activity}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            watchedProgress: async (params) => {
                const endpoint = "/shows/{id}/progress/watched{?hidden,specials,count_specials,last_activity}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            resetWatchedProgress: async (params) => {
                const endpoint = "/shows/{id}/progress/watched/reset";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            people: async (params) => {
                const endpoint = "/shows/{id}/people";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            ratings: async (params) => {
                const endpoint = "/shows/{id}/ratings";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            related: async (params) => {
                const endpoint = "/shows/{id}/related";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            stats: async (params) => {
                const endpoint = "/shows/{id}/stats";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            watching: async (params) => {
                const endpoint = "/shows/{id}/watching";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            nextEpisode: async (params) => {
                const endpoint = "/shows/{id}/next_episode";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            lastEpisode: async (params) => {
                const endpoint = "/shows/{id}/last_episode";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.seasons = {
            summary: async (params) => {
                const endpoint = "/shows/{id}/seasons";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            season: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}{?translations}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            comments: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/comments/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            lists: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/lists/{type}/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            people: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/people";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            ratings: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/ratings";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            stats: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/stats";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            watching: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/watching";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.episodes = {
            summary: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            translations: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/translations/{language}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            comments: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            lists: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            people: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/people";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            ratings: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/ratings";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            stats: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/stats";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            watching: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/watching";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.sync = {
            lastActivities: async () => {
                const endpoint = "/sync/last_activities";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            playback: async (params) => {
                const endpoint = "/sync/playback/{type}{?start_at,end_at}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            removePlayback: async (params) => {
                const endpoint = "/sync/playback/{id}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            getCollection: async (params) => {
                const endpoint = "/sync/collection/{type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            addToCollection: async (params) => {
                const endpoint = "/sync/collection";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "episodes": params.episodes
                    },
                });
            },
            removeFromCollection: async (params) => {
                const endpoint = "/sync/collection/remove";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "episodes": params.episodes
                    },
                });
            },
            getWatched: async (params) => {
                const endpoint = "/sync/watched/{type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            getHistory: async (params) => {
                const endpoint = "/sync/history/{type}/{id}{?start_at,end_at}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            addToHistory: async (params) => {
                const endpoint = "/sync/history";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "episodes": params.episodes
                    },
                });
            },
            removeFromHistory: async (params) => {
                const endpoint = "/sync/history/remove";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "episodes": params.episodes,
                        "ids": params.ids
                    },
                });
            },
            getRatings: async (params) => {
                const endpoint = "/sync/ratings/{type}/{rating}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            addRatings: async (params) => {
                const endpoint = "/sync/ratings";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "episodes": params.episodes
                    },
                });
            },
            removeRatings: async (params) => {
                const endpoint = "/sync/ratings/remove";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "episodes": params.episodes
                    },
                });
            },
            getWatchlist: async (params) => {
                const endpoint = "/sync/watchlist/{type}/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            addToWatchlist: async (params) => {
                const endpoint = "/sync/watchlist";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "episodes": params.episodes
                    },
                });
            },
            removeFromWatchlist: async (params) => {
                const endpoint = "/sync/watchlist/remove";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "episodes": params.episodes
                    },
                });
            },
            reorderWatchlist: async () => {
                const endpoint = "/sync/watchlist/reorder";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            getPersonalRecommendations: async (params) => {
                const endpoint = "/sync/recommendations/{type}/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            addToPersonalRecommendations: async (params) => {
                const endpoint = "/sync/recommendations";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows
                    },
                });
            },
            removeFromPersonalRecommendations: async (params) => {
                const endpoint = "/sync/recommendations/remove";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows
                    },
                });
            },
            reorderPersonalRecommendations: async () => {
                const endpoint = "/sync/recommendations/reorder";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
        this.users = {
            settings: async () => {
                const endpoint = "/users/settings";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            followingRequests: async () => {
                const endpoint = "/users/requests/following";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            followerRequests: async () => {
                const endpoint = "/users/requests";
                const route = this.baseUrl + endpoint;
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            approveOrDenyFollowerRequests: async (params) => {
                const endpoint = "/users/requests/{id}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            hiddenItems: async (params) => {
                const endpoint = "/users/hidden/{section}{?type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            addHiddenItems: async (params) => {
                const endpoint = "/users/hidden/{section}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "users": params.users
                    },
                });
            },
            removeHiddenItems: async (params) => {
                const endpoint = "/users/hidden/{section}/remove";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "users": params.users
                    },
                });
            },
            profile: async (params) => {
                const endpoint = "/users/{id}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            likes: async (params) => {
                const endpoint = "/users/{id}/likes/{type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            collection: async (params) => {
                const endpoint = "/users/{id}/collection/{type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            comments: async (params) => {
                const endpoint = "/users/{id}/comments/{comment_type}/{type}{?include_replies}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            lists: async (params) => {
                const endpoint = "/users/{id}/lists";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "name": params.name,
                        "description": params.description,
                        "privacy": params.privacy,
                        "display_numbers": params.display_numbers,
                        "allow_comments": params.allow_comments,
                        "sort_by": params.sort_by,
                        "sort_how": params.sort_how
                    },
                });
            },
            reorderLists: async (params) => {
                const endpoint = "/users/{id}/lists/reorder";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            list: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            listLikes: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/likes";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            listLike: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/like";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            listItems: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/items/{type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            addListItems: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/items";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "episodes": params.episodes,
                        "people": params.people
                    },
                });
            },
            removeListItems: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/items/remove";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons,
                        "episodes": params.episodes,
                        "people": params.people
                    },
                });
            },
            reorderListItems: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/items/reorder";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            listComments: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/comments/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            follow: async (params) => {
                const endpoint = "/users/{id}/follow";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            followers: async (params) => {
                const endpoint = "/users/{id}/followers";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            following: async (params) => {
                const endpoint = "/users/{id}/following";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            friends: async (params) => {
                const endpoint = "/users/{id}/friends";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            history: async (params) => {
                const endpoint = "/users/{id}/history/{type}/{item_id}{?start_at,end_at}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            ratings: async (params) => {
                const endpoint = "/users/{id}/ratings/{type}/{rating}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            watchlist: async (params) => {
                const endpoint = "/users/{id}/watchlist/{type}/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            personalRecommendations: async (params) => {
                const endpoint = "/users/{id}/recommendations/{type}/{sort}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            watching: async (params) => {
                const endpoint = "/users/{id}/watching";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            watched: async (params) => {
                const endpoint = "/users/{id}/watched/{type}";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
            stats: async (params) => {
                const endpoint = "/users/{id}/stats";
                const route = this.baseUrl + this.parseEndpoint(endpoint, params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
            },
        };
    }
}
exports.default = TraktMethods;
//# sourceMappingURL=methods.js.map