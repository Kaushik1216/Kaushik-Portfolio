import React from "react";
import "../style/project.css";
import { selfProject,contr,urllist,reponame } from "../datas/projectdata";
import Projectcard from "./subcomponent/projectcard";
import { useState } from "react";
import { useEffect } from "react";
export default function Project(props) {
  const [commits,setCommits]=useState([]);
  const [c,setc]=useState(contr)
  // contr[c]
  const commit=[];
  const [self,setself]=useState(true);
  // const [contr,setcontr]=useState(false);
   const changeproject =async(object)=>{
        
   }
    const fetchdata = async()=>{
          for (var k=0;k<urllist.length;k++){
      const r=reponame[k];      
      // const response = await fetch(urllist[k]);
      const response=0;
      // const d=commits
      const data = await response.json();
            for(var i=0;i<data.length;i++){
               if(data[i].login==="Kaushik1216"){
                const temp={"Rank":i+1,"Commits":data[i].contributions}
                // commit[r]=temp;
                // d[r]=temp;
                // setCommits(d)
                 c.forEach(object => {
                
                      if(object["projectName"]===reponame[k]){
                        object["commit"]=temp;
                        setc(...commit,object["commit"]=temp)
                        // console.log("projectname", commit,object)
                      
                      }
                    }
                    );    
               }
            }
      }
      c.forEach(object=>{
        console.log("yes")
        commit.push(object)
      })
    
    }
    useEffect(()=>{
      fetchdata()
      // while(1){

      //   if(commit.length!=0){
      //     break;
      //   }
      // }
  // console.log(" ds s bfvgh" ,c)
  // commit=c
  console.log(" ds sc" ,commit)
  for(var i=0;i<contr.length;i++){
    contr[i].commit=commit[i];
  }
  console.log("nvjnj " ,contr)
  // c.forEach(object=>{
  //   commit.push(object)
  // })
    },[])
  
  return (
    <>
      <div >
        <div className="row">
          <p className="pageinfo" >
            <div className="row">
              <div className="col-6 text-center head" style={{color:`${self===true?`${props.headcolor}`:`${props.text}`}`}}>My Projects</div>
              <div className="col-6 text-center head">Conributions Projects</div>
            </div>
          </p>
        </div>
        <div className="row prow">
          {/* <div className="col-2">
            nvjnvnvnvnnvnvnvnje
          </div> */}
          <div className="col-12">

          <div className="row ">
          {/* <p className="projectinfo">Self Projects &nbsp;({selfProject.length})</p> */}
          {/* <hr /> */}
          {/* <div className="wrapper"> */}
            {selfProject.map((element) => {
              return <Projectcard e={element} key={element.projectCount} view={element.viewcode} />;
            })}
          {/* </div> */}
        </div>
        <div className="row projectrow">
          {/* <p className="projectinfo">Notable contributions &nbsp;({commit.length})</p> */}
          {/* <hr /> */}
          <div className="wrapper">
            {commit.map((element) => {
              // console.log(element)              
              return <Projectcard key={element.projectCount}e={element} view={element.viewcode} />;
            })}
          </div>
        </div>

          </div>

        </div>
        
      </div>
    </>
  );
}
