import { useDataRequest } from '../hooks/useDataRequest'
import { searchMovieByKeyword } from '../services/TMDB_REQUESTS'
import { usePaginator } from '../hooks/usePaginator'
import { PaginationBar } from '../components/PaginationBar/PaginationBar'
import { Queries, useQueryParams } from '../hooks/useQueryParams'
import { FlexContainer } from '../layout/FlexContainer'
import mapProgramsResult from '../functions/mapProgramsResults'
import { Title } from '../components/Title/Title'
import { Wrapper } from '../layout/Wrapper'
import { SearchResponseApi } from '@/models/TMDB_INTERFACES'

export const SearchResults = () => {
  const { nextPage, prevPage, page } = usePaginator()
  const { query } = useQueryParams(Queries["query"])
  const moviesFetcher = () => {
    return searchMovieByKeyword(page, query)
  }
  const { data, loading } = useDataRequest<SearchResponseApi>({ fnRequest: moviesFetcher, dependencies: [page, query] })
  return (
    <Wrapper>
      <div>
        <Title stylesTitle={{ color: "text-stone-800", font_size: "text-lg", font_weight: "font-bold" }}>
          {query}
        </Title>
        <PaginationBar fnActions={{ nextPage, prevPage }} page={data && page} totalPage={data && data.total_pages} />

        <FlexContainer>
          {mapProgramsResult(data, loading)}
        </FlexContainer>

      </div >
    </Wrapper>


  )
}
