import React from "react";
import "../style/project.css";
import { selfProject,contr,urllist,reponame } from "../datas/projectdata";
import Projectcard1 from "./subcomponent/Projectcard1";
import Projectcard2 from "./subcomponent/Projectcard2";
import Projectcard from "./subcomponent/Projectcard";
import { useState } from "react";
import Popup from 'react-popup';
import {projectdata} from '../datas/projectnewdata';
import { useSelector } from "react-redux";
// #0B1D2A
export default function Project() {
  const themecolor = useSelector((state)=>state.changeThetheme);
  const [current,setcurrent]=useState("selfproject");
  const [hcolor,sethcolor]=useState(themecolor.headcolor);
  const[textcolor,settextcolor]=useState(themecolor.textcolor);
  function change(s){
    setcurrent(s);
  }
  const cstyle={
    border:`1px solid ${themecolor.headcolor}`
  }
  return (
    <> 
    <div className="skillpage text-center text"style={{color:`${themecolor.textcolor}`}}>
    <p className="pageinfo"style={{color:`${themecolor.headcolor}`}}>My Work</p>
    <h6 >
      More comming soon . .
    </h6>
    </div>
    <div style={{marginLeft:"-27px"}}>
    <div className="mb-lg-5 mb-md-3 mb-sm-2">
    
    <div className="row g-3 d-flex justify-content-center mt-2">
    {projectdata.map((item, index) => (
        <Projectcard key={index} item={item} themecolor={themecolor} headcolor={themecolor.headcolor}/>
      ))}
    </div>
   </div>
      {/* <div >
        <div className="row" >
          <p className="pageinfo  justify-content-center" >
            <div className="row">
              <div className="col-6 text-center head" >
               <span className="text-center rowhead" onClick={()=>{change("selfproject")}} style={{color:current==="selfproject"?`${themecolor.headcolor}`:`${themecolor.textcolor}`}}> My Projects 
                </span>
              </div>
              <div className="col-6 text-center head" onClick={()=>{change("contrproject")}} style={{color:current==="contrproject"?`${themecolor.headcolor}`:`${themecolor.textcolor}`}}>Conributions Projects
                </div>
            </div>
          </p>
        </div>
        <div className="row prow" style={{display:current==="selfproject"?"":"none"}}>
          <div className="col-12">

          <div className="row " style={{color:`${themecolor.textcolor}`}}>
         
            {selfProject.map((element) => {
              return <Projectcard1 e={element} key={element.projectCount} view={element.viewcode} />;
            })}
            
        </div>
          </div>

        </div>
        <div className="row prow" style={{display:current==="contrproject"?"":"none"}}>
          <div className="col-12">

          <div className="row "  style={{color:`${themecolor.textcolor}`}}>
            {contr.map((element) => {
              return <Projectcard2 e={element} key={element.projectCount} view={element.viewcode} headcolor={hcolor} text={textcolor} cstyle={cstyle}/>;
            })}
        </div>
          </div>

        </div>
        
      </div> */}
    </div>
    </>
  );
}
