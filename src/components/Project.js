import React from "react";
import "../style/project.css";
import { selfProject,contr } from "../datas/projectdata";
import Projectcard from "./subcomponent/projectcard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function Project() {
  const [contributors, setContributors] = useState([]);
  const [commits,setCommits]=useState(0);

  const url="https://api.github.com/repos/SnTC-IITMandi/Gymkhana-IITMandi/contributors"
    const fun =async()=>{
    try {
      
      const response = await fetch(url);
      setContributors(response);
      console.log(contributors)
      const data = await response.json();
            for(var i=0;i<data.length;i++){
               if(data[i].login==="Kaushik1216"){
                setCommits(data[i].contributions)
               }
            }
        console.log(commits)
    } catch (error) {
      console.log(error)
    }
    }
    useEffect(()=>{
      fun();
    },[commits])
  return (
    <>
      <div>
        <div className="row">
          <p className="pageinfo">Projects</p>
        </div>
        <div className="row projectrow">
          <p className="projectinfo">Self Projects &nbsp;({selfProject.length})</p>
          <hr />
          <div className="wrapper">
            {selfProject.map((element) => {
              return <Projectcard e={element} view={element.viewcode} />;
            })}
          </div>
        </div>
        <div className="row projectrow">
          <p className="projectinfo">Notable contributions &nbsp;({contr.length})</p>
          <hr />
          <div className="wrapper">
            {contr.map((element) => {
              return <Projectcard key={element.projectCount}e={element} view={element.viewcode} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
