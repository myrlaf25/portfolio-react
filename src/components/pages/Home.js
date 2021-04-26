import React from "react";
import meinpink from "../assets/meinpink.jpg"
const styles = {
    homeStyle: {
        background: "grey",
        margin: " 0 auto",
        Width: "100%",
        padding: "0 10px"
    },
    headerStyle:{
        fontSize: 100,
        padding: "25px",
        marginLeft: "15px"
    },
    imageStyle: {
        height: "275px",
        float: "left",
        borderRadius: "90px",
        marginTop: "15px",
        marginLeft: "5%",
        boxShadow: "10px 9px 2px 2px rgba(15, 15, 15, 0.73)"

    }
}
const Home = () => (
  <div> 
  <div style={styles.homeStyle} className="header">
      <div className="container">
        <div className="masthead">
          <img style={styles.imageStyle} src={meinpink} alt="name"/>
        </div>
        <h1 style={styles.headerStyle} >Myrla Flores</h1>
        <p>A new way to look at things</p>
        <a className="btn" href="#aboutMe"> About Me</a>
      </div>
    </div>
    </div>
);

export default Home;
