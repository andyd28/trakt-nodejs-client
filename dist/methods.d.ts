import TraktBase, { TraktOptions, TraktFilter } from "./base";
import { Response } from "got";
declare class TraktMethods extends TraktBase {
    constructor(options: TraktOptions);
    authentication: {
        authorize: (params: TraktAuthenticationAuthorizeRequest) => Promise<Response<any>>;
        getToken: (params: TraktAuthenticationGetTokenRequest) => Promise<Response<TraktAuthenticationGetTokenResponse>>;
        refreshToken: (params: TraktAuthenticationRefreshTokenRequest) => Promise<Response<TraktAuthenticationGetTokenResponse>>;
        revokeToken: (params: TraktAuthenticationRevokeTokenRequest) => Promise<Response<any>>;
        deviceCode: () => Promise<Response<TraktAuthenticationDeviceCodeResponse>>;
    };
    calendars: {
        myShows: (params: TraktCalendarsMyShowsRequest) => Promise<Response<TraktCalendarsMyShowsResponse[]>>;
        myNewShows: (params: TraktCalendarsMyNewShowsRequest) => Promise<Response<TraktCalendarsMyNewShowsResponse[]>>;
        mySeasonPremieres: (params: TraktCalendarsMySeasonPremieresRequest) => Promise<Response<TraktCalendarsMySeasonPremieresResponse[]>>;
        myMovies: (params: TraktCalendarsMyMoviesRequest) => Promise<Response<TraktCalendarsMyMoviesResponse[]>>;
        myDVD: (params: TraktCalendarsMyDVDRequest) => Promise<Response<TraktCalendarsMyDVDResponse[]>>;
        allShows: (params: TraktCalendarsAllShowsRequest) => Promise<Response<TraktCalendarsAllShowsResponse[]>>;
        allNewShows: (params: TraktCalendarsAllNewShowsRequest) => Promise<Response<TraktCalendarsAllNewShowsResponse[]>>;
        allSeasonPremieres: (params: TraktCalendarsAllSeasonPremieresRequest) => Promise<Response<TraktCalendarsAllSeasonPremieresResponse[]>>;
        allMovies: (params: TraktCalendarsAllMoviesRequest) => Promise<Response<TraktCalendarsAllMoviesResponse[]>>;
        allDVD: (params: TraktCalendarsAllDVDRequest) => Promise<Response<TraktCalendarsAllDVDResponse[]>>;
    };
    checkin: {
        checkin: () => Promise<Response<any>>;
    };
    certifications: {
        list: (params: TraktCertificationsListRequest) => Promise<Response<TraktCertificationsListResponse>>;
    };
    comments: {
        comments: (params: TraktCommentsCommentsRequest) => Promise<Response<TraktCommentsCommentsResponse>>;
        comment: (params: TraktCommentsCommentRequest) => Promise<Response<any>>;
        replies: (params: TraktCommentsRepliesRequest) => Promise<Response<TraktCommentsRepliesResponse>>;
        item: (params: TraktCommentsItemRequest) => Promise<Response<TraktCommentsItemResponse>>;
        likes: (params: TraktCommentsLikesRequest) => Promise<Response<TraktCommentsLikesResponse[]>>;
        like: (params: TraktCommentsLikeRequest) => Promise<Response<any>>;
        trending: (params: TraktCommentsTrendingRequest) => Promise<Response<TraktCommentsTrendingResponse[]>>;
        recent: (params: TraktCommentsRecentRequest) => Promise<Response<TraktCommentsRecentResponse[]>>;
        updates: (params: TraktCommentsUpdatesRequest) => Promise<Response<TraktCommentsUpdatesResponse[]>>;
    };
    countries: {
        list: (params: TraktCountriesListRequest) => Promise<Response<TraktCountriesListResponse[]>>;
    };
    genres: {
        list: (params: TraktGenresListRequest) => Promise<Response<TraktGenresListResponse[]>>;
    };
    languages: {
        list: (params: TraktLanguagesListRequest) => Promise<Response<TraktLanguagesListResponse[]>>;
    };
    lists: {
        trending: (params: TraktListsTrendingRequest) => Promise<Response<TraktListsTrendingResponse[]>>;
        popular: (params: TraktListsPopularRequest) => Promise<Response<TraktListsPopularResponse[]>>;
        list: (params: TraktListsListRequest) => Promise<Response<TraktListsListResponse>>;
        listLikes: (params: TraktListsListLikesRequest) => Promise<Response<TraktListsListLikesResponse[]>>;
        listItems: (params: TraktListsListItemsRequest) => Promise<Response<TraktListsListItemsResponse[]>>;
        listComments: (params: TraktListsListCommentsRequest) => Promise<Response<TraktListsListCommentsResponse[]>>;
    };
    movies: {
        trending: (params: TraktMoviesTrendingRequest) => Promise<Response<TraktMoviesTrendingResponse[]>>;
        popular: (params: TraktMoviesPopularRequest) => Promise<Response<TraktMoviesPopularResponse[]>>;
        recommended: (params: TraktMoviesRecommendedRequest) => Promise<Response<TraktMoviesRecommendedResponse[]>>;
        played: (params: TraktMoviesPlayedRequest) => Promise<Response<TraktMoviesPlayedResponse[]>>;
        watched: (params: TraktMoviesWatchedRequest) => Promise<Response<TraktMoviesWatchedResponse[]>>;
        collected: (params: TraktMoviesCollectedRequest) => Promise<Response<TraktMoviesCollectedResponse[]>>;
        anticipated: (params: TraktMoviesAnticipatedRequest) => Promise<Response<TraktMoviesAnticipatedResponse[]>>;
        boxOffice: (params: TraktMoviesBoxOfficeRequest) => Promise<Response<TraktMoviesBoxOfficeResponse[]>>;
        updates: (params: TraktMoviesUpdatesRequest) => Promise<Response<TraktMoviesUpdatesResponse[]>>;
        updatedIDs: (params: TraktMoviesUpdatedIDsRequest) => Promise<Response<number[]>>;
        summary: (params: TraktMoviesSummaryRequest) => Promise<Response<TraktMoviesSummaryResponse>>;
        aliases: (params: TraktMoviesAliasesRequest) => Promise<Response<TraktMoviesAliasesResponse[]>>;
        releases: (params: TraktMoviesReleasesRequest) => Promise<Response<TraktMoviesReleasesResponse[]>>;
        translations: (params: TraktMoviesTranslationsRequest) => Promise<Response<TraktMoviesTranslationsResponse[]>>;
        comments: (params: TraktMoviesCommentsRequest) => Promise<Response<TraktMoviesCommentsResponse[]>>;
        lists: (params: TraktMoviesListsRequest) => Promise<Response<TraktMoviesListsResponse[]>>;
        people: (params: TraktMoviesPeopleRequest) => Promise<Response<TraktMoviesPeopleResponse>>;
        ratings: (params: TraktMoviesRatingsRequest) => Promise<Response<TraktMoviesRatingsResponse>>;
        related: (params: TraktMoviesRelatedRequest) => Promise<Response<TraktMoviesRelatedResponse[]>>;
        stats: (params: TraktMoviesStatsRequest) => Promise<Response<TraktMoviesStatsResponse>>;
        watching: (params: TraktMoviesWatchingRequest) => Promise<Response<TraktMoviesWatchingResponse[]>>;
    };
    networks: {
        list: () => Promise<Response<TraktNetworksListResponse[]>>;
    };
    people: {
        summary: (params: TraktPeopleSummaryRequest) => Promise<Response<TraktPeopleSummaryResponse>>;
        movies: (params: TraktPeopleMoviesRequest) => Promise<Response<TraktPeopleMoviesResponse>>;
        shows: (params: TraktPeopleShowsRequest) => Promise<Response<TraktPeopleShowsResponse>>;
        lists: (params: TraktPeopleListsRequest) => Promise<Response<TraktPeopleListsResponse[]>>;
    };
    recommendations: {
        movies: (params: TraktRecommendationsMoviesRequest) => Promise<Response<TraktRecommendationsMoviesResponse[]>>;
        hideMovie: (params: TraktRecommendationsHideMovieRequest) => Promise<Response<any>>;
        shows: (params: TraktRecommendationsShowsRequest) => Promise<Response<TraktRecommendationsShowsResponse[]>>;
        hideShow: (params: TraktRecommendationsHideShowRequest) => Promise<Response<any>>;
    };
    scrobble: {
        start: (params: TraktScrobbleStartRequest) => Promise<Response<TraktScrobbleStartResponse>>;
        pause: (params: TraktScrobblePauseRequest) => Promise<Response<TraktScrobblePauseResponse>>;
        stop: (params: TraktScrobbleStopRequest) => Promise<Response<TraktScrobbleStopResponse>>;
    };
    search: {
        textQuery: (params: TraktSearchTextQueryRequest) => Promise<Response<TraktSearchTextQueryResponse[]>>;
        iDLookup: (params: TraktSearchIDLookupRequest) => Promise<Response<TraktSearchIDLookupResponse[]>>;
    };
    shows: {
        trending: (params: TraktShowsTrendingRequest) => Promise<Response<TraktShowsTrendingResponse[]>>;
        popular: (params: TraktShowsPopularRequest) => Promise<Response<TraktShowsPopularResponse[]>>;
        recommended: (params: TraktShowsRecommendedRequest) => Promise<Response<TraktShowsRecommendedResponse[]>>;
        played: (params: TraktShowsPlayedRequest) => Promise<Response<TraktShowsPlayedResponse[]>>;
        watched: (params: TraktShowsWatchedRequest) => Promise<Response<TraktShowsWatchedResponse[]>>;
        collected: (params: TraktShowsCollectedRequest) => Promise<Response<TraktShowsCollectedResponse[]>>;
        anticipated: (params: TraktShowsAnticipatedRequest) => Promise<Response<TraktShowsAnticipatedResponse[]>>;
        updates: (params: TraktShowsUpdatesRequest) => Promise<Response<TraktShowsUpdatesResponse[]>>;
        updatedIDs: (params: TraktShowsUpdatedIDsRequest) => Promise<Response<number[]>>;
        summary: (params: TraktShowsSummaryRequest) => Promise<Response<TraktShowsSummaryResponse>>;
        aliases: (params: TraktShowsAliasesRequest) => Promise<Response<TraktShowsAliasesResponse[]>>;
        certifications: (params: TraktShowsCertificationsRequest) => Promise<Response<TraktShowsCertificationsResponse[]>>;
        translations: (params: TraktShowsTranslationsRequest) => Promise<Response<TraktShowsTranslationsResponse[]>>;
        comments: (params: TraktShowsCommentsRequest) => Promise<Response<TraktShowsCommentsResponse[]>>;
        lists: (params: TraktShowsListsRequest) => Promise<Response<TraktShowsListsResponse[]>>;
        collectionProgress: (params: TraktShowsCollectionProgressRequest) => Promise<Response<TraktShowsCollectionProgressResponse>>;
        watchedProgress: (params: TraktShowsWatchedProgressRequest) => Promise<Response<TraktShowsWatchedProgressResponse>>;
        resetWatchedProgress: (params: TraktShowsResetWatchedProgressRequest) => Promise<Response<any>>;
        people: (params: TraktShowsPeopleRequest) => Promise<Response<TraktShowsPeopleResponse>>;
        ratings: (params: TraktShowsRatingsRequest) => Promise<Response<TraktShowsRatingsResponse>>;
        related: (params: TraktShowsRelatedRequest) => Promise<Response<TraktShowsRelatedResponse[]>>;
        stats: (params: TraktShowsStatsRequest) => Promise<Response<TraktShowsStatsResponse>>;
        watching: (params: TraktShowsWatchingRequest) => Promise<Response<TraktShowsWatchingResponse[]>>;
        nextEpisode: (params: TraktShowsNextEpisodeRequest) => Promise<Response<TraktShowsNextEpisodeResponse>>;
        lastEpisode: (params: TraktShowsLastEpisodeRequest) => Promise<Response<TraktShowsLastEpisodeResponse>>;
    };
    seasons: {
        summary: (params: TraktSeasonsSummaryRequest) => Promise<Response<TraktSeasonsSummaryResponse[]>>;
        season: (params: TraktSeasonsSeasonRequest) => Promise<Response<TraktSeasonsSeasonResponse[]>>;
        comments: (params: TraktSeasonsCommentsRequest) => Promise<Response<TraktSeasonsCommentsResponse[]>>;
        lists: (params: TraktSeasonsListsRequest) => Promise<Response<TraktSeasonsListsResponse[]>>;
        people: (params: TraktSeasonsPeopleRequest) => Promise<Response<TraktSeasonsPeopleResponse>>;
        ratings: (params: TraktSeasonsRatingsRequest) => Promise<Response<TraktSeasonsRatingsResponse>>;
        stats: (params: TraktSeasonsStatsRequest) => Promise<Response<TraktSeasonsStatsResponse>>;
        watching: (params: TraktSeasonsWatchingRequest) => Promise<Response<TraktSeasonsWatchingResponse[]>>;
    };
    episodes: {
        summary: (params: TraktEpisodesSummaryRequest) => Promise<Response<TraktEpisodesSummaryResponse>>;
        translations: (params: TraktEpisodesTranslationsRequest) => Promise<Response<TraktEpisodesTranslationsResponse[]>>;
        comments: (params: TraktEpisodesCommentsRequest) => Promise<Response<TraktEpisodesCommentsResponse[]>>;
        lists: (params: TraktEpisodesListsRequest) => Promise<Response<TraktEpisodesListsResponse[]>>;
        people: (params: TraktEpisodesPeopleRequest) => Promise<Response<TraktEpisodesPeopleResponse>>;
        ratings: (params: TraktEpisodesRatingsRequest) => Promise<Response<TraktEpisodesRatingsResponse>>;
        stats: (params: TraktEpisodesStatsRequest) => Promise<Response<TraktEpisodesStatsResponse>>;
        watching: (params: TraktEpisodesWatchingRequest) => Promise<Response<TraktEpisodesWatchingResponse[]>>;
    };
    sync: {
        lastActivities: () => Promise<Response<TraktSyncLastActivitiesResponse>>;
        playback: (params: TraktSyncPlaybackRequest) => Promise<Response<TraktSyncPlaybackResponse[]>>;
        removePlayback: (params: TraktSyncRemovePlaybackRequest) => Promise<Response<any>>;
        getCollection: (params: TraktSyncGetCollectionRequest) => Promise<Response<TraktSyncGetCollectionResponse[]>>;
        addToCollection: (params: TraktSyncAddToCollectionRequest) => Promise<Response<TraktSyncAddToCollectionResponse>>;
        removeFromCollection: (params: TraktSyncRemoveFromCollectionRequest) => Promise<Response<TraktSyncRemoveFromCollectionResponse>>;
        getWatched: (params: TraktSyncGetWatchedRequest) => Promise<Response<TraktSyncGetWatchedResponse[]>>;
        getHistory: (params: TraktSyncGetHistoryRequest) => Promise<Response<TraktSyncGetHistoryResponse[]>>;
        addToHistory: (params: TraktSyncAddToHistoryRequest) => Promise<Response<TraktSyncAddToHistoryResponse>>;
        removeFromHistory: (params: TraktSyncRemoveFromHistoryRequest) => Promise<Response<TraktSyncRemoveFromHistoryResponse>>;
        getRatings: (params: TraktSyncGetRatingsRequest) => Promise<Response<TraktSyncGetRatingsResponse[]>>;
        addRatings: (params: TraktSyncAddRatingsRequest) => Promise<Response<TraktSyncAddRatingsResponse>>;
        removeRatings: (params: TraktSyncRemoveRatingsRequest) => Promise<Response<TraktSyncRemoveRatingsResponse>>;
        getWatchlist: (params: TraktSyncGetWatchlistRequest) => Promise<Response<TraktSyncGetWatchlistResponse[]>>;
        addToWatchlist: (params: TraktSyncAddToWatchlistRequest) => Promise<Response<TraktSyncAddToWatchlistResponse>>;
        removeFromWatchlist: (params: TraktSyncRemoveFromWatchlistRequest) => Promise<Response<TraktSyncRemoveFromWatchlistResponse>>;
        reorderWatchlist: () => Promise<Response<TraktSyncReorderWatchlistResponse>>;
        getPersonalRecommendations: (params: TraktSyncGetPersonalRecommendationsRequest) => Promise<Response<TraktSyncGetPersonalRecommendationsResponse[]>>;
        addToPersonalRecommendations: (params: TraktSyncAddToPersonalRecommendationsRequest) => Promise<Response<TraktSyncAddToPersonalRecommendationsResponse>>;
        removeFromPersonalRecommendations: (params: TraktSyncRemoveFromPersonalRecommendationsRequest) => Promise<Response<TraktSyncRemoveFromPersonalRecommendationsResponse>>;
        reorderPersonalRecommendations: () => Promise<Response<TraktSyncReorderPersonalRecommendationsResponse>>;
    };
    users: {
        settings: () => Promise<Response<TraktUsersSettingsResponse>>;
        followingRequests: (params: TraktUsersFollowingRequestsRequest) => Promise<Response<TraktUsersFollowingRequestsResponse[]>>;
        followerRequests: (params: TraktUsersFollowerRequestsRequest) => Promise<Response<TraktUsersFollowerRequestsResponse[]>>;
        approveOrDenyFollowerRequests: (params: TraktUsersApproveOrDenyFollowerRequestsRequest) => Promise<Response<any>>;
        hiddenItems: (params: TraktUsersHiddenItemsRequest) => Promise<Response<TraktUsersHiddenItemsResponse[]>>;
        addHiddenItems: (params: TraktUsersAddHiddenItemsRequest) => Promise<Response<TraktUsersAddHiddenItemsResponse>>;
        removeHiddenItems: (params: TraktUsersRemoveHiddenItemsRequest) => Promise<Response<TraktUsersRemoveHiddenItemsResponse>>;
        profile: (params: TraktUsersProfileRequest) => Promise<Response<TraktUsersProfileResponse>>;
        likes: (params: TraktUsersLikesRequest) => Promise<Response<TraktUsersLikesResponse[]>>;
        collection: (params: TraktUsersCollectionRequest) => Promise<Response<TraktUsersCollectionResponse[]>>;
        comments: (params: TraktUsersCommentsRequest) => Promise<Response<TraktUsersCommentsResponse[]>>;
        lists: (params: TraktUsersListsRequest) => Promise<Response<TraktUsersListsResponse>>;
        reorderLists: (params: TraktUsersReorderListsRequest) => Promise<Response<TraktUsersReorderListsResponse>>;
        list: (params: TraktUsersListRequest) => Promise<Response<any>>;
        listLikes: (params: TraktUsersListLikesRequest) => Promise<Response<TraktUsersListLikesResponse[]>>;
        listLike: (params: TraktUsersListLikeRequest) => Promise<Response<any>>;
        listItems: (params: TraktUsersListItemsRequest) => Promise<Response<TraktUsersListItemsResponse[]>>;
        addListItems: (params: TraktUsersAddListItemsRequest) => Promise<Response<TraktUsersAddListItemsResponse>>;
        removeListItems: (params: TraktUsersRemoveListItemsRequest) => Promise<Response<TraktUsersRemoveListItemsResponse>>;
        reorderListItems: (params: TraktUsersReorderListItemsRequest) => Promise<Response<TraktUsersReorderListItemsResponse>>;
        listComments: (params: TraktUsersListCommentsRequest) => Promise<Response<TraktUsersListCommentsResponse[]>>;
        follow: (params: TraktUsersFollowRequest) => Promise<Response<any>>;
        followers: (params: TraktUsersFollowersRequest) => Promise<Response<TraktUsersFollowersResponse[]>>;
        following: (params: TraktUsersFollowingRequest) => Promise<Response<TraktUsersFollowingResponse[]>>;
        friends: (params: TraktUsersFriendsRequest) => Promise<Response<TraktUsersFriendsResponse[]>>;
        history: (params: TraktUsersHistoryRequest) => Promise<Response<TraktUsersHistoryResponse[]>>;
        ratings: (params: TraktUsersRatingsRequest) => Promise<Response<TraktUsersRatingsResponse[]>>;
        watchlist: (params: TraktUsersWatchlistRequest) => Promise<Response<TraktUsersWatchlistResponse[]>>;
        personalRecommendations: (params: TraktUsersPersonalRecommendationsRequest) => Promise<Response<TraktUsersPersonalRecommendationsResponse[]>>;
        watching: (params: TraktUsersWatchingRequest) => Promise<Response<any>>;
        watched: (params: TraktUsersWatchedRequest) => Promise<Response<TraktUsersWatchedResponse[]>>;
        stats: (params: TraktUsersStatsRequest) => Promise<Response<TraktUsersStatsResponse>>;
    };
}
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
        rating: {};
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
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsMyMoviesResponse {
    released: string;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktCalendarsMyDVDRequest {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsMyDVDResponse {
    released: string;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktCalendarsAllShowsRequest {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsAllMoviesResponse {
    released: string;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktCalendarsAllDVDRequest {
    start_date?: string;
    days?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktCalendarsAllDVDResponse {
    released: string;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktCertificationsListRequest {
    type: "movies" | "shows";
}
export interface TraktCertificationsListResponse {
    us: {
        name: string;
        slug: string;
        description: string;
    }[];
}
export interface TraktCommentsCommentsRequest {
    item: "movie" | "show" | "season" | "episode" | "or list object. (see examples &#8594;)";
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
        rating: {};
        play_count: number;
        completed_count: number;
    };
    user: TraktUser;
}
export interface TraktCommentsCommentRequest {
    id: number;
}
export interface TraktCommentsRepliesRequest {
    id: number;
    comment: string;
    spoiler?: boolean;
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
        rating: {};
        play_count: number;
        completed_count: number;
    };
    user: TraktUser;
}
export interface TraktCommentsItemRequest {
    id: number;
    extended?: "full" | "metadata";
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
export interface TraktCommentsTrendingRequest {
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    type: "movies" | "shows";
}
export interface TraktCountriesListResponse {
    name: string;
    code: string;
}
export interface TraktGenresListRequest {
    type: "movies" | "shows";
}
export interface TraktGenresListResponse {
    name: string;
    slug: string;
}
export interface TraktLanguagesListRequest {
    type: "movies" | "shows";
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
    type?: "movie" | "show" | "season" | "episode" | "person";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    sort?: "newest" | "oldest" | "likes" | "replies";
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
        rating: {};
        play_count: number;
        completed_count: number;
    };
    user: TraktUser;
}
export interface TraktMoviesTrendingRequest {
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesTrendingResponse {
    watchers: number;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesPopularRequest {
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesRecommendedResponse {
    user_count: number;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesPlayedRequest {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesPlayedResponse {
    watcher_count: number;
    play_count: number;
    collected_count: number;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesWatchedRequest {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesWatchedResponse {
    watcher_count: number;
    play_count: number;
    collected_count: number;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesCollectedRequest {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktMoviesAnticipatedResponse {
    list_count: number;
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktMoviesBoxOfficeRequest {
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
    note: {};
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
    sort?: "newest" | "oldest" | "likes" | "replies" | "highest" | "lowest" | "plays";
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
    type?: "all" | "personal" | "official" | "watchlists" | "recommendations";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
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
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
export interface TraktPeopleMoviesRequest {
    id: string;
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
    type?: "all" | "personal" | "official";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
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
    ignore_collected?: "true" | "false";
    extended?: "full" | "metadata";
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
    ignore_collected?: "true" | "false";
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    extended?: "full" | "metadata";
}
export interface TraktSearchIDLookupResponse {
    type: string;
    score: {};
    movie: TraktMovie;
    [key: string]: any;
}
export interface TraktShowsTrendingRequest {
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktShowsTrendingResponse {
    watchers: number;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktShowsPopularRequest {
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
}
export interface TraktShowsRecommendedResponse {
    user_count: number;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktShowsPlayedRequest {
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    period?: "daily" | "weekly" | "monthly" | "yearly" | "all";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    extended?: "full" | "metadata";
    filters?: {
        [key in TraktFilter]?: string;
    };
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
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
    sort?: "newest" | "oldest" | "likes" | "replies" | "highest" | "lowest" | "plays" | "watched";
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
    type?: "all" | "personal" | "official" | "watchlists" | "recommendations";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
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
    last_activity?: "aired" | "collected";
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
            collected_at: {};
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
export interface TraktShowsWatchedProgressRequest {
    id: string;
    hidden?: string;
    specials?: string;
    count_specials?: string;
    last_activity?: "aired" | "watched";
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
            last_watched_at: {};
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
export interface TraktShowsResetWatchedProgressRequest {
    id: string;
}
export interface TraktShowsPeopleRequest {
    id: string;
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
export interface TraktShowsLastEpisodeRequest {
    id: string;
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
}
export interface TraktSeasonsSummaryResponse {
    number: number;
    ids: {
        trakt: number;
        tvdb: {};
        tmdb: number;
    };
    episodes: {
        season: number;
        number: number;
        title: string;
        ids: {
            trakt: number;
            tvdb: {};
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
    extended?: "full" | "metadata";
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
    sort?: "newest" | "oldest" | "likes" | "replies" | "highest" | "lowest" | "plays" | "watched";
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
    type?: "all" | "personal" | "official" | "watchlists";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
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
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
    sort?: "newest" | "oldest" | "likes" | "replies" | "highest" | "lowest" | "plays";
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
    type?: "all" | "personal" | "official" | "watchlists";
    sort?: "popular" | "likes" | "comments" | "items" | "added" | "updated";
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
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
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
    type?: "movies" | "episodes";
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
    type: "movies" | "shows";
    extended?: "full" | "metadata";
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
    type: "movies" | "shows";
    extended?: "full" | "metadata";
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
    type?: "movies" | "shows" | "seasons" | "episodes";
    id?: number;
    start_at?: string;
    end_at?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    type?: "movies" | "shows" | "seasons" | "episodes" | "all";
    rating?: number;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    type?: "movies" | "shows" | "seasons" | "episodes";
    sort?: "rank" | "added" | "released" | "title";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    type?: "movies" | "shows";
    sort?: "rank" | "added" | "released" | "title";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
}
export interface TraktUsersFollowingRequestsResponse {
    id: number;
    requested_at: string;
    user: TraktUser;
    [key: string]: any;
}
export interface TraktUsersFollowerRequestsRequest {
    extended?: "full" | "metadata";
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
export interface TraktUsersHiddenItemsRequest {
    section: "calendar" | "recommendations" | "comments";
    type?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
}
export interface TraktUsersHiddenItemsResponse {
    hidden_at: string;
    type: string;
    show: TraktShow;
    [key: string]: any;
}
export interface TraktUsersAddHiddenItemsRequest {
    section: "calendar" | "recommendations";
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
    section: "calendar" | "recommendations" | "comments";
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
    extended?: "full" | "metadata";
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
    type?: "comments" | "lists";
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
    type: "movies" | "shows";
    extended?: "full" | "metadata";
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
    comment_type?: "all" | "reviews" | "shouts";
    type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
    include_replies?: "true" | "false" | "only";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    name: string;
    description?: string;
    privacy?: "private" | "friends" | "public";
    display_numbers?: boolean;
    allow_comments?: boolean;
    sort_by?: "rank" | "added" | "title" | "released" | "runtime" | "popularity" | "percentage" | "votes" | "my_rating" | "random" | "watched" | "collected";
    sort_how?: "asc" | "desc";
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
export interface TraktUsersListItemsRequest {
    id: string;
    list_id: string;
    type?: "movie" | "show" | "season" | "episode" | "person";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    sort?: "newest" | "oldest" | "likes" | "replies";
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
        rating: {};
        play_count: number;
        completed_count: number;
    };
    user: TraktUser;
}
export interface TraktUsersFollowRequest {
    id: string;
}
export interface TraktUsersFollowersRequest {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktUsersFollowersResponse {
    followed_at: string;
    user: TraktUser;
    [key: string]: any;
}
export interface TraktUsersFollowingRequest {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktUsersFollowingResponse {
    followed_at: string;
    user: TraktUser;
    [key: string]: any;
}
export interface TraktUsersFriendsRequest {
    id: string;
    extended?: "full" | "metadata";
}
export interface TraktUsersFriendsResponse {
    friends_at: string;
    user: TraktUser;
    [key: string]: any;
}
export interface TraktUsersHistoryRequest {
    id: string;
    type?: "movies" | "shows" | "seasons" | "episodes";
    item_id?: number;
    start_at?: string;
    end_at?: string;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    type?: "movies" | "shows" | "seasons" | "episodes" | "all";
    rating?: number;
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    type?: "movies" | "shows" | "seasons" | "episodes";
    sort?: "rank" | "added" | "released" | "title";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    type?: "movies" | "shows";
    sort?: "rank" | "added" | "released" | "title";
    page?: number;
    limit?: number;
    extended?: "full" | "metadata";
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
    extended?: "full" | "metadata";
}
export interface TraktUsersWatchedRequest {
    id: string;
    type: "movies" | "shows";
    extended?: "full" | "metadata";
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
export interface TraktCrew extends Record<string, TraktDepartment> {
}
export interface TraktDepartment extends Array<TraktStaff> {
}
export interface TraktStaff {
    jobs: Array<string>;
    episode_count: number;
    person: TraktPerson;
}
