import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-brand">

          <div className="brand-text">
            <h1>عدسة</h1>
            <p>عالم التصوير الفوتوغرافي</p>
          </div>

          <div className="brand-circle">
            <span>◎</span>
          </div>

        </Link>

        {/* Navigation */}
        <nav className="navbar-links">

          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            الرئيسية
          </Link>

          <Link
            to="/blog"
            className={location.pathname.startsWith("/blog") ? "active" : ""}
          >
            المدونة
          </Link>

          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            من نحن
          </Link>

        </nav>

        {/* Left actions */}
        <div className="navbar-actions">

          <button className="search-btn">
            <FaSearch />
          </button>

          <Link to="/blog" className="read-btn">
            ابدأ القراءة
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;