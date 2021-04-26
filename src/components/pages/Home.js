import React from "react";
import meinpink from "../assets/meinpink.jpg"

const Home = () => (
  <div> 
  <div className="header">
      <div className="container">
        <div className="masthead">
          <img src={meinpink} alt="name"/>
        </div>
        <h1>Myrla Flores</h1>
        <p>A new way to look at things</p>
        <a className="btn" href="#aboutMe"> About Me</a>
      </div>
    </div>
    </div>
);

export default Home;
