import React from "react";
import Me from "../assets/meAndSkids.jpg"
const styles ={
    imageStyle: {
    height: "350px",
    borderRadius: "90px",
    marginTop: "200px",
    marginLeft: "800px",
    boxShadow: "8px 6px 2px 2px rgba(15, 15, 15, 0.73)",
    }
}

const AboutMe = () => (
    <>
  <div className="headerAbout">
  <img style={styles.imageStyle} src={Me} alt="me"/>
  </div>  
  <div className="container" >
  <div>
  <div className="flexRow justify-sb align-center">
    <div>
    <h1 className="textColor mtb-10">About Me</h1>
    <p className="bold-700 mtb-10 font-25 ptb" >
    Hello, my name is Myrla Flores. I am new to the web development world.
    I am currently enrolled in the Full Stack Coding Bootcamp through the
    University of Arizona.
  </p>
  <p className="bold-700 mtb-10 font-25 ptb" >
    I currently reside in Tucson, AZ. I have a Bachelor’s of Science in
    Psychology from The University of Arizona. Most of my work experience
    in is Case Management.
  </p>
  <div>
  <p className="bold-700 mtb-10 font-25 ptb" >
    This has been a very challenging experience yet it has been very
    rewarding. I have always enjoyed creating things and computers. This
    is the reason why I decided that Web Development was for me.
  </p>
  </div>
  </div>
  </div>
  </div>
  </div> 
  </>
);

export default AboutMe;
