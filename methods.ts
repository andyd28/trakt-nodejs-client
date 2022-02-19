import TraktBase, { TraktOptions } from "./base";
import got, { Response } from "got";

class TraktMethods extends TraktBase {    
    constructor(options: TraktOptions) {
        super(options);
    }
	authentication = {
        authorize: async (params: TraktAuthenticationAuthorizeParams): Promise<Response<any>> => {
            const endpoint = "/oauth/authorize{?response_type,client_id,redirect_uri,state}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",                          
            });   
        },
        getToken: async (params: TraktAuthenticationGetTokenBody): Promise<Response<TraktAuthenticationGetTokenResponse>> => {
            const endpoint = "/oauth/device/token";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        refreshToken: async (params: TraktAuthenticationRefreshTokenBody): Promise<Response<TraktAuthenticationGetTokenResponse>> => {
            const endpoint = "/oauth/token";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        revokeToken: async (params: TraktAuthenticationRevokeTokenBody): Promise<Response<any>> => {
            const endpoint = "/oauth/revoke";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        deviceCode: async (): Promise<Response<TraktAuthenticationDeviceCodeResponse>> => {
            const endpoint = "/oauth/device/code";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "POST",
                json: {
                    "client_id": this.client_id
                },                          
            });   
        },
	};

	calendars = {
        myShows: async (params: TraktCalendarsMyShowsParams): Promise<Response<TraktCalendarsMyShowsResponse>> => {
            const endpoint = "/calendars/my/shows/{start_date}/{days}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        myNewShows: async (params: TraktCalendarsMyNewShowsParams): Promise<Response<TraktCalendarsMyNewShowsResponse>> => {
            const endpoint = "/calendars/my/shows/new/{start_date}/{days}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        mySeasonPremieres: async (params: TraktCalendarsMySeasonPremieresParams): Promise<Response<TraktCalendarsMySeasonPremieresResponse>> => {
            const endpoint = "/calendars/my/shows/premieres/{start_date}/{days}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        myMovies: async (params: TraktCalendarsMyMoviesParams): Promise<Response<TraktCalendarsMyMoviesResponse>> => {
            const endpoint = "/calendars/my/movies/{start_date}/{days}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        myDVD: async (params: TraktCalendarsMyDVDParams): Promise<Response<TraktCalendarsMyDVDResponse>> => {
            const endpoint = "/calendars/my/dvd/{start_date}/{days}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        allShows: async (params: TraktCalendarsAllShowsParams): Promise<Response<TraktCalendarsAllShowsResponse>> => {
            const endpoint = "/calendars/all/shows/{start_date}/{days}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        allNewShows: async (params: TraktCalendarsAllNewShowsParams): Promise<Response<TraktCalendarsAllNewShowsResponse>> => {
            const endpoint = "/calendars/all/shows/new/{start_date}/{days}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        allSeasonPremieres: async (params: TraktCalendarsAllSeasonPremieresParams): Promise<Response<TraktCalendarsAllSeasonPremieresResponse>> => {
            const endpoint = "/calendars/all/shows/premieres/{start_date}/{days}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        allMovies: async (params: TraktCalendarsAllMoviesParams): Promise<Response<TraktCalendarsAllMoviesResponse>> => {
            const endpoint = "/calendars/all/movies/{start_date}/{days}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        allDVD: async (params: TraktCalendarsAllDVDParams): Promise<Response<TraktCalendarsAllDVDResponse>> => {
            const endpoint = "/calendars/all/dvd/{start_date}/{days}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	checkin = {
        checkin: async (): Promise<Response<any>> => {
            const endpoint = "/checkin";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
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

	certifications = {
        list: async (params: TraktCertificationsListParams): Promise<Response<TraktCertificationsListResponse>> => {
            const endpoint = "/certifications/{type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	comments = {
        comments: async (params: TraktCommentsCommentsBody): Promise<Response<TraktCommentsCommentsResponse>> => {
            const endpoint = "/comments";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        comment: async (params: TraktCommentsCommentParams): Promise<Response<any>> => {
            const endpoint = "/comments/{id}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        replies: async (params: TraktCommentsRepliesBody): Promise<Response<TraktCommentsRepliesResponse>> => {
            const endpoint = "/comments/{id}/replies";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        item: async (params: TraktCommentsItemParams): Promise<Response<TraktCommentsItemResponse>> => {
            const endpoint = "/comments/{id}/item";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        likes: async (params: TraktCommentsLikesParams): Promise<Response<TraktCommentsLikesResponse>> => {
            const endpoint = "/comments/{id}/likes";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        like: async (params: TraktCommentsLikeParams): Promise<Response<any>> => {
            const endpoint = "/comments/{id}/like";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        trending: async (params: TraktCommentsTrendingParams): Promise<Response<TraktCommentsTrendingResponse>> => {
            const endpoint = "/comments/trending/{comment_type}/{type}{?include_replies}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        recent: async (params: TraktCommentsRecentParams): Promise<Response<TraktCommentsRecentResponse>> => {
            const endpoint = "/comments/recent/{comment_type}/{type}{?include_replies}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        updates: async (params: TraktCommentsUpdatesParams): Promise<Response<TraktCommentsUpdatesResponse>> => {
            const endpoint = "/comments/updates/{comment_type}/{type}{?include_replies}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	countries = {
        list: async (params: TraktCountriesListParams): Promise<Response<TraktCountriesListResponse>> => {
            const endpoint = "/countries/{type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	genres = {
        list: async (params: TraktGenresListParams): Promise<Response<TraktGenresListResponse>> => {
            const endpoint = "/genres/{type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	languages = {
        list: async (params: TraktLanguagesListParams): Promise<Response<TraktLanguagesListResponse>> => {
            const endpoint = "/languages/{type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	lists = {
        trending: async (): Promise<Response<TraktListsTrendingResponse>> => {
            const endpoint = "/lists/trending";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        popular: async (): Promise<Response<TraktListsPopularResponse>> => {
            const endpoint = "/lists/popular";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        list: async (params: TraktListsListParams): Promise<Response<TraktListsListResponse>> => {
            const endpoint = "/lists/{id}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        listLikes: async (params: TraktListsListLikesParams): Promise<Response<TraktListsListLikesResponse>> => {
            const endpoint = "/lists/{id}/likes";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        listItems: async (params: TraktListsListItemsParams): Promise<Response<TraktListsListItemsResponse>> => {
            const endpoint = "/lists/{id}/items/{type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        listComments: async (params: TraktListsListCommentsParams): Promise<Response<TraktListsListCommentsResponse>> => {
            const endpoint = "/lists/{id}/comments/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	movies = {
        trending: async (): Promise<Response<TraktMoviesTrendingResponse>> => {
            const endpoint = "/movies/trending";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        popular: async (): Promise<Response<TraktMoviesPopularResponse>> => {
            const endpoint = "/movies/popular";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        recommended: async (params: TraktMoviesRecommendedParams): Promise<Response<TraktMoviesRecommendedResponse>> => {
            const endpoint = "/movies/recommended/{period}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        played: async (params: TraktMoviesPlayedParams): Promise<Response<TraktMoviesPlayedResponse>> => {
            const endpoint = "/movies/played/{period}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        watched: async (params: TraktMoviesWatchedParams): Promise<Response<TraktMoviesWatchedResponse>> => {
            const endpoint = "/movies/watched/{period}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        collected: async (params: TraktMoviesCollectedParams): Promise<Response<TraktMoviesCollectedResponse>> => {
            const endpoint = "/movies/collected/{period}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        anticipated: async (): Promise<Response<TraktMoviesAnticipatedResponse>> => {
            const endpoint = "/movies/anticipated";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        boxOffice: async (): Promise<Response<TraktMoviesBoxOfficeResponse>> => {
            const endpoint = "/movies/boxoffice";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        updates: async (params: TraktMoviesUpdatesParams): Promise<Response<TraktMoviesUpdatesResponse>> => {
            const endpoint = "/movies/updates/{start_date}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        updatedIDs: async (params: TraktMoviesUpdatedIDsParams): Promise<Response<TraktMoviesUpdatedIDsResponse>> => {
            const endpoint = "/movies/updates/id/{start_date}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        summary: async (params: TraktMoviesSummaryParams): Promise<Response<TraktMoviesSummaryResponse>> => {
            const endpoint = "/movies/{id}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        aliases: async (params: TraktMoviesAliasesParams): Promise<Response<TraktMoviesAliasesResponse>> => {
            const endpoint = "/movies/{id}/aliases";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        releases: async (params: TraktMoviesReleasesParams): Promise<Response<TraktMoviesReleasesResponse>> => {
            const endpoint = "/movies/{id}/releases/{country}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        translations: async (params: TraktMoviesTranslationsParams): Promise<Response<TraktMoviesTranslationsResponse>> => {
            const endpoint = "/movies/{id}/translations/{language}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        comments: async (params: TraktMoviesCommentsParams): Promise<Response<TraktMoviesCommentsResponse>> => {
            const endpoint = "/movies/{id}/comments/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        lists: async (params: TraktMoviesListsParams): Promise<Response<TraktMoviesListsResponse>> => {
            const endpoint = "/movies/{id}/lists/{type}/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        people: async (params: TraktMoviesPeopleParams): Promise<Response<TraktMoviesPeopleResponse>> => {
            const endpoint = "/movies/{id}/people";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        ratings: async (params: TraktMoviesRatingsParams): Promise<Response<TraktMoviesRatingsResponse>> => {
            const endpoint = "/movies/{id}/ratings";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        related: async (params: TraktMoviesRelatedParams): Promise<Response<TraktMoviesRelatedResponse>> => {
            const endpoint = "/movies/{id}/related";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        stats: async (params: TraktMoviesStatsParams): Promise<Response<TraktMoviesStatsResponse>> => {
            const endpoint = "/movies/{id}/stats";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        watching: async (params: TraktMoviesWatchingParams): Promise<Response<TraktMoviesWatchingResponse>> => {
            const endpoint = "/movies/{id}/watching";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	networks = {
        list: async (): Promise<Response<TraktNetworksListResponse>> => {
            const endpoint = "/networks";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
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

	people = {
        summary: async (params: TraktPeopleSummaryParams): Promise<Response<TraktPeopleSummaryResponse>> => {
            const endpoint = "/people/{id}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        movies: async (params: TraktPeopleMoviesParams): Promise<Response<TraktPeopleMoviesResponse>> => {
            const endpoint = "/people/{id}/movies";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        shows: async (params: TraktPeopleShowsParams): Promise<Response<TraktPeopleShowsResponse>> => {
            const endpoint = "/people/{id}/shows";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        lists: async (params: TraktPeopleListsParams): Promise<Response<TraktPeopleListsResponse>> => {
            const endpoint = "/people/{id}/lists/{type}/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	recommendations = {
        movies: async (params: TraktRecommendationsMoviesParams): Promise<Response<TraktRecommendationsMoviesResponse>> => {
            const endpoint = "/recommendations/movies{?ignore_collected}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        hideMovie: async (params: TraktRecommendationsHideMovieParams): Promise<Response<any>> => {
            const endpoint = "/recommendations/movies/{id}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        shows: async (params: TraktRecommendationsShowsParams): Promise<Response<TraktRecommendationsShowsResponse>> => {
            const endpoint = "/recommendations/shows{?ignore_collected}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        hideShow: async (params: TraktRecommendationsHideShowParams): Promise<Response<any>> => {
            const endpoint = "/recommendations/shows/{id}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	scrobble = {
        start: async (params: TraktScrobbleStartBody): Promise<Response<TraktScrobbleStartResponse>> => {
            const endpoint = "/scrobble/start";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        pause: async (params: TraktScrobblePauseBody): Promise<Response<TraktScrobblePauseResponse>> => {
            const endpoint = "/scrobble/pause";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        stop: async (params: TraktScrobbleStopBody): Promise<Response<TraktScrobbleStopResponse>> => {
            const endpoint = "/scrobble/stop";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	search = {
        textQuery: async (params: TraktSearchTextQueryParams): Promise<Response<TraktSearchTextQueryResponse>> => {
            const endpoint = "/search/{type}{?query}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        iDLookup: async (params: TraktSearchIDLookupParams): Promise<Response<TraktSearchIDLookupResponse>> => {
            const endpoint = "/search/{id_type}/{id}{?type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	shows = {
        trending: async (): Promise<Response<TraktShowsTrendingResponse>> => {
            const endpoint = "/shows/trending";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        popular: async (): Promise<Response<TraktShowsPopularResponse>> => {
            const endpoint = "/shows/popular";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        recommended: async (params: TraktShowsRecommendedParams): Promise<Response<TraktShowsRecommendedResponse>> => {
            const endpoint = "/shows/recommended/{period}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        played: async (params: TraktShowsPlayedParams): Promise<Response<TraktShowsPlayedResponse>> => {
            const endpoint = "/shows/played/{period}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        watched: async (params: TraktShowsWatchedParams): Promise<Response<TraktShowsWatchedResponse>> => {
            const endpoint = "/shows/watched/{period}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        collected: async (params: TraktShowsCollectedParams): Promise<Response<TraktShowsCollectedResponse>> => {
            const endpoint = "/shows/collected/{period}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        anticipated: async (): Promise<Response<TraktShowsAnticipatedResponse>> => {
            const endpoint = "/shows/anticipated";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        updates: async (params: TraktShowsUpdatesParams): Promise<Response<TraktShowsUpdatesResponse>> => {
            const endpoint = "/shows/updates/{start_date}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        updatedIDs: async (params: TraktShowsUpdatedIDsParams): Promise<Response<TraktShowsUpdatedIDsResponse>> => {
            const endpoint = "/shows/updates/id/{start_date}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        summary: async (params: TraktShowsSummaryParams): Promise<Response<TraktShowsSummaryResponse>> => {
            const endpoint = "/shows/{id}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        aliases: async (params: TraktShowsAliasesParams): Promise<Response<TraktShowsAliasesResponse>> => {
            const endpoint = "/shows/{id}/aliases";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        certifications: async (params: TraktShowsCertificationsParams): Promise<Response<TraktShowsCertificationsResponse>> => {
            const endpoint = "/shows/{id}/certifications";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        translations: async (params: TraktShowsTranslationsParams): Promise<Response<TraktShowsTranslationsResponse>> => {
            const endpoint = "/shows/{id}/translations/{language}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        comments: async (params: TraktShowsCommentsParams): Promise<Response<TraktShowsCommentsResponse>> => {
            const endpoint = "/shows/{id}/comments/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        lists: async (params: TraktShowsListsParams): Promise<Response<TraktShowsListsResponse>> => {
            const endpoint = "/shows/{id}/lists/{type}/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        collectionProgress: async (params: TraktShowsCollectionProgressParams): Promise<Response<TraktShowsCollectionProgressResponse>> => {
            const endpoint = "/shows/{id}/progress/collection{?hidden,specials,count_specials,last_activity}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        watchedProgress: async (params: TraktShowsWatchedProgressParams): Promise<Response<TraktShowsWatchedProgressResponse>> => {
            const endpoint = "/shows/{id}/progress/watched{?hidden,specials,count_specials,last_activity}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        resetWatchedProgress: async (params: TraktShowsResetWatchedProgressParams): Promise<Response<any>> => {
            const endpoint = "/shows/{id}/progress/watched/reset";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        people: async (params: TraktShowsPeopleParams): Promise<Response<TraktShowsPeopleResponse>> => {
            const endpoint = "/shows/{id}/people";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        ratings: async (params: TraktShowsRatingsParams): Promise<Response<TraktShowsRatingsResponse>> => {
            const endpoint = "/shows/{id}/ratings";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        related: async (params: TraktShowsRelatedParams): Promise<Response<TraktShowsRelatedResponse>> => {
            const endpoint = "/shows/{id}/related";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        stats: async (params: TraktShowsStatsParams): Promise<Response<TraktShowsStatsResponse>> => {
            const endpoint = "/shows/{id}/stats";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        watching: async (params: TraktShowsWatchingParams): Promise<Response<TraktShowsWatchingResponse>> => {
            const endpoint = "/shows/{id}/watching";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        nextEpisode: async (params: TraktShowsNextEpisodeParams): Promise<Response<TraktShowsNextEpisodeResponse>> => {
            const endpoint = "/shows/{id}/next_episode";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        lastEpisode: async (params: TraktShowsLastEpisodeParams): Promise<Response<TraktShowsLastEpisodeResponse>> => {
            const endpoint = "/shows/{id}/last_episode";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	seasons = {
        summary: async (params: TraktSeasonsSummaryParams): Promise<Response<TraktSeasonsSummaryResponse>> => {
            const endpoint = "/shows/{id}/seasons";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        season: async (params: TraktSeasonsSeasonParams): Promise<Response<TraktSeasonsSeasonResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}{?translations}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        comments: async (params: TraktSeasonsCommentsParams): Promise<Response<TraktSeasonsCommentsResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/comments/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        lists: async (params: TraktSeasonsListsParams): Promise<Response<TraktSeasonsListsResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/lists/{type}/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        people: async (params: TraktSeasonsPeopleParams): Promise<Response<TraktSeasonsPeopleResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/people";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        ratings: async (params: TraktSeasonsRatingsParams): Promise<Response<TraktSeasonsRatingsResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/ratings";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        stats: async (params: TraktSeasonsStatsParams): Promise<Response<TraktSeasonsStatsResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/stats";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        watching: async (params: TraktSeasonsWatchingParams): Promise<Response<TraktSeasonsWatchingResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/watching";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	episodes = {
        summary: async (params: TraktEpisodesSummaryParams): Promise<Response<TraktEpisodesSummaryResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        translations: async (params: TraktEpisodesTranslationsParams): Promise<Response<TraktEpisodesTranslationsResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/translations/{language}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        comments: async (params: TraktEpisodesCommentsParams): Promise<Response<TraktEpisodesCommentsResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        lists: async (params: TraktEpisodesListsParams): Promise<Response<TraktEpisodesListsResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        people: async (params: TraktEpisodesPeopleParams): Promise<Response<TraktEpisodesPeopleResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/people";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        ratings: async (params: TraktEpisodesRatingsParams): Promise<Response<TraktEpisodesRatingsResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/ratings";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        stats: async (params: TraktEpisodesStatsParams): Promise<Response<TraktEpisodesStatsResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/stats";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        watching: async (params: TraktEpisodesWatchingParams): Promise<Response<TraktEpisodesWatchingResponse>> => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/watching";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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

	sync = {
        lastActivities: async (): Promise<Response<TraktSyncLastActivitiesResponse>> => {
            const endpoint = "/sync/last_activities";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
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
        playback: async (params: TraktSyncPlaybackParams): Promise<Response<TraktSyncPlaybackResponse>> => {
            const endpoint = "/sync/playback/{type}{?start_at,end_at}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        removePlayback: async (params: TraktSyncRemovePlaybackParams): Promise<Response<any>> => {
            const endpoint = "/sync/playback/{id}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        getCollection: async (params: TraktSyncGetCollectionParams): Promise<Response<TraktSyncGetCollectionResponse>> => {
            const endpoint = "/sync/collection/{type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        addToCollection: async (params: TraktSyncAddToCollectionBody): Promise<Response<TraktSyncAddToCollectionResponse>> => {
            const endpoint = "/sync/collection";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        removeFromCollection: async (params: TraktSyncRemoveFromCollectionBody): Promise<Response<TraktSyncRemoveFromCollectionResponse>> => {
            const endpoint = "/sync/collection/remove";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        getWatched: async (params: TraktSyncGetWatchedParams): Promise<Response<TraktSyncGetWatchedResponse>> => {
            const endpoint = "/sync/watched/{type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        getHistory: async (params: TraktSyncGetHistoryParams): Promise<Response<TraktSyncGetHistoryResponse>> => {
            const endpoint = "/sync/history/{type}/{id}{?start_at,end_at}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        addToHistory: async (params: TraktSyncAddToHistoryBody): Promise<Response<TraktSyncAddToHistoryResponse>> => {
            const endpoint = "/sync/history";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        removeFromHistory: async (params: TraktSyncRemoveFromHistoryBody): Promise<Response<TraktSyncRemoveFromHistoryResponse>> => {
            const endpoint = "/sync/history/remove";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        getRatings: async (params: TraktSyncGetRatingsParams): Promise<Response<TraktSyncGetRatingsResponse>> => {
            const endpoint = "/sync/ratings/{type}/{rating}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        addRatings: async (params: TraktSyncAddRatingsBody): Promise<Response<TraktSyncAddRatingsResponse>> => {
            const endpoint = "/sync/ratings";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        removeRatings: async (params: TraktSyncRemoveRatingsBody): Promise<Response<TraktSyncRemoveRatingsResponse>> => {
            const endpoint = "/sync/ratings/remove";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        getWatchlist: async (params: TraktSyncGetWatchlistParams): Promise<Response<TraktSyncGetWatchlistResponse>> => {
            const endpoint = "/sync/watchlist/{type}/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        addToWatchlist: async (params: TraktSyncAddToWatchlistBody): Promise<Response<TraktSyncAddToWatchlistResponse>> => {
            const endpoint = "/sync/watchlist";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        removeFromWatchlist: async (params: TraktSyncRemoveFromWatchlistBody): Promise<Response<TraktSyncRemoveFromWatchlistResponse>> => {
            const endpoint = "/sync/watchlist/remove";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        reorderWatchlist: async (): Promise<Response<TraktSyncReorderWatchlistResponse>> => {
            const endpoint = "/sync/watchlist/reorder";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
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
        getPersonalRecommendations: async (params: TraktSyncGetPersonalRecommendationsParams): Promise<Response<TraktSyncGetPersonalRecommendationsResponse>> => {
            const endpoint = "/sync/recommendations/{type}/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        addToPersonalRecommendations: async (params: TraktSyncAddToPersonalRecommendationsBody): Promise<Response<TraktSyncAddToPersonalRecommendationsResponse>> => {
            const endpoint = "/sync/recommendations";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        removeFromPersonalRecommendations: async (params: TraktSyncRemoveFromPersonalRecommendationsBody): Promise<Response<TraktSyncRemoveFromPersonalRecommendationsResponse>> => {
            const endpoint = "/sync/recommendations/remove";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        reorderPersonalRecommendations: async (): Promise<Response<TraktSyncReorderPersonalRecommendationsResponse>> => {
            const endpoint = "/sync/recommendations/reorder";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
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

	users = {
        settings: async (): Promise<Response<TraktUsersSettingsResponse>> => {
            const endpoint = "/users/settings";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
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
        followingRequests: async (): Promise<Response<TraktUsersFollowingRequestsResponse>> => {
            const endpoint = "/users/requests/following";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
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
        followerRequests: async (): Promise<Response<TraktUsersFollowerRequestsResponse>> => {
            const endpoint = "/users/requests";
            const route = this.baseUrl + endpoint;
            
            return await got(route, {
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
        approveOrDenyFollowerRequests: async (params: TraktUsersApproveOrDenyFollowerRequestsParams): Promise<Response<any>> => {
            const endpoint = "/users/requests/{id}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        hiddenItems: async (params: TraktUsersHiddenItemsParams): Promise<Response<TraktUsersHiddenItemsResponse>> => {
            const endpoint = "/users/hidden/{section}{?type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        addHiddenItems: async (params: TraktUsersAddHiddenItemsBody): Promise<Response<TraktUsersAddHiddenItemsResponse>> => {
            const endpoint = "/users/hidden/{section}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        removeHiddenItems: async (params: TraktUsersRemoveHiddenItemsBody): Promise<Response<TraktUsersRemoveHiddenItemsResponse>> => {
            const endpoint = "/users/hidden/{section}/remove";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        profile: async (params: TraktUsersProfileParams): Promise<Response<TraktUsersProfileResponse>> => {
            const endpoint = "/users/{id}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        likes: async (params: TraktUsersLikesParams): Promise<Response<TraktUsersLikesResponse>> => {
            const endpoint = "/users/{id}/likes/{type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        collection: async (params: TraktUsersCollectionParams): Promise<Response<TraktUsersCollectionResponse>> => {
            const endpoint = "/users/{id}/collection/{type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        comments: async (params: TraktUsersCommentsParams): Promise<Response<TraktUsersCommentsResponse>> => {
            const endpoint = "/users/{id}/comments/{comment_type}/{type}{?include_replies}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        lists: async (params: TraktUsersListsBody): Promise<Response<TraktUsersListsResponse>> => {
            const endpoint = "/users/{id}/lists";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        reorderLists: async (params: TraktUsersReorderListsParams): Promise<Response<TraktUsersReorderListsResponse>> => {
            const endpoint = "/users/{id}/lists/reorder";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        list: async (params: TraktUsersListParams): Promise<Response<any>> => {
            const endpoint = "/users/{id}/lists/{list_id}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        listLikes: async (params: TraktUsersListLikesParams): Promise<Response<TraktUsersListLikesResponse>> => {
            const endpoint = "/users/{id}/lists/{list_id}/likes";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        listLike: async (params: TraktUsersListLikeParams): Promise<Response<any>> => {
            const endpoint = "/users/{id}/lists/{list_id}/like";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        listItems: async (params: TraktUsersListItemsParams): Promise<Response<TraktUsersListItemsResponse>> => {
            const endpoint = "/users/{id}/lists/{list_id}/items/{type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        addListItems: async (params: TraktUsersAddListItemsBody): Promise<Response<TraktUsersAddListItemsResponse>> => {
            const endpoint = "/users/{id}/lists/{list_id}/items";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        removeListItems: async (params: TraktUsersRemoveListItemsBody): Promise<Response<TraktUsersRemoveListItemsResponse>> => {
            const endpoint = "/users/{id}/lists/{list_id}/items/remove";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        reorderListItems: async (params: TraktUsersReorderListItemsParams): Promise<Response<TraktUsersReorderListItemsResponse>> => {
            const endpoint = "/users/{id}/lists/{list_id}/items/reorder";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        listComments: async (params: TraktUsersListCommentsParams): Promise<Response<TraktUsersListCommentsResponse>> => {
            const endpoint = "/users/{id}/lists/{list_id}/comments/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        follow: async (params: TraktUsersFollowParams): Promise<Response<any>> => {
            const endpoint = "/users/{id}/follow";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        followers: async (params: TraktUsersFollowersParams): Promise<Response<TraktUsersFollowersResponse>> => {
            const endpoint = "/users/{id}/followers";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        following: async (params: TraktUsersFollowingParams): Promise<Response<TraktUsersFollowingResponse>> => {
            const endpoint = "/users/{id}/following";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        friends: async (params: TraktUsersFriendsParams): Promise<Response<TraktUsersFriendsResponse>> => {
            const endpoint = "/users/{id}/friends";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        history: async (params: TraktUsersHistoryParams): Promise<Response<TraktUsersHistoryResponse>> => {
            const endpoint = "/users/{id}/history/{type}/{item_id}{?start_at,end_at}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        ratings: async (params: TraktUsersRatingsParams): Promise<Response<TraktUsersRatingsResponse>> => {
            const endpoint = "/users/{id}/ratings/{type}/{rating}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        watchlist: async (params: TraktUsersWatchlistParams): Promise<Response<TraktUsersWatchlistResponse>> => {
            const endpoint = "/users/{id}/watchlist/{type}/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        personalRecommendations: async (params: TraktUsersPersonalRecommendationsParams): Promise<Response<TraktUsersPersonalRecommendationsResponse>> => {
            const endpoint = "/users/{id}/recommendations/{type}/{sort}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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
        watching: async (params: TraktUsersWatchingParams): Promise<Response<any>> => {
            const endpoint = "/users/{id}/watching";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        watched: async (params: TraktUsersWatchedParams): Promise<Response<TraktUsersWatchedResponse>> => {
            const endpoint = "/users/{id}/watched/{type}";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",
                headers: {
                    "trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });   
        },
        stats: async (params: TraktUsersStatsParams): Promise<Response<TraktUsersStatsResponse>> => {
            const endpoint = "/users/{id}/stats";
            const route = this.baseUrl + this.parseEndpoint(endpoint, params);
            
            return await got(route, {
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


export default TraktMethods;

    
export interface TraktEpisode { 
	season: number;
	number: number;
	title: string;
	ids: {
		trakt: number;
		tvdb: number;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktShow { 
	title: string;
	year: number;
	ids: {
		trakt: number;
		slug: string;
		tvdb: number;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktMovie { 
	title: string;
	year: number;
	ids: {
		trakt: number;
		slug: string;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktUser { 
	username: string;
	private: boolean;
	name: string;
	vip: boolean;
	vip_ep: boolean;
	ids: {
		slug: string;
	};
}
    
export interface TraktComment { 
	id: number;
	comment: string;
	spoiler: boolean;
	review: boolean;
	parent_id: number;
	created_at: string;
	updated_at: string;
	replies: number;
	likes: number;
	user_stats: {
		rating: number;
		play_count: number;
		completed_count: number;
	};
	user: TraktUser;
}
    
export interface TraktList { 
	name: string;
	description: string;
	privacy: string;
	display_numbers: boolean;
	allow_comments: boolean;
	sort_by: string;
	sort_how: string;
	created_at: string;
	updated_at: string;
	item_count: number;
	comment_count: number;
	likes: number;
	ids: {
		trakt: number;
		slug: string;
	};
	user: TraktUser;
}
    
export interface TraktPerson { 
	name: string;
	ids: {
		trakt: number;
		slug: string;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktAuthenticationAuthorizeParams { 
	response_type: string;
	state?: string;
	signup?: string;
}
    
export interface TraktCalendarsMyShowsParams { 
	start_date?: string;
	days?: number;
}
    
export interface TraktCalendarsMyNewShowsParams { 
	start_date?: string;
	days?: number;
}
    
export interface TraktCalendarsMySeasonPremieresParams { 
	start_date?: string;
	days?: number;
}
    
export interface TraktCalendarsMyMoviesParams { 
	start_date?: string;
	days?: number;
}
    
export interface TraktCalendarsMyDVDParams { 
	start_date?: string;
	days?: number;
}
    
export interface TraktCalendarsAllShowsParams { 
	start_date?: string;
	days?: number;
}
    
export interface TraktCalendarsAllNewShowsParams { 
	start_date?: string;
	days?: number;
}
    
export interface TraktCalendarsAllSeasonPremieresParams { 
	start_date?: string;
	days?: number;
}
    
export interface TraktCalendarsAllMoviesParams { 
	start_date?: string;
	days?: number;
}
    
export interface TraktCalendarsAllDVDParams { 
	start_date?: string;
	days?: number;
}
    
export interface TraktCertificationsListParams { 
	type: "movies"|"shows";
}
    
export interface TraktCommentsCommentParams { 
	id: number;
}
    
export interface TraktCommentsRepliesParams { 
	id: number;
}
    
export interface TraktCommentsItemParams { 
	id: number;
}
    
export interface TraktCommentsLikesParams { 
	id: number;
}
    
export interface TraktCommentsLikeParams { 
	id: number;
}
    
export interface TraktCommentsTrendingParams { 
	comment_type?: "all"|"reviews"|"shouts";
	type?: "all"|"movies"|"shows"|"seasons"|"episodes"|"lists";
	include_replies?: string;
}
    
export interface TraktCommentsRecentParams { 
	comment_type?: "all"|"reviews"|"shouts";
	type?: "all"|"movies"|"shows"|"seasons"|"episodes"|"lists";
	include_replies?: string;
}
    
export interface TraktCommentsUpdatesParams { 
	comment_type?: "all"|"reviews"|"shouts";
	type?: "all"|"movies"|"shows"|"seasons"|"episodes"|"lists";
	include_replies?: string;
}
    
export interface TraktCountriesListParams { 
	type: "movies"|"shows";
}
    
export interface TraktGenresListParams { 
	type: "movies"|"shows";
}
    
export interface TraktLanguagesListParams { 
	type: "movies"|"shows";
}
    
export interface TraktListsListParams { 
	id: number;
}
    
export interface TraktListsListLikesParams { 
	id: string;
}
    
export interface TraktListsListItemsParams { 
	id: string;
	type?: "movie"|"show"|"season"|"episode"|"person";
}
    
export interface TraktListsListCommentsParams { 
	id: number;
	sort?: "newest"|"oldest"|"likes"|"replies";
}
    
export interface TraktMoviesRecommendedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktMoviesPlayedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktMoviesWatchedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktMoviesCollectedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktMoviesUpdatesParams { 
	start_date?: string;
}
    
export interface TraktMoviesUpdatedIDsParams { 
	start_date?: string;
}
    
export interface TraktMoviesSummaryParams { 
	id: string;
}
    
export interface TraktMoviesAliasesParams { 
	id: string;
}
    
export interface TraktMoviesReleasesParams { 
	id: string;
	country?: string;
}
    
export interface TraktMoviesTranslationsParams { 
	id: string;
	language?: string;
}
    
export interface TraktMoviesCommentsParams { 
	id: string;
	sort?: "newest"|"oldest"|"likes"|"replies"|"highest"|"lowest"|"plays";
}
    
export interface TraktMoviesListsParams { 
	id: string;
	type?: "all"|"personal"|"official"|"watchlists"|"recommendations";
	sort?: "popular"|"likes"|"comments"|"items"|"added"|"updated";
}
    
export interface TraktMoviesPeopleParams { 
	id: string;
}
    
export interface TraktMoviesRatingsParams { 
	id: string;
}
    
export interface TraktMoviesRelatedParams { 
	id: string;
}
    
export interface TraktMoviesStatsParams { 
	id: string;
}
    
export interface TraktMoviesWatchingParams { 
	id: string;
}
    
export interface TraktPeopleSummaryParams { 
	id: string;
}
    
export interface TraktPeopleMoviesParams { 
	id: string;
}
    
export interface TraktPeopleShowsParams { 
	id: string;
}
    
export interface TraktPeopleListsParams { 
	id: string;
	type?: "all"|"personal"|"official";
	sort?: "popular"|"likes"|"comments"|"items"|"added"|"updated";
}
    
export interface TraktRecommendationsMoviesParams { 
	ignore_collected?: "true"|"false";
}
    
export interface TraktRecommendationsHideMovieParams { 
	id: string;
}
    
export interface TraktRecommendationsShowsParams { 
	ignore_collected?: "true"|"false";
}
    
export interface TraktRecommendationsHideShowParams { 
	id: string;
}
    
export interface TraktSearchTextQueryParams { 
	type: string;
	query: string;
	fields?: string;
}
    
export interface TraktSearchIDLookupParams { 
	id_type: string;
	id: string;
	type?: string;
}
    
export interface TraktShowsRecommendedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktShowsPlayedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktShowsWatchedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktShowsCollectedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktShowsUpdatesParams { 
	start_date?: string;
}
    
export interface TraktShowsUpdatedIDsParams { 
	start_date?: string;
}
    
export interface TraktShowsSummaryParams { 
	id: string;
}
    
export interface TraktShowsAliasesParams { 
	id: string;
}
    
export interface TraktShowsCertificationsParams { 
	id: string;
}
    
export interface TraktShowsTranslationsParams { 
	id: string;
	language?: string;
}
    
export interface TraktShowsCommentsParams { 
	id: string;
	sort?: "newest"|"oldest"|"likes"|"replies"|"highest"|"lowest"|"plays"|"watched";
}
    
export interface TraktShowsListsParams { 
	id: string;
	type?: "all"|"personal"|"official"|"watchlists"|"recommendations";
	sort?: "popular"|"likes"|"comments"|"items"|"added"|"updated";
}
    
export interface TraktShowsCollectionProgressParams { 
	id: string;
	hidden?: string;
	specials?: string;
	count_specials?: string;
	last_activity?: "aired"|"collected";
}
    
export interface TraktShowsWatchedProgressParams { 
	id: string;
	hidden?: string;
	specials?: string;
	count_specials?: string;
	last_activity?: "aired"|"watched";
}
    
export interface TraktShowsResetWatchedProgressParams { 
	id: string;
}
    
export interface TraktShowsPeopleParams { 
	id: string;
}
    
export interface TraktShowsRatingsParams { 
	id: string;
}
    
export interface TraktShowsRelatedParams { 
	id: string;
}
    
export interface TraktShowsStatsParams { 
	id: string;
}
    
export interface TraktShowsWatchingParams { 
	id: string;
}
    
export interface TraktShowsNextEpisodeParams { 
	id: string;
}
    
export interface TraktShowsLastEpisodeParams { 
	id: string;
}
    
export interface TraktSeasonsSummaryParams { 
	id: string;
}
    
export interface TraktSeasonsSeasonParams { 
	id: string;
	season: number;
	translations?: string;
}
    
export interface TraktSeasonsCommentsParams { 
	id: string;
	season: number;
	sort?: "newest"|"oldest"|"likes"|"replies"|"highest"|"lowest"|"plays"|"watched";
}
    
export interface TraktSeasonsListsParams { 
	id: string;
	season: number;
	type?: "all"|"personal"|"official"|"watchlists";
	sort?: "popular"|"likes"|"comments"|"items"|"added"|"updated";
}
    
export interface TraktSeasonsPeopleParams { 
	id: string;
	season: number;
}
    
export interface TraktSeasonsRatingsParams { 
	id: string;
	season: number;
}
    
export interface TraktSeasonsStatsParams { 
	id: string;
	season: number;
}
    
export interface TraktSeasonsWatchingParams { 
	id: string;
	season: number;
}
    
export interface TraktEpisodesSummaryParams { 
	id: string;
	season: number;
	episode: number;
}
    
export interface TraktEpisodesTranslationsParams { 
	id: string;
	season: number;
	episode: number;
	language?: string;
}
    
export interface TraktEpisodesCommentsParams { 
	id: string;
	season: number;
	episode: number;
	sort?: "newest"|"oldest"|"likes"|"replies"|"highest"|"lowest"|"plays";
}
    
export interface TraktEpisodesListsParams { 
	id: string;
	season: number;
	episode: number;
	type?: "all"|"personal"|"official"|"watchlists";
	sort?: "popular"|"likes"|"comments"|"items"|"added"|"updated";
}
    
export interface TraktEpisodesPeopleParams { 
	id: string;
	season: number;
	episode: number;
}
    
export interface TraktEpisodesRatingsParams { 
	id: string;
	season: number;
	episode: number;
}
    
export interface TraktEpisodesStatsParams { 
	id: string;
	season: number;
	episode: number;
}
    
export interface TraktEpisodesWatchingParams { 
	id: string;
	season: number;
	episode: number;
}
    
export interface TraktSyncPlaybackParams { 
	type?: "movies"|"episodes";
	start_at?: string;
	end_at?: string;
}
    
export interface TraktSyncRemovePlaybackParams { 
	id: number;
}
    
export interface TraktSyncGetCollectionParams { 
	type: "movies"|"shows";
}
    
export interface TraktSyncGetWatchedParams { 
	type: "movies"|"shows";
}
    
export interface TraktSyncGetHistoryParams { 
	type?: "movies"|"shows"|"seasons"|"episodes";
	id?: number;
	start_at?: string;
	end_at?: string;
}
    
export interface TraktSyncGetRatingsParams { 
	type?: "movies"|"shows"|"seasons"|"episodes"|"all";
	rating?: number;
}
    
export interface TraktSyncGetWatchlistParams { 
	type?: "movies"|"shows"|"seasons"|"episodes";
	sort?: "rank"|"added"|"released"|"title";
}
    
export interface TraktSyncGetPersonalRecommendationsParams { 
	type?: "movies"|"shows";
	sort?: "rank"|"added"|"released"|"title";
}
    
export interface TraktUsersApproveOrDenyFollowerRequestsParams { 
	id: number;
}
    
export interface TraktUsersHiddenItemsParams { 
	section: "calendar"|"recommendations"|"comments";
	type?: string;
}
    
export interface TraktUsersAddHiddenItemsParams { 
	section: "calendar"|"recommendations";
}
    
export interface TraktUsersRemoveHiddenItemsParams { 
	section: "calendar"|"recommendations"|"comments";
}
    
export interface TraktUsersProfileParams { 
	id: string;
}
    
export interface TraktUsersLikesParams { 
	id: string;
	type?: "comments"|"lists";
}
    
export interface TraktUsersCollectionParams { 
	id: string;
	type: "movies"|"shows";
}
    
export interface TraktUsersCommentsParams { 
	id: string;
	comment_type?: "all"|"reviews"|"shouts";
	type?: "all"|"movies"|"shows"|"seasons"|"episodes"|"lists";
	include_replies?: "true"|"false"|"only";
}
    
export interface TraktUsersListsParams { 
	id: string;
}
    
export interface TraktUsersReorderListsParams { 
	id: string;
}
    
export interface TraktUsersListParams { 
	id: string;
	list_id: string;
}
    
export interface TraktUsersListLikesParams { 
	id: string;
	list_id: string;
}
    
export interface TraktUsersListLikeParams { 
	id: string;
	list_id: string;
}
    
export interface TraktUsersListItemsParams { 
	id: string;
	list_id: string;
	type?: "movie"|"show"|"season"|"episode"|"person";
}
    
export interface TraktUsersAddListItemsParams { 
	id: string;
	list_id: string;
}
    
export interface TraktUsersRemoveListItemsParams { 
	id: string;
	list_id: string;
}
    
export interface TraktUsersReorderListItemsParams { 
	id: string;
	list_id: string;
}
    
export interface TraktUsersListCommentsParams { 
	id: string;
	list_id: string;
	sort?: "newest"|"oldest"|"likes"|"replies";
}
    
export interface TraktUsersFollowParams { 
	id: string;
}
    
export interface TraktUsersFollowersParams { 
	id: string;
}
    
export interface TraktUsersFollowingParams { 
	id: string;
}
    
export interface TraktUsersFriendsParams { 
	id: string;
}
    
export interface TraktUsersHistoryParams { 
	id: string;
	type?: "movies"|"shows"|"seasons"|"episodes";
	item_id?: number;
	start_at?: string;
	end_at?: string;
}
    
export interface TraktUsersRatingsParams { 
	id: string;
	type?: "movies"|"shows"|"seasons"|"episodes"|"all";
	rating?: number;
}
    
export interface TraktUsersWatchlistParams { 
	id: string;
	type?: "movies"|"shows"|"seasons"|"episodes";
	sort?: "rank"|"added"|"released"|"title";
}
    
export interface TraktUsersPersonalRecommendationsParams { 
	id: string;
	type?: "movies"|"shows";
	sort?: "rank"|"added"|"released"|"title";
}
    
export interface TraktUsersWatchingParams { 
	id: string;
}
    
export interface TraktUsersWatchedParams { 
	id: string;
	type: "movies"|"shows";
}
    
export interface TraktUsersStatsParams { 
	id: string;
}
    
export interface TraktAuthenticationGetTokenBody { 
	code: string;
}
    
export interface TraktAuthenticationRefreshTokenBody { 
	refresh_token: string;
	grant_type?: string;
}
    
export interface TraktAuthenticationRevokeTokenBody { 
	token: string;
}
    
export interface TraktAuthenticationDeviceCodeBody { 
}
    
export interface TraktCommentsCommentsBody { 
	item: "movie"|"show"|"season"|"episode"|"or list object. (see examples &#8594;)";
	comment: string;
	spoiler?: boolean;
	sharing?: object;
}
    
export interface TraktCommentsRepliesBody { 
	comment: string;
	spoiler?: boolean;
}
    
export interface TraktScrobbleStartBody { 
	item: object;
	progress: number;
	app_version?: string;
	app_date?: string;
}
    
export interface TraktScrobblePauseBody { 
	item: object;
	progress: number;
	app_version?: string;
	app_date?: string;
}
    
export interface TraktScrobbleStopBody { 
	item: object;
	progress: number;
	app_version?: string;
	app_date?: string;
}
    
export interface TraktSyncAddToCollectionBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
}
    
export interface TraktSyncRemoveFromCollectionBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
}
    
export interface TraktSyncAddToHistoryBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
}
    
export interface TraktSyncRemoveFromHistoryBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
	ids?: Array<any>;
}
    
export interface TraktSyncAddRatingsBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
}
    
export interface TraktSyncRemoveRatingsBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
}
    
export interface TraktSyncAddToWatchlistBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
}
    
export interface TraktSyncRemoveFromWatchlistBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
}
    
export interface TraktSyncAddToPersonalRecommendationsBody { 
	movies?: Array<any>;
	shows?: Array<any>;
}
    
export interface TraktSyncRemoveFromPersonalRecommendationsBody { 
	movies?: Array<any>;
	shows?: Array<any>;
}
    
export interface TraktUsersAddHiddenItemsBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	users?: Array<any>;
}
    
export interface TraktUsersRemoveHiddenItemsBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	users?: Array<any>;
}
    
export interface TraktUsersListsBody { 
	name: string;
	description?: string;
	privacy?: "private"|"friends"|"public";
	display_numbers?: boolean;
	allow_comments?: boolean;
	sort_by?: "rank"|"added"|"title"|"released"|"runtime"|"popularity"|"percentage"|"votes"|"my_rating"|"random"|"watched"|"collected";
	sort_how?: "asc"|"desc";
}
    
export interface TraktUsersAddListItemsBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
	people?: Array<any>;
}
    
export interface TraktUsersRemoveListItemsBody { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
	people?: Array<any>;
}

export interface TraktCrew extends Record<string, TraktDepartment> { }
    
export interface TraktDepartment extends Array<TraktStaff> { }

export interface TraktStaff {
    jobs: Array<string>;
    episode_count: number;
    person: TraktPerson;
}
    
export interface TraktAuthenticationGetTokenResponse { 
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token: string;
	scope: string;
	created_at: number;
}
    
export interface TraktAuthenticationRefreshTokenResponse { 
	error: string;
	error_description: string;
}
    
export interface TraktAuthenticationDeviceCodeResponse { 
	device_code: string;
	user_code: string;
	verification_url: string;
	expires_in: number;
	interval: number;
}
    
export interface TraktCalendarsMyShowsResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktCalendarsMyNewShowsResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktCalendarsMySeasonPremieresResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktCalendarsMyMoviesResponse { 
	released: string;
	movie: TraktMovie;
}
    
export interface TraktCalendarsMyDVDResponse { 
	released: string;
	movie: TraktMovie;
}
    
export interface TraktCalendarsAllShowsResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktCalendarsAllNewShowsResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktCalendarsAllSeasonPremieresResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktCalendarsAllMoviesResponse { 
	released: string;
	movie: TraktMovie;
}
    
export interface TraktCalendarsAllDVDResponse { 
	released: string;
	movie: TraktMovie;
}
    
export interface TraktCertificationsListResponse { 
	us: {
		name: string;
		slug: string;
		description: string;
	}[];
}
    
export interface TraktCommentsCommentsResponse { 
	id: number;
	parent_id: number;
	created_at: string;
	updated_at: string;
	comment: string;
	spoiler: boolean;
	review: boolean;
	replies: number;
	likes: number;
	user_stats: {
		rating: {
		};
		play_count: number;
		completed_count: number;
	};
	user: TraktUser;
}
    
export interface TraktCommentsRepliesResponse { 
	id: number;
	parent_id: number;
	created_at: string;
	updated_at: string;
	comment: string;
	spoiler: boolean;
	review: boolean;
	replies: number;
	likes: number;
	user_stats: {
		rating: {
		};
		play_count: number;
		completed_count: number;
	};
	user: TraktUser;
}
    
export interface TraktCommentsItemResponse { 
	type: string;
	show: TraktShow;
}
    
export interface TraktCommentsLikesResponse { 
	liked_at: string;
	user: TraktUser;
}
    
export interface TraktCommentsTrendingResponse { 
	type: string;
	movie: TraktMovie;
	comment: TraktComment;
}
    
export interface TraktCommentsRecentResponse { 
	type: string;
	movie: TraktMovie;
	comment: TraktComment;
}
    
export interface TraktCommentsUpdatesResponse { 
	type: string;
	movie: TraktMovie;
	comment: TraktComment;
}
    
export interface TraktCountriesListResponse { 
	name: string;
	code: string;
}
    
export interface TraktGenresListResponse { 
	name: string;
	slug: string;
}
    
export interface TraktLanguagesListResponse { 
	name: string;
	code: string;
}
    
export interface TraktListsTrendingResponse { 
	like_count: number;
	comment_count: number;
	list: TraktList;
}
    
export interface TraktListsPopularResponse { 
	like_count: number;
	comment_count: number;
	list: TraktList;
}
    
export interface TraktListsListResponse { 
	name: string;
	description: string;
	privacy: string;
	display_numbers: boolean;
	allow_comments: boolean;
	sort_by: string;
	sort_how: string;
	created_at: string;
	updated_at: string;
	item_count: number;
	comment_count: number;
	likes: number;
	ids: {
		trakt: number;
		slug: string;
	};
	user: TraktUser;
}
    
export interface TraktListsListLikesResponse { 
	liked_at: string;
	user: TraktUser;
}
    
export interface TraktListsListItemsResponse { 
	rank: number;
	listed_at: string;
	type: string;
	movie: TraktMovie;
}
    
export interface TraktListsListCommentsResponse { 
	id: number;
	parent_id: number;
	created_at: string;
	updated_at: string;
	comment: string;
	spoiler: boolean;
	review: boolean;
	replies: number;
	likes: number;
	user_stats: {
		rating: {
		};
		play_count: number;
		completed_count: number;
	};
	user: TraktUser;
}
    
export interface TraktMoviesTrendingResponse { 
	watchers: number;
	movie: TraktMovie;
}
    
export interface TraktMoviesPopularResponse { 
	title: string;
	year: number;
	ids: {
		trakt: number;
		slug: string;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktMoviesRecommendedResponse { 
	user_count: number;
	movie: TraktMovie;
}
    
export interface TraktMoviesPlayedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	movie: TraktMovie;
}
    
export interface TraktMoviesWatchedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	movie: TraktMovie;
}
    
export interface TraktMoviesCollectedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	movie: TraktMovie;
}
    
export interface TraktMoviesAnticipatedResponse { 
	list_count: number;
	movie: TraktMovie;
}
    
export interface TraktMoviesBoxOfficeResponse { 
	revenue: number;
	movie: TraktMovie;
}
    
export interface TraktMoviesUpdatesResponse { 
	updated_at: string;
	movie: TraktMovie;
}
    
export interface TraktMoviesUpdatedIDsResponse extends Array<number> { }
    
export interface TraktMoviesSummaryResponse { 
	title: string;
	year: number;
	ids: {
		trakt: number;
		slug: string;
		imdb: string;
		tmdb: number;
	};
	tagline: string;
	overview: string;
	released: string;
	runtime: number;
	country: string;
	updated_at: string;
	trailer: {
	};
	homepage: string;
	status: string;
	rating: number;
	votes: number;
	comment_count: number;
	language: string;
	available_translations: string[];
	genres: string[];
	certification: string;
}
    
export interface TraktMoviesAliasesResponse { 
	title: string;
	country: string;
}
    
export interface TraktMoviesReleasesResponse { 
	country: string;
	certification: string;
	release_date: string;
	release_type: string;
	note: {
	};
}
    
export interface TraktMoviesTranslationsResponse { 
	title: string;
	overview: string;
	tagline: string;
	language: string;
}
    
export interface TraktMoviesCommentsResponse { 
	id: number;
	parent_id: number;
	created_at: string;
	updated_at: string;
	comment: string;
	spoiler: boolean;
	review: boolean;
	replies: number;
	likes: number;
	user_stats: {
		rating: number;
		play_count: number;
		completed_count: number;
	};
	user: TraktUser;
}
    
export interface TraktMoviesListsResponse { 
	name: string;
	description: string;
	privacy: string;
	display_numbers: boolean;
	allow_comments: boolean;
	sort_by: string;
	sort_how: string;
	created_at: string;
	updated_at: string;
	item_count: number;
	comment_count: number;
	likes: number;
	ids: {
		trakt: number;
		slug: string;
	};
	user: TraktUser;
}
    
export interface TraktMoviesPeopleResponse { 
	cast: {
		characters: string[];
		person: TraktPerson;
	}[];
	crew: TraktCrew;
}
    
export interface TraktMoviesRatingsResponse { 
	rating: number;
	votes: number;
	distribution: {
		"1": number;
		"2": number;
		"3": number;
		"4": number;
		"5": number;
		"6": number;
		"7": number;
		"8": number;
		"9": number;
		"10": number;
	};
}
    
export interface TraktMoviesRelatedResponse { 
	title: string;
	year: number;
	ids: {
		trakt: number;
		slug: string;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktMoviesStatsResponse { 
	watchers: number;
	plays: number;
	collectors: number;
	comments: number;
	lists: number;
	votes: number;
	recommended: number;
}
    
export interface TraktMoviesWatchingResponse { 
	username: string;
	private: boolean;
	name: string;
	vip: boolean;
	vip_ep: boolean;
	ids: {
		slug: string;
	};
}
    
export interface TraktNetworksListResponse { 
	name: string;
}
    
export interface TraktPeopleSummaryResponse { 
	name: string;
	ids: {
		trakt: number;
		slug: string;
		imdb: string;
		tmdb: number;
	};
	social_ids: {
		twitter: string;
		facebook: string;
		instagram: string;
		wikipedia: {
		};
	};
	biography: string;
	birthday: string;
	death: {
	};
	birthplace: string;
	homepage: string;
}
    
export interface TraktPeopleMoviesResponse { 
	cast: {
		characters: string[];
		movie: TraktMovie;
	}[];
	crew: TraktCrew;
}
    
export interface TraktPeopleShowsResponse { 
	cast: {
		characters: string[];
		episode_count: number;
		series_regular: boolean;
		show: TraktShow;
	}[];
	crew: TraktCrew;
}
    
export interface TraktPeopleListsResponse { 
	name: string;
	description: string;
	privacy: string;
	display_numbers: boolean;
	allow_comments: boolean;
	sort_by: string;
	sort_how: string;
	created_at: string;
	updated_at: string;
	item_count: number;
	comment_count: number;
	likes: number;
	ids: {
		trakt: number;
		slug: string;
	};
	user: TraktUser;
}
    
export interface TraktRecommendationsMoviesResponse { 
	title: string;
	year: number;
	ids: {
		trakt: number;
		slug: string;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktRecommendationsShowsResponse { 
	title: string;
	year: number;
	ids: {
		trakt: number;
		slug: string;
		tvdb: number;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktScrobbleStartResponse { 
	id: number;
	action: string;
	progress: number;
	sharing: {
		twitter: boolean;
		tumblr: boolean;
	};
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktScrobblePauseResponse { 
	id: number;
	action: string;
	progress: number;
	sharing: {
		twitter: boolean;
		tumblr: boolean;
	};
	movie: TraktMovie;
}
    
export interface TraktScrobbleStopResponse { 
	watched_at: string;
	expires_at: string;
}
    
export interface TraktSearchTextQueryResponse { 
	type: string;
	score: number;
	movie: TraktMovie;
}
    
export interface TraktSearchIDLookupResponse { 
	type: string;
	score: {
	};
	movie: TraktMovie;
}
    
export interface TraktShowsTrendingResponse { 
	watchers: number;
	show: TraktShow;
}
    
export interface TraktShowsPopularResponse { 
	title: string;
	year: number;
	ids: {
		trakt: number;
		slug: string;
		tvdb: number;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktShowsRecommendedResponse { 
	user_count: number;
	show: TraktShow;
}
    
export interface TraktShowsPlayedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	collector_count: number;
	show: TraktShow;
}
    
export interface TraktShowsWatchedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	collector_count: number;
	show: TraktShow;
}
    
export interface TraktShowsCollectedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	collector_count: number;
	show: TraktShow;
}
    
export interface TraktShowsAnticipatedResponse { 
	list_count: number;
	show: TraktShow;
}
    
export interface TraktShowsUpdatesResponse { 
	updated_at: string;
	show: TraktShow;
}
    
export interface TraktShowsUpdatedIDsResponse extends Array<number> { }
    
export interface TraktShowsSummaryResponse { 
	title: string;
	year: number;
	ids: {
		trakt: number;
		slug: string;
		tvdb: number;
		imdb: string;
		tmdb: number;
	};
	overview: string;
	first_aired: string;
	airs: {
		day: string;
		time: string;
		timezone: string;
	};
	runtime: number;
	certification: string;
	network: string;
	country: string;
	updated_at: string;
	trailer: {
	};
	homepage: string;
	status: string;
	rating: number;
	votes: number;
	comment_count: number;
	language: string;
	available_translations: string[];
	genres: string[];
	aired_episodes: number;
}
    
export interface TraktShowsAliasesResponse { 
	title: string;
	country: string;
}
    
export interface TraktShowsCertificationsResponse { 
	certification: string;
	country: string;
}
    
export interface TraktShowsTranslationsResponse { 
	title: string;
	overview: string;
	language: string;
}
    
export interface TraktShowsCommentsResponse { 
	id: number;
	parent_id: number;
	created_at: string;
	updated_at: string;
	comment: string;
	spoiler: boolean;
	review: boolean;
	replies: number;
	likes: number;
	user_stats: {
		rating: number;
		play_count: number;
		completed_count: number;
	};
	user: TraktUser;
}
    
export interface TraktShowsListsResponse { 
	name: string;
	description: string;
	privacy: string;
	display_numbers: boolean;
	allow_comments: boolean;
	sort_by: string;
	sort_how: string;
	created_at: string;
	updated_at: string;
	item_count: number;
	comment_count: number;
	likes: number;
	ids: {
		trakt: number;
		slug: string;
	};
	user: TraktUser;
}
    
export interface TraktShowsCollectionProgressResponse { 
	aired: number;
	completed: number;
	last_collected_at: string;
	seasons: {
		number: number;
		title: string;
		aired: number;
		completed: number;
		episodes: {
			number: number;
			completed: boolean;
			collected_at: string;
		}[];
	}[];
	hidden_seasons: {
		number: number;
		ids: {
			trakt: number;
			tvdb: number;
			tmdb: number;
		};
	}[];
	next_episode: {
		season: number;
		number: number;
		title: string;
		ids: {
			trakt: number;
			tvdb: number;
			imdb: {
			};
			tmdb: {
			};
		};
	};
	last_episode: {
		season: number;
		number: number;
		title: string;
		ids: {
			trakt: number;
			tvdb: number;
			imdb: {
			};
			tmdb: {
			};
		};
	};
}
    
export interface TraktShowsWatchedProgressResponse { 
	aired: number;
	completed: number;
	last_watched_at: string;
	reset_at: {
	};
	seasons: {
		number: number;
		title: string;
		aired: number;
		completed: number;
		episodes: {
			number: number;
			completed: boolean;
			last_watched_at: string;
		}[];
	}[];
	hidden_seasons: {
		number: number;
		ids: {
			trakt: number;
			tvdb: number;
			tmdb: number;
		};
	}[];
	next_episode: {
		season: number;
		number: number;
		title: string;
		ids: {
			trakt: number;
			tvdb: number;
			imdb: {
			};
			tmdb: {
			};
		};
	};
	last_episode: {
		season: number;
		number: number;
		title: string;
		ids: {
			trakt: number;
			tvdb: number;
			imdb: {
			};
			tmdb: {
			};
		};
	};
}
    
export interface TraktShowsPeopleResponse { 
	cast: {
		characters: string[];
		episode_count: number;
		person: TraktPerson;
	}[];
	guest_stars: {
		characters: string[];
		episode_count: number;
		person: TraktPerson;
	}[];
	crew: TraktCrew;
}
    
export interface TraktShowsRatingsResponse { 
	rating: number;
	votes: number;
	distribution: {
		"1": number;
		"2": number;
		"3": number;
		"4": number;
		"5": number;
		"6": number;
		"7": number;
		"8": number;
		"9": number;
		"10": number;
	};
}
    
export interface TraktShowsRelatedResponse { 
	title: string;
	year: number;
	ids: {
		trakt: number;
		slug: string;
		tvdb: number;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktShowsStatsResponse { 
	watchers: number;
	plays: number;
	collectors: number;
	collected_episodes: number;
	comments: number;
	lists: number;
	votes: number;
	recommended: number;
}
    
export interface TraktShowsWatchingResponse { 
	username: string;
	private: boolean;
	name: string;
	vip: boolean;
	vip_ep: boolean;
	ids: {
		slug: string;
	};
}
    
export interface TraktShowsNextEpisodeResponse { 
	season: number;
	number: number;
	title: string;
	ids: {
		trakt: number;
		tvdb: number;
		imdb: {
		};
		tmdb: {
		};
	};
}
    
export interface TraktShowsLastEpisodeResponse { 
	season: number;
	number: number;
	title: string;
	ids: {
		trakt: number;
		tvdb: number;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktSeasonsSummaryResponse { 
	number: number;
	ids: {
		trakt: number;
		tvdb: number;
		tmdb: number;
	};
	episodes: {
		season: number;
		number: number;
		title: string;
		ids: {
			trakt: number;
			tvdb: number;
			imdb: string;
			tmdb: number;
		};
	}[];
}
    
export interface TraktSeasonsSeasonResponse { 
	season: number;
	number: number;
	title: string;
	ids: {
		trakt: number;
		tvdb: number;
		imdb: string;
		tmdb: number;
	};
}
    
export interface TraktSeasonsCommentsResponse { 
	id: number;
	parent_id: number;
	created_at: string;
	updated_at: string;
	comment: string;
	spoiler: boolean;
	review: boolean;
	replies: number;
	likes: number;
	user_stats: {
		rating: number;
		play_count: number;
		completed_count: number;
	};
	user: TraktUser;
}
    
export interface TraktSeasonsListsResponse { 
	name: string;
	description: string;
	privacy: string;
	display_numbers: boolean;
	allow_comments: boolean;
	sort_by: string;
	sort_how: string;
	created_at: string;
	updated_at: string;
	item_count: number;
	comment_count: number;
	likes: number;
	ids: {
		trakt: number;
		slug: string;
	};
	user: TraktUser;
}
    
export interface TraktSeasonsPeopleResponse { 
	cast: {
		characters: string[];
		episode_count: number;
		person: TraktPerson;
	}[];
	guest_stars: {
		characters: string[];
		episode_count: number;
		person: TraktPerson;
	}[];
	crew: TraktCrew;
}
    
export interface TraktSeasonsRatingsResponse { 
	rating: number;
	votes: number;
	distribution: {
		"1": number;
		"2": number;
		"3": number;
		"4": number;
		"5": number;
		"6": number;
		"7": number;
		"8": number;
		"9": number;
		"10": number;
	};
}
    
export interface TraktSeasonsStatsResponse { 
	watchers: number;
	plays: number;
	collectors: number;
	collected_episodes: number;
	comments: number;
	lists: number;
	votes: number;
}
    
export interface TraktSeasonsWatchingResponse { 
	username: string;
	private: boolean;
	name: string;
	vip: boolean;
	vip_ep: boolean;
	ids: {
		slug: string;
	};
}
    
export interface TraktEpisodesSummaryResponse { 
	season: number;
	number: number;
	title: string;
	ids: {
		trakt: number;
		tvdb: number;
		imdb: string;
		tmdb: number;
	};
	number_abs: {
	};
	overview: string;
	first_aired: string;
	updated_at: string;
	rating: number;
	votes: number;
	comment_count: number;
	available_translations: string[];
	runtime: number;
}
    
export interface TraktEpisodesTranslationsResponse { 
	title: string;
	overview: string;
	language: string;
}
    
export interface TraktEpisodesCommentsResponse { 
	id: number;
	parent_id: number;
	created_at: string;
	updated_at: string;
	comment: string;
	spoiler: boolean;
	review: boolean;
	replies: number;
	likes: number;
	user_stats: {
		rating: number;
		play_count: number;
		completed_count: number;
	};
	user: TraktUser;
}
    
export interface TraktEpisodesListsResponse { 
	name: string;
	description: string;
	privacy: string;
	display_numbers: boolean;
	allow_comments: boolean;
	sort_by: string;
	sort_how: string;
	created_at: string;
	updated_at: string;
	item_count: number;
	comment_count: number;
	likes: number;
	ids: {
		trakt: number;
		slug: string;
	};
	user: TraktUser;
}
    
export interface TraktEpisodesPeopleResponse { 
	cast: {
		characters: string[];
		person: TraktPerson;
	}[];
	guest_stars: {
		characters: string[];
		person: TraktPerson;
	}[];
	crew: TraktCrew;
}
    
export interface TraktEpisodesRatingsResponse { 
	rating: number;
	votes: number;
	distribution: {
		"1": number;
		"2": number;
		"3": number;
		"4": number;
		"5": number;
		"6": number;
		"7": number;
		"8": number;
		"9": number;
		"10": number;
	};
}
    
export interface TraktEpisodesStatsResponse { 
	watchers: number;
	plays: number;
	collectors: number;
	collected_episodes: number;
	comments: number;
	lists: number;
	votes: number;
}
    
export interface TraktEpisodesWatchingResponse { 
	username: string;
	private: boolean;
	name: string;
	vip: boolean;
	vip_ep: boolean;
	ids: {
		slug: string;
	};
}
    
export interface TraktSyncLastActivitiesResponse { 
	all: string;
	movies: {
		watched_at: string;
		collected_at: string;
		rated_at: string;
		watchlisted_at: string;
		recommendations_at: string;
		commented_at: string;
		paused_at: string;
		hidden_at: string;
	};
	episodes: {
		watched_at: string;
		collected_at: string;
		rated_at: string;
		watchlisted_at: string;
		commented_at: string;
		paused_at: string;
	};
	shows: {
		rated_at: string;
		watchlisted_at: string;
		recommendations_at: string;
		commented_at: string;
		hidden_at: string;
	};
	seasons: {
		rated_at: string;
		watchlisted_at: string;
		commented_at: string;
		hidden_at: string;
	};
	comments: {
		liked_at: string;
	};
	lists: {
		liked_at: string;
		updated_at: string;
		commented_at: string;
	};
	watchlist: {
		updated_at: string;
	};
	recommendations: {
		updated_at: string;
	};
	account: {
		settings_at: string;
		followed_at: string;
		following_at: string;
		pending_at: string;
	};
}
    
export interface TraktSyncPlaybackResponse { 
	progress: number;
	paused_at: string;
	id: number;
	type: string;
	movie: TraktMovie;
}
    
export interface TraktSyncGetCollectionResponse { 
	last_collected_at: string;
	last_updated_at: string;
	show: TraktShow;
	seasons: {
		number: number;
		episodes: {
			number: number;
			collected_at: string;
			metadata: {
				media_type: string;
				resolution: string;
				hdr: string;
				audio: string;
				audio_channels: string;
				"3d": boolean;
			};
		}[];
	}[];
}
    
export interface TraktSyncAddToCollectionResponse { 
	added: {
		movies: number;
		episodes: number;
	};
	updated: {
		movies: number;
		episodes: number;
	};
	existing: {
		movies: number;
		episodes: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		episodes: undefined[];
	};
}
    
export interface TraktSyncRemoveFromCollectionResponse { 
	deleted: {
		movies: number;
		episodes: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		episodes: undefined[];
	};
}
    
export interface TraktSyncGetWatchedResponse { 
	plays: number;
	last_watched_at: string;
	last_updated_at: string;
	reset_at: {
	};
	show: TraktShow;
}
    
export interface TraktSyncGetHistoryResponse { 
	id: number;
	watched_at: string;
	action: string;
	type: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktSyncAddToHistoryResponse { 
	added: {
		movies: number;
		episodes: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		episodes: undefined[];
	};
}
    
export interface TraktSyncRemoveFromHistoryResponse { 
	deleted: {
		movies: number;
		episodes: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		episodes: undefined[];
		ids: number[];
	};
}
    
export interface TraktSyncGetRatingsResponse { 
	rated_at: string;
	rating: number;
	type: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktSyncAddRatingsResponse { 
	added: {
		movies: number;
		shows: number;
		seasons: number;
		episodes: number;
	};
	not_found: {
		movies: {
			rating: number;
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		episodes: undefined[];
	};
}
    
export interface TraktSyncRemoveRatingsResponse { 
	deleted: {
		movies: number;
		shows: number;
		seasons: number;
		episodes: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		episodes: undefined[];
	};
}
    
export interface TraktSyncGetWatchlistResponse { 
	rank: number;
	listed_at: string;
	type: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktSyncAddToWatchlistResponse { 
	added: {
		movies: number;
		shows: number;
		seasons: number;
		episodes: number;
	};
	existing: {
		movies: number;
		shows: number;
		seasons: number;
		episodes: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		episodes: undefined[];
	};
}
    
export interface TraktSyncRemoveFromWatchlistResponse { 
	deleted: {
		movies: number;
		shows: number;
		seasons: number;
		episodes: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		episodes: undefined[];
	};
}
    
export interface TraktSyncReorderWatchlistResponse { 
	updated: number;
	skipped_ids: number[];
}
    
export interface TraktSyncGetPersonalRecommendationsResponse { 
	rank: number;
	listed_at: string;
	type: string;
	notes: string;
	show: TraktShow;
}
    
export interface TraktSyncAddToPersonalRecommendationsResponse { 
	added: {
		movies: number;
		shows: number;
	};
	existing: {
		movies: number;
		shows: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
	};
}
    
export interface TraktSyncRemoveFromPersonalRecommendationsResponse { 
	deleted: {
		movies: number;
		shows: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
	};
}
    
export interface TraktSyncReorderPersonalRecommendationsResponse { 
	updated: number;
	skipped_ids: number[];
}
    
export interface TraktUsersSettingsResponse { 
	user: TraktUser;
	account: {
		timezone: string;
		date_format: string;
		time_24hr: boolean;
		cover_image: string;
	};
	connections: {
		facebook: boolean;
		twitter: boolean;
		google: boolean;
		tumblr: boolean;
		medium: boolean;
		slack: boolean;
		apple: boolean;
	};
	sharing_text: {
		watching: string;
		watched: string;
		rated: string;
	};
}
    
export interface TraktUsersFollowingRequestsResponse { 
	id: number;
	requested_at: string;
	user: TraktUser;
}
    
export interface TraktUsersFollowerRequestsResponse { 
	id: number;
	requested_at: string;
	user: TraktUser;
}
    
export interface TraktUsersHiddenItemsResponse { 
	hidden_at: string;
	type: string;
	show: TraktShow;
}
    
export interface TraktUsersAddHiddenItemsResponse { 
	added: {
		movies: number;
		shows: number;
		seasons: number;
		users: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		users: undefined[];
	};
}
    
export interface TraktUsersRemoveHiddenItemsResponse { 
	deleted: {
		movies: number;
		shows: number;
		seasons: number;
		users: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		users: undefined[];
	};
}
    
export interface TraktUsersProfileResponse { 
	username: string;
	private: boolean;
	name: string;
	vip: boolean;
	vip_ep: boolean;
	ids: {
		slug: string;
	};
	vip_og: boolean;
	vip_years: number;
	vip_cover_image: string;
}
    
export interface TraktUsersLikesResponse { 
	liked_at: string;
	type: string;
	list: TraktList;
}
    
export interface TraktUsersCollectionResponse { 
	last_collected_at: string;
	last_updated_at: string;
	show: TraktShow;
	seasons: {
		number: number;
		episodes: {
			number: number;
			collected_at: string;
			metadata: {
				media_type: string;
				resolution: string;
				hdr: string;
				audio: string;
				audio_channels: string;
				"3d": boolean;
			};
		}[];
	}[];
}
    
export interface TraktUsersCommentsResponse { 
	type: string;
	movie: TraktMovie;
	comment: TraktComment;
}
    
export interface TraktUsersListsResponse { 
	name: string;
	description: string;
	privacy: string;
	display_numbers: boolean;
	allow_comments: boolean;
	sort_by: string;
	sort_how: string;
	created_at: string;
	updated_at: string;
	item_count: number;
	comment_count: number;
	likes: number;
	ids: {
		trakt: number;
		slug: string;
	};
}
    
export interface TraktUsersReorderListsResponse { 
	updated: number;
	skipped_ids: number[];
}
    
export interface TraktUsersListLikesResponse { 
	liked_at: string;
	user: TraktUser;
}
    
export interface TraktUsersListItemsResponse { 
	rank: number;
	id: number;
	listed_at: string;
	type: string;
	movie: TraktMovie;
}
    
export interface TraktUsersAddListItemsResponse { 
	added: {
		movies: number;
		shows: number;
		seasons: number;
		episodes: number;
		people: number;
	};
	existing: {
		movies: number;
		shows: number;
		seasons: number;
		episodes: number;
		people: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		episodes: undefined[];
		people: undefined[];
	};
}
    
export interface TraktUsersRemoveListItemsResponse { 
	deleted: {
		movies: number;
		shows: number;
		seasons: number;
		episodes: number;
		people: number;
	};
	not_found: {
		movies: {
			ids: {
				imdb: string;
			};
		}[];
		shows: undefined[];
		seasons: undefined[];
		episodes: undefined[];
		people: undefined[];
	};
}
    
export interface TraktUsersReorderListItemsResponse { 
	updated: number;
	skipped_ids: number[];
}
    
export interface TraktUsersListCommentsResponse { 
	id: number;
	parent_id: number;
	created_at: string;
	updated_at: string;
	comment: string;
	spoiler: boolean;
	review: boolean;
	replies: number;
	likes: number;
	user_stats: {
		rating: {
		};
		play_count: number;
		completed_count: number;
	};
	user: TraktUser;
}
    
export interface TraktUsersFollowersResponse { 
	followed_at: string;
	user: TraktUser;
}
    
export interface TraktUsersFollowingResponse { 
	followed_at: string;
	user: TraktUser;
}
    
export interface TraktUsersFriendsResponse { 
	friends_at: string;
	user: TraktUser;
}
    
export interface TraktUsersHistoryResponse { 
	id: number;
	watched_at: string;
	action: string;
	type: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktUsersRatingsResponse { 
	rated_at: string;
	rating: number;
	type: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktUsersWatchlistResponse { 
	rank: number;
	listed_at: string;
	type: string;
	episode: TraktEpisode;
	show: TraktShow;
}
    
export interface TraktUsersPersonalRecommendationsResponse { 
	rank: number;
	listed_at: string;
	type: string;
	notes: string;
	show: TraktShow;
}
    
export interface TraktUsersWatchedResponse { 
	plays: number;
	last_watched_at: string;
	last_updated_at: string;
	reset_at: {
	};
	show: TraktShow;
}
    
export interface TraktUsersStatsResponse { 
	movies: {
		plays: number;
		watched: number;
		minutes: number;
		collected: number;
		ratings: number;
		comments: number;
	};
	shows: {
		watched: number;
		collected: number;
		ratings: number;
		comments: number;
	};
	seasons: {
		ratings: number;
		comments: number;
	};
	episodes: {
		plays: number;
		watched: number;
		minutes: number;
		collected: number;
		ratings: number;
		comments: number;
	};
	network: {
		friends: number;
		followers: number;
		following: number;
	};
	ratings: {
		total: number;
		distribution: {
			"1": number;
			"2": number;
			"3": number;
			"4": number;
			"5": number;
			"6": number;
			"7": number;
			"8": number;
			"9": number;
			"10": number;
		};
	};
}
