import React from 'react'
import '../../style/project.css'
import { NavLink } from 'react-router-dom';
export default function projectcard(props) {
    const handleClick = () => {
        window.open(props.e.viewcode)
      };
  return (
    <div className="item  projectcard col-md-4">
    <h4 className="pname">{props.e.projectName}</h4>
    <p className="pinfo">{props.e.projectInfo}</p>
    <hr />
    <p className="pmade">{props.e.madewith}</p>
    <NavLink to={{pathname:`${props.e.viewcode}`}} target="_blank"><button className='form-btn'>View code</button></NavLink>
  </div>
  )
}
