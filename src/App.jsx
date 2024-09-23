import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Characters from './pages/Characters/characters'
import Guesscharacter from './pages/guesscharacter/guesscharacter'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Characters />} />
        <Route path='/personaje/:name' element={<Guesscharacter />} />
      </Routes>
    </div>
  )
}

export default App
