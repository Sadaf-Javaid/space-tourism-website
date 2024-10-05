import hamburgerIcon from "/shared/icon-hamburger.svg";
import closeIcon from "/shared/icon-close.svg";
import logo from "/shared/logo.svg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Get the current URL path
  const location = useLocation();

  // Sync the active link with the current URL path
  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === "/") {
      setActiveLink("home");
    } else if (currentPath === "/destination") {
      setActiveLink("destination");
    } else if (currentPath === "/crew") {
      setActiveLink("crew");
    } else if (currentPath === "/technology") {
      setActiveLink("technology");
    }
  }, [location]);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="flex w-full items-center justify-between p-6 md:p-0">
      {/* logo */}
      <Link to="/">
        <img src={logo} className="h-10 w-10 cursor-pointer md:hidden" />
      </Link>

      {/* Mobile navbar */}
      <img
        src={hamburgerIcon}
        className="cursor-pointer md:hidden"
        onClick={toggleMenu}
      />
      <div
        className={`mobile-nav-styling bg-[#0B0D1726] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-12 flex cursor-pointer items-center justify-end pr-6 md:hidden">
          <img src={closeIcon} onClick={toggleMenu} />
        </div>

        <ul className="flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          <li className={`navText-styling ${activeLink === "home" ? "active" : ""}`}>
            <Link to="/" onClick={toggleMenu}>
              <span className="navNumbers-styling">00</span>Home
            </Link>
          </li>
          <li className={`navText-styling ${activeLink === "destination" ? "active" : ""}`}>
            <Link to="/destination" onClick={toggleMenu}>
              <span className="navNumbers-styling">01</span>Destination
            </Link>
          </li>
          <li className={`navText-styling ${activeLink === "crew" ? "active" : ""}`}>
            <Link to="/crew" onClick={toggleMenu}>
              <span className="navNumbers-styling">02</span>Crew
            </Link>
          </li>
          <li className={`navText-styling ${activeLink === "technology" ? "active" : ""}`}>
            <Link to="/technology" onClick={toggleMenu}>
              <span className="navNumbers-styling">03</span>Technology
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop and tablet navbar */}
      <div className="hidden w-full md:flex md:items-center md:justify-between md:pl-10 lg:pt-10">
        <Link to="/">
          <img
            src={logo}
            className="hidden h-12 w-12 cursor-pointer md:mr-10 md:inline-block lg:mr-16"
          />
        </Link>
        <div className="mr-[-1.2rem] hidden lg:z-40 lg:block lg:h-[1px] lg:w-full lg:bg-[#ffffff57]"></div>
        <div className="md:flex md:max-w-[60rem] md:grow md:items-center md:justify-center md:bg-[#FFFFFF0D] md:px-10 md:text-white md:backdrop-blur-nav">
          <ul className="md:flex md:items-center md:justify-center md:gap-12">
            <li className={`navText-styling ${activeLink === "home" ? "active" : ""}`}>
              <Link to="/">
                <span className="navNumbers-styling md:hidden lg:inline">00</span>
                Home
              </Link>
            </li>
            <li className={`navText-styling ${activeLink === "destination" ? "active" : ""}`}>
              <Link to="/destination">
                <span className="navNumbers-styling">01</span>Destination
              </Link>
            </li>
            <li className={`navText-styling ${activeLink === "crew" ? "active" : ""}`}>
              <Link to="/crew">
                <span className="navNumbers-styling">02</span>Crew
              </Link>
            </li>
            <li className={`navText-styling ${activeLink === "technology" ? "active" : ""}`}>
              <Link to="/technology">
                <span className="navNumbers-styling">03</span>Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
