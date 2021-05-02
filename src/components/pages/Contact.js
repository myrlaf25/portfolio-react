import React from "react";
import LinkedIn from "../assets/linkedIn.png";
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
                    style={{ marginTop: "30px", fontSize: "80px", color: "#ebfaf6" }}
                >
                    Contact Me
        </h3>
                <div>
                <img
                    className="ContactPic"
                    style={styles.imageStyle}
                    src={Me}
                    alt="me"
                />
                </div>
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
                        <button
                            style={{
                                borderRadius: "25px",
                                boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
                                overflow: "hidden",
                                
                            }}
                        >
                            <a
                                className="linkedIn btn"
                                href="https://www.linkedin.com/in/myrla-flores-756068200/"
                            >
                                <img 
                                src={LinkedIn} 
                                alt="linkedin placeholder"
                                width="150"
                                height="90"

                                 />
                            </a>
                        </button>
                        <div>
                            <button 
                            style={{ 
                                margin: "10px", borderRadius: "15px", 
                                background: "#7dd6ec", overflow: "hidden" 
                            }}>
                                <a
                                    className="btn"
                                    id="resume"
                                    href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:76cc7368-4254-4868-b88a-d287e07a7d7c"
                                >
                                    Resume
                                </a>
                            </button>
                            <div>
                                <button 
                                style={{ 
                                    margin: "10px", borderRadius: "15px", background: "#7dd6ec", overflow: "hidden" }}>
                                    <a
                                        className="btn"
                                        id="github"
                                        href="https://github.com/myrlaf25"
                                    >
                                        Github
                  </a>
                                </button>
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
