import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          <span className="heart-icon">

          </span>
          پایار
        </Link>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        
          <Link to="/" className={isActive("/")} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>خانه</Link>
          <Link to="/AppInfo" className={isActive("/AppInfo")} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>درباره برنامه</Link>
          <Link to="/About" className={isActive("/About")} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>درباره تیم</Link>
          <Link to="/Contact" className={isActive("/Contact")} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>ارتباط با ما</Link>
          <Link to="/FAQ" className={isActive("/FAQ")} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>سوالات متداول</Link>
        </div>
{/*dld*/}
        <Link to="/#download-cta" className="navbar-download" onClick={() => setMenuOpen(false)}>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
  </svg>
  دانلود اپ
</Link>
      </div>
    </nav>
  );
}

export default Navbar;
