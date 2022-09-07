import { useLocation, useSearchParams } from "react-router-dom"
type QueryType = string | null
type UseQueryReturn = {
    query: QueryType
}
export enum Queries {
    category = "category",
    query = "query"
}
export function useQueryParams(queryName: Queries): UseQueryReturn {
    const [query] = useSearchParams()
    const queryType: QueryType = query ? query.get(queryName) : null
    console.log(queryType, " from hook")

    return { query: queryType }
}