import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faGithub, faLinkedin);

function Footer() {
  return (
    <div className="footer">
      <div className="linkContainer">
        <a href="https://www.linkedin.com/in/myrla-flores-756068200/">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>

        <a href="https://github.com/myrlaf25">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>

        <a href="https://docs.google.com/document/d/1fDcnOEHPEfbN27_Aps3qWIHHWJ935EA0J0bP_z-MveQ/edit?usp=sharing">
          <FontAwesomeIcon icon={faFile} size="3x" />
        </a>
      </div>
      <p>Created by Myrla © 2021</p>
    </div>
  );
}

export default Footer;
