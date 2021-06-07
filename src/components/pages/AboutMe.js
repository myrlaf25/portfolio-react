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
        <h1 className="whiteColor textCenter font-60 bold-700">About Me</h1>
        <img
          className="aboutMePic"
          style={styles.imageStyle}
          src={Me}
          alt="me"
        />
      </div>
      <div className="containerMe">
        <h2 calssName="textColor textCenter mtb-30 ptb">Welcome!</h2>
        <div className="aboutMe row justify-content-center ">
          <h4 className="me bold-500 mtb-30 col-6">
            I am new to the web development world. I recently completed the Full
            Stack Coding Bootcamp through the University of Arizona.
          </h4>

          <h4 className="me bold-500 mtb-30 col-6">
            I reside in Tucson, AZ. I obtained my Bachelor’s of Science in
            Psychology in 2006 from the University of Arizona.
          </h4>

          <h4 className="me bold-500 mtb-30 col-6">
            The Bootcamp was a very challenging experience yet it was very
            rewarding. I have always enjoyed creating things and technology.
            This is the reason why I decided Web Development is for me. I cannot
            wait to begin my journey in this field.
          </h4>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
