import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={
            props.currentPage === "Home" ? "nav-link active" : "nav-link"
          }
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => props.handlePageChange("AboutMe")}
          className={
            props.currentPage === "AboutMe" ? "nav-link active" : "nav-link"
          }
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#mywork"
          onClick={() => props.handlePageChange("MyWork")}
          className={
            props.currentPage === "MyWork" ? "nav-link active" : "nav-link"
          }
        >
          My Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#skills"
          onClick={() => props.handlePageChange("Skills")}
          className={
            props.currentPage === "Skills" ? "nav-link active" : "nav-link"
          }
        >
          Skills
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contactme"
          onClick={() => props.handlePageChange("ContactMe")}
          className={
            props.currentPage === "ContactMe" ? "nav-link active" : "nav-link"
          }
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
