export interface TraktOptions {
    client_id: string;
    client_secret: string;
    access_token?: string;
    redirect_uri?: string;
}
export interface TraktAuthenticationAuthorizeParams {
    response_type: string;
    client_id: string;
    redirect_uri: string;
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
    section: "calendar" | "recommendations";
    type?: string;
}
export interface TraktUsersAddHiddenItemsParams {
    section: "calendar" | "recommendations";
}
export interface TraktUsersRemoveHiddenItemsParams {
    section: "calendar" | "recommendations";
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
    client_id: string;
    client_secret: string;
}
export interface TraktAuthenticationRefreshTokenBody {
    refresh_token: string;
    client_id: string;
    client_secret: string;
    redirect_uri: string;
    grant_type?: string;
}
export interface TraktAuthenticationRevokeTokenBody {
    token: string;
    client_id: string;
    client_secret: string;
}
export interface TraktAuthenticationDeviceCodeBody {
    client_id: string;
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
}
export interface TraktUsersRemoveHiddenItemsBody {
    movies?: Array<any>;
    shows?: Array<any>;
    seasons?: Array<any>;
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
