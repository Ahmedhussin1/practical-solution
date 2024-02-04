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
import MobileNavTwo from "./components/Navbar/MobileNavTwo";
import ServicesPage from "./Pages/Services page/ServicesPage";
import SeoPage from "./Pages/Services page/Single service page/SEO/SeoPage";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import SemPage from "./Pages/Services page/Single service page/SEM/SemPage";
import OffersPage from "./Pages/Offers/OffersPage";
import Contact from "./Pages/Contact/Contact";
import ResNavbar from './components/Navbar/ResNavbar'
function App() {
  return (
    <MantineProvider>
      <main>
        {/* <Navbar /> */}
        <ResNavbar/>
        {/* <MobileNavTwo/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/offers" element={<OffersPage/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>}/>
            {/* <Route path="/landing-page" element={<LandingPage />} /> */}
            <Route path="/work" element={<WorkCards />}></Route>
            <Route path="/work/rimini" element={<Work />} />
            <Route path="/work/novinci" element={<WorkCopy />} />
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/services/seo" element={<SeoPage/>}/>
            <Route path="/services/sem/ppc" element={<SemPage/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </main>
    </MantineProvider>
  );
}

export default App;
