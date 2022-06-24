import TraktBase, { TraktOptions, TraktFilter } from "./base";
import got, { Response } from "got";

class TraktMethods extends TraktBase {    
    constructor(options: TraktOptions) {
        super(options);
    }
	authentication = {
        authorize: async (params: TraktAuthenticationAuthorizeRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/oauth/authorize{?response_type,client_id,redirect_uri,state}", params);
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "GET",                          
            });   
        },
        getToken: async (params: TraktAuthenticationGetTokenRequest): Promise<Response<TraktAuthenticationGetTokenResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/oauth/device/token", params);
            
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
        refreshToken: async (params: TraktAuthenticationRefreshTokenRequest): Promise<Response<TraktAuthenticationGetTokenResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/oauth/token", params);
            
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
        revokeToken: async (params: TraktAuthenticationRevokeTokenRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/oauth/revoke", params);
            
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
            const route = this.baseUrl + "/oauth/device/code";
            
            return await got(route, {
                throwHttpErrors: false,
                responseType: "json",
                method: "POST",
                json: {
                    "client_id": this.client_id
                },                          
            });   
        },
	};	calendars = {
        myShows: async (params: TraktCalendarsMyShowsRequest): Promise<Response<TraktCalendarsMyShowsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/calendars/my/shows/{start_date}/{days}", params);
            
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
        myNewShows: async (params: TraktCalendarsMyNewShowsRequest): Promise<Response<TraktCalendarsMyNewShowsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/calendars/my/shows/new/{start_date}/{days}", params);
            
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
        mySeasonPremieres: async (params: TraktCalendarsMySeasonPremieresRequest): Promise<Response<TraktCalendarsMySeasonPremieresResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/calendars/my/shows/premieres/{start_date}/{days}", params);
            
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
        myMovies: async (params: TraktCalendarsMyMoviesRequest): Promise<Response<TraktCalendarsMyMoviesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/calendars/my/movies/{start_date}/{days}", params);
            
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
        myDVD: async (params: TraktCalendarsMyDVDRequest): Promise<Response<TraktCalendarsMyDVDResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/calendars/my/dvd/{start_date}/{days}", params);
            
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
        allShows: async (params: TraktCalendarsAllShowsRequest): Promise<Response<TraktCalendarsAllShowsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/calendars/all/shows/{start_date}/{days}", params);
            
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
        allNewShows: async (params: TraktCalendarsAllNewShowsRequest): Promise<Response<TraktCalendarsAllNewShowsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/calendars/all/shows/new/{start_date}/{days}", params);
            
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
        allSeasonPremieres: async (params: TraktCalendarsAllSeasonPremieresRequest): Promise<Response<TraktCalendarsAllSeasonPremieresResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/calendars/all/shows/premieres/{start_date}/{days}", params);
            
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
        allMovies: async (params: TraktCalendarsAllMoviesRequest): Promise<Response<TraktCalendarsAllMoviesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/calendars/all/movies/{start_date}/{days}", params);
            
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
        allDVD: async (params: TraktCalendarsAllDVDRequest): Promise<Response<TraktCalendarsAllDVDResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/calendars/all/dvd/{start_date}/{days}", params);
            
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
	};	checkin = {
        checkin: async (params: TraktCheckinCheckinRequest): Promise<Response<TraktCheckinCheckinResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/checkin", params);
            
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
					"sharing": params.sharing,
					"message": params.message,
					"venue_id": params.venue_id,
					"venue_name": params.venue_name,
					"app_version": params.app_version,
					"app_date": params.app_date
                },                          
            });   
        },
        deleteAnyActiveCheckins: async (): Promise<Response<any>> => {
            const route = this.baseUrl + "/checkin";
            
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
	};	certifications = {
        list: async (params: TraktCertificationsListRequest): Promise<Response<TraktCertificationsListResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/certifications/{type}", params);
            
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
	};	comments = {
        comments: async (params: TraktCommentsCommentsRequest): Promise<Response<TraktCommentsCommentsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments", params);
            
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
        comment: async (params: TraktCommentsCommentRequest): Promise<Response<TraktCommentsCommentResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/{id}", params);
            
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
        updateACommentOrReply: async (params: TraktCommentsUpdateACommentOrReplyRequest): Promise<Response<TraktCommentsUpdateACommentOrReplyResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/{id}", params);
            
            return await got(route, {
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
        deleteACommentOrReply: async (params: TraktCommentsDeleteACommentOrReplyRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/{id}", params);
            
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
        replies: async (params: TraktCommentsRepliesRequest): Promise<Response<TraktCommentsRepliesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/{id}/replies", params);
            
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
        postAReplyForAComment: async (params: TraktCommentsPostAReplyForACommentRequest): Promise<Response<TraktCommentsPostAReplyForACommentResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/{id}/replies", params);
            
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
        item: async (params: TraktCommentsItemRequest): Promise<Response<TraktCommentsItemResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/{id}/item", params);
            
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
        likes: async (params: TraktCommentsLikesRequest): Promise<Response<TraktCommentsLikesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/{id}/likes", params);
            
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
        like: async (params: TraktCommentsLikeRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/{id}/like", params);
            
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
        removeLikeOnAComment: async (params: TraktCommentsRemoveLikeOnACommentRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/{id}/like", params);
            
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
        trending: async (params: TraktCommentsTrendingRequest): Promise<Response<TraktCommentsTrendingResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/trending/{comment_type}/{type}{?include_replies}", params);
            
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
        recent: async (params: TraktCommentsRecentRequest): Promise<Response<TraktCommentsRecentResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/recent/{comment_type}/{type}{?include_replies}", params);
            
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
        updates: async (params: TraktCommentsUpdatesRequest): Promise<Response<TraktCommentsUpdatesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/comments/updates/{comment_type}/{type}{?include_replies}", params);
            
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
	};	countries = {
        list: async (params: TraktCountriesListRequest): Promise<Response<TraktCountriesListResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/countries/{type}", params);
            
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
	};	genres = {
        list: async (params: TraktGenresListRequest): Promise<Response<TraktGenresListResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/genres/{type}", params);
            
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
	};	languages = {
        list: async (params: TraktLanguagesListRequest): Promise<Response<TraktLanguagesListResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/languages/{type}", params);
            
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
	};	lists = {
        trending: async (params: TraktListsTrendingRequest): Promise<Response<TraktListsTrendingResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/lists/trending", params);
            
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
        popular: async (params: TraktListsPopularRequest): Promise<Response<TraktListsPopularResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/lists/popular", params);
            
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
        list: async (params: TraktListsListRequest): Promise<Response<TraktListsListResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/lists/{id}", params);
            
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
        listLikes: async (params: TraktListsListLikesRequest): Promise<Response<TraktListsListLikesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/lists/{id}/likes", params);
            
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
        listItems: async (params: TraktListsListItemsRequest): Promise<Response<TraktListsListItemsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/lists/{id}/items/{type}", params);
            
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
        listComments: async (params: TraktListsListCommentsRequest): Promise<Response<TraktListsListCommentsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/lists/{id}/comments/{sort}", params);
            
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
	};	movies = {
        trending: async (params: TraktMoviesTrendingRequest): Promise<Response<TraktMoviesTrendingResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/trending", params);
            
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
        popular: async (params: TraktMoviesPopularRequest): Promise<Response<TraktMoviesPopularResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/popular", params);
            
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
        recommended: async (params: TraktMoviesRecommendedRequest): Promise<Response<TraktMoviesRecommendedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/recommended/{period}", params);
            
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
        played: async (params: TraktMoviesPlayedRequest): Promise<Response<TraktMoviesPlayedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/played/{period}", params);
            
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
        watched: async (params: TraktMoviesWatchedRequest): Promise<Response<TraktMoviesWatchedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/watched/{period}", params);
            
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
        collected: async (params: TraktMoviesCollectedRequest): Promise<Response<TraktMoviesCollectedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/collected/{period}", params);
            
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
        anticipated: async (params: TraktMoviesAnticipatedRequest): Promise<Response<TraktMoviesAnticipatedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/anticipated", params);
            
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
        boxOffice: async (params: TraktMoviesBoxOfficeRequest): Promise<Response<TraktMoviesBoxOfficeResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/boxoffice", params);
            
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
        updates: async (params: TraktMoviesUpdatesRequest): Promise<Response<TraktMoviesUpdatesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/updates/{start_date}", params);
            
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
        updatedIDs: async (params: TraktMoviesUpdatedIDsRequest): Promise<Response<number[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/updates/id/{start_date}", params);
            
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
        summary: async (params: TraktMoviesSummaryRequest): Promise<Response<TraktMoviesSummaryResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/{id}", params);
            
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
        aliases: async (params: TraktMoviesAliasesRequest): Promise<Response<TraktMoviesAliasesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/{id}/aliases", params);
            
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
        releases: async (params: TraktMoviesReleasesRequest): Promise<Response<TraktMoviesReleasesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/{id}/releases/{country}", params);
            
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
        translations: async (params: TraktMoviesTranslationsRequest): Promise<Response<TraktMoviesTranslationsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/{id}/translations/{language}", params);
            
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
        comments: async (params: TraktMoviesCommentsRequest): Promise<Response<TraktMoviesCommentsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/{id}/comments/{sort}", params);
            
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
        lists: async (params: TraktMoviesListsRequest): Promise<Response<TraktMoviesListsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/{id}/lists/{type}/{sort}", params);
            
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
        people: async (params: TraktMoviesPeopleRequest): Promise<Response<TraktMoviesPeopleResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/{id}/people", params);
            
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
        ratings: async (params: TraktMoviesRatingsRequest): Promise<Response<TraktMoviesRatingsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/{id}/ratings", params);
            
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
        related: async (params: TraktMoviesRelatedRequest): Promise<Response<TraktMoviesRelatedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/{id}/related", params);
            
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
        stats: async (params: TraktMoviesStatsRequest): Promise<Response<TraktMoviesStatsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/{id}/stats", params);
            
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
        watching: async (params: TraktMoviesWatchingRequest): Promise<Response<TraktMoviesWatchingResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/movies/{id}/watching", params);
            
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
	};	networks = {
        list: async (): Promise<Response<TraktNetworksListResponse[]>> => {
            const route = this.baseUrl + "/networks";
            
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
	};	people = {
        summary: async (params: TraktPeopleSummaryRequest): Promise<Response<TraktPeopleSummaryResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/people/{id}", params);
            
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
        movies: async (params: TraktPeopleMoviesRequest): Promise<Response<TraktPeopleMoviesResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/people/{id}/movies", params);
            
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
        shows: async (params: TraktPeopleShowsRequest): Promise<Response<TraktPeopleShowsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/people/{id}/shows", params);
            
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
        lists: async (params: TraktPeopleListsRequest): Promise<Response<TraktPeopleListsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/people/{id}/lists/{type}/{sort}", params);
            
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
	};	recommendations = {
        movies: async (params: TraktRecommendationsMoviesRequest): Promise<Response<TraktRecommendationsMoviesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/recommendations/movies{?ignore_collected}", params);
            
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
        hideMovie: async (params: TraktRecommendationsHideMovieRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/recommendations/movies/{id}", params);
            
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
        shows: async (params: TraktRecommendationsShowsRequest): Promise<Response<TraktRecommendationsShowsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/recommendations/shows{?ignore_collected}", params);
            
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
        hideShow: async (params: TraktRecommendationsHideShowRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/recommendations/shows/{id}", params);
            
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
	};	scrobble = {
        start: async (params: TraktScrobbleStartRequest): Promise<Response<TraktScrobbleStartResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/scrobble/start", params);
            
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
        pause: async (params: TraktScrobblePauseRequest): Promise<Response<TraktScrobblePauseResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/scrobble/pause", params);
            
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
        stop: async (params: TraktScrobbleStopRequest): Promise<Response<TraktScrobbleStopResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/scrobble/stop", params);
            
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
	};	search = {
        textQuery: async (params: TraktSearchTextQueryRequest): Promise<Response<TraktSearchTextQueryResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/search/{type}{?query}", params);
            
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
        iDLookup: async (params: TraktSearchIDLookupRequest): Promise<Response<TraktSearchIDLookupResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/search/{id_type}/{id}{?type}", params);
            
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
	};	shows = {
        trending: async (params: TraktShowsTrendingRequest): Promise<Response<TraktShowsTrendingResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/trending", params);
            
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
        popular: async (params: TraktShowsPopularRequest): Promise<Response<TraktShowsPopularResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/popular", params);
            
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
        recommended: async (params: TraktShowsRecommendedRequest): Promise<Response<TraktShowsRecommendedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/recommended/{period}", params);
            
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
        played: async (params: TraktShowsPlayedRequest): Promise<Response<TraktShowsPlayedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/played/{period}", params);
            
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
        watched: async (params: TraktShowsWatchedRequest): Promise<Response<TraktShowsWatchedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/watched/{period}", params);
            
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
        collected: async (params: TraktShowsCollectedRequest): Promise<Response<TraktShowsCollectedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/collected/{period}", params);
            
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
        anticipated: async (params: TraktShowsAnticipatedRequest): Promise<Response<TraktShowsAnticipatedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/anticipated", params);
            
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
        updates: async (params: TraktShowsUpdatesRequest): Promise<Response<TraktShowsUpdatesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/updates/{start_date}", params);
            
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
        updatedIDs: async (params: TraktShowsUpdatedIDsRequest): Promise<Response<number[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/updates/id/{start_date}", params);
            
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
        summary: async (params: TraktShowsSummaryRequest): Promise<Response<TraktShowsSummaryResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}", params);
            
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
        aliases: async (params: TraktShowsAliasesRequest): Promise<Response<TraktShowsAliasesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/aliases", params);
            
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
        certifications: async (params: TraktShowsCertificationsRequest): Promise<Response<TraktShowsCertificationsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/certifications", params);
            
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
        translations: async (params: TraktShowsTranslationsRequest): Promise<Response<TraktShowsTranslationsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/translations/{language}", params);
            
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
        comments: async (params: TraktShowsCommentsRequest): Promise<Response<TraktShowsCommentsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/comments/{sort}", params);
            
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
        lists: async (params: TraktShowsListsRequest): Promise<Response<TraktShowsListsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/lists/{type}/{sort}", params);
            
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
        collectionProgress: async (params: TraktShowsCollectionProgressRequest): Promise<Response<TraktShowsCollectionProgressResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/progress/collection{?hidden,specials,count_specials,last_activity}", params);
            
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
        watchedProgress: async (params: TraktShowsWatchedProgressRequest): Promise<Response<TraktShowsWatchedProgressResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/progress/watched{?hidden,specials,count_specials,last_activity}", params);
            
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
        resetWatchedProgress: async (params: TraktShowsResetWatchedProgressRequest): Promise<Response<TraktShowsResetWatchedProgressResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/progress/watched/reset", params);
            
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
        undoResetShowProgress: async (params: TraktShowsUndoResetShowProgressRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/progress/watched/reset", params);
            
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
        people: async (params: TraktShowsPeopleRequest): Promise<Response<TraktShowsPeopleResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/people", params);
            
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
        ratings: async (params: TraktShowsRatingsRequest): Promise<Response<TraktShowsRatingsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/ratings", params);
            
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
        related: async (params: TraktShowsRelatedRequest): Promise<Response<TraktShowsRelatedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/related", params);
            
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
        stats: async (params: TraktShowsStatsRequest): Promise<Response<TraktShowsStatsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/stats", params);
            
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
        watching: async (params: TraktShowsWatchingRequest): Promise<Response<TraktShowsWatchingResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/watching", params);
            
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
        nextEpisode: async (params: TraktShowsNextEpisodeRequest): Promise<Response<TraktShowsNextEpisodeResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/next_episode", params);
            
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
        lastEpisode: async (params: TraktShowsLastEpisodeRequest): Promise<Response<TraktShowsLastEpisodeResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/last_episode", params);
            
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
	};	seasons = {
        summary: async (params: TraktSeasonsSummaryRequest): Promise<Response<TraktSeasonsSummaryResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons", params);
            
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
        season: async (params: TraktSeasonsSeasonRequest): Promise<Response<TraktSeasonsSeasonResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}{?translations}", params);
            
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
        comments: async (params: TraktSeasonsCommentsRequest): Promise<Response<TraktSeasonsCommentsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/comments/{sort}", params);
            
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
        lists: async (params: TraktSeasonsListsRequest): Promise<Response<TraktSeasonsListsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/lists/{type}/{sort}", params);
            
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
        people: async (params: TraktSeasonsPeopleRequest): Promise<Response<TraktSeasonsPeopleResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/people", params);
            
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
        ratings: async (params: TraktSeasonsRatingsRequest): Promise<Response<TraktSeasonsRatingsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/ratings", params);
            
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
        stats: async (params: TraktSeasonsStatsRequest): Promise<Response<TraktSeasonsStatsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/stats", params);
            
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
        watching: async (params: TraktSeasonsWatchingRequest): Promise<Response<TraktSeasonsWatchingResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/watching", params);
            
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
	};	episodes = {
        summary: async (params: TraktEpisodesSummaryRequest): Promise<Response<TraktEpisodesSummaryResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}", params);
            
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
        translations: async (params: TraktEpisodesTranslationsRequest): Promise<Response<TraktEpisodesTranslationsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/translations/{language}", params);
            
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
        comments: async (params: TraktEpisodesCommentsRequest): Promise<Response<TraktEpisodesCommentsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort}", params);
            
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
        lists: async (params: TraktEpisodesListsRequest): Promise<Response<TraktEpisodesListsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort}", params);
            
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
        people: async (params: TraktEpisodesPeopleRequest): Promise<Response<TraktEpisodesPeopleResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/people", params);
            
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
        ratings: async (params: TraktEpisodesRatingsRequest): Promise<Response<TraktEpisodesRatingsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/ratings", params);
            
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
        stats: async (params: TraktEpisodesStatsRequest): Promise<Response<TraktEpisodesStatsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/stats", params);
            
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
        watching: async (params: TraktEpisodesWatchingRequest): Promise<Response<TraktEpisodesWatchingResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/shows/{id}/seasons/{season}/episodes/{episode}/watching", params);
            
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
	};	sync = {
        lastActivities: async (): Promise<Response<TraktSyncLastActivitiesResponse>> => {
            const route = this.baseUrl + "/sync/last_activities";
            
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
        playback: async (params: TraktSyncPlaybackRequest): Promise<Response<TraktSyncPlaybackResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/playback/{type}{?start_at,end_at}", params);
            
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
        removePlayback: async (params: TraktSyncRemovePlaybackRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/playback/{id}", params);
            
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
        getCollection: async (params: TraktSyncGetCollectionRequest): Promise<Response<TraktSyncGetCollectionResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/collection/{type}", params);
            
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
        addToCollection: async (params: TraktSyncAddToCollectionRequest): Promise<Response<TraktSyncAddToCollectionResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/collection", params);
            
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
        removeFromCollection: async (params: TraktSyncRemoveFromCollectionRequest): Promise<Response<TraktSyncRemoveFromCollectionResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/collection/remove", params);
            
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
        getWatched: async (params: TraktSyncGetWatchedRequest): Promise<Response<TraktSyncGetWatchedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/watched/{type}", params);
            
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
        getHistory: async (params: TraktSyncGetHistoryRequest): Promise<Response<TraktSyncGetHistoryResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/history/{type}/{id}{?start_at,end_at}", params);
            
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
        addToHistory: async (params: TraktSyncAddToHistoryRequest): Promise<Response<TraktSyncAddToHistoryResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/history", params);
            
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
        removeFromHistory: async (params: TraktSyncRemoveFromHistoryRequest): Promise<Response<TraktSyncRemoveFromHistoryResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/history/remove", params);
            
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
        getRatings: async (params: TraktSyncGetRatingsRequest): Promise<Response<TraktSyncGetRatingsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/ratings/{type}/{rating}", params);
            
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
        addRatings: async (params: TraktSyncAddRatingsRequest): Promise<Response<TraktSyncAddRatingsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/ratings", params);
            
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
        removeRatings: async (params: TraktSyncRemoveRatingsRequest): Promise<Response<TraktSyncRemoveRatingsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/ratings/remove", params);
            
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
        getWatchlist: async (params: TraktSyncGetWatchlistRequest): Promise<Response<TraktSyncGetWatchlistResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/watchlist/{type}/{sort}", params);
            
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
        addToWatchlist: async (params: TraktSyncAddToWatchlistRequest): Promise<Response<TraktSyncAddToWatchlistResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/watchlist", params);
            
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
        removeFromWatchlist: async (params: TraktSyncRemoveFromWatchlistRequest): Promise<Response<TraktSyncRemoveFromWatchlistResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/watchlist/remove", params);
            
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
            const route = this.baseUrl + "/sync/watchlist/reorder";
            
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
        getPersonalRecommendations: async (params: TraktSyncGetPersonalRecommendationsRequest): Promise<Response<TraktSyncGetPersonalRecommendationsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/recommendations/{type}/{sort}", params);
            
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
        addToPersonalRecommendations: async (params: TraktSyncAddToPersonalRecommendationsRequest): Promise<Response<TraktSyncAddToPersonalRecommendationsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/recommendations", params);
            
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
        removeFromPersonalRecommendations: async (params: TraktSyncRemoveFromPersonalRecommendationsRequest): Promise<Response<TraktSyncRemoveFromPersonalRecommendationsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/sync/recommendations/remove", params);
            
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
            const route = this.baseUrl + "/sync/recommendations/reorder";
            
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
	};	users = {
        settings: async (): Promise<Response<TraktUsersSettingsResponse>> => {
            const route = this.baseUrl + "/users/settings";
            
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
        followingRequests: async (params: TraktUsersFollowingRequestsRequest): Promise<Response<TraktUsersFollowingRequestsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/requests/following", params);
            
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
        followerRequests: async (params: TraktUsersFollowerRequestsRequest): Promise<Response<TraktUsersFollowerRequestsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/requests", params);
            
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
        approveOrDenyFollowerRequests: async (params: TraktUsersApproveOrDenyFollowerRequestsRequest): Promise<Response<TraktUsersApproveOrDenyFollowerRequestsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/requests/{id}", params);
            
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
        denyFollowRequest: async (params: TraktUsersDenyFollowRequestRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/requests/{id}", params);
            
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
        hiddenItems: async (params: TraktUsersHiddenItemsRequest): Promise<Response<TraktUsersHiddenItemsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/hidden/{section}{?type}", params);
            
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
        addHiddenItems: async (params: TraktUsersAddHiddenItemsRequest): Promise<Response<TraktUsersAddHiddenItemsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/hidden/{section}", params);
            
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
        removeHiddenItems: async (params: TraktUsersRemoveHiddenItemsRequest): Promise<Response<TraktUsersRemoveHiddenItemsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/hidden/{section}/remove", params);
            
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
        profile: async (params: TraktUsersProfileRequest): Promise<Response<TraktUsersProfileResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}", params);
            
            return await got(route, {
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
        likes: async (params: TraktUsersLikesRequest): Promise<Response<TraktUsersLikesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/likes/{type}", params);
            
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
        collection: async (params: TraktUsersCollectionRequest): Promise<Response<TraktUsersCollectionResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/collection/{type}", params);
            
            return await got(route, {
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
        comments: async (params: TraktUsersCommentsRequest): Promise<Response<TraktUsersCommentsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/comments/{comment_type}/{type}{?include_replies}", params);
            
            return await got(route, {
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
        lists: async (params: TraktUsersListsRequest): Promise<Response<TraktUsersListsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists", params);
            
            return await got(route, {
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
        createCustomList: async (params: TraktUsersCreateCustomListRequest): Promise<Response<TraktUsersCreateCustomListResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists", params);
            
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
        reorderLists: async (params: TraktUsersReorderListsRequest): Promise<Response<TraktUsersReorderListsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/reorder", params);
            
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
        list: async (params: TraktUsersListRequest): Promise<Response<TraktUsersListResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}", params);
            
            return await got(route, {
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
        updateCustomList: async (params: TraktUsersUpdateCustomListRequest): Promise<Response<TraktUsersUpdateCustomListResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}", params);
            
            return await got(route, {
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
        deleteAUsersCustomList: async (params: TraktUsersDeleteAUsersCustomListRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}", params);
            
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
        listLikes: async (params: TraktUsersListLikesRequest): Promise<Response<TraktUsersListLikesResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/likes", params);
            
            return await got(route, {
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
        listLike: async (params: TraktUsersListLikeRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/like", params);
            
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
        removeLikeOnAList: async (params: TraktUsersRemoveLikeOnAListRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/like", params);
            
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
        listItems: async (params: TraktUsersListItemsRequest): Promise<Response<TraktUsersListItemsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/items/{type}", params);
            
            return await got(route, {
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
        addListItems: async (params: TraktUsersAddListItemsRequest): Promise<Response<TraktUsersAddListItemsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/items", params);
            
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
        removeListItems: async (params: TraktUsersRemoveListItemsRequest): Promise<Response<TraktUsersRemoveListItemsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/items/remove", params);
            
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
        reorderListItems: async (params: TraktUsersReorderListItemsRequest): Promise<Response<TraktUsersReorderListItemsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/items/reorder", params);
            
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
        listComments: async (params: TraktUsersListCommentsRequest): Promise<Response<TraktUsersListCommentsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/lists/{list_id}/comments/{sort}", params);
            
            return await got(route, {
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
        follow: async (params: TraktUsersFollowRequest): Promise<Response<TraktUsersFollowResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/follow", params);
            
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
        unfollowThisUser: async (params: TraktUsersUnfollowThisUserRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/follow", params);
            
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
        followers: async (params: TraktUsersFollowersRequest): Promise<Response<TraktUsersFollowersResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/followers", params);
            
            return await got(route, {
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
        following: async (params: TraktUsersFollowingRequest): Promise<Response<TraktUsersFollowingResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/following", params);
            
            return await got(route, {
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
        friends: async (params: TraktUsersFriendsRequest): Promise<Response<TraktUsersFriendsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/friends", params);
            
            return await got(route, {
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
        history: async (params: TraktUsersHistoryRequest): Promise<Response<TraktUsersHistoryResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/history/{type}/{item_id}{?start_at,end_at}", params);
            
            return await got(route, {
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
        ratings: async (params: TraktUsersRatingsRequest): Promise<Response<TraktUsersRatingsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/ratings/{type}/{rating}", params);
            
            return await got(route, {
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
        watchlist: async (params: TraktUsersWatchlistRequest): Promise<Response<TraktUsersWatchlistResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/watchlist/{type}/{sort}", params);
            
            return await got(route, {
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
        personalRecommendations: async (params: TraktUsersPersonalRecommendationsRequest): Promise<Response<TraktUsersPersonalRecommendationsResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/recommendations/{type}/{sort}", params);
            
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
        watching: async (params: TraktUsersWatchingRequest): Promise<Response<any>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/watching", params);
            
            return await got(route, {
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
        watched: async (params: TraktUsersWatchedRequest): Promise<Response<TraktUsersWatchedResponse[]>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/watched/{type}", params);
            
            return await got(route, {
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
        stats: async (params: TraktUsersStatsRequest): Promise<Response<TraktUsersStatsResponse>> => {
            const route = this.baseUrl + this.parseEndpoint("/users/{id}/stats", params);
            
            return await got(route, {
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
	};}
export default TraktMethods;

    
export interface TraktUser { 
	username: string;
	private: boolean;
	name: string;
	vip: boolean;
	vip_ep: boolean;
	ids: {
		slug: string;
	};
	joined_at: string;
	location: string;
	about: string;
	gender: string;
	age: number;
	images: {
		avatar: {
			full: string;
		};
	};
	vip_og: boolean;
	vip_years: number; 
    [key: string]: any;
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
    [key: string]: any;
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
    [key: string]: any;
}
    
export interface TraktSeason { 
	number: number;
	ids: {
		tvdb: number;
		tmdb: number;
	}; 
    [key: string]: any;
}
    
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
    [key: string]: any;
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
		rating: {
		};
		play_count: number;
		completed_count: number;
	};
	user: TraktUser; 
    [key: string]: any;
}
    
export interface TraktList { 
	name: string;
	description: string;
	privacy: string;
	display_numbers: boolean;
	allow_comments: boolean;
	updated_at: string;
	item_count: number;
	comment_count: number;
	likes: number;
	ids: {
		trakt: number;
		slug: string;
	};
	sort_by: string;
	sort_how: string;
	created_at: string;
	user: TraktUser; 
    [key: string]: any;
}
    
export interface TraktPerson { 
	name: string;
	ids: {
		trakt: number;
		slug: string;
		imdb: string;
		tmdb: number;
	}; 
    [key: string]: any;
}
    
export interface TraktAuthenticationAuthorizeRequest { 
	response_type: string;
	state?: string;
	signup?: string;
}
    
export interface TraktAuthenticationGetTokenRequest { 
	code: string;
}
    
export interface TraktAuthenticationGetTokenResponse { 
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token: string;
	scope: string;
	created_at: number; 
}
    
export interface TraktAuthenticationRefreshTokenRequest { 
	refresh_token: string;
	grant_type?: string;
}
    
export interface TraktAuthenticationRefreshTokenResponse { 
	error: string;
	error_description: string; 
}
    
export interface TraktAuthenticationRevokeTokenRequest { 
	token: string;
}
    
export interface TraktAuthenticationDeviceCodeResponse { 
	device_code: string;
	user_code: string;
	verification_url: string;
	expires_in: number;
	interval: number; 
}
    
export interface TraktCalendarsMyShowsRequest { 
	start_date?: string;
	days?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktCalendarsMyShowsResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktCalendarsMyNewShowsRequest { 
	start_date?: string;
	days?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktCalendarsMyNewShowsResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktCalendarsMySeasonPremieresRequest { 
	start_date?: string;
	days?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktCalendarsMySeasonPremieresResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktCalendarsMyMoviesRequest { 
	start_date?: string;
	days?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktCalendarsMyMoviesResponse { 
	released: string;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktCalendarsMyDVDRequest { 
	start_date?: string;
	days?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktCalendarsMyDVDResponse { 
	released: string;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktCalendarsAllShowsRequest { 
	start_date?: string;
	days?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktCalendarsAllShowsResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktCalendarsAllNewShowsRequest { 
	start_date?: string;
	days?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktCalendarsAllNewShowsResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktCalendarsAllSeasonPremieresRequest { 
	start_date?: string;
	days?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktCalendarsAllSeasonPremieresResponse { 
	first_aired: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktCalendarsAllMoviesRequest { 
	start_date?: string;
	days?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktCalendarsAllMoviesResponse { 
	released: string;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktCalendarsAllDVDRequest { 
	start_date?: string;
	days?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktCalendarsAllDVDResponse { 
	released: string;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktCheckinCheckinRequest { 
	item: object;
	sharing?: object;
	message?: string;
	venue_id?: string;
	venue_name?: string;
	app_version?: string;
	app_date?: string;
}
    
export interface TraktCheckinCheckinResponse { 
	expires_at: string; 
}
    
export interface TraktCertificationsListRequest { 
	type: "movies"|"shows";
}
    
export interface TraktCertificationsListResponse { 
	us: {
		name: string;
		slug: string;
		description: string;
	}[]; 
}
    
export interface TraktCommentsCommentsRequest { 
	item: "movie"|"show"|"season"|"episode"|"or list object. (see examples &#8594;)";
	comment: string;
	spoiler?: boolean;
	sharing?: object;
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
    
export interface TraktCommentsCommentRequest { 
	id: number;
}
    
export interface TraktCommentsCommentResponse { 
	id: number;
	parent_id: number;
	created_at: string;
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
    
export interface TraktCommentsUpdateACommentOrReplyRequest { 
	id: number;
	comment?: string;
	spoiler?: boolean;
}
    
export interface TraktCommentsUpdateACommentOrReplyResponse { 
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
    
export interface TraktCommentsDeleteACommentOrReplyRequest { 
	id: number;
}
    
export interface TraktCommentsRepliesRequest { 
	id: number;
	page?: number;
	limit?: number;
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
		rating: number;
		play_count: number;
		completed_count: number;
	};
	user: TraktUser; 
}
    
export interface TraktCommentsPostAReplyForACommentRequest { 
	id: number;
	comment: string;
	spoiler?: boolean;
}
    
export interface TraktCommentsPostAReplyForACommentResponse { 
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
    
export interface TraktCommentsItemRequest { 
	id: number;
	extended?: "full"|"metadata";
}
    
export interface TraktCommentsItemResponse { 
	type: string;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktCommentsLikesRequest { 
	id: number;
	page?: number;
	limit?: number;
}
    
export interface TraktCommentsLikesResponse { 
	liked_at: string;
	user: TraktUser; 
}
    
export interface TraktCommentsLikeRequest { 
	id: number;
}
    
export interface TraktCommentsRemoveLikeOnACommentRequest { 
	id: number;
}
    
export interface TraktCommentsTrendingRequest { 
	comment_type?: "all"|"reviews"|"shouts";
	type?: "all"|"movies"|"shows"|"seasons"|"episodes"|"lists";
	include_replies?: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktCommentsTrendingResponse { 
	type: string;
	movie?: TraktMovie;
	comment: TraktComment;
	show?: TraktShow;
	season?: TraktSeason;
	episode?: TraktEpisode;
	list?: TraktList; 
	[key: string]: any;
}
    
export interface TraktCommentsRecentRequest { 
	comment_type?: "all"|"reviews"|"shouts";
	type?: "all"|"movies"|"shows"|"seasons"|"episodes"|"lists";
	include_replies?: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktCommentsRecentResponse { 
	type: string;
	movie?: TraktMovie;
	comment: TraktComment;
	show?: TraktShow;
	season?: TraktSeason;
	episode?: TraktEpisode;
	list?: TraktList; 
	[key: string]: any;
}
    
export interface TraktCommentsUpdatesRequest { 
	comment_type?: "all"|"reviews"|"shouts";
	type?: "all"|"movies"|"shows"|"seasons"|"episodes"|"lists";
	include_replies?: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktCommentsUpdatesResponse { 
	type: string;
	movie?: TraktMovie;
	comment: TraktComment;
	show?: TraktShow;
	season?: TraktSeason;
	episode?: TraktEpisode;
	list?: TraktList; 
	[key: string]: any;
}
    
export interface TraktCountriesListRequest { 
	type: "movies"|"shows";
}
    
export interface TraktCountriesListResponse { 
	name: string;
	code: string; 
}
    
export interface TraktGenresListRequest { 
	type: "movies"|"shows";
}
    
export interface TraktGenresListResponse { 
	name: string;
	slug: string; 
}
    
export interface TraktLanguagesListRequest { 
	type: "movies"|"shows";
}
    
export interface TraktLanguagesListResponse { 
	name: string;
	code: string; 
}
    
export interface TraktListsTrendingRequest { 
	page?: number;
	limit?: number;
}
    
export interface TraktListsTrendingResponse { 
	like_count: number;
	comment_count: number;
	list: TraktList; 
}
    
export interface TraktListsPopularRequest { 
	page?: number;
	limit?: number;
}
    
export interface TraktListsPopularResponse { 
	like_count: number;
	comment_count: number;
	list: TraktList; 
}
    
export interface TraktListsListRequest { 
	id: number;
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
    
export interface TraktListsListLikesRequest { 
	id: string;
	page?: number;
	limit?: number;
}
    
export interface TraktListsListLikesResponse { 
	liked_at: string;
	user: TraktUser; 
}
    
export interface TraktListsListItemsRequest { 
	id: string;
	type?: "movie"|"show"|"season"|"episode"|"person";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktListsListItemsResponse { 
	rank: number;
	listed_at: string;
	type: string;
	movie?: TraktMovie;
	show?: TraktShow;
	season?: TraktSeason;
	episode?: TraktEpisode;
	person?: TraktPerson; 
	[key: string]: any;
}
    
export interface TraktListsListCommentsRequest { 
	id: number;
	sort?: "newest"|"oldest"|"likes"|"replies";
	page?: number;
	limit?: number;
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
    
export interface TraktMoviesTrendingRequest { 
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktMoviesTrendingResponse { 
	watchers: number;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktMoviesPopularRequest { 
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
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
	[key: string]: any;
}
    
export interface TraktMoviesRecommendedRequest { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktMoviesRecommendedResponse { 
	user_count: number;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktMoviesPlayedRequest { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktMoviesPlayedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktMoviesWatchedRequest { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktMoviesWatchedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktMoviesCollectedRequest { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktMoviesCollectedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktMoviesAnticipatedRequest { 
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktMoviesAnticipatedResponse { 
	list_count: number;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktMoviesBoxOfficeRequest { 
	extended?: "full"|"metadata";
}
    
export interface TraktMoviesBoxOfficeResponse { 
	revenue: number;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktMoviesUpdatesRequest { 
	start_date?: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktMoviesUpdatesResponse { 
	updated_at: string;
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktMoviesUpdatedIDsRequest { 
	start_date?: string;
	page?: number;
	limit?: number;
}
    
export interface TraktMoviesUpdatedIDsResponse {  
}
    
export interface TraktMoviesSummaryRequest { 
	id: string;
	extended?: "full"|"metadata";
}
    
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
	[key: string]: any;
}
    
export interface TraktMoviesAliasesRequest { 
	id: string;
}
    
export interface TraktMoviesAliasesResponse { 
	title: string;
	country: string; 
}
    
export interface TraktMoviesReleasesRequest { 
	id: string;
	country?: string;
}
    
export interface TraktMoviesReleasesResponse { 
	country: string;
	certification: string;
	release_date: string;
	release_type: string;
	note: {
	}; 
}
    
export interface TraktMoviesTranslationsRequest { 
	id: string;
	language?: string;
}
    
export interface TraktMoviesTranslationsResponse { 
	title: string;
	overview: string;
	tagline: string;
	language: string; 
}
    
export interface TraktMoviesCommentsRequest { 
	id: string;
	sort?: "newest"|"oldest"|"likes"|"replies"|"highest"|"lowest"|"plays";
	page?: number;
	limit?: number;
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
    
export interface TraktMoviesListsRequest { 
	id: string;
	type?: "all"|"personal"|"official"|"watchlists"|"recommendations";
	sort?: "popular"|"likes"|"comments"|"items"|"added"|"updated";
	page?: number;
	limit?: number;
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
    
export interface TraktMoviesPeopleRequest { 
	id: string;
	extended?: "full"|"metadata";
}
    
export interface TraktMoviesPeopleResponse { 
	cast: {
		characters: string[];
		person: TraktPerson;
	}[];
	crew: TraktCrew; 
	[key: string]: any;
}
    
export interface TraktMoviesRatingsRequest { 
	id: string;
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
    
export interface TraktMoviesRelatedRequest { 
	id: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktMoviesStatsRequest { 
	id: string;
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
    
export interface TraktMoviesWatchingRequest { 
	id: string;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktNetworksListResponse { 
	name: string; 
}
    
export interface TraktPeopleSummaryRequest { 
	id: string;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktPeopleMoviesRequest { 
	id: string;
	extended?: "full"|"metadata";
}
    
export interface TraktPeopleMoviesResponse { 
	cast: {
		characters: string[];
		movie: TraktMovie;
	}[];
	crew: TraktCrew; 
	[key: string]: any;
}
    
export interface TraktPeopleShowsRequest { 
	id: string;
	extended?: "full"|"metadata";
}
    
export interface TraktPeopleShowsResponse { 
	cast: {
		characters: string[];
		episode_count: number;
		series_regular: boolean;
		show: TraktShow;
	}[];
	crew: TraktCrew; 
	[key: string]: any;
}
    
export interface TraktPeopleListsRequest { 
	id: string;
	type?: "all"|"personal"|"official";
	sort?: "popular"|"likes"|"comments"|"items"|"added"|"updated";
	page?: number;
	limit?: number;
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
    
export interface TraktRecommendationsMoviesRequest { 
	ignore_collected?: "true"|"false";
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktRecommendationsHideMovieRequest { 
	id: string;
}
    
export interface TraktRecommendationsShowsRequest { 
	ignore_collected?: "true"|"false";
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktRecommendationsHideShowRequest { 
	id: string;
}
    
export interface TraktScrobbleStartRequest { 
	item: object;
	progress: number;
	app_version?: string;
	app_date?: string;
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
    
export interface TraktScrobblePauseRequest { 
	item: object;
	progress: number;
	app_version?: string;
	app_date?: string;
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
    
export interface TraktScrobbleStopRequest { 
	item: object;
	progress: number;
	app_version?: string;
	app_date?: string;
}
    
export interface TraktScrobbleStopResponse { 
	watched_at: string;
	expires_at: string; 
}
    
export interface TraktSearchTextQueryRequest { 
	type: string;
	query: string;
	fields?: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktSearchTextQueryResponse { 
	type: string;
	score: number;
	movie?: TraktMovie;
	show?: TraktShow;
	episode?: TraktEpisode;
	person?: TraktPerson;
	list?: TraktList; 
	[key: string]: any;
}
    
export interface TraktSearchIDLookupRequest { 
	id_type: string;
	id: string;
	type?: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktSearchIDLookupResponse { 
	type: string;
	score: {
	};
	movie: TraktMovie; 
	[key: string]: any;
}
    
export interface TraktShowsTrendingRequest { 
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktShowsTrendingResponse { 
	watchers: number;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktShowsPopularRequest { 
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
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
	[key: string]: any;
}
    
export interface TraktShowsRecommendedRequest { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktShowsRecommendedResponse { 
	user_count: number;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktShowsPlayedRequest { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktShowsPlayedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	collector_count: number;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktShowsWatchedRequest { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktShowsWatchedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	collector_count: number;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktShowsCollectedRequest { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktShowsCollectedResponse { 
	watcher_count: number;
	play_count: number;
	collected_count: number;
	collector_count: number;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktShowsAnticipatedRequest { 
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
	filters?: { [key in TraktFilter]?: string };
}
    
export interface TraktShowsAnticipatedResponse { 
	list_count: number;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktShowsUpdatesRequest { 
	start_date?: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktShowsUpdatesResponse { 
	updated_at: string;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktShowsUpdatedIDsRequest { 
	start_date?: string;
	page?: number;
	limit?: number;
}
    
export interface TraktShowsUpdatedIDsResponse {  
}
    
export interface TraktShowsSummaryRequest { 
	id: string;
	extended?: "full"|"metadata";
}
    
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
	[key: string]: any;
}
    
export interface TraktShowsAliasesRequest { 
	id: string;
}
    
export interface TraktShowsAliasesResponse { 
	title: string;
	country: string; 
}
    
export interface TraktShowsCertificationsRequest { 
	id: string;
}
    
export interface TraktShowsCertificationsResponse { 
	certification: string;
	country: string; 
}
    
export interface TraktShowsTranslationsRequest { 
	id: string;
	language?: string;
}
    
export interface TraktShowsTranslationsResponse { 
	title: string;
	overview: string;
	language: string; 
}
    
export interface TraktShowsCommentsRequest { 
	id: string;
	sort?: "newest"|"oldest"|"likes"|"replies"|"highest"|"lowest"|"plays"|"watched";
	page?: number;
	limit?: number;
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
    
export interface TraktShowsListsRequest { 
	id: string;
	type?: "all"|"personal"|"official"|"watchlists"|"recommendations";
	sort?: "popular"|"likes"|"comments"|"items"|"added"|"updated";
	page?: number;
	limit?: number;
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
    
export interface TraktShowsCollectionProgressRequest { 
	id: string;
	hidden?: string;
	specials?: string;
	count_specials?: string;
	last_activity?: "aired"|"collected";
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
			collected_at: {
			};
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
    
export interface TraktShowsWatchedProgressRequest { 
	id: string;
	hidden?: string;
	specials?: string;
	count_specials?: string;
	last_activity?: "aired"|"watched";
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
			last_watched_at: {
			};
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
    
export interface TraktShowsResetWatchedProgressRequest { 
	id: string;
}
    
export interface TraktShowsResetWatchedProgressResponse { 
	reset_at: string; 
}
    
export interface TraktShowsUndoResetShowProgressRequest { 
	id: string;
}
    
export interface TraktShowsPeopleRequest { 
	id: string;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktShowsRatingsRequest { 
	id: string;
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
    
export interface TraktShowsRelatedRequest { 
	id: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktShowsStatsRequest { 
	id: string;
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
    
export interface TraktShowsWatchingRequest { 
	id: string;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktShowsNextEpisodeRequest { 
	id: string;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktShowsLastEpisodeRequest { 
	id: string;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktSeasonsSummaryRequest { 
	id: string;
	extended?: "full"|"metadata";
}
    
export interface TraktSeasonsSummaryResponse { 
	number: number;
	ids: {
		trakt: number;
		tvdb: {
		};
		tmdb: number;
	};
	episodes: {
		season: number;
		number: number;
		title: string;
		ids: {
			trakt: number;
			tvdb: {
			};
			imdb: string;
			tmdb: number;
		};
	}[]; 
	[key: string]: any;
}
    
export interface TraktSeasonsSeasonRequest { 
	id: string;
	season: number;
	translations?: string;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktSeasonsCommentsRequest { 
	id: string;
	season: number;
	sort?: "newest"|"oldest"|"likes"|"replies"|"highest"|"lowest"|"plays"|"watched";
	page?: number;
	limit?: number;
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
    
export interface TraktSeasonsListsRequest { 
	id: string;
	season: number;
	type?: "all"|"personal"|"official"|"watchlists";
	sort?: "popular"|"likes"|"comments"|"items"|"added"|"updated";
	page?: number;
	limit?: number;
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
    
export interface TraktSeasonsPeopleRequest { 
	id: string;
	season: number;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktSeasonsRatingsRequest { 
	id: string;
	season: number;
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
    
export interface TraktSeasonsStatsRequest { 
	id: string;
	season: number;
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
    
export interface TraktSeasonsWatchingRequest { 
	id: string;
	season: number;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktEpisodesSummaryRequest { 
	id: string;
	season: number;
	episode: number;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktEpisodesTranslationsRequest { 
	id: string;
	season: number;
	episode: number;
	language?: string;
}
    
export interface TraktEpisodesTranslationsResponse { 
	title: string;
	overview: string;
	language: string; 
}
    
export interface TraktEpisodesCommentsRequest { 
	id: string;
	season: number;
	episode: number;
	sort?: "newest"|"oldest"|"likes"|"replies"|"highest"|"lowest"|"plays";
	page?: number;
	limit?: number;
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
    
export interface TraktEpisodesListsRequest { 
	id: string;
	season: number;
	episode: number;
	type?: "all"|"personal"|"official"|"watchlists";
	sort?: "popular"|"likes"|"comments"|"items"|"added"|"updated";
	page?: number;
	limit?: number;
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
    
export interface TraktEpisodesPeopleRequest { 
	id: string;
	season: number;
	episode: number;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktEpisodesRatingsRequest { 
	id: string;
	season: number;
	episode: number;
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
    
export interface TraktEpisodesStatsRequest { 
	id: string;
	season: number;
	episode: number;
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
    
export interface TraktEpisodesWatchingRequest { 
	id: string;
	season: number;
	episode: number;
	extended?: "full"|"metadata";
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
	[key: string]: any;
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
    
export interface TraktSyncPlaybackRequest { 
	type?: "movies"|"episodes";
	start_at?: string;
	end_at?: string;
	page?: number;
	limit?: number;
}
    
export interface TraktSyncPlaybackResponse { 
	progress: number;
	paused_at: string;
	id: number;
	type: string;
	movie?: TraktMovie;
	episode?: TraktEpisode;
	show?: TraktShow; 
}
    
export interface TraktSyncRemovePlaybackRequest { 
	id: number;
}
    
export interface TraktSyncGetCollectionRequest { 
	type: "movies"|"shows";
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktSyncAddToCollectionRequest { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			ids: {
				imdb: string;
			};
		}[];
		episodes: {
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktSyncRemoveFromCollectionRequest { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			ids: {
				imdb: string;
			};
		}[];
		episodes: {
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktSyncGetWatchedRequest { 
	type: "movies"|"shows";
	extended?: "full"|"metadata";
}
    
export interface TraktSyncGetWatchedResponse { 
	plays: number;
	last_watched_at: string;
	last_updated_at: string;
	reset_at: string;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktSyncGetHistoryRequest { 
	type?: "movies"|"shows"|"seasons"|"episodes";
	id?: number;
	start_at?: string;
	end_at?: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktSyncGetHistoryResponse { 
	id: number;
	watched_at: string;
	action: string;
	type: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktSyncAddToHistoryRequest { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			ids: {
				imdb: string;
			};
		}[];
		episodes: {
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktSyncRemoveFromHistoryRequest { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
	ids?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			ids: {
				imdb: string;
			};
		}[];
		episodes: {
			ids: {
				imdb: string;
			};
		}[];
		ids: number[];
	}; 
}
    
export interface TraktSyncGetRatingsRequest { 
	type?: "movies"|"shows"|"seasons"|"episodes"|"all";
	rating?: number;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktSyncGetRatingsResponse { 
	rated_at: string;
	rating: number;
	type: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktSyncAddRatingsRequest { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
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
		shows: {
			rating: number;
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			rating: number;
			ids: {
				imdb: string;
			};
		}[];
		episodes: {
			rating: number;
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktSyncRemoveRatingsRequest { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			ids: {
				imdb: string;
			};
		}[];
		episodes: {
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktSyncGetWatchlistRequest { 
	type?: "movies"|"shows"|"seasons"|"episodes";
	sort?: "rank"|"added"|"released"|"title";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktSyncGetWatchlistResponse { 
	rank: number;
	listed_at: string;
	type: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktSyncAddToWatchlistRequest { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			ids: {
				imdb: string;
			};
		}[];
		episodes: {
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktSyncRemoveFromWatchlistRequest { 
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			ids: {
				imdb: string;
			};
		}[];
		episodes: {
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktSyncReorderWatchlistResponse { 
	updated: number;
	skipped_ids: number[]; 
}
    
export interface TraktSyncGetPersonalRecommendationsRequest { 
	type?: "movies"|"shows";
	sort?: "rank"|"added"|"released"|"title";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktSyncGetPersonalRecommendationsResponse { 
	rank: number;
	listed_at: string;
	type: string;
	notes: string;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktSyncAddToPersonalRecommendationsRequest { 
	movies?: Array<any>;
	shows?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktSyncRemoveFromPersonalRecommendationsRequest { 
	movies?: Array<any>;
	shows?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
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
    
export interface TraktUsersFollowingRequestsRequest { 
	extended?: "full"|"metadata";
}
    
export interface TraktUsersFollowingRequestsResponse { 
	id: number;
	requested_at: string;
	user: TraktUser; 
	[key: string]: any;
}
    
export interface TraktUsersFollowerRequestsRequest { 
	extended?: "full"|"metadata";
}
    
export interface TraktUsersFollowerRequestsResponse { 
	id: number;
	requested_at: string;
	user: TraktUser; 
	[key: string]: any;
}
    
export interface TraktUsersApproveOrDenyFollowerRequestsRequest { 
	id: number;
}
    
export interface TraktUsersApproveOrDenyFollowerRequestsResponse { 
	followed_at: string;
	user: TraktUser; 
}
    
export interface TraktUsersDenyFollowRequestRequest { 
	id: number;
}
    
export interface TraktUsersHiddenItemsRequest { 
	section: "calendar"|"recommendations"|"comments";
	type?: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktUsersHiddenItemsResponse { 
	hidden_at: string;
	type: string;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktUsersAddHiddenItemsRequest { 
	section: "calendar"|"recommendations";
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	users?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			ids: {
				imdb: string;
			};
		}[];
		users: {
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktUsersRemoveHiddenItemsRequest { 
	section: "calendar"|"recommendations"|"comments";
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	users?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			ids: {
				imdb: string;
			};
		}[];
		users: {
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktUsersProfileRequest { 
	id: string;
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktUsersLikesRequest { 
	id: string;
	type?: "comments"|"lists";
	page?: number;
	limit?: number;
}
    
export interface TraktUsersLikesResponse { 
	liked_at: string;
	type: string;
	list: TraktList; 
}
    
export interface TraktUsersCollectionRequest { 
	id: string;
	type: "movies"|"shows";
	extended?: "full"|"metadata";
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
	[key: string]: any;
}
    
export interface TraktUsersCommentsRequest { 
	id: string;
	comment_type?: "all"|"reviews"|"shouts";
	type?: "all"|"movies"|"shows"|"seasons"|"episodes"|"lists";
	include_replies?: "true"|"false"|"only";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktUsersCommentsResponse { 
	type: string;
	movie?: TraktMovie;
	comment: TraktComment;
	show?: TraktShow;
	season?: TraktSeason;
	episode?: TraktEpisode;
	list?: TraktList; 
	[key: string]: any;
}
    
export interface TraktUsersListsRequest { 
	id: string;
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
    
export interface TraktUsersCreateCustomListRequest { 
	id: string;
	name: string;
	description?: string;
	privacy?: "private"|"friends"|"public";
	display_numbers?: boolean;
	allow_comments?: boolean;
	sort_by?: "rank"|"added"|"title"|"released"|"runtime"|"popularity"|"percentage"|"votes"|"my_rating"|"random"|"watched"|"collected";
	sort_how?: "asc"|"desc";
}
    
export interface TraktUsersCreateCustomListResponse { 
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
    
export interface TraktUsersReorderListsRequest { 
	id: string;
}
    
export interface TraktUsersReorderListsResponse { 
	updated: number;
	skipped_ids: number[]; 
}
    
export interface TraktUsersListRequest { 
	id: string;
	list_id: string;
}
    
export interface TraktUsersListResponse { 
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
    
export interface TraktUsersUpdateCustomListRequest { 
	id: string;
	list_id: string;
	name?: string;
	description?: string;
	privacy?: string;
	display_numbers?: boolean;
	allow_comments?: boolean;
	sort_by?: string;
	sort_how?: string;
}
    
export interface TraktUsersUpdateCustomListResponse { 
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
    
export interface TraktUsersDeleteAUsersCustomListRequest { 
	id: string;
	list_id: string;
}
    
export interface TraktUsersListLikesRequest { 
	id: string;
	list_id: string;
	page?: number;
	limit?: number;
}
    
export interface TraktUsersListLikesResponse { 
	liked_at: string;
	user: TraktUser; 
}
    
export interface TraktUsersListLikeRequest { 
	id: string;
	list_id: string;
}
    
export interface TraktUsersRemoveLikeOnAListRequest { 
	id: string;
	list_id: string;
}
    
export interface TraktUsersListItemsRequest { 
	id: string;
	list_id: string;
	type?: "movie"|"show"|"season"|"episode"|"person";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktUsersListItemsResponse { 
	rank: number;
	id: number;
	listed_at: string;
	type: string;
	movie?: TraktMovie;
	show?: TraktShow;
	season?: TraktSeason;
	episode?: TraktEpisode;
	person?: TraktPerson; 
	[key: string]: any;
}
    
export interface TraktUsersAddListItemsRequest { 
	id: string;
	list_id: string;
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
	people?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			ids: {
				imdb: string;
			};
		}[];
		episodes: {
			ids: {
				imdb: string;
			};
		}[];
		people: {
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktUsersRemoveListItemsRequest { 
	id: string;
	list_id: string;
	movies?: Array<any>;
	shows?: Array<any>;
	seasons?: Array<any>;
	episodes?: Array<any>;
	people?: Array<any>;
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
		shows: {
			ids: {
				imdb: string;
			};
		}[];
		seasons: {
			ids: {
				imdb: string;
			};
		}[];
		episodes: {
			ids: {
				imdb: string;
			};
		}[];
		people: {
			ids: {
				imdb: string;
			};
		}[];
	}; 
}
    
export interface TraktUsersReorderListItemsRequest { 
	id: string;
	list_id: string;
}
    
export interface TraktUsersReorderListItemsResponse { 
	updated: number;
	skipped_ids: number[]; 
}
    
export interface TraktUsersListCommentsRequest { 
	id: string;
	list_id: string;
	sort?: "newest"|"oldest"|"likes"|"replies";
	page?: number;
	limit?: number;
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
    
export interface TraktUsersFollowRequest { 
	id: string;
}
    
export interface TraktUsersFollowResponse { 
	approved_at: string;
	user: TraktUser; 
}
    
export interface TraktUsersUnfollowThisUserRequest { 
	id: string;
}
    
export interface TraktUsersFollowersRequest { 
	id: string;
	extended?: "full"|"metadata";
}
    
export interface TraktUsersFollowersResponse { 
	followed_at: string;
	user: TraktUser; 
	[key: string]: any;
}
    
export interface TraktUsersFollowingRequest { 
	id: string;
	extended?: "full"|"metadata";
}
    
export interface TraktUsersFollowingResponse { 
	followed_at: string;
	user: TraktUser; 
	[key: string]: any;
}
    
export interface TraktUsersFriendsRequest { 
	id: string;
	extended?: "full"|"metadata";
}
    
export interface TraktUsersFriendsResponse { 
	friends_at: string;
	user: TraktUser; 
	[key: string]: any;
}
    
export interface TraktUsersHistoryRequest { 
	id: string;
	type?: "movies"|"shows"|"seasons"|"episodes";
	item_id?: number;
	start_at?: string;
	end_at?: string;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktUsersHistoryResponse { 
	id: number;
	watched_at: string;
	action: string;
	type: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktUsersRatingsRequest { 
	id: string;
	type?: "movies"|"shows"|"seasons"|"episodes"|"all";
	rating?: number;
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktUsersRatingsResponse { 
	rated_at: string;
	rating: number;
	type: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktUsersWatchlistRequest { 
	id: string;
	type?: "movies"|"shows"|"seasons"|"episodes";
	sort?: "rank"|"added"|"released"|"title";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktUsersWatchlistResponse { 
	rank: number;
	listed_at: string;
	type: string;
	episode: TraktEpisode;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktUsersPersonalRecommendationsRequest { 
	id: string;
	type?: "movies"|"shows";
	sort?: "rank"|"added"|"released"|"title";
	page?: number;
	limit?: number;
	extended?: "full"|"metadata";
}
    
export interface TraktUsersPersonalRecommendationsResponse { 
	rank: number;
	listed_at: string;
	type: string;
	notes: string;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktUsersWatchingRequest { 
	id: string;
	extended?: "full"|"metadata";
}
    
export interface TraktUsersWatchedRequest { 
	id: string;
	type: "movies"|"shows";
	extended?: "full"|"metadata";
}
    
export interface TraktUsersWatchedResponse { 
	plays: number;
	last_watched_at: string;
	last_updated_at: string;
	reset_at: string;
	show: TraktShow; 
	[key: string]: any;
}
    
export interface TraktUsersStatsRequest { 
	id: string;
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

export interface TraktCrew extends Record<string, TraktDepartment> { }
    
export interface TraktDepartment extends Array<TraktStaff> { }

export interface TraktStaff {
    jobs: Array<string>;
    episode_count: number;
    person: TraktPerson;
}
