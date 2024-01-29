import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Work from './Pages/Rimini/Work'
import WorkCards from "./Work Cards Page/WorkCards";
import WorkCopy from "./Pages/Novinci/WorkCopy";

function App() {
  return (
    <main>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/work" element={<WorkCards />}></Route>
          <Route path="/work/rimini" element={<Work />} />
          <Route path="/work/novinci" element={<WorkCopy />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
