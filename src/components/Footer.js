import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faGithub, faLinkedin)


function Footer() {
 
  return (
    <div className="footer">
   
    <div className="linkContainer">
  <a href="https://www.linkedin.com/in/myrla-flores-756068200/"><FontAwesomeIcon icon={faLinkedin } size="3x"/></a>

   <a href="https://github.com/myrlaf25"><FontAwesomeIcon icon={ faGithub } size="3x" /></a>

   <a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:4221a4e5-c1d2-4c4a-8617-48f89ca713d7"><FontAwesomeIcon icon={ faFile } size="3x" /></a></div>
    <p>Created by Myrla © 2021</p>
  
  </div>
  
  
  );
}

export default Footer;
