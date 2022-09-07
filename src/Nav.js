
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import {  useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

function Nav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <nav>  
      <div className='Menu'>
      </div>
    <div className="image1">
        <img src="https://play-lh.googleusercontent.com/-iAJvOpRK3H_SfrQAMCZWYwUEx8ILBkY7-5fwrGIzowXCKhv9wd5NPwjvTLrxfdS6Q=w600-h300-pc0xffffff-pd"></img>
        </div>
        <div className='image2'>
        <img src="https://mera.pmjay.gov.in/search/images/logo_right.png"/>
        </div>
        <div className="nav-links">
        
        <Link style={{textDecoration:'none'}}to='/'>
<Button   variant="contained">Home</Button>
</Link>

            <Link style={{textDecoration:'none'}}to='/about'>
            <Button style={{left:"15%"}} variant="contained">About Us</Button>
</Link>

<Link style={{textDecoration:'none'}}to='/register'>
<Button style={{left:"30%"}} variant="contained">Register</Button>
</Link>

<Link style={{textDecoration:'none'}}to='/login'>
<Button style={{left:"60%"}} variant="contained">Sign in</Button>

</Link>

<Button  style={{left:"35%"}} variant="contained" onClick={handleDrawerOpen}><ListSharpIcon/></Button> 
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
       
        anchor="right"
        open={open}
      >
          <Button onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </Button>
        <Divider />
        <List>
          {['About us'].map((text,index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton to='/about'>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {['Register'].map((text,index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton to='/register'>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {['Login'].map((text,index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton to='/login'>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
      </Drawer>
        </div>
    </nav>
    

  );
}

export default Nav;
