import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';

export default function Projectcard(props) {
  const themecolor = useSelector((state)=>state.changeThetheme);

const Workhead = styled.span`
color:${themecolor.textcolor};
margin-bottom="-10px";
`
const Worktitle = styled.span`
color:${themecolor.textcolor};
margin-bottom="-10px";
`

const Div = styled.div`
// filter: grayscale(100%);
invert(100%);
&:hover{
    scale:1.07; 
    z-index: 1;
    // filter: grayscale(0);
    transition: scale 1s;
}
`
const htmlString = '<p>This is a <strong>paragraph</strong>.</p>'
  return (
    <>
        <Div className="row d-flex flex-column pb-3" style={{marginLeft:"5px"}}>
           <div className='d-flex justify-content-center'>
           {props.item.img}
           </div>
           <Workhead className='text-center' style={{ fontWeight: 'bold',textTransform: 'uppercase' }}>{props.item.name}</Workhead>
           <Worktitle className='text-center' style={{ fontWeight: 'bold',textTransform: 'uppercase' }}>{props.item.position}</Worktitle>
        </Div>
    </>
  );
}
