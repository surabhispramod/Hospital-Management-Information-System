import React,{useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Paper } from '@material-ui/core';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
    

export default function Register(){
    
    
    const[Firstname,setFirstname]=useState("")
    const[Lastname,setLastname]=useState("")
    const[Age,setAge]=useState("")
    const[DateofBirth,setDateofBirth]=useState("")
    const[Email,setEmail]=useState("")
    const[MobileNo,setMobileNo]=useState("")
    const[Password,setPassword]=useState("")
    const[ConfirmPassword,setConfirmPassword]=useState("")
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        const register={Firstname,Lastname,Age,DateofBirth,MobileNo,Email,Password,ConfirmPassword}
        console.log(register)
        setOpen(true);
        if(Password!==ConfirmPassword)
        {
        
          alert("password Not Match");
        }
        else{
          alert("You have successfully registered");
        }
        
       
        e.preventDefault();
    }
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
   
        setOpen(false);
      
    }
    const[state,setstate]=useState(false);
    const toggleBtn=()=>{
        setstate(prevState=>!prevState);
    }
    const[state1,setstate1]=useState(false);
    const toggleBtnn=()=>{
        setstate1(prevState=>!prevState);
    }
    let register=[Firstname,Lastname,Age,DateofBirth,MobileNo,Email,Password,ConfirmPassword];
React.useEffect(()=>{
  localStorage.setItem('register',JSON.stringify(register));
},[]);
    return(   
       <Paper className='paper' elevation={8} style={{paddingLeft:"2%"}}>
      <form  noValidate autoComplete='off'>
           
     <h2 className='regform' style={{paddingLeft:"40%"}}>Registration Form</h2>

<div style={{textAlign:"center"}}>
     <Typography  className='para' style={{paddingLeft:"10%"}}>Fill out the form carefully for Registration</Typography ></div><br/>
      <TextField  id="outlined-basic" label="FirstName" variant="outlined" placeholder='Enter First name' required
      value={Firstname} sx={{left:'14%'}}
      onChange={(e)=>setFirstname(e.target.value)} />

      <TextField id="outlined-basic" label="LastName" variant="outlined"  placeholder='Enter Last name'  value={Lastname}
      onChange={(e)=>setLastname(e.target.value)} sx={{left:'25%'}} required/><br/>

<br/><TextField id="outlined-basic" label="Age" variant="outlined" type="number" sx={{left:'14%'}} placeholder='Enter Age' value={Age}
      onChange={(e)=>setAge(e.target.value)} required/>

      <TextField
        id="date"
        label="Date of Birth"
        type="date"
        sx={{ width: 223 ,left:'25%' }}
        InputLabelProps={{
          shrink: true,
        }}
        value={DateofBirth}
      onChange={(e)=>setDateofBirth(e.target.value)}
      /><br/>
      
<br/><TextField id="outlined-basic" label="Mobile No" variant="outlined" type='moblie no'  placeholder='Enter Mobileno' value={MobileNo}
      onChange={(e)=>setMobileNo(e.target.value)} sx={{left:'14%'}} required/>
      

      <TextField id="outlined-basic" label="Email-Id" variant="outlined" type='email'  placeholder='Enter Email-Id' sx={{left:'25%'}} value={Email}
      onChange={(e)=>setEmail(e.target.value)}  required/><br/>
 
 
 <br/><TextField id="outlined-basic" label="Password" variant="outlined" sx={{ width: 319 ,left:'2%' }} placeholder='Enter password' 
      value={Password} onChange={(e)=>setPassword(e.target.value)} type={state ? 'text':"password"} required/>
      <Button className="btn1" onClick={toggleBtn}>{state?<VisibilityOffIcon/>:<VisibilityIcon/>}</Button>
     

<TextField id="outlined-basic" label="ConfirmPassword" variant="outlined" type={state1 ? 'text':"password"} placeholder='re-enter the passowrd' 
      value={ConfirmPassword}onChange={(e)=>setConfirmPassword(e.target.value)} sx={{width: 319,left:'4%'}} required/>
      <Button className="btn" onClick={toggleBtnn}>{state1?<VisibilityOffIcon/>:<VisibilityIcon/>}</Button><br/>

<br></br><Button variant="contained" sx={{width: 200,left:"40%"}} onClick={handleSubmit} fullWidth >Submit</Button><br></br>
<br/>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert className='alert' onClose={handleClose}  sx={{ width:'80%',paddingRight:'7%',paddingBottom:'1%'}}>
          You have registered successfully!
        </Alert>
      </Snackbar>
    
    </form>
    </Paper>
    

  
  );
}




