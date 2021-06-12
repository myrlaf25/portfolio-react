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
                    <h4 className="bold-700 font-30 textCenter">Some of my projects...</h4>
                </div>
                <div className="row cardsContainer">
                    <div className="col-md-3 col-sm-6" style={{ background: "white", border: "solid 1px", borderRadius: "25px", boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)", margin: "10px", padding: "2px" }}>
                        <div className="card-body font-20">

                            <h3 className="card-title bold-700 textCenter" style={{ color: "#3399ff"}}>Weather Dashboard</h3>

                            <p className="card-text textCenter">HTML, CSS, JavaScript and an API.</p>
                            <p className="card-text bold-700 textCenter">This app will generate the current weather for the chosen city and a
    5-day forecast.</p>

                                    <div className="project ptb row justify-content-center">
                                    <img
                                        src={Weather}
                                        alt="weather"
                                        width="150"
                                        height="110"
                                        
                                    /></div>
                           <div className="linkContainer">
                                <a className="btn btn-primary" href="https://myrlaf25.github.io/myweatherapp/.">View Live
                                </a>
                           
                            
                                <a className="btn btn-primary" href="https://github.com/myrlaf25/myweatherapp">
                                   View Code
        </a>
                            
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6" style={{ background: "white", border: "solid 1px", borderRadius: "25px", boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)", margin: "10px", padding: "2px"  }}>
                        <div className="card-body font-20">

                        <h3 className="card-title bold-700 textCenter" style={{ color: "#3399ff"}}>1st Group Project</h3>

                            <p className="card-text">Contributors: Kate Biernat, Breon Sparrow, Kyle Simone and myself.</p>
                            <p className="card-text textCenter">HTML, CSS, Javascript, and 3 different APIs.</p>
                            <p className="card-text bold-700 textCenter">The app generates a random picture of a puppy, a random joke, the current weather, and a 5 day forecast.</p>
                            <div className="project ptb row justify-content-center">
                                    <img
                                       
                                        src={Project1}
                                        alt="project1"
                                        width="150"
                                        height="110" 
                                        /></div>

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

                    <div className="col-md-3 col-sm-6" style={{ background: "white", border: "solid 1px", borderRadius: "25px", boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)", margin: "10px", padding: "2px"  }}>
                        <div className="card-body font-20">

                        <h3 className="card-title bold-700 textCenter" style={{ color: "#3399ff"}}>2nd Group Project</h3>

                            <p className="card-text">Contributors: Triston Burns, Hanna Ferris and myself.</p>
                            <p className="card-text textCenter"> HTML, CSS, Javascript, API, MYSQL, Sequelize, Node.js,
                        Express,js, email-validator, Handlebars.</p>
                            <p className="card-text bold-700 textCenter">This is a job website. The user may post a job or hire someone who has
    posted a job.</p>
    <div className="project ptb row justify-content-center">
                                    <img
                                        src={Project2}
                                        alt="project2"
                                        width="150"
                                        height="110"
                                    /></div>

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


                    <div className="row cardsContainer2">
                    <div className="col-md-3 col-sm-6" style={{ background: "white", border: "solid 1px", borderRadius: "25px", boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)", margin: "10px", padding: "2px"  }}>
                        <div className="card-body font-20">

                            <h3 className="card-title bold-700 textCenter" style={{ color: "#3399ff"}}>Password Generator</h3>

                            <p className="card-text textCenter">HTML, CSS and JavaScript.</p>
                            <p className="card-text bold-700 textCenter">This will generate a random password for the user with set criteria.</p>

                                    <div className="project ptb row justify-content-center">
                                    <img
                                        src={Password}
                                        alt="password"
                                        width="150"
                                        height="110"
                                        
                                    /></div>
                           <div className="linkContainer">
                                <a className="btn btn-primary" href="https://myrlaf25.github.io/passwordgenerator/">View Live
                                </a>
                           
                            
                                <a className="btn btn-primary" href="https://github.com/myrlaf25/passwordgenerator">
                                   View Code
        </a>
                            
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6" style={{ background: "white", border: "solid 1px", borderRadius: "25px", boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)", margin: "10px", padding: "2px"  }}>
                        <div className="card-body font-20">

                            <h3 className="card-title bold-700 textCenter" style={{ color: "#3399ff"}}>Blue Tech Blog</h3>

                            <p className="card-text textCenter">HTML, CSS, JavaScript, API, Express, Handlebars, MySQL and Sequelize.</p>
                            <p className="card-text bold-700 textCenter">This is a CMS-style blog site similar to Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.</p>

                                    <div className="project ptb row justify-content-center">
                                    <img
                                        src={Blog}
                                        alt="blog"
                                        width="150"
                                        height="110"
                                        
                                    /></div>
                           <div className="linkContainer">
                                <a className="btn btn-primary" href="https://bluetechblog.herokuapp.com/">View Live
                                </a>
                           
                            
                                <a className="btn btn-primary" href="https://github.com/myrlaf25/BlueTechBlog">
                                   View Code
        </a>
                            
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6" style={{ background: "white", border: "solid 1px", borderRadius: "25px", boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)", margin: "10px", padding: "2px"  }}>
                        <div className="card-body font-20">

                            <h3 className="card-title bold-700 textCenter" style={{ color: "#3399ff"}}>Budget Tracker</h3>

                            <p className="card-text textCenter">HTML, CSS, JavaScript, API, Express, Mongoose, MongoDB, IndexedDB.</p>
                            <p className="card-text bold-700 textCenter">The user will have access to track their money, allowing them to access that information anytime, either online or offline.</p>

                                    <div className="project ptb row justify-content-center">
                                    <img
                                        src={Budget}
                                        alt="blog"
                                        width="150"
                                        height="110"
                                        
                                    /></div>
                           <div className="linkContainer">
                                <a className="btn btn-primary" href="https://mybudgettracker-mf.herokuapp.com/">View Live
                                </a>
                           
                            
                                <a className="btn btn-primary" href="https://github.com/myrlaf25/mybudgettracker">
                                   View Code
        </a>
                            
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>

    );
}

export default MyWork;
