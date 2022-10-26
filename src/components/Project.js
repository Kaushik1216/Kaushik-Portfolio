import React from "react";
import "../style/project.css";
import { selfProject } from "../datas/projectdata";
import Projectcard from "./subcomponent/projectcard";
export default function Project() {

  return (
    <>
      <div>
        <div className="row">
          <p className="pageinfo">Projects</p>
        </div>
        <div className="row projectrow">
          <p className="projectinfo">Self Projects</p>
          <hr />
        <div className="wrapper">
          {/* <div className="item  projectcard">
            <h4 className="pname">My Portfolio</h4>
            <p className="pinfo">This is my personal website made by me</p>
            <hr />
            <p className="pmade">React JS,Framer-Motion,Html,Css,JS</p>
            <Link to="https://github.com/Kaushik1216/Kaushik-Portfolio" target="_black" rel="noreferrer"><button type="Submit" className='form-btn'>View code</button></Link>
          </div>
          <div className="item projectcard">
            <h4 className="pname">My Portfolio</h4>
            <p className="pinfo">This is my personal website made by me</p>
            <hr />
            <p className="pmade">React JS,Framer-Motion,Html,Css,JS</p>
            <button onClick={handleClick} className='form-btn'>View code</button>
          </div>
          <div className="item projectcard">
            <h4 className="pname">My Portfolio</h4>
            <p className="pinfo">This is my personal website made by me</p>
            <hr />
            <p className="pmade">React JS,Framer-Motion,Html,Css,JS</p>
            <button type="Submit" className='form-btn'>View code</button>
          </div>
          <div className="item projectcard">
            <h4 className="pname">My Portfolio</h4>
            <p className="pinfo">This is my personal website made by me</p>
            <hr />
            <p className="pmade">React JS,Framer-Motion,Html,Css,JS</p>
            <button type="Submit" className='form-btn'>View code</button>
          </div>
          <div className="item projectcard">
            <h4 className="pname">My Portfolio</h4>
            <p className="pinfo">This is my personal website made by me</p>
            <hr />
            <p className="pmade">React JS,Framer-Motion,Html,Css,JS</p>
            <button type="Submit" className='form-btn'>View code</button>
          </div> */}
         {
          selfProject.map((element)=>{
       return(
<Projectcard e={element} view={element.viewcode}/>
       )
          })
         }
          </div>
        </div>
      </div>
    </>
  );
}
