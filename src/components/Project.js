import React from "react";
import "../style/project.css";
import { selfProject,contr,urllist,reponame } from "../datas/projectdata";
import Projectcard from "./subcomponent/projectcard";
export default function Project(props) {
  return (
    <>
      <div >
        <div className="row">
          <p className="pageinfo" >
            <div className="row">
              <div className="col-6 text-center head" >
               <span className="rowhead">My Projects </span>
              </div>
              <div className="col-6 text-center head">Conributions Projects</div>
            </div>
          </p>
        </div>
        <div className="row prow" >
          <div className="col-12">

          <div className="row ">
            {selfProject.map((element) => {
              return <Projectcard e={element} key={element.projectCount} view={element.viewcode} />;
            })}
        </div>
          </div>

        </div>
        <div className="row prow">
          <div className="col-12">

          <div className="row ">
            {contr.map((element) => {
              return <Projectcard e={element} key={element.projectCount} view={element.viewcode} />;
            })}
        </div>
          </div>

        </div>
        
      </div>
    </>
  );
}
