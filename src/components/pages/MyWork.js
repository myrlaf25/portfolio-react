import React from "react";
import GithubLogo from "../assets/githublogo.png";
import Weather from "../assets/weatherLogo.png";
import Project1 from "../assets/project1Logo.png";
import Project2 from "../assets/project2Logo.png";
import Password from "../assets/passwordLogo.png";
import Blog from "../assets/blogLogo.png";
import Budget from "../assets/budgetLogo.png";


const MyWork = () => (
  <>
    <div className="jumbotronWork">
      <h1 className="textCenter bold-700 mtb-130" style={{fontSize: "100px",}}>My Work</h1>
      </div>
      
      <div className="containerWork">
      <h3 className="textCenter bold-700 mtb-130">You may find my work at:</h3>
      <a className="btn" id="github" href="https://github.com/myrlaf25">
        <img
          className="mtb-130" 
          src={GithubLogo}
          alt="github placeholder"
          width="200"
          height="100"
        />
      </a>
      <div className="weather">
        <h2 className="bold-700 mtb-30">Weather Dashboard</h2>
        <p> Technologies: HTML, CSS, JavaScript and an API.</p>
        <p>
          This app will generate the current weather for the chosen city and a
          5-day forecast.
        </p>
        <button
          className="secondaryColor mtb-30"
          style={{
            borderRadius: "45px",
            margin: "10px",
            boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
            overflow: "hidden",
          }}
        >
          <a href="https://myrlaf25.github.io/myweatherapp/.">
            <img src={Weather} alt="weather" />
          </a>
        </button>
        <button
          className="mtb-130"
          style={{
            borderRadius: "15px",
            boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)",
          }}
        >
          <a className="mtb-10" href="https://github.com/myrlaf25/myweatherapp">
            Weather Repo
          </a>
        </button>
      </div>

      <div className="project1">
        <h2 className="bold-700 mtb-30">Group Project 1</h2>
        <h6>
          Group Project Contributors: Kate Biernat, Breon Sparrow, Kyle Simone
          and myself.
        </h6>
        <p>Technologies: HTML, CSS, Javascript, and 3 different APIs.</p>
        <p>
          The app generates a random picture of a puppy, a random joke, the
          current weather, and a 5 day forecast.
        </p>
        <button
          className="secondaryColor mtb-30"
          style={{
            borderRadius: "45px",
            margin: "10px",
            boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
            overflow: "hidden",
          }}
        >
          <a href="https://kebiernat5.github.io/Dad-Joke-Pup-Forecast/">
            <img src={Project1} alt="project1" />
          </a>
        </button>
        <button
          className="mtb-130"
          style={{
            borderRadius: "15px",
            boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)",
          }}
        >
          <a
            className="mtb-10"
            href="https://github.com/kebiernat5/Dad-Joke-Pup-Forecast"
          >
            Pup-Joke Repo
          </a>
        </button>
      </div>
      <div className="project2">
        <h2 className="bold-700 mtb-30"> 2nd Group Project</h2>

        <h6>
          Group Project Contributors: Triston Burns, Hanna Ferris and myself.
        </h6>
        <p>
          Technologies: HTML, CSS, Javascript, API, MYSQL, Sequelize, Node.js,
          Express,js, email-validator, Handlebars.
        </p>
        <p>
          This is a job website. The user may post a job or hire someone who has
          posted a job.
        </p>

        <button
          className="secondaryColor mtb-30"
          style={{
            borderRadius: "45px",
            margin: "10px",
            boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
            overflow: "hidden",
          }}
        >
          <a href="https://gedditdone.herokuapp.com/">
            <img src={Project2} alt="weather" />
          </a>
        </button>
        <button
          className="mtb-130"
          style={{
            borderRadius: "15px",
            boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)",
          }}
        >
          <a className="mtb-10" href="https://github.com/tbsdvl/GedditDone">
            GedditDone Repo
          </a>
        </button>
      </div>
      <div className="password">
        <h2 className="bold-700 mtb-30"> Password Generator</h2>

        <p> Technologies: HTML, CSS and JavaScript.</p>
        <p>
          This will generate a random password for the user with set criteria.
        </p>
        <button
          className="secondaryColor mtb-30"
          style={{
            borderRadius: "45px",
            margin: "10px",
            boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
            overflow: "hidden",
          }}
        >
          <a href="https://myrlaf25.github.io/passwordgenerator/">
            <img src={Password} alt="weather" />
          </a>
        </button>
        <button
          className="mtb-130"
          style={{
            borderRadius: "15px",
            boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)",
          }}
        >
          <a
            className="mtb-10"
            href="https://github.com/myrlaf25/passwordgenerator"
          >
            Password Repo
          </a>
        </button>
      </div>
      <div className="blog">
      <h2 className="bold-700 mtb-30">Blue Tech Blog</h2>
      <p> Technologies: HTML, CSS, JavaScript, API, Express, Handlebars, MySQL and Sequelize.</p>
      <p>This is a CMS-style blog site similar to Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.</p>
      <button className="secondaryColor mtb-30" style={{borderRadius: "45px", margin: "10px",
          boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)", overflow: "hidden",}}>
        <a href="https://bluetechblog.herokuapp.com/">
          <img src={Blog} alt="blog" /></a></button>
      <button
        className="mtb-130"
        style={{borderRadius: "15px", boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)"}}>
        <a className="mtb-10" href="https://github.com/myrlaf25/BlueTechBlog">
          Blog Repo</a></button>
    </div>   
    <div className="budget">
    <h2 className="bold-700 mtb-30">Budget Tracker</h2>
    <p> Technologies: HTML, CSS, JavaScript, API, Express, Monngoose, MongoDB, IndexedDB.</p>
    <p>The user will have access to track their money, allowing them to access that information anytime, either online or offline.</p>
    <button className="secondaryColor mtb-30" style={{borderRadius: "45px", margin: "10px",
        boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)", overflow: "hidden",}}>
      <a href="https://mybudgettracker-mf.herokuapp.com/">
        <img src={Budget} alt="budget" /></a></button>
    <button
      className="mtb-130"
      style={{borderRadius: "15px", boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)",}}>
      <a className="mtb-10" href="https://github.com/myrlaf25/mybudgettracker">
        Budget Repo</a></button>
  </div>
    </div>
  </>
);

export default MyWork;
