import { TrendingResponseApi } from "@/models/TMDB_INTERFACES";

const BASE_URL = "https://api.themoviedb.org/3/"

console.log(import.meta.env.VITE_SOME_KEY)

// Available Query String   : Page
export const getTrendingPrograms = async (page: number = 1): Promise<TrendingResponseApi> => {

    const response = await fetch(`${BASE_URL}trending/all/day?api_key=${import.meta.env.VITE_API_KEY}&page=${page}
    `, {
        method: 'GET',
        headers: {}
    })
    const result = await response.json();
    console.log(result)
    return result
}
// Available Query String   : Page
export const getPupularPrograms = async (page: number = 1): Promise<TrendingResponseApi> => {

    const response = await fetch(`${BASE_URL}movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${page}
    `, {
        method: 'GET',
        headers: {}
    })
    const result = await response.json();
    console.log(result)
    return result
}
export const searchMovieByKeyword = async (page: number = 1, query: string | null = ""): Promise<TrendingResponseApi> => {
    const response = await fetch(`${BASE_URL}search/collection?query=${query}&api_key=0e617d4abfa5c6d024f3f22083895328&page=${page}
    `, {
        method: 'GET',
        headers: {}
    })
    const result = await response.json();
    console.log(result)
    return result
}
