import React from 'react'
import '../style/navbar.css'
export default function Navbar() {
  return (
   <>
    <div className="row" id="navbar">
      <div className="col-sm-6"><p  id="logo" >KV</p></div>
      <div className="col-sm-1">Start</div>
      <div className="col-sm-1">About</div>
      <div className="col-sm-1">Work</div>
      <div className="col-sm-1">Skills</div>
      <div className="col-sm-1">Connect</div>
      <div className="col-sm-1">
        <input type="checkbox"  className="checkbox" id="checkbox"/><label htmlFor="checkbox" class="label">
        <i className="fa-solid fa-moon "></i>
      <i className="fa-solid fa-sun "></i>
   
    
      <div className="ball"></div>
      </label></div>
    </div>
    
   </>
  )
}
