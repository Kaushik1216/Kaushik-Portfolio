import React from "react";
import "../style/project.css";
import { selfProject,contr,urllist,reponame } from "../datas/projectdata";
import Projectcard from "./subcomponent/Projectcard";
import { useState } from "react";
export default function Project(props) {
  const [current,setcurrent]=useState("selfproject");
  const [hcolor,sethcolor]=useState(props.headcolor);
  const[textcolor,settextcolor]=useState(props.textcolor);
  function change(s){
    setcurrent(s);
  }
  const cstyle={
    border:`1px solid ${props.headcolor}`
  }
  return (
    <>
      <div >
        <div className="row" >
          <p className="pageinfo" >
            <div className="row">
              <div className="col-6 text-center head" >
               <span className="rowhead" onClick={()=>{change("selfproject")}} style={{color:current==="selfproject"?`${props.headcolor}`:`${props.text}`}}> My Projects 
                </span>
              </div>
              <div className="col-6 text-center head" onClick={()=>{change("contrproject")}} style={{color:current==="contrproject"?`${props.headcolor}`:`${props.text}`}}>Conributions Projects
                </div>
            </div>
          </p>
        </div>
        <div className="row prow" style={{display:current==="selfproject"?"":"none"}}>
          <div className="col-12">

          <div className="row " style={{color:`${props.text}`}}>
         
            {selfProject.map((element) => {
              return <Projectcard e={element} key={element.projectCount} view={element.viewcode} />;
            })}
            
        </div>
          </div>

        </div>
        <div className="row prow" style={{display:current==="contrproject"?"":"none"}}>
          <div className="col-12">

          <div className="row "  style={{color:`${props.text}`}}>
            {contr.map((element) => {
              return <Projectcard e={element} key={element.projectCount} view={element.viewcode} headcolor={hcolor} text={textcolor} cstyle={cstyle}/>;
            })}
        </div>
          </div>

        </div>
        
      </div>
    </>
  );
}
