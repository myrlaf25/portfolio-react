import React from "react";

const ContactMe = () => (
    <>
    <div className='containerContact'>
    <h3 className="bold-700 mtb-10 textCenter"style={{marginTop: '50px', fontSize: '100px', color: '#0695b9'}}>Contact Me</h3>
    
    </div>
    <div className='container'>
    <div>
    <h3 className="textCenter textColor">Contact Information:</h3>
    <ul className='textCenter' style={{listStyle:'none'}}>
        <li>Myrla Flores</li>
        <li>Phone: (520)245-9119</li>
        <li>Send me an email: <a href="mailto:myrlaf25@gmail.com">  myrlaf25@gmail.com.</a></li>
    </ul>
    <h3 className='textCenter'>Thank you for stopping by!</h3>
</div>

</div>

</>
);

export default ContactMe;
