import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import logo from "../assets/shared/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // Function to handle link click and close the mobile menu
  function handleLinkClick(link) {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu after navigating
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
          <li
            className={`navText-styling ${
              activeLink === "home" ? "active" : ""
            }`}
          >
            <Link to="/" onClick={() => handleLinkClick("home")}>
              <span className="navNumbers-styling">00</span>Home
            </Link>
          </li>
          <li
            className={`navText-styling ${
              activeLink === "destination" ? "active" : ""
            }`}
          >
            <Link
              to="/destination"
              onClick={() => handleLinkClick("destination")}
            >
              <span className="navNumbers-styling">01</span>Destination
            </Link>
          </li>
          <li
            className={`navText-styling ${
              activeLink === "crew" ? "active" : ""
            }`}
          >
            <Link to="/crew" onClick={() => handleLinkClick("crew")}>
              <span className="navNumbers-styling">02</span>Crew
            </Link>
          </li>
          <li
            className={`navText-styling ${
              activeLink === "technology" ? "active" : ""
            }`}
          >
            <Link
              to="/technology"
              onClick={() => handleLinkClick("technology")}
            >
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
            <li
              className={`navText-styling ${
                activeLink === "home" ? "active" : ""
              }`}
            >
              <Link to="/" onClick={() => handleLinkClick("home")}>
                <span className="navNumbers-styling md:hidden lg:inline">
                  00
                </span>
                Home
              </Link>
            </li>
            <li
              className={`navText-styling ${
                activeLink === "destination" ? "active" : ""
              }`}
            >
              <Link
                to="/destination"
                onClick={() => handleLinkClick("destination")}
              >
                <span className="navNumbers-styling">01</span>Destination
              </Link>
            </li>
            <li
              className={`navText-styling ${
                activeLink === "crew" ? "active" : ""
              }`}
            >
              <Link to="/crew" onClick={() => handleLinkClick("crew")}>
                <span className="navNumbers-styling">02</span>Crew
              </Link>
            </li>
            <li
              className={`navText-styling ${
                activeLink === "technology" ? "active" : ""
              }`}
            >
              <Link
                to="/technology"
                onClick={() => handleLinkClick("technology")}
              >
                <span className="navNumbers-styling">03</span>Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
