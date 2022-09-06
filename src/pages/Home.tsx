import { ListOfPrograms } from '../components/ListOfPrograms/ListOfPrograms'
import React from 'react'
import { TrendingList } from '../components/TrendingList/TrendingList'

export const Home = () => {
  return (
    <div>
      <ListOfPrograms>
        <TrendingList />
      </ListOfPrograms>
    </div>
  )
}
