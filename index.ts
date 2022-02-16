import got from "got";

class Trakt {
	private client_id: string;
	private client_secret: string;
	private access_token: string;
	private redirect_uri: string;
    
    constructor(options: TraktOptions) {
		this.client_id = options.client_id;
		this.client_secret = options.client_secret;
		this.access_token = options.access_token ?? "";
		this.redirect_uri = options.redirect_uri ?? "urn:ietf:wg:oauth:2.0:oob";
    }
    
    private parseEndpoint(endpoint: string, params: Record<string, any>): string {
        const matches = /{(.+)}/g.exec(endpoint);

        if(!matches)
            return endpoint;

        for (var im = 0; im < matches.length; im++) {
            const repl = matches[im];
            // If querystring
            if (repl && repl[0] === "?") {
                const sourceArray = repl.substring(1).split(",");
                const destArray = [];
                for (const s in sourceArray) {
                    destArray.push(encodeURIComponent(s + "=" + encodeURIComponent(params[s])));
                }

                endpoint = endpoint.replace("{" + repl + "}", "?" + destArray.join("&"));
            } else if(repl) {
                endpoint = endpoint.replace("{" + repl + "}", params[repl]);
            }
        }

         return endpoint;
    };

	authentication = {
        authorize: async (params: TraktAuthenticationAuthorizeParams) => {
            const endpoint = "/oauth/authorize{?response_type,client_id,redirect_uri,state}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        getToken: async (params: TraktAuthenticationGetTokenBody) => {
            const endpoint = "/oauth/device/token";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "POST",
                json: {
                    "code": params.code,
					"client_id": this.client_id,
					"client_secret": this.client_secret
                },                          
            });

