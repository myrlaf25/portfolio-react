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
                <div className="mtb-30">
                    <h4 className="bold-700">You may find my work at:</h4>
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
                                width="180"
                                height="100"
                            />
                        </a></button>
                    <h4 className="bold-700 textColor font-30 textCenter">Some of my projects...</h4>
                </div>
                <div className="cardsContainer">
                    <div className="card" style={{ width: "18rem", borderRadius: "25px"  }}>
                        <div className="card-body" style={{ background: "white", border: "solid black 10px", borderRadius: "25px" }}>

                            <h3 className="card-title bold-700 textCenter" style={{background: "black", color: "#87a7b3"}}>Weather Dashboard</h3>

                            <p className="card-text">Modules: HTML, CSS, JavaScript and an API.</p>
                            <p className="card-text bold-700">This app will generate the current weather for the chosen city and a
    5-day forecast.</p>


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
                                        width="200"
                                        height="130"
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
                    </div>

                    <div className="card" style={{ width: "18rem", borderRadius: "25px"  }}>
                        <div className="card-body" style={{ background: "white", border: "solid black 10px", borderRadius: "25px"  }}>

                            <h3 className="card-title bold-700 textCenter" style={{background: "black", color: "#f5f7b2"}}>1st Group Project</h3>

                            <p className="card-text">Group Project Contributors: Kate Biernat, Breon Sparrow, Kyle Simone
                        and myself.</p>
                            <p className="card-text">Modules: HTML, CSS, Javascript, and 3 different APIs.</p>
                            <p className="card-text bold-700">The app generates a random picture of a puppy, a random joke, the
    current weather, and a 5 day forecast.</p>


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
                                        width="200"
                                        height="130" 
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
                                    href="https://github.com/kebiernat5/Dad-Joke-Pup-Forecast"
                                >
                                    Pup-Joke Repo
</a>
                            </button>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem", borderRadius: "25px"  }}>
                        <div className="card-body" style={{ background: "white", border: "solid black 10px", borderRadius: "25px"  }}>

                            <h3 className="card-title textColor bold-700 textCenter" style={{background: "black", color: "#f21170"}}>2nd Group Project</h3>

                            <p className="card-text"> Group Project Contributors: Triston Burns, Hanna Ferris and myself.</p>
                            <p className="card-text"> Modules: HTML, CSS, Javascript, API, MYSQL, Sequelize, Node.js,
                        Express,js, email-validator, Handlebars.</p>
                            <p className="card-text bold-700">This is a job website. The user may post a job or hire someone who has
    posted a job.</p>


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
                                        width="200"
                                        height="130"
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
                    </div>
                    </div>
                    <div className="cardsContainer2">
                    <div className="card" style={{ width: "18rem", borderRadius: "25px"  }}>
                        <div className="card-body" style={{ background: "white", border: "solid black 10px", borderRadius: "25px"}}>

                            <h3 className="card-title bold-700 textCenter" style={{background: "black", color:"#ffc288"}}>Password Generator</h3>


                            <p className="card-text">Modules: HTML, CSS and JavaScript.</p>
                            <p className="card-text bold-700">This will generate a random password for the user with set criteria.</p>


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
                                        width="200"
                                        height="130"
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
                    </div>
                    <div className="card" style={{ width: "18rem", borderRadius: "25px"  }}>
                        <div className="card-body" style={{ background: "white", border: "solid black 10px", borderRadius: "25px"  }}>

                            <h3 className="card-title bold-700 textCenter" style={{background: "black", color: "#77acf1"}}>Blue Tech Blog</h3>


                            <p className="card-text">Modules: HTML, CSS, JavaScript, API, Express, Handlebars, MySQL and Sequelize.</p>
                            <p className="card-text bold-700">This is a CMS-style blog site similar to Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.</p>


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
                                        width="200"
                                        height="130"
                                    />
                                </a>
                            </button>
                            <button
                                className="btn mtb-30"
                                style={{
                                    borderRadius: "20px",
                                    boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)"
                                }}>
                                <a className="mtb-10" href="https://github.com/myrlaf25/BlueTechBlog">
                                    Blog Repo</a></button>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem", borderRadius: "25px" }}>
                        <div className="card-body" style={{ background: "white", border: "solid black 10px", borderRadius: "25px" }}>

                            <h3 className="card-title bold-700 textCenter" style={{background: "black", color: "#f3bda1"}}>Budget Tracker</h3>


                            <p className="card-text">Modules: HTML, CSS, JavaScript, API, Express, Mongoose, MongoDB, IndexedDB.</p>
                            <p className="card-text bold-700">The user will have access to track their money, allowing them to access that information anytime, either online or offline.</p>


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
                                        width="200"
                                        height="130"
                                    />
                                </a>
                            </button>
                            <button
                                className="btn mtb-30"
                                style={{
                                    borderRadius: "20px",
                                    boxShadow: "5px 3px 1px 1px rgba(15, 15, 15, 0.73)",
                                }}>
                                <a
                                    className="mtb-10" href="https://github.com/myrlaf25/mybudgettracker">
                                    Budget Repo</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MyWork;
