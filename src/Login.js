import React,{useState} from 'react';


import TextField from '@mui/material/TextField';
import {Grid,Paper } from '@material-ui/core';

import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login(){
    
    
    const[MobileNo,setMobile]=useState("")
    const[Email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
    
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
      
            <Paper className='paper1' elevation={5} style={{paddingLeft:"2%"}}>
        <form  noValidate autoComplete='off'>
            <div style={{display:'flex'}}>
     <h2 style={{textAlign:'center',paddingLeft:"220px"}}>Sign in</h2>
     </div>
      <TextField id="outlined-basic" label="MoblieNo"  sx={{left:'50%'}} variant="outlined"value={MobileNo}
      onChange={(e)=>setMobile(e.target.value)} type="mobile no" placeholder='Enter Mobileno' required/><br/>
<p className='para1' style={{paddingLeft:"85%"}}>-or-</p>
<TextField id="outlined-basic" label="Email" variant="outlined" type="email" sx={{left:'50%'}} placeholder='Enter email'value={Email}
      onChange={(e)=>setEmail(e.target.value)} />
<div className='wrapper'>
    
         <br></br><TextField  className='password' id="outlined-basic" label="Password" variant="outlined" type={state ? 'text':"password"}
      value={Password} sx={{left:'50%'}} onChange={(e)=>setPassword(e.target.value)} required/>
<Button className="btn2" onClick={toggleBtn}>{state?<VisibilityOffIcon/>:<VisibilityIcon/>}</Button>     

      <Grid  alignContent="center">
<FormControlLabel style={{position:'relative',justifyContent:'center'}} control={<Checkbox/>} sx={{left:'65%'}} label="Remember me" />

<br></br><Button  style={{display:'flex',justifyContent:'center'}} sx={{left:'75%'}}variant="contained" onClick={handleSubmit} >Log in</Button><br></br>
</Grid>
</div>
    </form>
    
    </Paper>
   
  );
}
