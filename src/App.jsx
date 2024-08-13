import Sidebar from './components/Sidebar'
import { Route, Routes } from "react-router-dom"
import FavouritesPage from './pages/FavouritesPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </div>
  )
}

export default App
