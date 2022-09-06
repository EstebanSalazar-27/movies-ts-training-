export interface TrendingResponseApi {
    page: number;
    results: ResultsTrendingPrograms[];
    total_pages: number;
    total_results: number;
}
export interface ResultsTrendingPrograms {
    adult: boolean;
    backdrop_path: string;
    first_air_date?: Date;
    genre_ids: number[];
    id: number;
    media_type: MediaType;
    name?: string;
    origin_country?: string[];
    original_language: OriginalLanguageTrending;
    original_name?: string;
    original_title?: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date?: Date;
    title?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
}
export interface SearchResult {
    adult: boolean;
    backdrop_path: null | string;
    id: number;
    name: string;
    original_language: OriginalLanguage;
    original_name: string;
    overview: string;
    poster_path: null | string;
}
export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}
export enum OriginalLanguageTrending {
    Da = "da",
    En = "en",
    Ko = "ko",
    Pl = "pl",
}
// Popular Programs
type PopularResultExclutions = 'first_air_date' | 'media_type' | "name" | "origin_country" | "original_name"
export type PorpularResults = Omit<ResultsTrendingPrograms, PopularResultExclutions>;
export interface PopularResponseApi {
    page: number;
    results: PorpularResults[];
    total_pages: number;
    total_results: number;
}
export enum OriginalLanguagePopular {
    En = "en",
    Es = "es",
    Ja = "ja",
    Pl = "pl",
}
// Search Responses
type SearchResultExclutions =
    'first_air_date' | "media_type" | "genre_ids" | "origin_country" | "original_title" | "original_title" | "popularity" | "release_date" | "title" | "video" | "vote_average"
    | "vote_count";
type SearchResults = Omit<TrendingResponseApi, SearchResultExclutions>
export interface SearchResponse {
    page: number;
    results: SearchResults[];
    total_pages: number;
    total_results: number;
}
export enum OriginalLanguage {
    En = "en",
    Ko = "ko",
}
