import React from 'react'
import '../style/skills.css'
import { skillsdata } from '../datas/skiilsdata'
import { useSelector } from 'react-redux';
export default function Skill(props) {
  // https://api.github.com/users/Kaushik1216/repos
  const themecolor = useSelector((state)=>state.changeThetheme);
  return (
   <>
   <div >
    <div className="skillpage"style={{color:`${themecolor.textcolor}`}}>
    <p className="pageinfo"style={{color:`${themecolor.headcolor}`}}> My Skills</p>
    </div>
    {/* <svg width="1cm" height="10cm" viewBox="0 0 400 600"
     xmlns="http://www.w3.org/2000/svg" version="1.1" className='svgvertical' style={{}}>

<path d="M275,200 v-150"
        fill="yellow" stroke="blue" stroke-width="3" />

</svg> */}
    <div className="row" style={{color:`${themecolor.textcolor}`}}>
      <div className="code row" >
      {/* <div className="code row" style={{border:`2px solid ${themecolor.headcolor}`}}> */}
        <h3 className="title text-center" style={{color:`${themecolor.headcolor}`}}>Codding</h3>
        <div className="row skill-row">
          {skillsdata.map((element)=>
      {return ((element.category==="coding") && <div className="col-sm-6 col-md-4  skills-box " >
        <span className='skilldata' style={{backgroundColor:`${themecolor.skillsbackground}`,borderBottom:`2px solid ${themecolor.headcolor}`}}>{element.data}<footer className="skillbottom" style={{height:"1px",backgroundColor:`${themecolor.headcolor}`}}></footer></span></div>) }
          )}
        </div>
      </div>
      </div>
    <div className="row mt-5 lastrow" style={{color:`${themecolor.textcolor}`}}>
      <div className="code row" >
        <h3 className="title text-center" style={{color:`${themecolor.headcolor}`}}>FullStack Devlopement</h3>
        <div className="row skill-row">
          {skillsdata.map((element)=>
      {return ((element.category==="webdev") && <div className="col-sm-6 col-md-4  skills-box ">
        <span className='skilldata' style={{backgroundColor:`${themecolor.skillsbackground}`,borderBottom:`2px solid ${themecolor.headcolor}`}} >{element.data}</span>
        </div>) }
          )}
        </div>
      </div>
     </div>
     
   </div>
   </>
  )
}
