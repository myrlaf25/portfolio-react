import React from "react";
import meinpink from "../assets/meinpink.jpg";
import "../../index.css";

const styles = {
  headerStyle: {
    fontSize: 70,
    padding: "25px",
    color: "#10a6cc",
    textAlign: "center",
  },
  imageStyle: {
    height: "350px",
    borderRadius: "90px",
    marginTop: "50px",
    marginLeft: "5%",
    boxShadow: "10px 9px 2px 2px rgba(15, 15, 15, 0.73)",
  },
  
};
const Home = () => (
  <>
    <div className="headerHome align-center justify-sb">
      <div className="containerHome">
        <div className="masthead">
          <div>
            <img style={styles.imageStyle} src={meinpink} alt="name" />
          </div>
        </div>
        <h1 className='textCenter'>Hello, I'm</h1>
        <h2 style={styles.headerStyle}> Myrla Flores</h2>
        <h3 className="textCenter primaryColor">I am a Full-Stack Developer.</h3>
        <div></div>
      </div>
    </div>
  </>
);

export default Home;
