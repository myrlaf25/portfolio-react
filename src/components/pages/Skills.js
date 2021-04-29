import React from "react";
import Resume from "../assets/resumeLogo.png"

function Skills() {
  return (
    <div>
    <div className='containerSkills'>
    <h3 className="web bold-700 textCenter">Web Development Skills</h3>
    </div>
    <div className='container skills-list'>
    <div>
    <h3 className="textCenter textColor">Some of the modules I have used:</h3>
    <ul className='list textCenter' style={{listStyle:'none'}}>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Bootstrap</li>
    <li>MySQL</li>
    <li>Node.JS</li>
    <li>Sequelize</li>
    <li>Express</li>
    <button style={{
        borderRadius: "45px",
        margin: "5px",
        boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
        overflow: "hidden", 
    }}><a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:76cc7368-4254-4868-b88a-d287e07a7d7c"><img src={Resume} alt="resume"/></a></button>
    </ul>
</div>

</div>
    </div>
  );
}

export default Skills;
