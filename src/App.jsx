import './App.css'
import Navbar from './components/Navbar'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
    </BrowserRouter>
      )
}

export default App
