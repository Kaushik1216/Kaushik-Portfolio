import React from "react";
import "../../style/project.css";
// import { NavLink } from 'react-router-dom';
// import { useEffect} from 'react';
import { useState } from "react";
export default function Projectcard(props) {
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
      <div className="col-sm-6 col-md-4 onemore" style={{display:`${props.e.project==="self"?"":"none"}`}}>
      <div className="projectcard">

    <h4 className="pname">{props.e.projectName}</h4>
    <p className="pinfo">{props.e.projectInfo}</p>
    <hr />
    <p className="pmade">{props.e.madewith}</p>
    <a href={props.e.viewcode} rel="noreferrer"target="_blank"><button className='form-btn'>View code</button></a>
      </div>
  </div>
      <div
        className="col-4 onemore"
        style={{ display: `${props.e.project === "contr" ? "" : "none"}` }}
      >
        <div className=" projectcard">
          <h4 className="pname">{props.e.projectName}</h4>
          <p className="pinfo">{props.e.projectInfo}</p>
          <span>
            <p className="pcommits">
              commits:{commit}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rank:{rank}
            </p>
          </span><hr />
          <p className="pmade">{props.e.madewith}</p>
          <a href={props.e.viewcode} rel="noreferrer" target="_blank">
            <button className="form-btn">View code</button>
          </a>
        </div>
      </div>
    </>
  );
}
