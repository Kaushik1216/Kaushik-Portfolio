import React from "react";
import "../../style/project.css";
import { useSelector } from "react-redux";
import { useState } from 'react';
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Projectcard(props) {
 const themecolor = useSelector((state)=>state.changeThetheme);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const s = 'More Info>>';
const Cbutton  = styled.button`
color:${themecolor.textcolor};
background:${themecolor.headcolor};
border:0px;
borderRadius:10px;
padding:5px;
`
const Div = styled.div`
color:${themecolor.headcolor};
background:"black";
transition:1s opacity;
fontWeight:"bold";
display: flex; 
justify-content: center; 
align-items: center;
opacity:0;
&:hover{
  opacity:100;
  backdrop-filter: blur(1.5px);
}
`

const Div3 = styled.div`
border: 0.1px solid ${themecolor.headcolor};
borderRadius:"20px";
`
const t = {
  "WebNews":"images/newsapp.js"
}

return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

    <div className="col-lg-4 col-md-6 col-sm-12 " id="projectcardid" onClick={handleShow} style={{ 
      // backgroundImage: `url("`+props.item.image+`")` 
      position:'relative',cursor:"pointer"
    }}>
      <img src={props.item.image} alt={props.item.name} id="projectimage" height={200} style={{position:"absolute",top:"0%",zIndex:-1,left:"9%",filter:'50px',border:`0.5px solid ${themecolor.headcolor}`,borderRadius:'5px',width:"90%",height:"100%"}}/>
       <Div className="flex-column" id="projectcarddiv" style={{paddingLeft:"10%"}}>
        <h4 >
          {props.item.name}
        </h4>
        <Cbutton classname='p-1'style={{borderRadius:'10px',color:"#000"}}>
          More Info
        </Cbutton>
        <a href="#">
        <div id="mouse-scroll">
          <div>
              <span class="down-arrow-1" style={{borderBottom:`2px solid ${themecolor.headcolor}`, borderRight: `2px solid ${themecolor.headcolor}`}}></span>
              <span class="down-arrow-2" style={{borderBottom:`2px solid ${themecolor.headcolor}`, borderRight: `2px solid ${themecolor.headcolor}`}}></span>
              {/* <span class="down-arrow-3"></span> */}
          </div>
        </div>
        </a>
       </Div>
    </div>
      <Modal show={show} onHide={handleClose} style={{color:`${themecolor.textcolor}` , borderRadius:"10px"}}>
        <div style={{background:`${themecolor.background}`,border:`0px solid ${themecolor.headcolor}`,borderRadius:'20px'}}>
        <Modal.Body style={{background:`${themecolor.background}`}}>
          <h3 className="text-center mb-4">{props.item.name}</h3>
        <img src={props.item.image} alt={props.item.name} height="100%" width="100%" style={{border:`1.5px solid ${themecolor.headcolor}`,borderRadius:'7px'}} />
        <p className="text-center mt-2">
          {props.item.projectInfo}
        </p>
        <div className="row d-flex justify-content-center">
          {(props.item.tech).map((item) => (
            <Div3 className="col m-1 text-center d-flex justify-content-center align-items-center" style={{borderRadius:'50px',maxWidth:"200px"}}>
              {item}
            </Div3>
             ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <div className="row mx-1">
            <div class="wrapper" style={{borderRadius:'10px'}}>
            <a href={props.item.viewcode} rel="noreferrer" id="wrappera"target="_blank" style={{color:`${themecolor.textcolor}`}} className='f-btn'  ><span id="viewspan">View code</span></a>
            </div>
          </div>
          <div className="row ">
            <div class="wrapper" style={{borderRadius:'10px'}} onClick={handleClose}>
            <a id="wrappera" className='f-btn'  ><span id="viewspan">Close</span></a>
            </div>
          </div>
        </div>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
