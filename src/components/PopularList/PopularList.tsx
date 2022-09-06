import { useDataRequest } from '../../hooks/useDataRequest'
import { PopularResponseApi } from '@/models/TMDB_INTERFACES'
import { getPupularPrograms } from '../../services/TMDB_REQUESTS'
import { usePaginator } from '../../hooks/usePaginator'
import { FlexContainer } from '../../layout/FlexContainer'
import mapProgramsResult from '../../functions/mapProgramsResults'
import { PaginationBar } from '../PaginationBar/PaginationBar'





export const PopularList = () => {
    const { nextPage, prevPage, page } = usePaginator()
    const { data, loading } = useDataRequest<PopularResponseApi>({ fnRequest: getPupularPrograms, currentPage: page })
    console.log(data)
    return (
        <div>
            <PaginationBar page={data && data?.page} totalPage={data && data?.total_pages} fnActions={{ nextPage: nextPage, prevPage: prevPage }} />
            <FlexContainer>
                {mapProgramsResult(data, loading)}
            </FlexContainer>

        </div>
    )
}
