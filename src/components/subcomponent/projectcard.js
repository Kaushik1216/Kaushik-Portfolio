import React from 'react'
import '../../style/project.css'
import { NavLink } from 'react-router-dom';
export default function projectcard(props) {
  console.log()
  return (
    <>
    <div className="col-4 onemore" style={{display:`${props.e.project==="self"?"":"none"}`}}>
      <div className="projectcard">

    <h4 className="pname">{props.e.projectName}</h4>
    <p className="pinfo">{props.e.projectInfo}</p>
    <hr />
    <p className="pmade">{props.e.madewith}</p>
    <a href={props.e.viewcode} rel="noreferrer"target="_blank"><button className='form-btn'>View code</button></a>
      </div>
  </div>
    <div className="item  projectcard  col-4" style={{display:`${props.e.project==="contr"?"":"none"}`}}>
    <h4 className="pname">{props.e.projectName}</h4>
    <p className="pinfo">{props.e.projectInfo}</p>
    <span><p className="pcommits">commits:{}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rank:#1</p></span>
    <hr />
    <p className="pmade">{props.e.madewith}</p>
    <a href={props.e.viewcode} rel="noreferrer"target="_blank"><button className='form-btn'>View code</button></a>
  </div>
  </>
  )
}
