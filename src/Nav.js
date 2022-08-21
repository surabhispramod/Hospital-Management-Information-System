
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ListSharpIcon from '@mui/icons-material/ListSharp';

function Nav() {
  return (
    <nav>
      <div className='Menu'>
      <Button variant="contained"><ListSharpIcon/></Button>
      </div>
    <div className="image1">
        <img src="https://play-lh.googleusercontent.com/-iAJvOpRK3H_SfrQAMCZWYwUEx8ILBkY7-5fwrGIzowXCKhv9wd5NPwjvTLrxfdS6Q=w600-h300-pc0xffffff-pd"></img>
        </div>
        <div className='image2'>
        <img src="https://mera.pmjay.gov.in/search/images/logo_right.png"/>
        </div>
        <div className="nav-links">
        
        <Link style={{textDecoration:'none'}}to='/'>
<Button variant="contained">Home</Button>
</Link>

            <Link style={{textDecoration:'none'}}to='/about'>
            <Button variant="contained">About Us</Button>
</Link>

<Link style={{textDecoration:'none'}}to='/register'>
<Button variant="contained">Register</Button>
</Link>

<Link style={{textDecoration:'none'}}to='/login'>
<Button variant="contained">Sign in</Button>
</Link>
        </div>
    </nav>
    

  );
}

export default Nav;
