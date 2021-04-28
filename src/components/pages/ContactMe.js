import React from "react";
import LinkedIn from "../assets/linkedIn.png";
import Me from "../assets/me.png";

const styles ={
    imageStyle: {
    height: "400px",
    borderRadius: "90px",
    margin: "40px",
    boxShadow: "8px 6px 2px 2px rgba(15, 15, 15, 0.73)",
    }
}

const ContactMe = () => (
    <>
    <div className='containerContact'>
    <h3 className="bold-700 mtb-10 textCenter"style={{marginTop: '50px', fontSize: '100px', color: '#ebfaf6'}}>Contact Me</h3>
    
    <img style={styles.imageStyle} src={Me} alt="me"/>
    </div>
    <div className='container'>
    <div>
   
    <ul className='contactList textCenter' style={{listStyle:'none'}}>
        <li>Myrla Flores</li>
        <li>Phone: (520)245-9119</li>
        <li>Send me an email: <a href="mailto:myrlaf25@gmail.com">  myrlaf25@gmail.com.</a></li>
        <button style={{
          borderRadius: "45px",
          boxShadow: "8px 5px 2px 2px rgba(15, 15, 15, 0.73)",
          overflow: "hidden",
        }}><a className="linkedIn" href="https://www.linkedin.com/in/myrla-flores-756068200/">
                <img
                  src={LinkedIn}
                  alt="github placeholder"
                />
              </a></button>
    </ul>
    <h3 className='textCenter'>Thank you for stopping by!</h3>
</div>
</div>

</>
);

export default ContactMe;
