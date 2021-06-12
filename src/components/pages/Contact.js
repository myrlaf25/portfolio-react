import React from "react";
import Me from "../assets/me.png";

const styles = {
  imageStyle: {
    height: "250px",
    borderRadius: "90px",
    margin: "30px",
    boxShadow: "8px 6px 2px 2px rgba(15, 15, 15, 0.73)",
  },
};

function Contact() {
  return (
    <div>
      <div className="containerContact">
        <h3
          className="bold-700 textCenter"
          style={{ marginTop: "30px", fontSize: "70px", color: "#ebfaf6" }}
        >
          Contact Me
        </h3>
      </div>

      <div className="container textCenter" style={{ marginTop: "30px" }}>
        <h4 className="bold-700 font-30">Myrla Flores</h4>
        <h4 className="font-25">Phone: (520)245-9119</h4>
        <h4 className="font-25">
          Send me an email:{" "}
          <a href="mailto:myrlaf25@gmail.com"> myrlaf25@gmail.com.</a>
        </h4>

        <h3 className="bold-700 textCenter font-30">
          Thank you for stopping by!
        </h3>
        <img
          className="ContactPic"
          style={styles.imageStyle}
          src={Me}
          alt="me"
        />
      </div>
    </div>
  );
}

export default Contact;
