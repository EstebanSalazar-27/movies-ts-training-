import { useDataRequest } from '../../hooks/useDataRequest'
import { PopularResponseApi } from '@/models/TMDB_INTERFACES'
import { getPupularPrograms } from '../../services/TMDB_REQUESTS'
import { usePaginator } from '../../hooks/usePaginator'
import { FlexContainer } from '../../layout/FlexContainer'
import mapProgramsResult from '../../functions/mapProgramsResults'
import { PaginationBar } from '../PaginationBar/PaginationBar'
import { useState } from 'react'





export const PopularList = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const numberOfPages: number[] = []
    const [lastIndexOf, setLastIndex] = useState(20)
    const { } = usePaginator()
    function fetchPopular() {
        return getPupularPrograms(currentPage)
    }
    const { data, loading } = useDataRequest<PopularResponseApi>({ fnRequest: fetchPopular, dependencies: [currentPage] })
    if (data) {
        if (currentPage === lastIndexOf) {
            setLastIndex(prevLast => prevLast + 20)
        }
        for (let i = 1; i < data?.total_pages && i <= lastIndexOf; i++) {

            numberOfPages.push(i)
        }
    }
    if (loading) {
        return <div>loading</div>
    }

    return (
        <div>
            <div className='flex max-w-3xl overflow-hidden gap-1 overflow-x-auto'>
                {numberOfPages && numberOfPages.map((number) => {
                    return <button onClick={() => setCurrentPage(number)} className={`px-2 font-semibold border-2 ${currentPage === number ? "bg-orange-400 rounded-sm text-slate-100" : ""}`} key={number}>{number} </button>
                })}
            </div>
            <PaginationBar page={data && data?.page} totalPage={data && data?.total_pages} />
            <FlexContainer>
                {mapProgramsResult(data, loading)}
            </FlexContainer>

        </div>
    )
}
