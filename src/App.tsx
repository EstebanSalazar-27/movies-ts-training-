
// ? Components
import { ListOfPrograms } from './components/ListOfPrograms/ListOfPrograms'
import { Navbar } from './components/Navbar/Navbar'


import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home'
import { Popular } from './pages/Popular'


function App() {

  return (
    <div className="App min-h-screen bg-slate-200">
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watch' element={<Popular />} />
      </Routes>
    </div>
  )
}

export default App
