import React from "react";
import GithubLogo from "../assets/githublogo.png"
import Weather from "../assets/weatherLogo.png"
import Project1 from "../assets/project1.png"

const MyWork = () => (
    <>
        <div className="jumbotronWork"></div>
        <div className="container">
            <h2 className="mtb-30">My Work</h2>
            <p className="textColor font-20 mtb-30 " >You may find my work at:</p>
            <a className="btn" id="github" href="https://github.com/myrlaf25"
            ><img
                    src={GithubLogo}
                    alt="github placeholder"
                    width="200"
                    height="100"
                /></a>
            <div className="weather">

                <h2 className="textColor mtb-30">Weather Dahsboard</h2>

                <p className="mtb-30"> Technologies: HTML, CSS, JavaScript and an API.</p> <p> This app will generate the current weather for the chosen city and a 5-day forecast.</p>
                <h5 className="secondaryColor mtb-30">Click Image<a className="mtb-30" href="https://myrlaf25.github.io/myweatherapp/."><img className="mtb-10" src={Weather} alt="weather" /></a></h5>
                <p className="mtb-30"><a className="mtb-30" href="https://github.com/myrlaf25/myweatherapp">Weather Repo</a></p>
            </div>
            <div className="project1">

                <h2 className=" textColor mtb-30">Group Project 1</h2>

                <h6 className="mtb-30"> Group Project Contributors: Kate Biernat, Breon Sparrow, Kyle Simone and myself.</h6>
                <p className="mtb-30">Technologies: HTML, CSS, Javascript, and 3 different APIs.</p> <p> The app generates a random picture of a puppy, a random joke, the current weather, and a 5 day forecast. </p>

                <h5 className="secondaryColor mtb-30">Click Image<a className="mtb-30" href="https://kebiernat5.github.io/Dad-Joke-Pup-Forecast/"><img className="mtb-10" src={Project1} alt="project1" /></a></h5>
                <p className="mtb-30"><a className="mtb-30" href="https://github.com/kebiernat5/Dad-Joke-Pup-Forecast">Project 1 Repo</a> </p>
            </div>
            <div className="project2">
                <h2 className="textColor mtb-30"> 2nd Group Project</h2>



                <h6 className="mtb-30"> Group Project Contributors: Triston Burns, Hanna Ferris and myself.</h6>
                <p className="mtb-30">Technologies: HTML, CSS, Javascript, API, MYSQL, Sequelize, Node.js, Express,js, email-validator, Handlebars.</p><p>This is a job website. The user may post a job or hire someone who has posted a job. </p>

                <h5 className="secondaryColor mtb-30">Click Image<a className="mtb-30" href="https://gedditdone.herokuapp.com/"><img className="mtb-10" src={Weather} alt="weather" /></a></h5>
                <p className="mtb-30"><a className="mtb-30" href="https://github.com/tbsdvl/GedditDone">Project 2 Repo</a> </p>
            </div>
            <div className="password">
                <h2 className="textColor mtb-30"> Password Generator</h2>


                <p className="mtb-30"> Technologies: HTML, CSS and JavaScript.</p>
                    <p>This will generate a random password for the user with set criteria. </p>
                <h5 className="secondaryColor mtb-30">Click Image<a className="mtb-30" href="https://myrlaf25.github.io/passwordgenerator/"><img className="mtb-10" src={Weather} alt="weather" /></a></h5>
                <p className="mtb-30"><a className="mtb-30" href="https://github.com/myrlaf25/passwordgenerator">Password Generator Repo</a></p>
            </div>
        </div>

    </>

);

export default MyWork;
