import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
      <>
    <nav class="navbar navbar-dark bg-dark">
    <h3 className="whiteColor">Myrla Flores</h3>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item whiteColor">
        <Link
          to="/aboutme"
          className={location.pathname === "/aboutme" ? "nav-link active" : "nav-link"}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/mywork"
          className={location.pathname === "/mywork" ? "nav-link active" : "nav-link"}
        >
          My Work
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/skills"
          className={location.pathname === "/skills" ? "nav-link active" : "nav-link"}
        >
          Skills
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
    </nav>
    </>
  );
}

export default NavTabs;
