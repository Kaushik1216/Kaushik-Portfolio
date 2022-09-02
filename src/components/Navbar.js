import React from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom';
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
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
