/// <reference types="node" />
/// <reference types="node/http" />
/// <reference types="got/dist/source/core/timed-out" />
declare class Trakt {
    private client_id;
    private client_secret;
    private access_token;
    private redirect_uri;
    private baseUrl;
    constructor(options: TraktOptions);
    private parseEndpoint;
    authentication: {
        authorize: (params: TraktAuthenticationAuthorizeParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        getToken: (params: TraktAuthenticationGetTokenBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        refreshToken: (params: TraktAuthenticationRefreshTokenBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        revokeToken: (params: TraktAuthenticationRevokeTokenBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        deviceCode: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    calendars: {
        myShows: (params: TraktCalendarsMyShowsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        myNewShows: (params: TraktCalendarsMyNewShowsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        mySeasonPremieres: (params: TraktCalendarsMySeasonPremieresParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        myMovies: (params: TraktCalendarsMyMoviesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        myDVD: (params: TraktCalendarsMyDVDParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        allShows: (params: TraktCalendarsAllShowsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        allNewShows: (params: TraktCalendarsAllNewShowsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        allSeasonPremieres: (params: TraktCalendarsAllSeasonPremieresParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        allMovies: (params: TraktCalendarsAllMoviesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        allDVD: (params: TraktCalendarsAllDVDParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    checkin: {
        checkin: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    certifications: {
        list: (params: TraktCertificationsListParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    comments: {
        comments: (params: TraktCommentsCommentsBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        comment: (params: TraktCommentsCommentParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        replies: (params: TraktCommentsRepliesBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        item: (params: TraktCommentsItemParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        likes: (params: TraktCommentsLikesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        like: (params: TraktCommentsLikeParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        trending: (params: TraktCommentsTrendingParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        recent: (params: TraktCommentsRecentParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        updates: (params: TraktCommentsUpdatesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    countries: {
        list: (params: TraktCountriesListParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    genres: {
        list: (params: TraktGenresListParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    languages: {
        list: (params: TraktLanguagesListParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        trending: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        popular: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        listLikes: (params: TraktLanguagesListLikesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        listItems: (params: TraktLanguagesListItemsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        listComments: (params: TraktLanguagesListCommentsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        recommended: (params: TraktLanguagesRecommendedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        played: (params: TraktLanguagesPlayedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        watched: (params: TraktLanguagesWatchedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        collected: (params: TraktLanguagesCollectedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        anticipated: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        boxOffice: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        updates: (params: TraktLanguagesUpdatesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        updatedIDs: (params: TraktLanguagesUpdatedIDsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        summary: (params: TraktLanguagesSummaryParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        aliases: (params: TraktLanguagesAliasesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        releases: (params: TraktLanguagesReleasesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        translations: (params: TraktLanguagesTranslationsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        comments: (params: TraktLanguagesCommentsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        lists: (params: TraktLanguagesListsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        people: (params: TraktLanguagesPeopleParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        ratings: (params: TraktLanguagesRatingsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        related: (params: TraktLanguagesRelatedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        stats: (params: TraktLanguagesStatsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        watching: (params: TraktLanguagesWatchingParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    networks: {
        list: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    people: {
        summary: (params: TraktPeopleSummaryParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        movies: (params: TraktPeopleMoviesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        shows: (params: TraktPeopleShowsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        lists: (params: TraktPeopleListsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    recommendations: {
        movies: (params: TraktRecommendationsMoviesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        hideMovie: (params: TraktRecommendationsHideMovieParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        shows: (params: TraktRecommendationsShowsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        hideShow: (params: TraktRecommendationsHideShowParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    scrobble: {
        start: (params: TraktScrobbleStartBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        pause: (params: TraktScrobblePauseBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        stop: (params: TraktScrobbleStopBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    search: {
        textQuery: (params: TraktSearchTextQueryParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        iDLookup: (params: TraktSearchIDLookupParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    shows: {
        trending: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        popular: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        recommended: (params: TraktShowsRecommendedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        played: (params: TraktShowsPlayedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        watched: (params: TraktShowsWatchedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        collected: (params: TraktShowsCollectedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        anticipated: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        updates: (params: TraktShowsUpdatesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        updatedIDs: (params: TraktShowsUpdatedIDsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        summary: (params: TraktShowsSummaryParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        aliases: (params: TraktShowsAliasesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        certifications: (params: TraktShowsCertificationsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        translations: (params: TraktShowsTranslationsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        comments: (params: TraktShowsCommentsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        lists: (params: TraktShowsListsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        collectionProgress: (params: TraktShowsCollectionProgressParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        watchedProgress: (params: TraktShowsWatchedProgressParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        resetWatchedProgress: (params: TraktShowsResetWatchedProgressParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        people: (params: TraktShowsPeopleParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        ratings: (params: TraktShowsRatingsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        related: (params: TraktShowsRelatedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        stats: (params: TraktShowsStatsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        watching: (params: TraktShowsWatchingParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        nextEpisode: (params: TraktShowsNextEpisodeParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        lastEpisode: (params: TraktShowsLastEpisodeParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    seasons: {
        summary: (params: TraktSeasonsSummaryParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        season: (params: TraktSeasonsSeasonParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        comments: (params: TraktSeasonsCommentsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        lists: (params: TraktSeasonsListsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        people: (params: TraktSeasonsPeopleParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        ratings: (params: TraktSeasonsRatingsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        stats: (params: TraktSeasonsStatsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        watching: (params: TraktSeasonsWatchingParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    episodes: {
        summary: (params: TraktEpisodesSummaryParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        translations: (params: TraktEpisodesTranslationsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        comments: (params: TraktEpisodesCommentsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        lists: (params: TraktEpisodesListsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        people: (params: TraktEpisodesPeopleParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        ratings: (params: TraktEpisodesRatingsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        stats: (params: TraktEpisodesStatsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        watching: (params: TraktEpisodesWatchingParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    sync: {
        lastActivities: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        playback: (params: TraktSyncPlaybackParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        removePlayback: (params: TraktSyncRemovePlaybackParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        getCollection: (params: TraktSyncGetCollectionParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        addToCollection: (params: TraktSyncAddToCollectionBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        removeFromCollection: (params: TraktSyncRemoveFromCollectionBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        getWatched: (params: TraktSyncGetWatchedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        getHistory: (params: TraktSyncGetHistoryParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        addToHistory: (params: TraktSyncAddToHistoryBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        removeFromHistory: (params: TraktSyncRemoveFromHistoryBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        getRatings: (params: TraktSyncGetRatingsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        addRatings: (params: TraktSyncAddRatingsBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        removeRatings: (params: TraktSyncRemoveRatingsBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        getWatchlist: (params: TraktSyncGetWatchlistParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        addToWatchlist: (params: TraktSyncAddToWatchlistBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        removeFromWatchlist: (params: TraktSyncRemoveFromWatchlistBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        reorderWatchlist: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        getPersonalRecommendations: (params: TraktSyncGetPersonalRecommendationsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        addToPersonalRecommendations: (params: TraktSyncAddToPersonalRecommendationsBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        removeFromPersonalRecommendations: (params: TraktSyncRemoveFromPersonalRecommendationsBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        reorderPersonalRecommendations: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
    };
    users: {
        settings: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        followingRequests: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        followerRequests: () => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        approveOrDenyFollowerRequests: (params: TraktUsersApproveOrDenyFollowerRequestsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        hiddenItems: (params: TraktUsersHiddenItemsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        addHiddenItems: (params: TraktUsersAddHiddenItemsBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        removeHiddenItems: (params: TraktUsersRemoveHiddenItemsBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        profile: (params: TraktUsersProfileParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        likes: (params: TraktUsersLikesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        collection: (params: TraktUsersCollectionParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        comments: (params: TraktUsersCommentsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        lists: (params: TraktUsersListsBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        reorderLists: (params: TraktUsersReorderListsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        list: (params: TraktUsersListParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        listLikes: (params: TraktUsersListLikesParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        listLike: (params: TraktUsersListLikeParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        listItems: (params: TraktUsersListItemsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        addListItems: (params: TraktUsersAddListItemsBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        removeListItems: (params: TraktUsersRemoveListItemsBody) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        reorderListItems: (params: TraktUsersReorderListItemsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        listComments: (params: TraktUsersListCommentsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        follow: (params: TraktUsersFollowParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        followers: (params: TraktUsersFollowersParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        following: (params: TraktUsersFollowingParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        friends: (params: TraktUsersFriendsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        history: (params: TraktUsersHistoryParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        ratings: (params: TraktUsersRatingsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        watchlist: (params: TraktUsersWatchlistParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        personalRecommendations: (params: TraktUsersPersonalRecommendationsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        watching: (params: TraktUsersWatchingParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        watched: (params: TraktUsersWatchedParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
        stats: (params: TraktUsersStatsParams) => Promise<{
            headers: import("http").IncomingHttpHeaders;
            body: any;
        }>;
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
    type: "movies" | "shows";
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
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: string;
}
export interface TraktCommentsRecentParams {
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: string;
}
export interface TraktCommentsUpdatesParams {
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: string;
}
export interface TraktCountriesListParams {
    type: "movies" | "shows";
}
export interface TraktGenresListParams {
    type: "movies" | "shows";
}
export interface TraktLanguagesListParams {
    id: number;
}
export interface TraktLanguagesListLikesParams {
    id: string;
}
export interface TraktLanguagesListItemsParams {
    id: string;
    type?: "movie" | "show" | "season" | "episode" | "person";
}
export interface TraktLanguagesListCommentsParams {
    id: number;
    sort?: "newest" | "oldest" | "likes" | "replies";
}
export interface TraktLanguagesRecommendedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
}
export interface TraktLanguagesPlayedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
}
export interface TraktLanguagesWatchedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
}
export interface TraktLanguagesCollectedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
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
    sort?: "newest" | "oldest" | "likes" | "replies" | "highest" | "lowest" | "plays";
}
export interface TraktLanguagesListsParams {
    id: string;
    type?: "all" | "personal" | "official" | "watchlists" | "recommendations";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
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
    type?: "all" | "personal" | "official";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
}
export interface TraktRecommendationsMoviesParams {
    ignore_collected?: "true" | "false";
}
export interface TraktRecommendationsHideMovieParams {
    id: string;
}
export interface TraktRecommendationsShowsParams {
    ignore_collected?: "true" | "false";
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
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
}
export interface TraktShowsPlayedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
}
export interface TraktShowsWatchedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
}
export interface TraktShowsCollectedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
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
    sort?: "newest" | "oldest" | "likes" | "replies" | "highest" | "lowest" | "plays" | "watched";
}
export interface TraktShowsListsParams {
    id: string;
    type?: "all" | "personal" | "official" | "watchlists" | "recommendations";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
}
export interface TraktShowsCollectionProgressParams {
    id: string;
    hidden?: string;
    specials?: string;
    count_specials?: string;
    last_activity?: "aired" | "collected";
}
export interface TraktShowsWatchedProgressParams {
    id: string;
    hidden?: string;
    specials?: string;
    count_specials?: string;
    last_activity?: "aired" | "watched";
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
    sort?: "newest" | "oldest" | "likes" | "replies" | "highest" | "lowest" | "plays" | "watched";
}
export interface TraktSeasonsListsParams {
    id: string;
    season: number;
    type?: "all" | "personal" | "official" | "watchlists";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
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
    sort?: "newest" | "oldest" | "likes" | "replies" | "highest" | "lowest" | "plays";
}
export interface TraktEpisodesListsParams {
    id: string;
    season: number;
    episode: number;
    type?: "all" | "personal" | "official" | "watchlists";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
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
    type?: "movies" | "episodes";
    start_at?: string;
    end_at?: string;
}
export interface TraktSyncRemovePlaybackParams {
    id: number;
}
export interface TraktSyncGetCollectionParams {
    type: "movies" | "shows";
}
export interface TraktSyncGetWatchedParams {
    type: "movies" | "shows";
}
export interface TraktSyncGetHistoryParams {
    type?: "movies" | "shows" | "seasons" | "episodes";
    id?: number;
    start_at?: string;
    end_at?: string;
}
export interface TraktSyncGetRatingsParams {
    type?: "movies" | "shows" | "seasons" | "episodes" | "all";
    rating?: number;
}
export interface TraktSyncGetWatchlistParams {
    type?: "movies" | "shows" | "seasons" | "episodes";
    sort?: "rank" | "added" | "released" | "title";
}
export interface TraktSyncGetPersonalRecommendationsParams {
    type?: "movies" | "shows";
    sort?: "rank" | "added" | "released" | "title";
}
export interface TraktUsersApproveOrDenyFollowerRequestsParams {
    id: number;
}
export interface TraktUsersHiddenItemsParams {
    section: "calendar" | "recommendations" | "comments";
    type?: string;
}
export interface TraktUsersAddHiddenItemsParams {
    section: "calendar" | "recommendations";
}
export interface TraktUsersRemoveHiddenItemsParams {
    section: "calendar" | "recommendations" | "comments";
}
export interface TraktUsersProfileParams {
    id: string;
}
export interface TraktUsersLikesParams {
    id: string;
    type?: "comments" | "lists";
}
export interface TraktUsersCollectionParams {
    id: string;
    type: "movies" | "shows";
}
export interface TraktUsersCommentsParams {
    id: string;
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: "true" | "false" | "only";
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
    type?: "movie" | "show" | "season" | "episode" | "person";
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
    sort?: "newest" | "oldest" | "likes" | "replies";
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
    type?: "movies" | "shows" | "seasons" | "episodes";
    item_id?: number;
    start_at?: string;
    end_at?: string;
}
export interface TraktUsersRatingsParams {
    id: string;
    type?: "movies" | "shows" | "seasons" | "episodes" | "all";
    rating?: number;
}
export interface TraktUsersWatchlistParams {
    id: string;
    type?: "movies" | "shows" | "seasons" | "episodes";
    sort?: "rank" | "added" | "released" | "title";
}
export interface TraktUsersPersonalRecommendationsParams {
    id: string;
    type?: "movies" | "shows";
    sort?: "rank" | "added" | "released" | "title";
}
export interface TraktUsersWatchingParams {
    id: string;
}
export interface TraktUsersWatchedParams {
    id: string;
    type: "movies" | "shows";
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
    item: "movie" | "show" | "season" | "episode" | "or list object. (see examples &#8594;)";
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
    privacy?: "private" | "friends" | "public";
    display_numbers?: boolean;
    allow_comments?: boolean;
    sort_by?: "rank" | "added" | "title" | "released" | "runtime" | "popularity" | "percentage" | "votes" | "my_rating" | "random" | "watched" | "collected";
    sort_how?: "asc" | "desc";
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
