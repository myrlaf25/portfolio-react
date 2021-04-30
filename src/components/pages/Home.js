import React from "react";
import meinpink from "../assets/meinpink.jpg";
import "../../index.css";


function Home() {
  return (
   
    <div className="headerHome align-center justify-sb">
      <div className="containerHome">
        <div className="masthead">
        </div>
        <h1 className='textCenter textColor bold-700'>Hello, I'm</h1>
        <h2 className="headerStyle bold-700"> Myrla Flores</h2>
        <h3 className="textCenter secondaryColor bold-700">I am a Full-Stack Developer.</h3>
          <img className="inPink" src={meinpink} alt="name" />
        <div></div>
      </div>
    </div>
 
  );
}

export default Home;
