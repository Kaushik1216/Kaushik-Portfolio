import React from "react";
import "../../style/project.css";
// import { NavLink } from 'react-router-dom';
// import { useEffect} from 'react';
import { useSelector } from "react-redux";
import { useState } from "react";
export default function Projectcard(props) {
  const themecolor = useSelector((state)=>state.changeThetheme);
  const [commit, setcommit] = useState(0);
  const [rank, setrank] = useState(0);

    //  const fun=async()=>{
    //   const response = await fetch(props.e.url);
    //   console.log("Dtata" , props.e.projectName)
    //       const data = await response.json();
    //             for(var i=0;i<data.length;i++){
    //                if(data[i].login==="Kaushik1216"){
    //                   const temp={"Rank":i+1,"Commits":data[i].contributions}
    //                   setrank(i+1);
    //                   setcommit(data[i].contributions)
    //                }
    //             }
    //  }
    //  useEffect(()=>{
    //     fun();
    //  },[])

  return (
    <>
      <div className="col-sm-12 col-md-4 col-12 d-flex justify-content-center" style={{display:`${props.e.project==="self"?"":"none"}`}}>
      <div className="projectcard" style={{border:`1px solid ${themecolor.headcolor}`}}>

    <h4 className="pname">{props.e.projectName}</h4>
    <p className="pinfo">{props.e.projectInfo}</p>
    <hr style={{border:`1px solid ${themecolor.headcolor}`}}/>
    <p className="pmade">{props.e.madewith}</p>
    <a href={props.e.viewcode} rel="noreferrer"target="_blank" style={{color:`${themecolor.textcolor}`}}><button className='f-btn' style={{border:`2px solid ${themecolor.headcolor}`,backgroundColor:`${themecolor.background}`,color:`${themecolor.textcolor}`}}>View code</button></a>
      </div>
  </div>
      <div
        className="col-sm-12 col-md-4 col-12 d-flex justify-content-center"
        style={{ display: `${props.e.project === "contr" ? "" : "none"}` }}
      >
        <div className=" projectcard" style={{border:`1px solid ${themecolor.headcolor}`}}>
          <h4 className="pname">{props.e.projectName}</h4>
          <p className="pinfo">{props.e.projectInfo}</p>
          <span>
            <p className="pcommits">
              commits:{commit}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rank:{rank}
            </p>
          </span><hr style={{border:`1px solid ${themecolor.headcolor}`}}/>
          <p className="pmade">{props.e.madewith}</p>
          <a href={props.e.viewcode} rel="noreferrer"target="_blank" style={{color:`${themecolor.textcolor}`}}><button className='f-btn' style={{border:`2px solid ${themecolor.headcolor}`,backgroundColor:`${themecolor.background}`,color:`${themecolor.textcolor}`}}>View code</button></a>
        </div>
      </div>
    </>
  );
}
