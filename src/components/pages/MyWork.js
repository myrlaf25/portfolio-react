import React from "react";
import GithubLogo from "../assets/githublogo.png";
import Weather from "../assets/weatherLogo.png";
import Project1 from "../assets/project1Logo.png";
import Project2 from "../assets/project2Logo.png";
import Password from "../assets/passwordLogo.png";
import Blog from "../assets/blogLogo.png";
import Budget from "../assets/budgetLogo.png";


function MyWork() {
  return (
    <div>
    <div className="jumbotronWork">
    <h1 className="textCenter bold-700" style={{fontSize: "90px",}}>My Work</h1>
    </div>
    
    <div className="containerWork">
    <div className="mtb-30">
    <h3 className="bold-700">You may find my work at:</h3>
    <button style={{
        margin: "10px",
        borderRadius: "20px",
        boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
        overflow: "hidden",
    }} >
    <a className="btn" id="github" href="https://github.com/myrlaf25">
      <img
        src={GithubLogo}
        alt="github placeholder"
        width="150"
        height="90"
      />
    </a></button>
    <h3 className="bold-700">Below are some of my projects.</h3>
    </div>
    <div className="weather">
      <h2 className="bold-700 mtb-10">Weather Dashboard</h2>
      <p className="bold-400 textColor"> Modules: HTML, CSS, JavaScript and an API.</p>
      <p className="bold-700">
        This app will generate the current weather for the chosen city and a
        5-day forecast.
      </p>
      <button
        className="btn"
        style={{
            margin: "10px",
            boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
            overflow: "hidden",
        }} 
      >
        <a href="https://myrlaf25.github.io/myweatherapp/.">
          <img 
          src={Weather}  
          alt="weather"
          width="150"
          height="90"
           />
        </a>
      </button>
      <button
        className="btn mtb-30"
        style={{
          borderRadius: "20px",
          boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)",
        }}
      >
        <a className="mtb-10" href="https://github.com/myrlaf25/myweatherapp">
          Weather Repo
        </a>
      </button>
    </div>

    <div className="project1">
      <h2 className="bold-700 mtb-10">1st Group Project</h2>
      <h6>
        Group Project Contributors: Kate Biernat, Breon Sparrow, Kyle Simone
        and myself.
      </h6>
      <p className="bold-400 textColor">Modules: HTML, CSS, Javascript, and 3 different APIs.</p>
      <p className="bold-700">
        The app generates a random picture of a puppy, a random joke, the
        current weather, and a 5 day forecast.
      </p>
      <button
        className="btn"
        style={{
          margin: "10px",
          boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
          overflow: "hidden",
        }}
      >
        <a href="https://kebiernat5.github.io/Dad-Joke-Pup-Forecast/">
          <img 
          src={Project1} 
          alt="project1"
          width="150"
          height="90" />
        </a>
      </button>
      <button
        className="btn mtb-30"
        style={{
          borderRadius: "20px",
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
      <h2 className="bold-700 mtb-10"> 2nd Group Project</h2>

      <h6>
        Group Project Contributors: Triston Burns, Hanna Ferris and myself.
      </h6>
      <p className="bold-400 textColor">
        Modules: HTML, CSS, Javascript, API, MYSQL, Sequelize, Node.js,
        Express,js, email-validator, Handlebars.
      </p>
      <p className="bold-700">
        This is a job website. The user may post a job or hire someone who has
        posted a job.
      </p>

      <button
        className="btn"
        style={{
            margin: "10px",
            boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
            overflow: "hidden",
        }}
      >
        <a href="https://gedditdone.herokuapp.com/">
          <img 
          src={Project2} 
          alt="project2" 
          width="150"
          height="90" 
          />
        </a>
      </button>
      <button
        className=" btn mtb-30"
        style={{
          borderRadius: "20px",
          boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)",
        }}
      >
        <a className="mtb-10" href="https://github.com/tbsdvl/GedditDone">
          GedditDone Repo
        </a>
      </button>
    </div>
    <div className="password">
      <h2 className="bold-700 mtb-10"> Password Generator</h2>

      <p className="bold-400 textColor"> Modules: HTML, CSS and JavaScript.</p>
      <p className="bold-700">
        This will generate a random password for the user with set criteria.
      </p>
      <button
        className="btn"
        style={{
          margin: "10px",
          boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
          overflow: "hidden",
        }}
      >
        <a href="https://myrlaf25.github.io/passwordgenerator/">
          <img 
          src={Password} 
          alt="password"
          width="150"
          height="90" 
          />
        </a>
      </button>
      <button
        className="btn mtb-30"
        style={{
          borderRadius: "20px",
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
    <h2 className="bold-700 mtb-10">Blue Tech Blog</h2>
    <p className="bold-400 textColor"> Modules: HTML, CSS, JavaScript, API, Express, Handlebars, MySQL and Sequelize.</p>
    <p className="bold-700">This is a CMS-style blog site similar to Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.</p>
    <button className="btn" 
    style={{
        margin: "10px",
        boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)", 
        overflow: "hidden",
    }}>
      <a href="https://bluetechblog.herokuapp.com/">
        <img 
        src={Blog} 
        alt="blog"
        width="150"
        height="90"  
        />
        </a>
        </button>
    <button
      className="btn mtb-30"
      style={{
          borderRadius: "20px", 
          boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)"}}>
      <a className="mtb-10" href="https://github.com/myrlaf25/BlueTechBlog">
        Blog Repo</a></button>
  </div>   
  <div className="budget">
  <h2 className="bold-700 mtb-10">Budget Tracker</h2>
  <p className="bold-400 textColor"> Modules: HTML, CSS, JavaScript, API, Express, Mongoose, MongoDB, IndexedDB.</p>
  <p className="bold-700">The user will have access to track their money, allowing them to access that information anytime, either online or offline.</p>
  <button 
  className="btn" 
  style={{ 
      margin: "10px",
      boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)", overflow: "hidden",
    }}>
    <a href="https://mybudgettracker-mf.herokuapp.com/">
      <img 
      src={Budget} 
      alt="budget" 
      width="150"
      height="90" 
      />
      </a>
      </button>
  <button
    className="btn mtb-30"
    style={{
        borderRadius: "20px", 
        boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)",}}>
    <a 
    className="mtb-10" href="https://github.com/myrlaf25/mybudgettracker">
      Budget Repo</a></button>
</div>
  </div>
    </div>
  );
}

export default MyWork;
