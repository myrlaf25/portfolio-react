import React from "react";
import Me from "../assets/me.png";

const styles = {
    imageStyle: {
        height: "375px",
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
                
                <img
                    className="ContactPic"
                    style={styles.imageStyle}
                    src={Me}
                    alt="me"
                />
               
            </div>
           
            <div className="container" style={{marginTop:"10px"}}>
                <div>
                    <ul className="contactList textCenter" style={{ listStyle: "none" }}>
                        <li className="bold-700 font-30">Myrla Flores</li>
                        <li>Phone: (520)245-9119</li>
                        <li>
                            Send me an email:{" "}
                            <a href="mailto:myrlaf25@gmail.com"> myrlaf25@gmail.com.</a>
                        </li>
                        
                        
                        <div>
                            
                            <div>
                                
                            </div>
                        </div>
                        </ul>
                    <h3 id="thanks" className="textCenter">
                        Thank you for stopping by!
          </h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;
