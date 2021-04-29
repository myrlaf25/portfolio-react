import React from "react";
import Me from "../assets/meAndSkids.jpg"
const styles ={
    imageStyle: {
    height: "350px",
    borderRadius: "90px",
    margin: "40px",
    boxShadow: "8px 6px 2px 2px rgba(15, 15, 15, 0.73)",
    }
}

function AboutMe() {
  return (
      <>
    <div className="headerAbout">
    <h1 className="textColor textCenter bold-700"style={{ fontSize: "80px"}}>About Me</h1>
    <img className="aboutMePic" style={styles.imageStyle} src={Me} alt="me"/>
    </div>  
    <div className="containerMe" >
    <div className="align-center ">
    <div>
      <p className="bold-700 mtb-130 font-25 ptb">
      Hello, my name is Myrla Flores. I am new to the web development world.
      I am currently enrolled in the Full Stack Coding Bootcamp through the
      University of Arizona.
    </p>
    </div>
    <div>
    <p className="bold-700 mtb-130 font-25 ptb" >
      I currently reside in Tucson, AZ. I have a Bachelor’s of Science in
      Psychology from The University of Arizona. Most of my work experience
      in is Case Management.
    </p>
    </div>
    <div>
    <p className="bold-700 mtb-130 font-25 ptb" >
      This has been a very challenging experience yet it has been very
      rewarding. I have always enjoyed creating things and computers. This
      is the reason why I decided that Web Development was for me.
    </p>
    </div>
    </div>
    </div>
   
    </>
  );
}

export default AboutMe;
