import React from "react";
import meinpink from "../assets/meinpink.jpg";
import "../../index.css";

const styles = {
  headerStyle: {
    fontSize: 100,
    padding: "25px",
    color: "white",
    textAlign: "center",
  },
  imageStyle: {
    height: "300px",
    borderRadius: "90px",
    marginTop: "50px",
    marginLeft: "5%",
    boxShadow: "10px 9px 2px 2px rgba(15, 15, 15, 0.73)",
  },
  pStyle: {
    color: "white",
    marginTop: "140px",
    textAlign: "center",
    fontSize: "50px",
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
        <h1 style={styles.headerStyle}>Myrla Flores</h1>
        <p style={styles.pStyle}>A new way to look at things</p>
        <div></div>
      </div>
    </div>
  </>
);

export default Home;
