import React from "react";
import LinkedIn from "../assets/linkedIn.png";
import Me from "../assets/me.png";

const styles = {
    imageStyle: {
        height: "400px",
        borderRadius: "90px",
        margin: "40px",
        boxShadow: "8px 6px 2px 2px rgba(15, 15, 15, 0.73)",
    },
};

function Contact() {
    return (
        <div>
            <div className="containerContact">
                <h3
                    className="bold-700 mtb-10 textCenter"
                    style={{ marginTop: "50px", fontSize: "100px", color: "#ebfaf6" }}
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
            <div className="container">
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
                                borderRadius: "45px",
                                boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
                                overflow: "hidden",
                            }}
                        >
                            <a
                                className="linkedIn"
                                href="https://www.linkedin.com/in/myrla-flores-756068200/"
                            >
                                <img src={LinkedIn} alt="linkedin placeholder" />
                            </a>
                        </button>
                        <div>
                            <button style={{ margin: "10px", borderRadius: "15px", background: "grey" }}>
                                <a
                                    className="btn"
                                    id="resume"
                                    href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:76cc7368-4254-4868-b88a-d287e07a7d7c"
                                >
                                    Resume
                </a>
                            </button>
                            <div>
                                <button style={{ margin: "10px", borderRadius: "15px", background: "grey" }}>
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
