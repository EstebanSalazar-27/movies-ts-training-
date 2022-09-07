// Services
import { getTrendingPrograms } from '../../services/TMDB_REQUESTS'
// Types
import { TrendingResponseApi } from '@/models/TMDB_INTERFACES'
// Components
import { FlexContainer } from '../../layout/FlexContainer'
import { PaginationBar } from '../PaginationBar/PaginationBar'
// Hooks
import { usePaginator } from '../../hooks/usePaginator'
import { useDataRequest } from '../../hooks/useDataRequest'
// Fns
import mapProgramsResult from '../../functions/mapProgramsResults'



export const TrendingList = () => {
    const { nextPage, prevPage, page } = usePaginator()
    const sanitizedRequestTranding = (currentPage: number = page) => {
        return getTrendingPrograms(currentPage)
    }
    const { data, loading } = useDataRequest<TrendingResponseApi>({ fnRequest: sanitizedRequestTranding, dependencies: [page] })


    return (
        <div>
            <PaginationBar page={data && data?.page} totalPage={data && data?.total_pages} fnActions={{ nextPage: nextPage, prevPage: prevPage }} />
            <FlexContainer>
                {mapProgramsResult<TrendingResponseApi>(data, loading)}
            </FlexContainer>


        </div>

    )
}
