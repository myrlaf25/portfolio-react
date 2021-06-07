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
                <h1 className="textCenter bold-700" style={{ fontSize: "90px", }}>My Work</h1>
            </div>

            <div className="containerWork">
                <div className="work mtb-30 textCenter">
                    <h4 className="bold-700">You may find my work at:</h4>
                    <button 
                    style={{
                        margin: "10px",
                        borderRadius: "20px",
                        boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
                        overflow: "hidden",
                    }} >
                        <a className="btn" id="github" href="https://github.com/myrlaf25">
                            <img
                                src={GithubLogo}
                                alt="github placeholder"
                                width="130"
                                height="80"
                            />
                        </a></button>
                    <h4 className="bold-700 textColor font-30 textCenter">Some of my projects...</h4>
                </div>
                <div className="row cardsContainer">
                    <div className="col-md-3 col-sm-4">
                        <div className="card-body" style={{ background: "white", borderRadius: "25px", boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)" }}>

                            <h3 className="card-title bold-700 textCenter" style={{background: "black", color: "#87a7b3"}}>Weather Dashboard</h3>

                            <p className="card-text">Modules: HTML, CSS, JavaScript and an API.</p>
                            <p className="card-text bold-700">This app will generate the current weather for the chosen city and a
    5-day forecast.</p>


                                    <img
                                        src={Weather}
                                        alt="weather"
                                        width="150"
                                        height="110"
                                    />
                           <div className="linkContainer">
                                <a className="btn btn-primary" href="https://myrlaf25.github.io/myweatherapp/.">View Live
                                </a>
                           
                            
                                <a className="btn btn-primary" href="https://github.com/myrlaf25/myweatherapp">
                                   View Code
        </a>
                            
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-4">
                        <div className="card-body" style={{ background: "white", borderRadius: "25px", boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)" }}>

                        <h3 className="card-title bold-700 textCenter" style={{background: "black", color: "#87a7b3"}}>1st Group Project</h3>

                            <p className="card-text">Contributors: Kate Biernat, Breon Sparrow, Kyle Simone and myself.</p>
                            <p className="card-text">Modules: HTML, CSS, Javascript, and 3 different APIs.</p>
                            <p className="card-text bold-700">The app generates a random picture of a puppy, a random joke, the current weather, and a 5 day forecast.</p>
                                    <img
                                        src={Project1}
                                        alt="project1"
                                        width="150"
                                        height="110" 
                                        />

                                <div className="linkContainer">
                                <a className="btn btn-primary" href="https://kebiernat5.github.io/Dad-Joke-Pup-Forecast/">View Live
                                </a>
                           
                                
                                <a className="btn btn-primary"
                                    href="https://github.com/kebiernat5/Dad-Joke-Pup-Forecast"
                                >
                                View Code</a>
                           
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3 col-sm-4">
                        <div className="card-body" style={{ background: "white", borderRadius: "25px", boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)" }}>

                        <h3 className="card-title bold-700 textCenter" style={{background: "black", color: "#87a7b3"}}>2nd Group Project</h3>

                            <p className="card-text">Contributors: Triston Burns, Hanna Ferris and myself.</p>
                            <p className="card-text"> Modules: HTML, CSS, Javascript, API, MYSQL, Sequelize, Node.js,
                        Express,js, email-validator, Handlebars.</p>
                            <p className="card-text bold-700">This is a job website. The user may post a job or hire someone who has
    posted a job.</p>

                                    <img
                                        src={Project2}
                                        alt="project2"
                                        width="150"
                                        height="110"
                                    />

<div className="linkContainer">
                                <a className="btn btn-primary" href="https://gedditdone.herokuapp.com/">View Live
                                </a>
                            
                            
                                <a className="btn btn-primary" href="https://github.com/tbsdvl/GedditDone">
                                View Code
        </a>
                            
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="cardsContainer2">
                    <div className="card" style={{ width: "18rem", borderRadius: "25px"  }}>
                        <div className="card-body" style={{ background: "white", border: "solid black 10px", borderRadius: "25px"}}>

                            <h3 className="card-title bold-700 textCenter" style={{background: "black", color:"#ffc288"}}>Password Generator</h3>


                            <p className="card-text">Modules: HTML, CSS and JavaScript.</p>
                            <p className="card-text bold-700">This will generate a random password for the user with set criteria.</p>


                            <button
                            className="btn" id='img'
                                style={{
                                    margin: "10px",
                                    boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
                                    overflow: "hidden",
                                }}
                            >
                                <a href="https://myrlaf25.github.io/passwordgenerator/">Visit:
                                    <img
                                        src={Password}
                                        alt="password"
                                        width="150"
                                        height="110"
                                    />
                                </a>
                            </button>
                            <button
                            className="btn mtb-30"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)", marginTop: "25px", alignContent: "center"
                            }}
                            >
                                <a
                                    className="mtb-10"
                                    href="https://github.com/myrlaf25/passwordgenerator"
                                >
                                Code
    </a>
                            </button>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem", borderRadius: "25px"  }}>
                        <div className="card-body" style={{ background: "white", border: "solid black 10px", borderRadius: "25px"  }}>

                            <h3 className="card-title bold-700 textCenter" style={{background: "black", color: "#77acf1"}}>Blue Tech Blog</h3>


                            <p className="card-text">Modules: HTML, CSS, JavaScript, API, Express, Handlebars, MySQL and Sequelize.</p>
                            <p className="card-text bold-700">This is a CMS-style blog site similar to Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.</p>


                            <button 
                            className="btn" id='img'
                                style={{
                                    margin: "10px",
                                    boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
                                    overflow: "hidden",
                                }}>
                                <a href="https://bluetechblog.herokuapp.com/">Visit:
                                    <img
                                        src={Blog}
                                        alt="blog"
                                        width="150"
                                        height="110"
                                    />
                                </a>
                            </button>
                            <button
                            className="btn mtb-30"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)", marginTop: "25px", alignContent: "center"
                            }}>
                                <a className="mtb-10" href="https://github.com/myrlaf25/BlueTechBlog">
                                Code</a></button>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem", borderRadius: "25px" }}>
                        <div className="card-body" style={{ background: "white", border: "solid black 10px", borderRadius: "25px" }}>

                            <h3 className="card-title bold-700 textCenter" style={{background: "black", color: "#f3bda1"}}>Budget Tracker</h3>


                            <p className="card-text">Modules: HTML, CSS, JavaScript, API, Express, Mongoose, MongoDB, IndexedDB.</p>
                            <p className="card-text bold-700">The user will have access to track their money, allowing them to access that information anytime, either online or offline.</p>


                            <button
                            className="btn" id='img'
                                style={{
                                    margin: "10px",
                                    boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)", overflow: "hidden",
                                }}>
                                <a href="https://mybudgettracker-mf.herokuapp.com/">Visit:
                                    <img
                                        src={Budget}
                                        alt="budget"
                                        width="150"
                                        height="110"
                                    />
                                </a>
                            </button>
                            <button
                            className="btn mtb-30"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)", marginTop: "25px", alignContent: "center"
                            }}>
                                <a
                                    className="mtb-10" href="https://github.com/myrlaf25/mybudgettracker">
                                    Code</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MyWork;