            return { headers, body: JSON.parse(body) };
        },
        refreshToken: async (params: TraktAuthenticationRefreshTokenBody) => {
            const endpoint = "/oauth/token";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        revokeToken: async (params: TraktAuthenticationRevokeTokenBody) => {
            const endpoint = "/oauth/revoke";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "POST",
                json: {
                    "token": params.token,
					"client_id": this.client_id,
					"client_secret": this.client_secret
                },                          
            });

            return { headers, body: JSON.parse(body) };
        },
        deviceCode: async () => {
            const endpoint = "/oauth/device/code";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "POST",
                json: {
                    "client_id": this.client_id
                },                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	calendars = {
        myShows: async (params: TraktCalendarsMyShowsParams) => {
            const endpoint = "/calendars/my/shows/{start_date}/{days}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        myNewShows: async (params: TraktCalendarsMyNewShowsParams) => {
            const endpoint = "/calendars/my/shows/new/{start_date}/{days}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        mySeasonPremieres: async (params: TraktCalendarsMySeasonPremieresParams) => {
            const endpoint = "/calendars/my/shows/premieres/{start_date}/{days}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        myMovies: async (params: TraktCalendarsMyMoviesParams) => {
            const endpoint = "/calendars/my/movies/{start_date}/{days}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        myDVD: async (params: TraktCalendarsMyDVDParams) => {
            const endpoint = "/calendars/my/dvd/{start_date}/{days}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        allShows: async (params: TraktCalendarsAllShowsParams) => {
            const endpoint = "/calendars/all/shows/{start_date}/{days}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        allNewShows: async (params: TraktCalendarsAllNewShowsParams) => {
            const endpoint = "/calendars/all/shows/new/{start_date}/{days}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        allSeasonPremieres: async (params: TraktCalendarsAllSeasonPremieresParams) => {
            const endpoint = "/calendars/all/shows/premieres/{start_date}/{days}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        allMovies: async (params: TraktCalendarsAllMoviesParams) => {
            const endpoint = "/calendars/all/movies/{start_date}/{days}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        allDVD: async (params: TraktCalendarsAllDVDParams) => {
            const endpoint = "/calendars/all/dvd/{start_date}/{days}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	checkin = {
        checkin: async () => {
            const endpoint = "/checkin";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "DELETE",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	certifications = {
        list: async (params: TraktCertificationsListParams) => {
            const endpoint = "/certifications/{type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	comments = {
        comments: async (params: TraktCommentsCommentsBody) => {
            const endpoint = "/comments";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        comment: async (params: TraktCommentsCommentParams) => {
            const endpoint = "/comments/{id}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "DELETE",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        replies: async (params: TraktCommentsRepliesBody) => {
            const endpoint = "/comments/{id}/replies";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
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
        item: async (params: TraktCommentsItemParams) => {
            const endpoint = "/comments/{id}/item";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        likes: async (params: TraktCommentsLikesParams) => {
            const endpoint = "/comments/{id}/likes";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        like: async (params: TraktCommentsLikeParams) => {
            const endpoint = "/comments/{id}/like";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "DELETE",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        trending: async (params: TraktCommentsTrendingParams) => {
            const endpoint = "/comments/trending/{comment_type}/{type}{?include_replies}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        recent: async (params: TraktCommentsRecentParams) => {
            const endpoint = "/comments/recent/{comment_type}/{type}{?include_replies}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        updates: async (params: TraktCommentsUpdatesParams) => {
            const endpoint = "/comments/updates/{comment_type}/{type}{?include_replies}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	countries = {
        list: async (params: TraktCountriesListParams) => {
            const endpoint = "/countries/{type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	genres = {
        list: async (params: TraktGenresListParams) => {
            const endpoint = "/genres/{type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	languages = {
        list: async (params: TraktLanguagesListParams) => {
            const endpoint = "/lists/{id}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        trending: async () => {
            const endpoint = "/movies/trending";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        popular: async () => {
            const endpoint = "/movies/popular";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        listLikes: async (params: TraktLanguagesListLikesParams) => {
            const endpoint = "/lists/{id}/likes";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        listItems: async (params: TraktLanguagesListItemsParams) => {
            const endpoint = "/lists/{id}/items/{type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        listComments: async (params: TraktLanguagesListCommentsParams) => {
            const endpoint = "/lists/{id}/comments/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        recommended: async (params: TraktLanguagesRecommendedParams) => {
            const endpoint = "/movies/recommended/{period}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        played: async (params: TraktLanguagesPlayedParams) => {
            const endpoint = "/movies/played/{period}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        watched: async (params: TraktLanguagesWatchedParams) => {
            const endpoint = "/movies/watched/{period}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        collected: async (params: TraktLanguagesCollectedParams) => {
            const endpoint = "/movies/collected/{period}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        anticipated: async () => {
            const endpoint = "/movies/anticipated";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        boxOffice: async () => {
            const endpoint = "/movies/boxoffice";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        updates: async (params: TraktLanguagesUpdatesParams) => {
            const endpoint = "/movies/updates/{start_date}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        updatedIDs: async (params: TraktLanguagesUpdatedIDsParams) => {
            const endpoint = "/movies/updates/id/{start_date}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        summary: async (params: TraktLanguagesSummaryParams) => {
            const endpoint = "/movies/{id}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        aliases: async (params: TraktLanguagesAliasesParams) => {
            const endpoint = "/movies/{id}/aliases";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        releases: async (params: TraktLanguagesReleasesParams) => {
            const endpoint = "/movies/{id}/releases/{country}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        translations: async (params: TraktLanguagesTranslationsParams) => {
            const endpoint = "/movies/{id}/translations/{language}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        comments: async (params: TraktLanguagesCommentsParams) => {
            const endpoint = "/movies/{id}/comments/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        lists: async (params: TraktLanguagesListsParams) => {
            const endpoint = "/movies/{id}/lists/{type}/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        people: async (params: TraktLanguagesPeopleParams) => {
            const endpoint = "/movies/{id}/people";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        ratings: async (params: TraktLanguagesRatingsParams) => {
            const endpoint = "/movies/{id}/ratings";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        related: async (params: TraktLanguagesRelatedParams) => {
            const endpoint = "/movies/{id}/related";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        stats: async (params: TraktLanguagesStatsParams) => {
            const endpoint = "/movies/{id}/stats";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        watching: async (params: TraktLanguagesWatchingParams) => {
            const endpoint = "/movies/{id}/watching";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	networks = {
        list: async () => {
            const endpoint = "/networks";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	people = {
        summary: async (params: TraktPeopleSummaryParams) => {
            const endpoint = "/people/{id}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        movies: async (params: TraktPeopleMoviesParams) => {
            const endpoint = "/people/{id}/movies";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        shows: async (params: TraktPeopleShowsParams) => {
            const endpoint = "/people/{id}/shows";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        lists: async (params: TraktPeopleListsParams) => {
            const endpoint = "/people/{id}/lists/{type}/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	recommendations = {
        movies: async (params: TraktRecommendationsMoviesParams) => {
            const endpoint = "/recommendations/movies{?ignore_collected}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        hideMovie: async (params: TraktRecommendationsHideMovieParams) => {
            const endpoint = "/recommendations/movies/{id}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "DELETE",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        shows: async (params: TraktRecommendationsShowsParams) => {
            const endpoint = "/recommendations/shows{?ignore_collected}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        hideShow: async (params: TraktRecommendationsHideShowParams) => {
            const endpoint = "/recommendations/shows/{id}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "DELETE",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	scrobble = {
        start: async (params: TraktScrobbleStartBody) => {
            const endpoint = "/scrobble/start";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        pause: async (params: TraktScrobblePauseBody) => {
            const endpoint = "/scrobble/pause";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        stop: async (params: TraktScrobbleStopBody) => {
            const endpoint = "/scrobble/stop";
            const route = endpoint;

            const {headers, body} = await got(route, {
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

	search = {
        textQuery: async (params: TraktSearchTextQueryParams) => {
            const endpoint = "/search/{type}{?query}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        iDLookup: async (params: TraktSearchIDLookupParams) => {
            const endpoint = "/search/{id_type}/{id}{?type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	shows = {
        trending: async () => {
            const endpoint = "/shows/trending";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        popular: async () => {
            const endpoint = "/shows/popular";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        recommended: async (params: TraktShowsRecommendedParams) => {
            const endpoint = "/shows/recommended/{period}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        played: async (params: TraktShowsPlayedParams) => {
            const endpoint = "/shows/played/{period}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        watched: async (params: TraktShowsWatchedParams) => {
            const endpoint = "/shows/watched/{period}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        collected: async (params: TraktShowsCollectedParams) => {
            const endpoint = "/shows/collected/{period}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        anticipated: async () => {
            const endpoint = "/shows/anticipated";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        updates: async (params: TraktShowsUpdatesParams) => {
            const endpoint = "/shows/updates/{start_date}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        updatedIDs: async (params: TraktShowsUpdatedIDsParams) => {
            const endpoint = "/shows/updates/id/{start_date}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        summary: async (params: TraktShowsSummaryParams) => {
            const endpoint = "/shows/{id}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        aliases: async (params: TraktShowsAliasesParams) => {
            const endpoint = "/shows/{id}/aliases";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        certifications: async (params: TraktShowsCertificationsParams) => {
            const endpoint = "/shows/{id}/certifications";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        translations: async (params: TraktShowsTranslationsParams) => {
            const endpoint = "/shows/{id}/translations/{language}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        comments: async (params: TraktShowsCommentsParams) => {
            const endpoint = "/shows/{id}/comments/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        lists: async (params: TraktShowsListsParams) => {
            const endpoint = "/shows/{id}/lists/{type}/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        collectionProgress: async (params: TraktShowsCollectionProgressParams) => {
            const endpoint = "/shows/{id}/progress/collection{?hidden,specials,count_specials,last_activity}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        watchedProgress: async (params: TraktShowsWatchedProgressParams) => {
            const endpoint = "/shows/{id}/progress/watched{?hidden,specials,count_specials,last_activity}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        resetWatchedProgress: async (params: TraktShowsResetWatchedProgressParams) => {
            const endpoint = "/shows/{id}/progress/watched/reset";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "DELETE",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        people: async (params: TraktShowsPeopleParams) => {
            const endpoint = "/shows/{id}/people";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        ratings: async (params: TraktShowsRatingsParams) => {
            const endpoint = "/shows/{id}/ratings";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        related: async (params: TraktShowsRelatedParams) => {
            const endpoint = "/shows/{id}/related";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        stats: async (params: TraktShowsStatsParams) => {
            const endpoint = "/shows/{id}/stats";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        watching: async (params: TraktShowsWatchingParams) => {
            const endpoint = "/shows/{id}/watching";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        nextEpisode: async (params: TraktShowsNextEpisodeParams) => {
            const endpoint = "/shows/{id}/next_episode";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        lastEpisode: async (params: TraktShowsLastEpisodeParams) => {
            const endpoint = "/shows/{id}/last_episode";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	seasons = {
        summary: async (params: TraktSeasonsSummaryParams) => {
            const endpoint = "/shows/{id}/seasons";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        season: async (params: TraktSeasonsSeasonParams) => {
            const endpoint = "/shows/{id}/seasons/{season}{?translations}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        comments: async (params: TraktSeasonsCommentsParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/comments/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        lists: async (params: TraktSeasonsListsParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/lists/{type}/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        people: async (params: TraktSeasonsPeopleParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/people";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        ratings: async (params: TraktSeasonsRatingsParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/ratings";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        stats: async (params: TraktSeasonsStatsParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/stats";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        watching: async (params: TraktSeasonsWatchingParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/watching";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	episodes = {
        summary: async (params: TraktEpisodesSummaryParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        translations: async (params: TraktEpisodesTranslationsParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/translations/{language}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        comments: async (params: TraktEpisodesCommentsParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        lists: async (params: TraktEpisodesListsParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        people: async (params: TraktEpisodesPeopleParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/people";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        ratings: async (params: TraktEpisodesRatingsParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/ratings";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        stats: async (params: TraktEpisodesStatsParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/stats";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        watching: async (params: TraktEpisodesWatchingParams) => {
            const endpoint = "/shows/{id}/seasons/{season}/episodes/{episode}/watching";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

	sync = {
        lastActivities: async () => {
            const endpoint = "/sync/last_activities";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        playback: async (params: TraktSyncPlaybackParams) => {
            const endpoint = "/sync/playback/{type}{?start_at,end_at}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        removePlayback: async (params: TraktSyncRemovePlaybackParams) => {
            const endpoint = "/sync/playback/{id}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "DELETE",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        getCollection: async (params: TraktSyncGetCollectionParams) => {
            const endpoint = "/sync/collection/{type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        addToCollection: async (params: TraktSyncAddToCollectionBody) => {
            const endpoint = "/sync/collection";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        removeFromCollection: async (params: TraktSyncRemoveFromCollectionBody) => {
            const endpoint = "/sync/collection/remove";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        getWatched: async (params: TraktSyncGetWatchedParams) => {
            const endpoint = "/sync/watched/{type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        getHistory: async (params: TraktSyncGetHistoryParams) => {
            const endpoint = "/sync/history/{type}/{id}{?start_at,end_at}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        addToHistory: async (params: TraktSyncAddToHistoryBody) => {
            const endpoint = "/sync/history";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        removeFromHistory: async (params: TraktSyncRemoveFromHistoryBody) => {
            const endpoint = "/sync/history/remove";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        getRatings: async (params: TraktSyncGetRatingsParams) => {
            const endpoint = "/sync/ratings/{type}/{rating}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        addRatings: async (params: TraktSyncAddRatingsBody) => {
            const endpoint = "/sync/ratings";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        removeRatings: async (params: TraktSyncRemoveRatingsBody) => {
            const endpoint = "/sync/ratings/remove";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        getWatchlist: async (params: TraktSyncGetWatchlistParams) => {
            const endpoint = "/sync/watchlist/{type}/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        addToWatchlist: async (params: TraktSyncAddToWatchlistBody) => {
            const endpoint = "/sync/watchlist";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        removeFromWatchlist: async (params: TraktSyncRemoveFromWatchlistBody) => {
            const endpoint = "/sync/watchlist/remove";
            const route = endpoint;

            const {headers, body} = await got(route, {
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

            const {headers, body} = await got(route, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + this.access_token,
					"trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });

            return { headers, body: JSON.parse(body) };
        },
        getPersonalRecommendations: async (params: TraktSyncGetPersonalRecommendationsParams) => {
            const endpoint = "/sync/recommendations/{type}/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        addToPersonalRecommendations: async (params: TraktSyncAddToPersonalRecommendationsBody) => {
            const endpoint = "/sync/recommendations";
            const route = endpoint;

            const {headers, body} = await got(route, {
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
        removeFromPersonalRecommendations: async (params: TraktSyncRemoveFromPersonalRecommendationsBody) => {
            const endpoint = "/sync/recommendations/remove";
            const route = endpoint;

            const {headers, body} = await got(route, {
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

            const {headers, body} = await got(route, {
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

	users = {
        settings: async () => {
            const endpoint = "/users/settings";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        followingRequests: async () => {
            const endpoint = "/users/requests/following";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        followerRequests: async () => {
            const endpoint = "/users/requests";
            const route = endpoint;

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        approveOrDenyFollowerRequests: async (params: TraktUsersApproveOrDenyFollowerRequestsParams) => {
            const endpoint = "/users/requests/{id}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "DELETE",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        hiddenItems: async (params: TraktUsersHiddenItemsParams) => {
            const endpoint = "/users/hidden/{section}{?type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        addHiddenItems: async (params: TraktUsersAddHiddenItemsBody) => {
            const endpoint = "/users/hidden/{section}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
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

            return { headers, body: JSON.parse(body) };
        },
        removeHiddenItems: async (params: TraktUsersRemoveHiddenItemsBody) => {
            const endpoint = "/users/hidden/{section}/remove";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
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

            return { headers, body: JSON.parse(body) };
        },
        profile: async (params: TraktUsersProfileParams) => {
            const endpoint = "/users/{id}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        likes: async (params: TraktUsersLikesParams) => {
            const endpoint = "/users/{id}/likes/{type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        collection: async (params: TraktUsersCollectionParams) => {
            const endpoint = "/users/{id}/collection/{type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        comments: async (params: TraktUsersCommentsParams) => {
            const endpoint = "/users/{id}/comments/{comment_type}/{type}{?include_replies}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        lists: async (params: TraktUsersListsBody) => {
            const endpoint = "/users/{id}/lists";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
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
        reorderLists: async (params: TraktUsersReorderListsParams) => {
            const endpoint = "/users/{id}/lists/reorder";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + this.access_token,
					"trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });

            return { headers, body: JSON.parse(body) };
        },
        list: async (params: TraktUsersListParams) => {
            const endpoint = "/users/{id}/lists/{list_id}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "DELETE",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        listLikes: async (params: TraktUsersListLikesParams) => {
            const endpoint = "/users/{id}/lists/{list_id}/likes";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        listLike: async (params: TraktUsersListLikeParams) => {
            const endpoint = "/users/{id}/lists/{list_id}/like";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "DELETE",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        listItems: async (params: TraktUsersListItemsParams) => {
            const endpoint = "/users/{id}/lists/{list_id}/items/{type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        addListItems: async (params: TraktUsersAddListItemsBody) => {
            const endpoint = "/users/{id}/lists/{list_id}/items";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
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
        removeListItems: async (params: TraktUsersRemoveListItemsBody) => {
            const endpoint = "/users/{id}/lists/{list_id}/items/remove";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
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
        reorderListItems: async (params: TraktUsersReorderListItemsParams) => {
            const endpoint = "/users/{id}/lists/{list_id}/items/reorder";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + this.access_token,
					"trakt-api-version": "2",
					"trakt-api-key": this.client_id
                },                          
            });

            return { headers, body: JSON.parse(body) };
        },
        listComments: async (params: TraktUsersListCommentsParams) => {
            const endpoint = "/users/{id}/lists/{list_id}/comments/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        follow: async (params: TraktUsersFollowParams) => {
            const endpoint = "/users/{id}/follow";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "DELETE",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        followers: async (params: TraktUsersFollowersParams) => {
            const endpoint = "/users/{id}/followers";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        following: async (params: TraktUsersFollowingParams) => {
            const endpoint = "/users/{id}/following";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        friends: async (params: TraktUsersFriendsParams) => {
            const endpoint = "/users/{id}/friends";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        history: async (params: TraktUsersHistoryParams) => {
            const endpoint = "/users/{id}/history/{type}/{item_id}{?start_at,end_at}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        ratings: async (params: TraktUsersRatingsParams) => {
            const endpoint = "/users/{id}/ratings/{type}/{rating}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        watchlist: async (params: TraktUsersWatchlistParams) => {
            const endpoint = "/users/{id}/watchlist/{type}/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        personalRecommendations: async (params: TraktUsersPersonalRecommendationsParams) => {
            const endpoint = "/users/{id}/recommendations/{type}/{sort}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        watching: async (params: TraktUsersWatchingParams) => {
            const endpoint = "/users/{id}/watching";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        watched: async (params: TraktUsersWatchedParams) => {
            const endpoint = "/users/{id}/watched/{type}";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
        stats: async (params: TraktUsersStatsParams) => {
            const endpoint = "/users/{id}/stats";
            const route = this.parseEndpoint(endpoint, params);

            const {headers, body} = await got(route, {
                method: "GET",                          
            });

            return { headers, body: JSON.parse(body) };
        },
	};

}


export default Trakt;

export interface TraktOptions {
	client_id: string;
	client_secret: string;
	access_token?: string;
	redirect_uri?: string;
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
	id: number;
}
    
export interface TraktLanguagesListLikesParams { 
	id: string;
}
    
export interface TraktLanguagesListItemsParams { 
	id: string;
	type?: "movie"|"show"|"season"|"episode"|"person";
}
    
export interface TraktLanguagesListCommentsParams { 
	id: number;
	sort?: "newest"|"oldest"|"likes"|"replies";
}
    
export interface TraktLanguagesRecommendedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktLanguagesPlayedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktLanguagesWatchedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktLanguagesCollectedParams { 
	period?: "daily"|"weekly"|"monthly"|"yearly"|"all";
}
    
export interface TraktLanguagesUpdatesParams { 
	start_date?: string;
}
    
export interface TraktLanguagesUpdatedIDsParams { 
	start_date?: string;
}
    
export interface TraktLanguagesSummaryParams { 
	id: string;
}
    
export interface TraktLanguagesAliasesParams { 
	id: string;
}
    
export interface TraktLanguagesReleasesParams { 
	id: string;
	country?: string;
}
    
export interface TraktLanguagesTranslationsParams { 
	id: string;
	language?: string;
}
    
export interface TraktLanguagesCommentsParams { 
	id: string;
	sort?: "newest"|"oldest"|"likes"|"replies"|"highest"|"lowest"|"plays";
}
    
export interface TraktLanguagesListsParams { 
	id: string;
	type?: "all"|"personal"|"official"|"watchlists"|"recommendations";
	sort?: "popular"|"likes"|"comments"|"items"|"added"|"updated";
}
    
export interface TraktLanguagesPeopleParams { 
	id: string;
}
    
export interface TraktLanguagesRatingsParams { 
	id: string;
}
    
export interface TraktLanguagesRelatedParams { 
	id: string;
}
    
export interface TraktLanguagesStatsParams { 
	id: string;
}
    
export interface TraktLanguagesWatchingParams { 
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
