import React from "react";
import "../style/project.css";
import { selfProject,contr,urllist,reponame } from "../datas/projectdata";
import Projectcard from "./subcomponent/Projectcard";
import { useState } from "react";
import { useSelector } from "react-redux";
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
      <div >
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
              return <Projectcard e={element} key={element.projectCount} view={element.viewcode} />;
            })}
            
        </div>
          </div>

        </div>
        <div className="row prow" style={{display:current==="contrproject"?"":"none"}}>
          <div className="col-12">

          <div className="row "  style={{color:`${themecolor.textcolor}`}}>
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
