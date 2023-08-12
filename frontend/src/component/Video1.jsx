import React,{userState,useEffect} from 'react'
import "./Video1.css";

import ReactDom from "react-dom";
const Video1 = ({ channel, song, url, likes, comment, shares }) => {
    
   console.log(url+"1")
    const handleClick=(e)=>{
        e.preventDefault();
        e.target.muted=!e.target.muted;
    }
    const handlescroll=(e)=>{
        let next=ReactDom.findDOMNode(e.target).parentNode.nextSibling
        if(next){
            next.scrollIntoView()
            e.target.muted=true
        }
    }
    return (
    <>
        <video 
        className='videostyle' 
        src={url}
        onEnded={handlescroll}
        muted="muted"
        onClick={handleClick}
        loop
        

        />

      
    </>
  )
}

export default Video1