import React from "react";
import "../style/project.css";
import { selfProject,contr,urllist,reponame } from "../datas/projectdata";
import Projectcard from "./subcomponent/projectcard";
import { useState } from "react";
import { useEffect } from "react";
export default function Project() {
  const [commits,setCommits]=useState({});
var j=0;
    const fun =async(url)=>{
    try {
      
      const response = await fetch(url);
      const d=commits
      const data = await response.json();
            for(var i=0;i<data.length;i++){
               if(data[i].login==="Kaushik1216"){
                const temp={"Rank":i+1,"Commits":data[i].contributions}
                d[reponame[j]]=temp;
                j++;
                setCommits(d)
               }
            }
    } catch (error) {
      console.log(error)
    }
    }
    useEffect(()=>{
    for (var k=0;k<urllist.length;k++){
    fun(urllist[k])
    }
    console.log(commits);
    },[commits,fun])
  
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
              return <Projectcard e={element} key={element.projectCount} view={element.viewcode} />;
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
