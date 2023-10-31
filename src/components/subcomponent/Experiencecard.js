import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';

export default function Projectcard(props) {
  const themecolor = useSelector((state)=>state.changeThetheme);

const Experincecardhead = styled.span`
color:${themecolor.textcolor};
margin-bottom="-10px";
`
const Div = styled.div`
// filter: grayscale(100%);
invert(100%);
&:hover{
    scale:1.1; 
    z-index: 1;
    // filter: grayscale(0);
    transition: scale 1s;
}
`
  return (
    <>
         <Div className="col d-flex flex-column">
           <div className='d-flex justify-content-center'style={{color:'#fff'}}>
           {props.item.svg}
           </div>
           <Experincecardhead className='text-center' style={{ fontWeight: 'bold',textTransform: 'uppercase'}}>{props.item.name}</Experincecardhead>
        </Div>
    </>
  );
}
