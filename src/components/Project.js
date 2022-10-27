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
          <p className="projectinfo">Self Projects &nbsp;({selfProject.length})</p>
          <hr />
          <div className="wrapper">
            {selfProject.map((element) => {
              return <Projectcard e={element} view={element.viewcode} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
