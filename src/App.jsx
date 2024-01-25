import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/landing-page' element={<LandingPage/>}/>
        </Routes>
        {/* <Footer/> */}
      </main>
    </BrowserRouter>
      )
}

export default App
