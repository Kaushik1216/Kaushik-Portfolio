import React from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const navbar={
  color:`${props.text}`}
  return (
    <>
    <nav className='menu-nav'>
      <div className="logo">
        <h2>Kaushik</h2>
      </div>
      <div className="menu-link" style={navbar}>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="theme" >
      <input type="checkbox"  className="checkbox" id="checkbox" name="checkBox" onChange={props.themeChange}/><label htmlFor="checkbox" className="label">
  
      <i className={`fa-solid fa-1x fa-${props.font}`} ></i>
  
      </label>
      </div>
    </nav>
    </>
  )
}
