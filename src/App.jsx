import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Guessclub from './pages/guessclub/guessclub'
import Guessplayer from './pages/guessplayer/guessplayer'
import Players from './pages/players/players'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Guessclub />} />
        <Route path='/guessplayer' element={<Guessplayer />} />
        <Route path='/players/:name' element={<Players />} />
      </Routes>
    </div>
  )
}

export default App
