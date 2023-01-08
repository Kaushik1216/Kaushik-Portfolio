import React from 'react'
import '../../style/project.css'
import { NavLink } from 'react-router-dom';
export default function projectcard(props) {
  return (
    <>
    <div  style={{display:`${props.e.project==="self"?"":"none"}`}}>
    <div className="item  projectcard col-md-4">
    <h4 className="pname">{props.e.projectName}</h4>
    <p className="pinfo">{props.e.projectInfo}</p>
    <hr />
    <p className="pmade">{props.e.madewith}</p>
    <NavLink to={{pathname:`${props.e.viewcode}`}} rel="noreferrer" target="_blank"><button className='form-btn'>View code</button></NavLink>
  </div>
  </div>
  <div style={{display:`${props.e.project==="contr"?"":"none"}`}}>
    <div className="item  projectcard col-md-4" >
    <h4 className="pname">{props.e.projectName}</h4>
    <p className="pinfo">{props.e.projectInfo}</p>
    <span><p className="pcommits">commits:15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rank:#1</p></span>
    <hr />
    <p className="pmade">{props.e.madewith}</p>
    <NavLink to={{pathname:`${props.e.viewcode}`}} rel="noreferrer" target="_blank"><button className='form-btn'>View code</button></NavLink>
  </div>
  </div>
  </>
  )
}
