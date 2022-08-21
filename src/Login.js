import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@mui/material/TextField';
import { Container,Grid,Input,Paper } from '@material-ui/core';

import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const usestyles=makeStyles((theme)=>({
    root:{
        '& > *': {
            margin:theme.spacing(1), width:'25ch',
        },
    },
}));
export default function Login(){
    
    const paperStyle={padding :'50px 20px',width:600, margin:"50px auto"}
    const[MobileNo,setMobile]=useState("")
    const[Email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
    const classes=usestyles();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const register={MobileNo,Email,Password}
        console.log(register)
        
    }
    const[state,setstate]=useState(false);
    const toggleBtn=()=>{
        setstate(prevState=>!prevState);
    }
    return(
        <div className='content'>
            <div>
        <Container>
            <Paper  elevation={5} style={paperStyle}>
        <form className={classes.root} noValidate autoComplete='off'>
            <div style={{display:'flex'}}>
     <h2 style={{padding:"15px",textAlign:'center'}}>Sign in</h2>
     </div>
      <TextField id="outlined-basic" label="MoblieNo"  variant="outlined"value={MobileNo}
      onChange={(e)=>setMobile(e.target.value)} sx={{left:'1.8%'}} type="mobile no" placeholder='Enter Mobileno' required/><br/><p>-or-</p>

<TextField id="outlined-basic" label="Email" variant="outlined" type="email" placeholder='Enter email'value={Email}
      onChange={(e)=>setEmail(e.target.value)} sx={{left:'1.8%'}}/><br></br>
<div className='wrapper'>
         <br></br><TextField  className='password' id="outlined-basic" label="Password" variant="outlined" type={state ? 'text':"password"}
      value={Password} onChange={(e)=>setPassword(e.target.value)}/>
<Button className="btn" onClick={toggleBtn}>{state?<VisibilityOffIcon/>:<VisibilityIcon/>}</Button>     

      <Grid  aligb-item="center">
<FormControlLabel style={{position:'relative',justifyContent:'cneter'}} control={<Checkbox/>} label="Remember me" />

<br></br><Button  style={{display:'flex',justifyContent:'center'}} variant="contained" onClick={handleSubmit} >Log in</Button><br></br>
</Grid>
</div>
    </form>
    
    </Paper>
    </Container>
    </div>
    </div>
  );
}
