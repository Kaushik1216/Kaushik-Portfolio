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
    <div className=""style={{color:`${themecolor.textcolor}`}}>
    <p className="pageinfo"style={{color:`${themecolor.headcolor}`}}>Skills</p>
    </div>
    <div className="row" style={{color:`${themecolor.textcolor}`}}>
      <div className="code row" >
      {/* <div className="code row" style={{border:`2px solid ${themecolor.headcolor}`}}> */}
        <h3 class="title text-center" style={{color:`${themecolor.headcolor}`}}>Codding</h3>
        <div className="row skill-row">
          {skillsdata.map((element)=>
      {return ((element.category==="coding") && <div className="col-sm-6 col-md-4  skills-box " >
        <span className='skilldata' style={{backgroundColor:`${themecolor.skillsbackground}`,borderBottom:`2px solid ${themecolor.headcolor}`}}>{element.data}</span></div>) }
          )}
        </div>
      </div>
      </div>
    <div className="row mt-5" style={{color:`${themecolor.textcolor}`}}>
      <div className="code row" >
        <h3 class="title text-center" style={{color:`${themecolor.headcolor}`}}>FullStack Devlopement</h3>
        <div className="row skill-row">
          {skillsdata.map((element)=>
      {return ((element.category==="webdev") && <div className="col-sm-6 col-md-4  skills-box ">
        <span className='skilldata' style={{backgroundColor:`${themecolor.skillsbackground}`,borderBottom:`3px solid ${themecolor.headcolor}`}} >{element.data}</span></div>) }
          )}
        </div>
      </div>
     </div>
     
   </div>
   </>
  )
}
