import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AppInfo from "./pages/AppInfo";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AppInfo" element={<AppInfo />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
