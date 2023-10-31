import React from "react";
import "../../style/project.css";
import { useSelector } from "react-redux";
import styled from 'styled-components';

export default function Projectcard(props) {
  const themecolor = useSelector((state)=>state.changeThetheme);
  
  const Button = styled.button`
  width: 7em;
  position: relative;
  height: 2.7em;
  border: 3px ridge #149CEA;
  outline: none;
  background-color: transparent;
  color:${themecolor.textcolor};
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: ${themecolor.background};
    transition: 0.5s;
    transform-origin: center;
  }
  &::before {
    content: "";
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: ${themecolor.background};
    transition: 0.5s;
  }
  &:hover::before, button:hover::after {
    transform: scale(0)
  }
  &:hover {
    box-shadow: inset 0px 0px 25px #1479EA;
  }
  `

  return (
    <>
      <div className="col-sm-12 col-md-4 col-12 d-flex justify-content-center" style={{display:`${props.e.project==="self"?"":"none"}`}}>
      <div className="projectcard" style={{border:`1px solid ${themecolor.headcolor}`}} >

    <h4 className="pname">{props.e.projectName}</h4>
    <p className="pinfo">{props.e.projectInfo}</p>
    <hr style={{border:`1px solid ${themecolor.headcolor}`}}/>
    <p className="pmade">{props.e.madewith}</p>
    <a href={props.e.viewcode} rel="noreferrer"target="_blank" style={{color:`${themecolor.textcolor}`}} className='f-btn'  ><Button >View code</Button></a>
    {/* <a href={props.e.viewcode} rel="noreferrer"target="_blank" style={{color:`${themecolor.textcolor}`}}><button className='f-btn' style={{border:`2px solid ${themecolor.headcolor}`,backgroundColor:`${themecolor.background}`,color:`${themecolor.textcolor}`}}>View code</button></a> */}
      </div>
  </div>
    </>
  );
}
