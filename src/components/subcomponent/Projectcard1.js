import React from "react";
import "../../style/project.css";
import { useSelector } from "react-redux";
import styled from 'styled-components';

export default function Projectcard(props) {
  const themecolor = useSelector((state)=>state.changeThetheme);
//   const Buttonlight = styled.button`
// background-color:${themecolor.background};
// color:${themecolor.textcolor};
// border:2px solid ${themecolor.headcolor};
// border-radius: 3px;
// background: linear-gradient(to right, ${themecolor.headcolor} 50%, white 50%);
// transition: all .4s ease-out;
// background-size: 200% 100%;
// background: rotate(20deg);
// background-position: right bottom;
// &:hover{
// background-color:${themecolor.headcolor};
// border:2px solid ${themecolor.textcolor};
// color:${themecolor.background};
// background-position: left bottom;
// }
// `

  return (
    <>
      <div className="col-sm-12 col-md-4 col-12 d-flex justify-content-center" style={{display:`${props.e.project==="self"?"":"none"}`}}>
      <div className="projectcard" style={{border:`1px solid ${themecolor.headcolor}`}} >

    <h4 className="pname">{props.e.projectName}</h4>
    <p className="pinfo">{props.e.projectInfo}</p>
    <hr style={{border:`1px solid ${themecolor.headcolor}`}}/>
    <p className="pmade">{props.e.madewith}</p>
    <a href={props.e.viewcode} rel="noreferrer"target="_blank" style={{color:`${themecolor.textcolor}`}}><button className='f-btn' style={{border:`2px solid ${themecolor.headcolor}`,backgroundColor:`${themecolor.background}`,color:`${themecolor.textcolor}`}}>View code</button></a>
      </div>
  </div>
    </>
  );
}
