"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
class Trakt {
    constructor(options) {
        this.authentication = {
            authorize: async (params) => {
                const endpoint = "/oauth/authorize{?response_type,client_id,redirect_uri,state}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            getToken: async (params) => {
                const endpoint = "/oauth/device/token";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "POST",
                    json: {
                        "code": params.code,
                        "client_id": this.client_id,
                        "client_secret": this.client_secret
                    },
                });
                return { headers, body: JSON.parse(body) };
            },
            refreshToken: async (params) => {
                const endpoint = "/oauth/token";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "POST",
                    json: {
                        "refresh_token": params.refresh_token,
                        "client_id": this.client_id,
                        "client_secret": this.client_secret,
                        "redirect_uri": this.redirect_uri,
                        "grant_type": "[object Object]"
                    },
                });
                return { headers, body: JSON.parse(body) };
            },
            revokeToken: async (params) => {
                const endpoint = "/oauth/revoke";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "POST",
                    json: {
                        "token": params.token,
                        "client_id": this.client_id,
                        "client_secret": this.client_secret
                    },
                });
                return { headers, body: JSON.parse(body) };
            },
            deviceCode: async (params) => {
                const endpoint = "/oauth/device/code";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "POST",
                    json: {
                        "client_id": this.client_id
                    },
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.calendars = {
            myShows: async (params) => {
                const endpoint = "/calendars/my/shows/{start_date}/{days}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            myNewShows: async (params) => {
                const endpoint = "/calendars/my/shows/new/{start_date}/{days}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            mySeasonPremieres: async (params) => {
                const endpoint = "/calendars/my/shows/premieres/{start_date}/{days}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            myMovies: async (params) => {
                const endpoint = "/calendars/my/movies/{start_date}/{days}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            myDVD: async (params) => {
                const endpoint = "/calendars/my/dvd/{start_date}/{days}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            allShows: async (params) => {
                const endpoint = "/calendars/all/shows/{start_date}/{days}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            allNewShows: async (params) => {
                const endpoint = "/calendars/all/shows/new/{start_date}/{days}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            allSeasonPremieres: async (params) => {
                const endpoint = "/calendars/all/shows/premieres/{start_date}/{days}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            allMovies: async (params) => {
                const endpoint = "/calendars/all/movies/{start_date}/{days}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            allDVD: async (params) => {
                const endpoint = "/calendars/all/dvd/{start_date}/{days}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.checkin = {
            checkin: async () => {
                const endpoint = "/checkin";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "DELETE",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.certifications = {
            list: async (params) => {
                const endpoint = "/certifications/{type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.comments = {
            comments: async (params) => {
                const endpoint = "/comments";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            comment: async (params) => {
                const endpoint = "/comments/{id}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "DELETE",
                });
                return { headers, body: JSON.parse(body) };
            },
            replies: async (params) => {
                const endpoint = "/comments/{id}/replies";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            item: async (params) => {
                const endpoint = "/comments/{id}/item";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            likes: async (params) => {
                const endpoint = "/comments/{id}/likes";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            like: async (params) => {
                const endpoint = "/comments/{id}/like";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "DELETE",
                });
                return { headers, body: JSON.parse(body) };
            },
            trending: async (params) => {
                const endpoint = "/comments/trending/{comment_type}/{type}{?include_replies}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            recent: async (params) => {
                const endpoint = "/comments/recent/{comment_type}/{type}{?include_replies}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            updates: async (params) => {
                const endpoint = "/comments/updates/{comment_type}/{type}{?include_replies}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.countries = {
            list: async (params) => {
                const endpoint = "/countries/{type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.genres = {
            list: async (params) => {
                const endpoint = "/genres/{type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.languages = {
            list: async (params) => {
                const endpoint = "/lists/{id}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            trending: async () => {
                const endpoint = "/movies/trending";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            popular: async () => {
                const endpoint = "/movies/popular";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            listLikes: async (params) => {
                const endpoint = "/lists/{id}/likes";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            listItems: async (params) => {
                const endpoint = "/lists/{id}/items/{type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            listComments: async (params) => {
                const endpoint = "/lists/{id}/comments/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            recommended: async (params) => {
                const endpoint = "/movies/recommended/{period}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            played: async (params) => {
                const endpoint = "/movies/played/{period}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            watched: async (params) => {
                const endpoint = "/movies/watched/{period}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            collected: async (params) => {
                const endpoint = "/movies/collected/{period}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            anticipated: async () => {
                const endpoint = "/movies/anticipated";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            boxOffice: async () => {
                const endpoint = "/movies/boxoffice";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            updates: async (params) => {
                const endpoint = "/movies/updates/{start_date}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            updatedIDs: async (params) => {
                const endpoint = "/movies/updates/id/{start_date}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            summary: async (params) => {
                const endpoint = "/movies/{id}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            aliases: async (params) => {
                const endpoint = "/movies/{id}/aliases";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            releases: async (params) => {
                const endpoint = "/movies/{id}/releases/{country}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            translations: async (params) => {
                const endpoint = "/movies/{id}/translations/{language}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            comments: async (params) => {
                const endpoint = "/movies/{id}/comments/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            lists: async (params) => {
                const endpoint = "/movies/{id}/lists/{type}/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            people: async (params) => {
                const endpoint = "/movies/{id}/people";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            ratings: async (params) => {
                const endpoint = "/movies/{id}/ratings";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            related: async (params) => {
                const endpoint = "/movies/{id}/related";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            stats: async (params) => {
                const endpoint = "/movies/{id}/stats";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            watching: async (params) => {
                const endpoint = "/movies/{id}/watching";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.networks = {
            list: async () => {
                const endpoint = "/networks";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.people = {
            summary: async (params) => {
                const endpoint = "/people/{id}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            movies: async (params) => {
                const endpoint = "/people/{id}/movies";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            shows: async (params) => {
                const endpoint = "/people/{id}/shows";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            lists: async (params) => {
                const endpoint = "/people/{id}/lists/{type}/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.recommendations = {
            movies: async (params) => {
                const endpoint = "/recommendations/movies{?ignore_collected}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            hideMovie: async (params) => {
                const endpoint = "/recommendations/movies/{id}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "DELETE",
                });
                return { headers, body: JSON.parse(body) };
            },
            shows: async (params) => {
                const endpoint = "/recommendations/shows{?ignore_collected}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            hideShow: async (params) => {
                const endpoint = "/recommendations/shows/{id}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "DELETE",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.scrobble = {
            start: async (params) => {
                const endpoint = "/scrobble/start";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            pause: async (params) => {
                const endpoint = "/scrobble/pause";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            stop: async (params) => {
                const endpoint = "/scrobble/stop";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
        };
        this.search = {
            textQuery: async (params) => {
                const endpoint = "/search/{type}{?query}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            iDLookup: async (params) => {
                const endpoint = "/search/{id_type}/{id}{?type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.shows = {
            trending: async () => {
                const endpoint = "/shows/trending";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            popular: async () => {
                const endpoint = "/shows/popular";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            recommended: async (params) => {
                const endpoint = "/shows/recommended/{period}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            played: async (params) => {
                const endpoint = "/shows/played/{period}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            watched: async (params) => {
                const endpoint = "/shows/watched/{period}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            collected: async (params) => {
                const endpoint = "/shows/collected/{period}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            anticipated: async () => {
                const endpoint = "/shows/anticipated";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            updates: async (params) => {
                const endpoint = "/shows/updates/{start_date}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            updatedIDs: async (params) => {
                const endpoint = "/shows/updates/id/{start_date}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            summary: async (params) => {
                const endpoint = "/shows/{id}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            aliases: async (params) => {
                const endpoint = "/shows/{id}/aliases";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            certifications: async (params) => {
                const endpoint = "/shows/{id}/certifications";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            translations: async (params) => {
                const endpoint = "/shows/{id}/translations/{language}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            comments: async (params) => {
                const endpoint = "/shows/{id}/comments/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            lists: async (params) => {
                const endpoint = "/shows/{id}/lists/{type}/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            collectionProgress: async (params) => {
                const endpoint = "/shows/{id}/progress/collection{?hidden,specials,count_specials,last_activity}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            watchedProgress: async (params) => {
                const endpoint = "/shows/{id}/progress/watched{?hidden,specials,count_specials,last_activity}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            resetWatchedProgress: async (params) => {
                const endpoint = "/shows/{id}/progress/watched/reset";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "DELETE",
                });
                return { headers, body: JSON.parse(body) };
            },
            people: async (params) => {
                const endpoint = "/shows/{id}/people";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            ratings: async (params) => {
                const endpoint = "/shows/{id}/ratings";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            related: async (params) => {
                const endpoint = "/shows/{id}/related";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            stats: async (params) => {
                const endpoint = "/shows/{id}/stats";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            watching: async (params) => {
                const endpoint = "/shows/{id}/watching";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            nextEpisode: async (params) => {
                const endpoint = "/shows/{id}/next_episode";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            lastEpisode: async (params) => {
                const endpoint = "/shows/{id}/last_episode";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.seasons = {
            summary: async (params) => {
                const endpoint = "/shows/{id}/seasons";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            season: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}{?translations}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            comments: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/comments/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            lists: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/lists/{type}/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            people: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/people";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            ratings: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/ratings";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            stats: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/stats";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            watching: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/watching";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.episodes = {
            summary: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            translations: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/translations/{language}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            comments: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            lists: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            people: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/people";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            ratings: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/ratings";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            stats: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/stats";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            watching: async (params) => {
                const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/watching";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.sync = {
            lastActivities: async () => {
                const endpoint = "/sync/last_activities";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            playback: async (params) => {
                const endpoint = "/sync/playback/{type}{?start_at,end_at}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            removePlayback: async (params) => {
                const endpoint = "/sync/playback/{id}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "DELETE",
                });
                return { headers, body: JSON.parse(body) };
            },
            getCollection: async (params) => {
                const endpoint = "/sync/collection/{type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            addToCollection: async (params) => {
                const endpoint = "/sync/collection";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            removeFromCollection: async (params) => {
                const endpoint = "/sync/collection/remove";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            getWatched: async (params) => {
                const endpoint = "/sync/watched/{type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            getHistory: async (params) => {
                const endpoint = "/sync/history/{type}/{id}{?start_at,end_at}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            addToHistory: async (params) => {
                const endpoint = "/sync/history";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            removeFromHistory: async (params) => {
                const endpoint = "/sync/history/remove";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            getRatings: async (params) => {
                const endpoint = "/sync/ratings/{type}/{rating}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            addRatings: async (params) => {
                const endpoint = "/sync/ratings";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            removeRatings: async (params) => {
                const endpoint = "/sync/ratings/remove";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            getWatchlist: async (params) => {
                const endpoint = "/sync/watchlist/{type}/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            addToWatchlist: async (params) => {
                const endpoint = "/sync/watchlist";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            removeFromWatchlist: async (params) => {
                const endpoint = "/sync/watchlist/remove";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            reorderWatchlist: async () => {
                const endpoint = "/sync/watchlist/reorder";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
                return { headers, body: JSON.parse(body) };
            },
            getPersonalRecommendations: async (params) => {
                const endpoint = "/sync/recommendations/{type}/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            addToPersonalRecommendations: async (params) => {
                const endpoint = "/sync/recommendations";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            removeFromPersonalRecommendations: async (params) => {
                const endpoint = "/sync/recommendations/remove";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            reorderPersonalRecommendations: async () => {
                const endpoint = "/sync/recommendations/reorder";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.users = {
            settings: async () => {
                const endpoint = "/users/settings";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            followingRequests: async () => {
                const endpoint = "/users/requests/following";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            followerRequests: async () => {
                const endpoint = "/users/requests";
                const route = endpoint;
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            approveOrDenyFollowerRequests: async (params) => {
                const endpoint = "/users/requests/{id}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "DELETE",
                });
                return { headers, body: JSON.parse(body) };
            },
            hiddenItems: async (params) => {
                const endpoint = "/users/hidden/{section}{?type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            addHiddenItems: async (params) => {
                const endpoint = "/users/hidden/{section}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons
                    },
                });
                return { headers, body: JSON.parse(body) };
            },
            removeHiddenItems: async (params) => {
                const endpoint = "/users/hidden/{section}/remove";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                    json: {
                        "movies": params.movies,
                        "shows": params.shows,
                        "seasons": params.seasons
                    },
                });
                return { headers, body: JSON.parse(body) };
            },
            profile: async (params) => {
                const endpoint = "/users/{id}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            likes: async (params) => {
                const endpoint = "/users/{id}/likes/{type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            collection: async (params) => {
                const endpoint = "/users/{id}/collection/{type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            comments: async (params) => {
                const endpoint = "/users/{id}/comments/{comment_type}/{type}{?include_replies}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            lists: async (params) => {
                const endpoint = "/users/{id}/lists";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            reorderLists: async (params) => {
                const endpoint = "/users/{id}/lists/reorder";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
                return { headers, body: JSON.parse(body) };
            },
            list: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "DELETE",
                });
                return { headers, body: JSON.parse(body) };
            },
            listLikes: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/likes";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            listLike: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/like";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "DELETE",
                });
                return { headers, body: JSON.parse(body) };
            },
            listItems: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/items/{type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            addListItems: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/items";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            removeListItems: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/items/remove";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
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
                return { headers, body: JSON.parse(body) };
            },
            reorderListItems: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/items/reorder";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + this.access_token,
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id
                    },
                });
                return { headers, body: JSON.parse(body) };
            },
            listComments: async (params) => {
                const endpoint = "/users/{id}/lists/{list_id}/comments/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            follow: async (params) => {
                const endpoint = "/users/{id}/follow";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "DELETE",
                });
                return { headers, body: JSON.parse(body) };
            },
            followers: async (params) => {
                const endpoint = "/users/{id}/followers";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            following: async (params) => {
                const endpoint = "/users/{id}/following";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            friends: async (params) => {
                const endpoint = "/users/{id}/friends";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            history: async (params) => {
                const endpoint = "/users/{id}/history/{type}/{item_id}{?start_at,end_at}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            ratings: async (params) => {
                const endpoint = "/users/{id}/ratings/{type}/{rating}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            watchlist: async (params) => {
                const endpoint = "/users/{id}/watchlist/{type}/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            personalRecommendations: async (params) => {
                const endpoint = "/users/{id}/recommendations/{type}/{sort}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            watching: async (params) => {
                const endpoint = "/users/{id}/watching";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            watched: async (params) => {
                const endpoint = "/users/{id}/watched/{type}";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
            stats: async (params) => {
                const endpoint = "/users/{id}/stats";
                const route = this.parseEndpoint(endpoint, params);
                const { headers, body } = await (0, got_1.default)(route, {
                    method: "GET",
                });
                return { headers, body: JSON.parse(body) };
            },
        };
        this.client_id = options.client_id;
        this.client_secret = options.client_secret;
        this.access_token = options.access_token ?? "";
        this.redirect_uri = options.redirect_uri ?? "urn:ietf:wg:oauth:2.0:oob";
    }
    parseEndpoint(endpoint, params) {
        const matches = /{(.+)}/g.exec(endpoint);
        if (!matches)
            return endpoint;
        for (var im = 0; im < matches?.length ?? 0; im++) {
            const repl = matches[im];
            // If querystring
            if (repl[0] === "?") {
                const sourceArray = repl.substring(1).split(",");
                const destArray = [];
                for (const s in sourceArray) {
                    destArray.push(encodeURIComponent(s + "=" + encodeURIComponent(params[s])));
                }
                endpoint = endpoint.replace("{" + repl + "}", "?" + destArray.join("&"));
            }
            else {
                endpoint = endpoint.replace("{" + repl + "}", params[repl]);
            }
        }
        return endpoint;
    }
    ;
}
//# sourceMappingURL=index.js.map