import { useEffect, useState } from "react"
type DependencyList = ReadonlyArray<unknown>;
type UseDataProps = {
    props: {
        fnRequest: (page?: number, query?: string) => any,
        dependencies?: DependencyList
    }
}
/* 
* This hook was created to handle all our request to the api, this receive two params one generic type and one function param , the first one must be a function that make a get method to determined endpoint
* and return the caught data
* The second one must be one generic type who defines the data type of the local state for return , so doing this logic we have a full custom hook to handle all our request  
*/
export function useDataRequest<TResponse>({ fnRequest, dependencies = [] }: UseDataProps["props"]) {
    const [data, setData] = useState<TResponse | null>(null);
    const [loading, setLoading] = useState(false)
    const fetchDataRequest = async () => {
        setLoading(true)
        const result = await fnRequest()
        setData(result)
        setLoading(false)
    }
    useEffect(() => {
        fetchDataRequest()
    }, dependencies)
    return { data, loading }
}