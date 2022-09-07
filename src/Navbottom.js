
import React from 'react';
import './App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
function Navbottom() {
  return (
    <nav className="navbo" style={{ minHeight:"11vh"}}>
   <br/> <Typography style={{paddingRight:"70%",color:'black'}}><u>Contact us</u> : +080 12345678<br/><u>Email</u> : XYZ@gamil.com </Typography >
   <div>
    < Typography className='bottom'style={{color:'black'}}><u>Follow us on</u><br/><FacebookIcon/>  <InstagramIcon/>   <LinkedInIcon/></Typography >
 
   </div>
   
    </nav>
    

  );
}

export default Navbottom;
