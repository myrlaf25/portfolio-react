import React from "react";
import Resume from "../assets/resumeLogo.png";
import Carousel from 'react-bootstrap/Carousel';
import Blog from "../assets/Projects/bluetechblog.png";
import Directory from "../assets/Projects/directory.png";
import Fitness from "../assets/Projects/fitness.png";

function Skills() {
  return (
    <div>
    <div className='containerSkills'>
    <h3 className="web bold-700 textCenter">Coding Skills</h3>
    <div ClassName="carousel">
    </div>
    
    </div>
    <div className='container skills-list'>
    <div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-20 directory"
      src={Directory}
      alt="First slide"

    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-20 blog"
      src={Blog}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-20 fitness"
      src={Fitness}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <h3 className="textCenter textColor">Experience working with the following modules:</h3>
    <ul className='list textCenter' style={{listStyle:'none'}}>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Bootstrap</li>
    <li>MySQL</li>
    <li>Node.JS</li>
    <li>Sequelize</li>
    <li>Express</li>
    <li>MongoDB</li>
    <li>React</li>
    <li>Plus more...</li>
    <button style={{
        borderRadius: "45px",
        margin: "5px",
        boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
        overflow: "hidden", 
    }}><a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:622f124c-d5e5-4c8e-86a1-4780be71070c"><img src={Resume} alt="resume"/></a></button>
    </ul>
    </div>

</div>
    </div>
  );
}

export default Skills;
