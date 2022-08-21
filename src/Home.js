import { useState,useEffect} from 'react';
import './App.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import { responsiveFontSizes } from '@mui/material';

const Slideshow =({imgs})=>{
    const [index,setIndex]=useState(0)
    useEffect(()=>{
        setIndex(0)
    },[])
    const next=()=>
    {
        if(index == imgs.length-1){
            setIndex(0)
        }
        else{
            setIndex(index +1)
        }
       
    }
    const prev =()=>{
        if(index == imgs.length-1){
            setIndex(0)
        }
        else{
            setIndex(index +1)
        }
    }
  

    return(
        <div className='slideshow'>
            <img className='main' src={imgs[index]}/>
            <div className='action'>
             <button onClick={prev}><ArrowBackIosNewIcon/></button>
             <button onClick={next}><ArrowForwardIosIcon/></button>
            </div>
        
        </div>
    )
}
export default function Home(){
    return(
        <div className='Home'>
            <marquee><h2 align="center"><u>AYUSHMAN BHARAT - PRADHAN MANTRI JAN AROGYA YOJANA<br/>WELCOME</u></h2></marquee>
           
            <div className='images'>
           <Slideshow 
            imgs={[ 
'https://resize.indiatvnews.com/en/resize/newbucket/730_-/2019/06/ayushman-bharat-t2-1549021906-1561226597.jpg',

'https://1.bp.blogspot.com/-txuOUMKWnWE/XvtD4QQO2iI/AAAAAAAAFhA/wE2hH6EaleAA6G3OFp0bFeAKYfkkVKLwwCLcBGAsYHQ/s1600/Best-Doctor-Quotes-Funny-Inspirational-Thank-You.jpg',

'https://www.businesskhabar.com/wp-content/uploads/2020/07/How-will-you-get-the-benefit-of-Ayushman-Bharat-Scheme.jpg',

'https://www.magicalquote.com/wp-content/uploads/2019/10/We-dont-need-to-be-insecure-because-every-step-of-the-way-weve-had-to-be-twice-as-good-as-everybody-else.jpg',
                            ]}/><br/>
                            </div>
        </div>
    )
}