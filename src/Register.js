import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { Container,Paper } from '@material-ui/core';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
    
const usestyles=makeStyles((theme)=>({
    root:{
        '& > *': {
            margin:theme.spacing(1), width:'25ch',
        },
    },
}));
export default function Register(){
    
    const paperStyle={padding :'50px 20px',width:600, margin:"50px auto"}
    const[Firstname,setFirstname]=useState("")
    const[Lastname,setLastname]=useState("")
    const[Age,setAge]=useState("")
    const[DateofBirth,setDateofBirth]=useState("")
    const[Email,setEmail]=useState("")
    const[MobileNo,setMobileNo]=useState("")
    const[Password,setPassword]=useState("")
    const[ConfirmPassword,setConfirmPassword]=useState("")
    const classes=usestyles();
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
   
    return(
        <div className='content'>
            <div>
        <Container>
            <Paper elevation={5} style={paperStyle}>
        <form className={classes.root} noValidate autoComplete='off'>
            <div style={{display:'flex',justifyContent:'center'}}>
     <h2>Registration Form<br/></h2>
  
     </div>

     <p>Fill out the form carefully for Registration</p>
      <br/><TextField  id="outlined-basic" label="FirstName" variant="outlined" placeholder='Enter First name' required
      value={Firstname}
      onChange={(e)=>setFirstname(e.target.value)} />

      <TextField id="outlined-basic" label="LastName" variant="outlined"  placeholder='Enter Last name'  value={Lastname}
      onChange={(e)=>setLastname(e.target.value)} sx={{left:'6%'}} required/><br></br>

<br/><TextField id="outlined-basic" label="Age" variant="outlined" type="number"  placeholder='Enter Age' value={Age}
      onChange={(e)=>setAge(e.target.value)} required/><br/>


      <br/><TextField
        id="date"
        label="Date of Birth"
        type="date"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        value={DateofBirth}
      onChange={(e)=>setDateofBirth(e.target.value)}
      /><br/>
      
<br/><TextField id="outlined-basic" label="Mobile No" variant="outlined" type='moblie no'  placeholder='Enter Mobileno' value={MobileNo}
      onChange={(e)=>setMobileNo(e.target.value)} required/>
      

      <TextField id="outlined-basic" label="Email-Id" variant="outlined" type='email'  placeholder='Enter Email-Id' sx={{left:'6%'}} value={Email}
      onChange={(e)=>setEmail(e.target.value)} required/><br/>
 
 
 <br/><TextField id="outlined-basic" label="Password" variant="outlined"  placeholder='Enter password'  fullWidth
      value={Password} onChange={(e)=>setPassword(e.target.value)} type={state ? 'text':"password"} required/><br/>
      <Button className="btn" onClick={toggleBtn}>{state?<VisibilityOffIcon/>:<VisibilityIcon/>}</Button>
     

<br/><TextField id="outlined-basic" label="ConfirmPassword" variant="outlined" type={state1 ? 'text':"password"} placeholder='re-enter the passowrd' fullWidth
      value={ConfirmPassword}onChange={(e)=>setConfirmPassword(e.target.value)} required/><br/>
      <Button className="btn" onClick={toggleBtnn}>{state1?<VisibilityOffIcon/>:<VisibilityIcon/>}</Button>

<br></br><Button variant="contained" onClick={handleSubmit} fullWidth >Submit</Button><br></br>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose}  sx={{ width:'150%'}}>
          You have successfully Registered!
        </Alert>
      </Snackbar>
    </form>
    </Paper>
    </Container>
    </div>
    </div>
  );
}
