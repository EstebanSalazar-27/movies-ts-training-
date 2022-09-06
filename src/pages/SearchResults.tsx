import { useDataRequest } from '@/hooks/useDataRequest'
import { searchMovieByKeyword } from '@/services/TMDB_REQUESTS'
import React from 'react'

export const SearchResults = () => {
  const { data, loading } = useDataRequest({ fnRequest: searchMovieByKeyword })
  return (
    <div>SearchResults</div>
  )
}
