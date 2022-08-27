import React from 'react'
import '../style/navbar.css'
import {useState} from 'react';
export default function Navbar(props) {
  const[font,setFont]=useState('sun');
   const fontChange=()=>{
     if(font==='sun'){
      setFont('moon');
     }else{
      setFont('sun');
     }
   }
  return (
    <>
    <nav className='menu-nav'>
      <div className="logo">
        <h2>Kaushik</h2>
      </div>
      <div className="menu-link">
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/project">Project</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="theme" >
      <input type="checkbox"  className="checkbox" id="checkbox" name="checkBox" onChange={props.themeChange}/><label htmlFor="checkbox" class="label">
  
      <i className={`fa-solid fa-1x fa-${font}`} onClick={fontChange}></i>
   
    
      <div className="ball"></div>
      </label>
      </div>
    </nav>
    </>
  )
}
