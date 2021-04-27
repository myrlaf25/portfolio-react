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

                <p className="mtb-30"> This app was created using HTML, CSS, JavaScript and an API. Most of the elements were created dynamically. This app will generate the current weather and a 5-day forecast.</p>
                <h5 className="mtb-30">Click Image<a className="mtb-30" href="https://myrlaf25.github.io/myweatherapp/."><img className="mtb-10" src={Weather} alt="weather"/></a></h5>
                <p className="mtb-30"><a href="https://github.com/myrlaf25/myweatherapp">Weather Repo</a></p>
    </div> 
    <div className="project1">          

            <h2 className=" textColor mtb-30">Group Project 1</h2>

            <h6 className="mtb-30"> Group Project Contributors: Kate Biernat, Breon Sparrow, Kyle Simone and myself.</h6>
            <p className="mtb-30">We used HTML, CSS, Javascript, and 3 different APIs. The app generate a random picture of a puppy,
            a random joke, the current weather, and a 5 day forecast. </p>

            <h5 className="mtb-30">Click Image<a className="mtb-30" href="https://kebiernat5.github.io/Dad-Joke-Pup-Forecast/"><img className="mtb-10" src={Project1} alt="project1"/></a></h5>
            <p className="mtb-30"><a href="https://github.com/kebiernat5/Dad-Joke-Pup-Forecast">Project 1 Repo</a> </p>
    </div>
    <div className="project2">
            <h2 className="mtb-10"> 2nd Group Project</h2>



            <h6 className="mtb-30"> Group Project Contributors: Triston Burns, Hanna Ferris and myself.</h6>
            <p className="mtb-30">We used HTML, CSS, Javascript, API, MYSQL, Sequelize, Node.js, Express,js, email-validator, Handlebars. This is a job website. The user may post a job/hire someone who has posted a job. </p>

            <h4><a className="mtb-30" href="https://gedditdone.herokuapp.com/">Website Link</a></h4>
            <p className="mtb-30"> Link to the repo site:<a href="https://github.com/tbsdvl/GedditDone">Project 2 Repo</a> </p>
    </div>
    <div className="password">
            <h2 className="mtb-10"> Password Generator</h2>


            <p className="mtb-30"> This app was created using HTML, CSS and JavaScript. Most of the elements were created dynamically.
                    This will generate a random password for the user with set criteria. </p>
            <h4> <a className="mtb-30" href="https://myrlaf25.github.io/passwordgenerator/">Website Link</a></h4>
            <p className="mtb-30"> Link to the repo site:<a href="https://github.com/myrlaf25/passwordgenerator">Password Generator Repo</a></p>
    </div>
        </div>
        
    </>

);

export default MyWork;
