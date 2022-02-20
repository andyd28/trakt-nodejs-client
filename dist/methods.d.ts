import TraktBase, { TraktOptions, TraktFilter } from "./base";
import { Response } from "got";
declare class TraktMethods extends TraktBase {
    constructor(options: TraktOptions);
    authentication: {
        authorize: (params: TraktAuthenticationAuthorizeParams) => Promise<Response<any>>;
        getToken: (params: TraktAuthenticationGetTokenBody) => Promise<Response<TraktAuthenticationGetTokenResponse>>;
        refreshToken: (params: TraktAuthenticationRefreshTokenBody) => Promise<Response<TraktAuthenticationGetTokenResponse>>;
        revokeToken: (params: TraktAuthenticationRevokeTokenBody) => Promise<Response<any>>;
        deviceCode: () => Promise<Response<TraktAuthenticationDeviceCodeResponse>>;
    };
    calendars: {
        myShows: (params: TraktCalendarsMyShowsParams) => Promise<Response<TraktCalendarsMyShowsResponse[]>>;
        myNewShows: (params: TraktCalendarsMyNewShowsParams) => Promise<Response<TraktCalendarsMyNewShowsResponse[]>>;
        mySeasonPremieres: (params: TraktCalendarsMySeasonPremieresParams) => Promise<Response<TraktCalendarsMySeasonPremieresResponse[]>>;
        myMovies: (params: TraktCalendarsMyMoviesParams) => Promise<Response<TraktCalendarsMyMoviesResponse[]>>;
        myDVD: (params: TraktCalendarsMyDVDParams) => Promise<Response<TraktCalendarsMyDVDResponse[]>>;
        allShows: (params: TraktCalendarsAllShowsParams) => Promise<Response<TraktCalendarsAllShowsResponse[]>>;
        allNewShows: (params: TraktCalendarsAllNewShowsParams) => Promise<Response<TraktCalendarsAllNewShowsResponse[]>>;
        allSeasonPremieres: (params: TraktCalendarsAllSeasonPremieresParams) => Promise<Response<TraktCalendarsAllSeasonPremieresResponse[]>>;
        allMovies: (params: TraktCalendarsAllMoviesParams) => Promise<Response<TraktCalendarsAllMoviesResponse[]>>;
        allDVD: (params: TraktCalendarsAllDVDParams) => Promise<Response<TraktCalendarsAllDVDResponse[]>>;
    };
    checkin: {
        checkin: () => Promise<Response<any>>;
    };
    certifications: {
        list: (params: TraktCertificationsListParams) => Promise<Response<TraktCertificationsListResponse>>;
    };
    comments: {
        comments: (params: TraktCommentsCommentsBody) => Promise<Response<TraktCommentsCommentsResponse>>;
        comment: (params: TraktCommentsCommentParams) => Promise<Response<any>>;
        replies: (params: TraktCommentsRepliesBody) => Promise<Response<TraktCommentsRepliesResponse>>;
        item: (params: TraktCommentsItemParams) => Promise<Response<TraktCommentsItemResponse>>;
        likes: (params: TraktCommentsLikesParams) => Promise<Response<TraktCommentsLikesResponse[]>>;
        like: (params: TraktCommentsLikeParams) => Promise<Response<any>>;
        trending: (params: TraktCommentsTrendingParams) => Promise<Response<TraktCommentsTrendingResponse[]>>;
        recent: (params: TraktCommentsRecentParams) => Promise<Response<TraktCommentsRecentResponse[]>>;
        updates: (params: TraktCommentsUpdatesParams) => Promise<Response<TraktCommentsUpdatesResponse[]>>;
    };
    countries: {
        list: (params: TraktCountriesListParams) => Promise<Response<TraktCountriesListResponse[]>>;
    };
    genres: {
        list: (params: TraktGenresListParams) => Promise<Response<TraktGenresListResponse[]>>;
    };
    languages: {
        list: (params: TraktLanguagesListParams) => Promise<Response<TraktLanguagesListResponse[]>>;
    };
    lists: {
        trending: (params: TraktListsTrendingParams) => Promise<Response<TraktListsTrendingResponse[]>>;
        popular: (params: TraktListsPopularParams) => Promise<Response<TraktListsPopularResponse[]>>;
        list: (params: TraktListsListParams) => Promise<Response<TraktListsListResponse>>;
        listLikes: (params: TraktListsListLikesParams) => Promise<Response<TraktListsListLikesResponse[]>>;
        listItems: (params: TraktListsListItemsParams) => Promise<Response<TraktListsListItemsResponse[]>>;
        listComments: (params: TraktListsListCommentsParams) => Promise<Response<TraktListsListCommentsResponse[]>>;
    };
    movies: {
        trending: (params: TraktMoviesTrendingParams) => Promise<Response<TraktMoviesTrendingResponse[]>>;
        popular: (params: TraktMoviesPopularParams) => Promise<Response<TraktMoviesPopularResponse[]>>;
        recommended: (params: TraktMoviesRecommendedParams) => Promise<Response<TraktMoviesRecommendedResponse[]>>;
        played: (params: TraktMoviesPlayedParams) => Promise<Response<TraktMoviesPlayedResponse[]>>;
        watched: (params: TraktMoviesWatchedParams) => Promise<Response<TraktMoviesWatchedResponse[]>>;
        collected: (params: TraktMoviesCollectedParams) => Promise<Response<TraktMoviesCollectedResponse[]>>;
        anticipated: (params: TraktMoviesAnticipatedParams) => Promise<Response<TraktMoviesAnticipatedResponse[]>>;
        boxOffice: (params: TraktMoviesBoxOfficeParams) => Promise<Response<TraktMoviesBoxOfficeResponse[]>>;
        updates: (params: TraktMoviesUpdatesParams) => Promise<Response<TraktMoviesUpdatesResponse[]>>;
        updatedIDs: (params: TraktMoviesUpdatedIDsParams) => Promise<Response<TraktMoviesUpdatedIDsResponse[]>>;
        summary: (params: TraktMoviesSummaryParams) => Promise<Response<TraktMoviesSummaryResponse>>;
        aliases: (params: TraktMoviesAliasesParams) => Promise<Response<TraktMoviesAliasesResponse[]>>;
        releases: (params: TraktMoviesReleasesParams) => Promise<Response<TraktMoviesReleasesResponse[]>>;
        translations: (params: TraktMoviesTranslationsParams) => Promise<Response<TraktMoviesTranslationsResponse[]>>;
        comments: (params: TraktMoviesCommentsParams) => Promise<Response<TraktMoviesCommentsResponse[]>>;
        lists: (params: TraktMoviesListsParams) => Promise<Response<TraktMoviesListsResponse[]>>;
        people: (params: TraktMoviesPeopleParams) => Promise<Response<TraktMoviesPeopleResponse>>;
        ratings: (params: TraktMoviesRatingsParams) => Promise<Response<TraktMoviesRatingsResponse>>;
        related: (params: TraktMoviesRelatedParams) => Promise<Response<TraktMoviesRelatedResponse[]>>;
        stats: (params: TraktMoviesStatsParams) => Promise<Response<TraktMoviesStatsResponse>>;
        watching: (params: TraktMoviesWatchingParams) => Promise<Response<TraktMoviesWatchingResponse[]>>;
    };
    networks: {
        list: () => Promise<Response<TraktNetworksListResponse[]>>;
    };
    people: {
        summary: (params: TraktPeopleSummaryParams) => Promise<Response<TraktPeopleSummaryResponse>>;
        movies: (params: TraktPeopleMoviesParams) => Promise<Response<TraktPeopleMoviesResponse>>;
        shows: (params: TraktPeopleShowsParams) => Promise<Response<TraktPeopleShowsResponse>>;
        lists: (params: TraktPeopleListsParams) => Promise<Response<TraktPeopleListsResponse[]>>;
    };
    recommendations: {
        movies: (params: TraktRecommendationsMoviesParams) => Promise<Response<TraktRecommendationsMoviesResponse[]>>;
        hideMovie: (params: TraktRecommendationsHideMovieParams) => Promise<Response<any>>;
        shows: (params: TraktRecommendationsShowsParams) => Promise<Response<TraktRecommendationsShowsResponse[]>>;
        hideShow: (params: TraktRecommendationsHideShowParams) => Promise<Response<any>>;
    };
    scrobble: {
        start: (params: TraktScrobbleStartBody) => Promise<Response<TraktScrobbleStartResponse>>;
        pause: (params: TraktScrobblePauseBody) => Promise<Response<TraktScrobblePauseResponse>>;
        stop: (params: TraktScrobbleStopBody) => Promise<Response<TraktScrobbleStopResponse>>;
    };
    search: {
        textQuery: (params: TraktSearchTextQueryParams) => Promise<Response<TraktSearchTextQueryResponse[]>>;
        iDLookup: (params: TraktSearchIDLookupParams) => Promise<Response<TraktSearchIDLookupResponse[]>>;
    };
    shows: {
        trending: (params: TraktShowsTrendingParams) => Promise<Response<TraktShowsTrendingResponse[]>>;
        popular: (params: TraktShowsPopularParams) => Promise<Response<TraktShowsPopularResponse[]>>;
        recommended: (params: TraktShowsRecommendedParams) => Promise<Response<TraktShowsRecommendedResponse[]>>;
        played: (params: TraktShowsPlayedParams) => Promise<Response<TraktShowsPlayedResponse[]>>;
        watched: (params: TraktShowsWatchedParams) => Promise<Response<TraktShowsWatchedResponse[]>>;
        collected: (params: TraktShowsCollectedParams) => Promise<Response<TraktShowsCollectedResponse[]>>;
        anticipated: (params: TraktShowsAnticipatedParams) => Promise<Response<TraktShowsAnticipatedResponse[]>>;
        updates: (params: TraktShowsUpdatesParams) => Promise<Response<TraktShowsUpdatesResponse[]>>;
        updatedIDs: (params: TraktShowsUpdatedIDsParams) => Promise<Response<TraktShowsUpdatedIDsResponse[]>>;
        summary: (params: TraktShowsSummaryParams) => Promise<Response<TraktShowsSummaryResponse>>;
        aliases: (params: TraktShowsAliasesParams) => Promise<Response<TraktShowsAliasesResponse[]>>;
        certifications: (params: TraktShowsCertificationsParams) => Promise<Response<TraktShowsCertificationsResponse[]>>;
        translations: (params: TraktShowsTranslationsParams) => Promise<Response<TraktShowsTranslationsResponse[]>>;
        comments: (params: TraktShowsCommentsParams) => Promise<Response<TraktShowsCommentsResponse[]>>;
        lists: (params: TraktShowsListsParams) => Promise<Response<TraktShowsListsResponse[]>>;
        collectionProgress: (params: TraktShowsCollectionProgressParams) => Promise<Response<TraktShowsCollectionProgressResponse>>;
        watchedProgress: (params: TraktShowsWatchedProgressParams) => Promise<Response<TraktShowsWatchedProgressResponse>>;
        resetWatchedProgress: (params: TraktShowsResetWatchedProgressParams) => Promise<Response<any>>;
        people: (params: TraktShowsPeopleParams) => Promise<Response<TraktShowsPeopleResponse>>;
        ratings: (params: TraktShowsRatingsParams) => Promise<Response<TraktShowsRatingsResponse>>;
        related: (params: TraktShowsRelatedParams) => Promise<Response<TraktShowsRelatedResponse[]>>;
        stats: (params: TraktShowsStatsParams) => Promise<Response<TraktShowsStatsResponse>>;
        watching: (params: TraktShowsWatchingParams) => Promise<Response<TraktShowsWatchingResponse[]>>;
        nextEpisode: (params: TraktShowsNextEpisodeParams) => Promise<Response<TraktShowsNextEpisodeResponse>>;
        lastEpisode: (params: TraktShowsLastEpisodeParams) => Promise<Response<TraktShowsLastEpisodeResponse>>;
    };
    seasons: {
        summary: (params: TraktSeasonsSummaryParams) => Promise<Response<TraktSeasonsSummaryResponse[]>>;
        season: (params: TraktSeasonsSeasonParams) => Promise<Response<TraktSeasonsSeasonResponse[]>>;
        comments: (params: TraktSeasonsCommentsParams) => Promise<Response<TraktSeasonsCommentsResponse[]>>;
        lists: (params: TraktSeasonsListsParams) => Promise<Response<TraktSeasonsListsResponse[]>>;
        people: (params: TraktSeasonsPeopleParams) => Promise<Response<TraktSeasonsPeopleResponse>>;
        ratings: (params: TraktSeasonsRatingsParams) => Promise<Response<TraktSeasonsRatingsResponse>>;
        stats: (params: TraktSeasonsStatsParams) => Promise<Response<TraktSeasonsStatsResponse>>;
        watching: (params: TraktSeasonsWatchingParams) => Promise<Response<TraktSeasonsWatchingResponse[]>>;
    };
    episodes: {
        summary: (params: TraktEpisodesSummaryParams) => Promise<Response<TraktEpisodesSummaryResponse>>;
        translations: (params: TraktEpisodesTranslationsParams) => Promise<Response<TraktEpisodesTranslationsResponse[]>>;
        comments: (params: TraktEpisodesCommentsParams) => Promise<Response<TraktEpisodesCommentsResponse[]>>;
        lists: (params: TraktEpisodesListsParams) => Promise<Response<TraktEpisodesListsResponse[]>>;
        people: (params: TraktEpisodesPeopleParams) => Promise<Response<TraktEpisodesPeopleResponse>>;
        ratings: (params: TraktEpisodesRatingsParams) => Promise<Response<TraktEpisodesRatingsResponse>>;
        stats: (params: TraktEpisodesStatsParams) => Promise<Response<TraktEpisodesStatsResponse>>;
        watching: (params: TraktEpisodesWatchingParams) => Promise<Response<TraktEpisodesWatchingResponse[]>>;
    };
    sync: {
        lastActivities: () => Promise<Response<TraktSyncLastActivitiesResponse>>;
        playback: (params: TraktSyncPlaybackParams) => Promise<Response<TraktSyncPlaybackResponse[]>>;
        removePlayback: (params: TraktSyncRemovePlaybackParams) => Promise<Response<any>>;
        getCollection: (params: TraktSyncGetCollectionParams) => Promise<Response<TraktSyncGetCollectionResponse[]>>;
        addToCollection: (params: TraktSyncAddToCollectionBody) => Promise<Response<TraktSyncAddToCollectionResponse>>;
        removeFromCollection: (params: TraktSyncRemoveFromCollectionBody) => Promise<Response<TraktSyncRemoveFromCollectionResponse>>;
        getWatched: (params: TraktSyncGetWatchedParams) => Promise<Response<TraktSyncGetWatchedResponse[]>>;
        getHistory: (params: TraktSyncGetHistoryParams) => Promise<Response<TraktSyncGetHistoryResponse[]>>;
        addToHistory: (params: TraktSyncAddToHistoryBody) => Promise<Response<TraktSyncAddToHistoryResponse>>;
        removeFromHistory: (params: TraktSyncRemoveFromHistoryBody) => Promise<Response<TraktSyncRemoveFromHistoryResponse>>;
        getRatings: (params: TraktSyncGetRatingsParams) => Promise<Response<TraktSyncGetRatingsResponse[]>>;
        addRatings: (params: TraktSyncAddRatingsBody) => Promise<Response<TraktSyncAddRatingsResponse>>;
        removeRatings: (params: TraktSyncRemoveRatingsBody) => Promise<Response<TraktSyncRemoveRatingsResponse>>;
        getWatchlist: (params: TraktSyncGetWatchlistParams) => Promise<Response<TraktSyncGetWatchlistResponse[]>>;
        addToWatchlist: (params: TraktSyncAddToWatchlistBody) => Promise<Response<TraktSyncAddToWatchlistResponse>>;
        removeFromWatchlist: (params: TraktSyncRemoveFromWatchlistBody) => Promise<Response<TraktSyncRemoveFromWatchlistResponse>>;
        reorderWatchlist: () => Promise<Response<TraktSyncReorderWatchlistResponse>>;
        getPersonalRecommendations: (params: TraktSyncGetPersonalRecommendationsParams) => Promise<Response<TraktSyncGetPersonalRecommendationsResponse[]>>;
        addToPersonalRecommendations: (params: TraktSyncAddToPersonalRecommendationsBody) => Promise<Response<TraktSyncAddToPersonalRecommendationsResponse>>;
        removeFromPersonalRecommendations: (params: TraktSyncRemoveFromPersonalRecommendationsBody) => Promise<Response<TraktSyncRemoveFromPersonalRecommendationsResponse>>;
        reorderPersonalRecommendations: () => Promise<Response<TraktSyncReorderPersonalRecommendationsResponse>>;
    };
    users: {
        settings: () => Promise<Response<TraktUsersSettingsResponse>>;
        followingRequests: (params: TraktUsersFollowingRequestsParams) => Promise<Response<TraktUsersFollowingRequestsResponse[]>>;
        followerRequests: (params: TraktUsersFollowerRequestsParams) => Promise<Response<TraktUsersFollowerRequestsResponse[]>>;
        approveOrDenyFollowerRequests: (params: TraktUsersApproveOrDenyFollowerRequestsParams) => Promise<Response<any>>;
        hiddenItems: (params: TraktUsersHiddenItemsParams) => Promise<Response<TraktUsersHiddenItemsResponse[]>>;
        addHiddenItems: (params: TraktUsersAddHiddenItemsBody) => Promise<Response<TraktUsersAddHiddenItemsResponse>>;
        removeHiddenItems: (params: TraktUsersRemoveHiddenItemsBody) => Promise<Response<TraktUsersRemoveHiddenItemsResponse>>;
        profile: (params: TraktUsersProfileParams) => Promise<Response<TraktUsersProfileResponse>>;
        likes: (params: TraktUsersLikesParams) => Promise<Response<TraktUsersLikesResponse[]>>;
        collection: (params: TraktUsersCollectionParams) => Promise<Response<TraktUsersCollectionResponse[]>>;
        comments: (params: TraktUsersCommentsParams) => Promise<Response<TraktUsersCommentsResponse[]>>;
        lists: (params: TraktUsersListsBody) => Promise<Response<TraktUsersListsResponse>>;
        reorderLists: (params: TraktUsersReorderListsParams) => Promise<Response<TraktUsersReorderListsResponse>>;
        list: (params: TraktUsersListParams) => Promise<Response<any>>;
        listLikes: (params: TraktUsersListLikesParams) => Promise<Response<TraktUsersListLikesResponse[]>>;
        listLike: (params: TraktUsersListLikeParams) => Promise<Response<any>>;
        listItems: (params: TraktUsersListItemsParams) => Promise<Response<TraktUsersListItemsResponse[]>>;
        addListItems: (params: TraktUsersAddListItemsBody) => Promise<Response<TraktUsersAddListItemsResponse>>;
        removeListItems: (params: TraktUsersRemoveListItemsBody) => Promise<Response<TraktUsersRemoveListItemsResponse>>;
        reorderListItems: (params: TraktUsersReorderListItemsParams) => Promise<Response<TraktUsersReorderListItemsResponse>>;
        listComments: (params: TraktUsersListCommentsParams) => Promise<Response<TraktUsersListCommentsResponse[]>>;
        follow: (params: TraktUsersFollowParams) => Promise<Response<any>>;
        followers: (params: TraktUsersFollowersParams) => Promise<Response<TraktUsersFollowersResponse[]>>;
        following: (params: TraktUsersFollowingParams) => Promise<Response<TraktUsersFollowingResponse[]>>;
        friends: (params: TraktUsersFriendsParams) => Promise<Response<TraktUsersFriendsResponse[]>>;
        history: (params: TraktUsersHistoryParams) => Promise<Response<TraktUsersHistoryResponse[]>>;
        ratings: (params: TraktUsersRatingsParams) => Promise<Response<TraktUsersRatingsResponse[]>>;
        watchlist: (params: TraktUsersWatchlistParams) => Promise<Response<TraktUsersWatchlistResponse[]>>;
        personalRecommendations: (params: TraktUsersPersonalRecommendationsParams) => Promise<Response<TraktUsersPersonalRecommendationsResponse[]>>;
        watching: (params: TraktUsersWatchingParams) => Promise<Response<any>>;
        watched: (params: TraktUsersWatchedParams) => Promise<Response<TraktUsersWatchedResponse[]>>;
        stats: (params: TraktUsersStatsParams) => Promise<Response<TraktUsersStatsResponse>>;
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
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsMyNewShowsParams {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsMySeasonPremieresParams {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsMyMoviesParams {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsMyDVDParams {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsAllShowsParams {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsAllNewShowsParams {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsAllSeasonPremieresParams {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsAllMoviesParams {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsAllDVDParams {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCertificationsListParams {
    type: "movies" | "shows";
}
export interface TraktCommentsCommentParams {
    id: number;
}
export interface TraktCommentsRepliesParams {
    id: number;
    page?: number;
    limit?: number;
}
export interface TraktCommentsItemParams {
    id: number;
    extended?: "full" | "metadata";
}
export interface TraktCommentsLikesParams {
    id: number;
    page?: number;
    limit?: number;
}
export interface TraktCommentsLikeParams {
    id: number;
}
export interface TraktCommentsTrendingParams {
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktCommentsRecentParams {
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktCommentsUpdatesParams {
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktCountriesListParams {
    type: "movies" | "shows";
}
export interface TraktGenresListParams {
    type: "movies" | "shows";
}
export interface TraktLanguagesListParams {
    type: "movies" | "shows";
}
export interface TraktListsTrendingParams {
    page?: number;
    limit?: number;
}
export interface TraktListsPopularParams {
    page?: number;
    limit?: number;
}
export interface TraktListsListParams {
    id: number;
}
export interface TraktListsListLikesParams {
    id: string;
    page?: number;
    limit?: number;
}
export interface TraktListsListItemsParams {
    id: string;
    type?: "movie" | "show" | "season" | "episode" | "person";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktListsListCommentsParams {
    id: number;
    sort?: "newest" | "oldest" | "likes" | "replies";
    page?: number;
    limit?: number;
}
export interface TraktMoviesTrendingParams {
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesPopularParams {
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesRecommendedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesPlayedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesWatchedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesCollectedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesAnticipatedParams {
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesBoxOfficeParams {
    extended?: "full" | "metadata";
}
export interface TraktMoviesUpdatesParams {
    start_date?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktMoviesUpdatedIDsParams {
    start_date?: string;
    page?: number;
    limit?: number;
}
export interface TraktMoviesSummaryParams {
    id: string;
    extended?: "full" | "metadata";
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
    sort?: "newest" | "oldest" | "likes" | "replies" | "highest" | "lowest" | "plays";
    page?: number;
    limit?: number;
}
export interface TraktMoviesListsParams {
    id: string;
    type?: "all" | "personal" | "official" | "watchlists" | "recommendations";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
    page?: number;
    limit?: number;
}
export interface TraktMoviesPeopleParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktMoviesRatingsParams {
    id: string;
}
export interface TraktMoviesRelatedParams {
    id: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktMoviesStatsParams {
    id: string;
}
export interface TraktMoviesWatchingParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktPeopleSummaryParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktPeopleMoviesParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktPeopleShowsParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktPeopleListsParams {
    id: string;
    type?: "all" | "personal" | "official";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
    page?: number;
    limit?: number;
}
export interface TraktRecommendationsMoviesParams {
    ignore_collected?: "true" | "false";
    extended?: "full" | "metadata";
}
export interface TraktRecommendationsHideMovieParams {
    id: string;
}
export interface TraktRecommendationsShowsParams {
    ignore_collected?: "true" | "false";
    extended?: "full" | "metadata";
}
export interface TraktRecommendationsHideShowParams {
    id: string;
}
export interface TraktSearchTextQueryParams {
    type: string;
    query: string;
    fields?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktSearchIDLookupParams {
    id_type: string;
    id: string;
    type?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktShowsTrendingParams {
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktShowsPopularParams {
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktShowsRecommendedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktShowsPlayedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktShowsWatchedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktShowsCollectedParams {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktShowsAnticipatedParams {
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktShowsUpdatesParams {
    start_date?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktShowsUpdatedIDsParams {
    start_date?: string;
    page?: number;
    limit?: number;
}
export interface TraktShowsSummaryParams {
    id: string;
    extended?: "full" | "metadata";
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
    page?: number;
    limit?: number;
}
export interface TraktShowsListsParams {
    id: string;
    type?: "all" | "personal" | "official" | "watchlists" | "recommendations";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
    page?: number;
    limit?: number;
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
    extended?: "full" | "metadata";
}
export interface TraktShowsRatingsParams {
    id: string;
}
export interface TraktShowsRelatedParams {
    id: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktShowsStatsParams {
    id: string;
}
export interface TraktShowsWatchingParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktShowsNextEpisodeParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktShowsLastEpisodeParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktSeasonsSummaryParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktSeasonsSeasonParams {
    id: string;
    season: number;
    translations?: string;
    extended?: "full" | "metadata";
}
export interface TraktSeasonsCommentsParams {
    id: string;
    season: number;
    sort?: "newest" | "oldest" | "likes" | "replies" | "highest" | "lowest" | "plays" | "watched";
    page?: number;
    limit?: number;
}
export interface TraktSeasonsListsParams {
    id: string;
    season: number;
    type?: "all" | "personal" | "official" | "watchlists";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
    page?: number;
    limit?: number;
}
export interface TraktSeasonsPeopleParams {
    id: string;
    season: number;
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
}
export interface TraktEpisodesSummaryParams {
    id: string;
    season: number;
    episode: number;
    extended?: "full" | "metadata";
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
    page?: number;
    limit?: number;
}
export interface TraktEpisodesListsParams {
    id: string;
    season: number;
    episode: number;
    type?: "all" | "personal" | "official" | "watchlists";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
    page?: number;
    limit?: number;
}
export interface TraktEpisodesPeopleParams {
    id: string;
    season: number;
    episode: number;
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
}
export interface TraktSyncPlaybackParams {
    type?: "movies" | "episodes";
    start_at?: string;
    end_at?: string;
    page?: number;
    limit?: number;
}
export interface TraktSyncRemovePlaybackParams {
    id: number;
}
export interface TraktSyncGetCollectionParams {
    type: "movies" | "shows";
    extended?: "full" | "metadata";
}
export interface TraktSyncGetWatchedParams {
    type: "movies" | "shows";
    extended?: "full" | "metadata";
}
export interface TraktSyncGetHistoryParams {
    type?: "movies" | "shows" | "seasons" | "episodes";
    id?: number;
    start_at?: string;
    end_at?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktSyncGetRatingsParams {
    type?: "movies" | "shows" | "seasons" | "episodes" | "all";
    rating?: number;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktSyncGetWatchlistParams {
    type?: "movies" | "shows" | "seasons" | "episodes";
    sort?: "rank" | "added" | "released" | "title";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktSyncGetPersonalRecommendationsParams {
    type?: "movies" | "shows";
    sort?: "rank" | "added" | "released" | "title";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktUsersFollowingRequestsParams {
    extended?: "full" | "metadata";
}
export interface TraktUsersFollowerRequestsParams {
    extended?: "full" | "metadata";
}
export interface TraktUsersApproveOrDenyFollowerRequestsParams {
    id: number;
}
export interface TraktUsersHiddenItemsParams {
    section: "calendar" | "recommendations" | "comments";
    type?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktUsersAddHiddenItemsParams {
    section: "calendar" | "recommendations";
}
export interface TraktUsersRemoveHiddenItemsParams {
    section: "calendar" | "recommendations" | "comments";
}
export interface TraktUsersProfileParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktUsersLikesParams {
    id: string;
    type?: "comments" | "lists";
    page?: number;
    limit?: number;
}
export interface TraktUsersCollectionParams {
    id: string;
    type: "movies" | "shows";
    extended?: "full" | "metadata";
}
export interface TraktUsersCommentsParams {
    id: string;
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: "true" | "false" | "only";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    page?: number;
    limit?: number;
}
export interface TraktUsersListLikeParams {
    id: string;
    list_id: string;
}
export interface TraktUsersListItemsParams {
    id: string;
    list_id: string;
    type?: "movie" | "show" | "season" | "episode" | "person";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    page?: number;
    limit?: number;
}
export interface TraktUsersFollowParams {
    id: string;
}
export interface TraktUsersFollowersParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktUsersFollowingParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktUsersFriendsParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktUsersHistoryParams {
    id: string;
    type?: "movies" | "shows" | "seasons" | "episodes";
    item_id?: number;
    start_at?: string;
    end_at?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktUsersRatingsParams {
    id: string;
    type?: "movies" | "shows" | "seasons" | "episodes" | "all";
    rating?: number;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktUsersWatchlistParams {
    id: string;
    type?: "movies" | "shows" | "seasons" | "episodes";
    sort?: "rank" | "added" | "released" | "title";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktUsersPersonalRecommendationsParams {
    id: string;
    type?: "movies" | "shows";
    sort?: "rank" | "added" | "released" | "title";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktUsersWatchingParams {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktUsersWatchedParams {
    id: string;
    type: "movies" | "shows";
    extended?: "full" | "metadata";
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
export interface TraktCrew extends Record<string, TraktDepartment> {
}
export interface TraktDepartment extends Array<TraktStaff> {
}
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
    [key: string]: any;
}
export interface TraktCalendarsMyNewShowsResponse {
    first_aired: string;
    episode: TraktEpisode;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktCalendarsMySeasonPremieresResponse {
    first_aired: string;
    episode: TraktEpisode;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktCalendarsMyMoviesResponse {
    released: string;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktCalendarsMyDVDResponse {
    released: string;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktCalendarsAllShowsResponse {
    first_aired: string;
    episode: TraktEpisode;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktCalendarsAllNewShowsResponse {
    first_aired: string;
    episode: TraktEpisode;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktCalendarsAllSeasonPremieresResponse {
    first_aired: string;
    episode: TraktEpisode;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktCalendarsAllMoviesResponse {
    released: string;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktCalendarsAllDVDResponse {
    released: string;
    movie: TraktMovie;
    [key: string]: any;
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
        rating: {};
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
        rating: {};
        play_count: number;
        completed_count: number;
    };
    user: TraktUser;
}
export interface TraktCommentsItemResponse {
    type: string;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktCommentsLikesResponse {
    liked_at: string;
    user: TraktUser;
}
export interface TraktCommentsTrendingResponse {
    type: string;
    movie: TraktMovie;
    comment: TraktComment;
    [key: string]: any;
}
export interface TraktCommentsRecentResponse {
    type: string;
    movie: TraktMovie;
    comment: TraktComment;
    [key: string]: any;
}
export interface TraktCommentsUpdatesResponse {
    type: string;
    movie: TraktMovie;
    comment: TraktComment;
    [key: string]: any;
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
    [key: string]: any;
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
        rating: {};
        play_count: number;
        completed_count: number;
    };
    user: TraktUser;
}
export interface TraktMoviesTrendingResponse {
    watchers: number;
    movie: TraktMovie;
    [key: string]: any;
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
export interface TraktMoviesRecommendedResponse {
    user_count: number;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesPlayedResponse {
    watcher_count: number;
    play_count: number;
    collected_count: number;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesWatchedResponse {
    watcher_count: number;
    play_count: number;
    collected_count: number;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesCollectedResponse {
    watcher_count: number;
    play_count: number;
    collected_count: number;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesAnticipatedResponse {
    list_count: number;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesBoxOfficeResponse {
    revenue: number;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesUpdatesResponse {
    updated_at: string;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesUpdatedIDsResponse extends Array<number> {
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
    trailer: {};
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
export interface TraktMoviesAliasesResponse {
    title: string;
    country: string;
}
export interface TraktMoviesReleasesResponse {
    country: string;
    certification: string;
    release_date: string;
    release_type: string;
    note: {};
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
    [key: string]: any;
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
    [key: string]: any;
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
    [key: string]: any;
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
        wikipedia: {};
    };
    biography: string;
    birthday: string;
    death: {};
    birthplace: string;
    homepage: string;
    [key: string]: any;
}
export interface TraktPeopleMoviesResponse {
    cast: {
        characters: string[];
        movie: TraktMovie;
    }[];
    crew: TraktCrew;
    [key: string]: any;
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
    [key: string]: any;
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
    [key: string]: any;
}
export interface TraktSearchIDLookupResponse {
    type: string;
    score: {};
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktShowsTrendingResponse {
    watchers: number;
    show: TraktShow;
    [key: string]: any;
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
export interface TraktShowsRecommendedResponse {
    user_count: number;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktShowsPlayedResponse {
    watcher_count: number;
    play_count: number;
    collected_count: number;
    collector_count: number;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktShowsWatchedResponse {
    watcher_count: number;
    play_count: number;
    collected_count: number;
    collector_count: number;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktShowsCollectedResponse {
    watcher_count: number;
    play_count: number;
    collected_count: number;
    collector_count: number;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktShowsAnticipatedResponse {
    list_count: number;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktShowsUpdatesResponse {
    updated_at: string;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktShowsUpdatedIDsResponse extends Array<number> {
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
    trailer: {};
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
            imdb: {};
            tmdb: {};
        };
    };
    last_episode: {
        season: number;
        number: number;
        title: string;
        ids: {
            trakt: number;
            tvdb: number;
            imdb: {};
            tmdb: {};
        };
    };
}
export interface TraktShowsWatchedProgressResponse {
    aired: number;
    completed: number;
    last_watched_at: string;
    reset_at: {};
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
            imdb: {};
            tmdb: {};
        };
    };
    last_episode: {
        season: number;
        number: number;
        title: string;
        ids: {
            trakt: number;
            tvdb: number;
            imdb: {};
            tmdb: {};
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
    [key: string]: any;
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
    [key: string]: any;
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
    [key: string]: any;
}
export interface TraktShowsNextEpisodeResponse {
    season: number;
    number: number;
    title: string;
    ids: {
        trakt: number;
        tvdb: number;
        imdb: {};
        tmdb: {};
    };
    [key: string]: any;
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
    [key: string]: any;
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
    [key: string]: any;
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
    [key: string]: any;
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
    number_abs: {};
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
    [key: string]: any;
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
    [key: string]: any;
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
    reset_at: {};
    show: TraktShow;
    [key: string]: any;
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
    [key: string]: any;
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
    [key: string]: any;
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
    [key: string]: any;
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
    [key: string]: any;
}
export interface TraktUsersFollowerRequestsResponse {
    id: number;
    requested_at: string;
    user: TraktUser;
    [key: string]: any;
}
export interface TraktUsersHiddenItemsResponse {
    hidden_at: string;
    type: string;
    show: TraktShow;
    [key: string]: any;
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
    [key: string]: any;
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
    [key: string]: any;
}
export interface TraktUsersCommentsResponse {
    type: string;
    movie: TraktMovie;
    comment: TraktComment;
    [key: string]: any;
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
    [key: string]: any;
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
        rating: {};
        play_count: number;
        completed_count: number;
    };
    user: TraktUser;
}
export interface TraktUsersFollowersResponse {
    followed_at: string;
    user: TraktUser;
    [key: string]: any;
}
export interface TraktUsersFollowingResponse {
    followed_at: string;
    user: TraktUser;
    [key: string]: any;
}
export interface TraktUsersFriendsResponse {
    friends_at: string;
    user: TraktUser;
    [key: string]: any;
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
export interface TraktUsersRatingsResponse {
    rated_at: string;
    rating: number;
    type: string;
    episode: TraktEpisode;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktUsersWatchlistResponse {
    rank: number;
    listed_at: string;
    type: string;
    episode: TraktEpisode;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktUsersPersonalRecommendationsResponse {
    rank: number;
    listed_at: string;
    type: string;
    notes: string;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktUsersWatchedResponse {
    plays: number;
    last_watched_at: string;
    last_updated_at: string;
    reset_at: {};
    show: TraktShow;
    [key: string]: any;
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
