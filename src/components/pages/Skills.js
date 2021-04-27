import React from "react";
const styles= {
    h3Style: {
        color: "black;",
    
    }
}
const Skills = () => (
    <div id='skills'>
    <div className='skills-list'>
    <h3 style={styles.h3Style}>Some of the things I am learning in Web Development Bootcamp. </h3>
    <ul>
        <li> HTML</li>
        <li>CSS</li>
        <li>Flexbox</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>jQuery</li>
        <li>MySQL</li>
        <li>Node.JS</li>
        <li>Sequelize</li>
        <li>Express</li>
        <li>and more to come...</li>
    </ul>


</div>
</div>
);

export default Skills;
