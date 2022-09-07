
// ? Components
import { ListOfPrograms } from './components/ListOfPrograms/ListOfPrograms'
import { Navbar } from './components/Navbar/Navbar'


import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home'
import { Popular } from './pages/Popular'
import { SearchResults } from './pages/SearchResults'
import { SearchBar } from './components/SearchBar/SearchBar'
import { Wrapper } from './layout/Wrapper'


function App() {

  return (
    <div className="App min-h-screen bg-slate-200">
      <Navbar />
      <Wrapper>
        <SearchBar />
      </Wrapper>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/watch' element={<Popular />} />
      </Routes>
    </div>
  )
}

export default App
