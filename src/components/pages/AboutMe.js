import React from "react";
import Me from "../assets/meAndSkids.jpg";
const styles = {
  imageStyle: {
    height: "375px",
    borderRadius: "40px",
    margin: "30px",
    boxShadow: "8px 6px 2px 2px rgba(15, 15, 15, 0.73)",
  },
};

function AboutMe() {
  return (
    <>
      <div className="headerAbout">
      <h1
        className="whiteColor textCenter font-60 bold-700"
      >
        About Me
      </h1>
      <img
        className="aboutMePic"
        style={styles.imageStyle}
        src={Me}
        alt="me"
      />
      </div>
      <div className="containerMe">
        <div>
        <h2 calssName="textColor textCenter mtb-30 ptb">Welcome to my portfolio.</h2>
          <h4 className="bold-500 mtb-30">
            Hello, my name is Myrla Flores. I am new to the web development
            world. I am currently enrolled in the Full Stack Coding Bootcamp
            through the University of Arizona.
          </h4>

          <h4 className="bold-500 mtb-30">
            I currently reside in Tucson, AZ. I have a Bachelor’s of Science in
            Psychology from The University of Arizona. Most of my work
            experience has been in Case Management.
          </h4>

          <h4 className="bold-500 mtb-30">
            The Bootcamp has been a very challenging experience yet it has been very
            rewarding. I have always enjoyed creating things and working with computers. This
            is the reason why I decided Web Development is for me. I cannto wait to begin my journey in this field. 
          </h4>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
