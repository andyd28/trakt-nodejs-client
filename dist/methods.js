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
                const route = this.baseUrl + this.parseEndpoint("/oauth/authorize{?response_type,client_id,redirect_uri,state}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                });
            },
            getToken: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/oauth/device/token", params);
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
                const route = this.baseUrl + this.parseEndpoint("/oauth/token", params);
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
                const route = this.baseUrl + this.parseEndpoint("/oauth/revoke", params);
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
                const route = this.baseUrl + "/oauth/device/code";
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
                const route = this.baseUrl + this.parseEndpoint("/calendars/my/shows/{start_date}/{days}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/calendars/my/shows/new/{start_date}/{days}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/calendars/my/shows/premieres/{start_date}/{days}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/calendars/my/movies/{start_date}/{days}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/calendars/my/dvd/{start_date}/{days}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/calendars/all/shows/{start_date}/{days}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/calendars/all/shows/new/{start_date}/{days}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/calendars/all/shows/premieres/{start_date}/{days}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/calendars/all/movies/{start_date}/{days}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/calendars/all/dvd/{start_date}/{days}", params);
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
            checkin: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/checkin", params);
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
                        "sharing": params.sharing,
                        "message": params.message,
                        "venue_id": params.venue_id,
                        "venue_name": params.venue_name,
                        "app_version": params.app_version,
                        "app_date": params.app_date
                    },
                });
            },
            deleteAnyActiveCheckins: async () => {
                const route = this.baseUrl + "/checkin";
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
                const route = this.baseUrl + this.parseEndpoint("/certifications/{type}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/comments", params);
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
                const route = this.baseUrl + this.parseEndpoint("/comments/{id}", params);
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
            updateACommentOrReply: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/comments/{id}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "PUT",
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
            deleteACommentOrReply: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/comments/{id}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/comments/{id}/replies", params);
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
            postAReplyForAComment: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/comments/{id}/replies", params);
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
                const route = this.baseUrl + this.parseEndpoint("/comments/{id}/item", params);
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
                const route = this.baseUrl + this.parseEndpoint("/comments/{id}/likes", params);
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
                const route = this.baseUrl + this.parseEndpoint("/comments/{id}/like", params);
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
            removeLikeOnAComment: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/comments/{id}/like", params);
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
                const route = this.baseUrl + this.parseEndpoint("/comments/trending/{comment_type}/{type}{?include_replies}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/comments/recent/{comment_type}/{type}{?include_replies}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/comments/updates/{comment_type}/{type}{?include_replies}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/countries/{type}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/genres/{type}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/languages/{type}", params);
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
            trending: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/lists/trending", params);
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
            popular: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/lists/popular", params);
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
                const route = this.baseUrl + this.parseEndpoint("/lists/{id}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/lists/{id}/likes", params);
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
                const route = this.baseUrl + this.parseEndpoint("/lists/{id}/items/{type}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/lists/{id}/comments/{sort}", params);
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
            trending: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/movies/trending", params);
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
            popular: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/movies/popular", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/recommended/{period}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/played/{period}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/watched/{period}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/collected/{period}", params);
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
            anticipated: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/movies/anticipated", params);
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
            boxOffice: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/movies/boxoffice", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/updates/{start_date}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/updates/id/{start_date}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/{id}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/{id}/aliases", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/{id}/releases/{country}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/{id}/translations/{language}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/{id}/comments/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/{id}/lists/{type}/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/{id}/people", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/{id}/ratings", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/{id}/related", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/{id}/stats", params);
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
                const route = this.baseUrl + this.parseEndpoint("/movies/{id}/watching", params);
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
                const route = this.baseUrl + "/networks";
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
                const route = this.baseUrl + this.parseEndpoint("/people/{id}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/people/{id}/movies", params);
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
                const route = this.baseUrl + this.parseEndpoint("/people/{id}/shows", params);
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
                const route = this.baseUrl + this.parseEndpoint("/people/{id}/lists/{type}/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/recommendations/movies{?ignore_collected}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/recommendations/movies/{id}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/recommendations/shows{?ignore_collected}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/recommendations/shows/{id}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/scrobble/start", params);
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
                const route = this.baseUrl + this.parseEndpoint("/scrobble/pause", params);
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
                const route = this.baseUrl + this.parseEndpoint("/scrobble/stop", params);
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
                const route = this.baseUrl + this.parseEndpoint("/search/{type}{?query}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/search/{id_type}/{id}{?type}", params);
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
            trending: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/shows/trending", params);
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
            popular: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/shows/popular", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/recommended/{period}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/played/{period}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/watched/{period}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/collected/{period}", params);
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
            anticipated: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/shows/anticipated", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/updates/{start_date}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/updates/id/{start_date}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/aliases", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/certifications", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/translations/{language}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/comments/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/lists/{type}/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/progress/collection{?hidden,specials,count_specials,last_activity}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/progress/watched{?hidden,specials,count_specials,last_activity}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/progress/watched/reset", params);
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
            undoResetShowProgress: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/progress/watched/reset", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/people", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/ratings", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/related", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/stats", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/watching", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/next_episode", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/last_episode", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}{?translations}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/comments/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/lists/{type}/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/people", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/ratings", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/stats", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/watching", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/translations/{language}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/people", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/ratings", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/stats", params);
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
                const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/watching", params);
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
                const route = this.baseUrl + "/sync/last_activities";
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
                const route = this.baseUrl + this.parseEndpoint("/sync/playback/{type}{?start_at,end_at}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/playback/{id}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/collection/{type}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/collection", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/collection/remove", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/watched/{type}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/history/{type}/{id}{?start_at,end_at}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/history", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/history/remove", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/ratings/{type}/{rating}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/ratings", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/ratings/remove", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/watchlist/{type}/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/watchlist", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/watchlist/remove", params);
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
                const route = this.baseUrl + "/sync/watchlist/reorder";
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
                const route = this.baseUrl + this.parseEndpoint("/sync/recommendations/{type}/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/recommendations", params);
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
                const route = this.baseUrl + this.parseEndpoint("/sync/recommendations/remove", params);
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
                const route = this.baseUrl + "/sync/recommendations/reorder";
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
                const route = this.baseUrl + "/users/settings";
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
            followingRequests: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/requests/following", params);
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
            followerRequests: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/requests", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/requests/{id}", params);
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
            denyFollowRequest: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/requests/{id}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/hidden/{section}{?type}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/hidden/{section}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/hidden/{section}/remove", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/{id}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            likes: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/likes/{type}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/collection/{type}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            comments: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/comments/{comment_type}/{type}{?include_replies}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            lists: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            createCustomList: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/reorder", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            updateCustomList: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "PUT",
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
            deleteAUsersCustomList: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/likes", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            listLike: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/like", params);
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
            removeLikeOnAList: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/like", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/items/{type}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            addListItems: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/items", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/items/remove", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/items/reorder", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/comments/{sort}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            follow: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/follow", params);
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
            unfollowThisUser: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/follow", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/followers", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            following: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/following", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            friends: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/friends", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            history: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/history/{type}/{item_id}{?start_at,end_at}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            ratings: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/ratings/{type}/{rating}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            watchlist: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/watchlist/{type}/{sort}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            personalRecommendations: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/recommendations/{type}/{sort}", params);
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
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/watching", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            watched: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/watched/{type}", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
            stats: async (params) => {
                const route = this.baseUrl + this.parseEndpoint("/users/{id}/stats", params);
                return await (0, got_1.default)(route, {
                    throwHttpErrors: false,
                    responseType: "json",
                    method: "GET",
                    headers: {
                        "trakt-api-version": "2",
                        "trakt-api-key": this.client_id,
                        "Authorization": "Bearer " + this.access_token
                    },
                });
            },
        };
    }
}
exports.default = TraktMethods;
//# sourceMappingURL=methods.js.map