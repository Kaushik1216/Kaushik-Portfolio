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
    <div className=""style={{color:`${props.text}`}}>
    <p className="pageinfo"style={{color:`${themecolor.headcolor}`}}>Skills</p>
    </div>
    <div className="row" style={{color:`${props.text}`}}>
      <div className="code row" style={{border:`2px solid ${props.text!=="#fff"?"black":"#fff"}`}}>
        <h3 class="title text-center" style={{color:`${props.headcolor}`}}>Codding</h3>
        <div className="row skill-row">
          {skillsdata.map((element)=>
      {return ((element.category==="coding") && <div className="col-sm-6 col-md-4  skills-box ">
        <span className='skilldata'>{element.data}</span></div>) }
          )}
        </div>
      </div>
      </div>
    <div className="row mt-5" style={{color:`${props.text}`}}>
      <div className="code row" style={{border:`2px solid ${props.text!=="#fff"?"black":"#fff"}`}}>
        <h3 class="title text-center" style={{color:`${props.headcolor}`}}>FullStack Devlopement</h3>
        <div className="row skill-row">
          {skillsdata.map((element)=>
      {return ((element.category==="webdev") && <div className="col-sm-6 col-md-4  skills-box ">
        <span className='skilldata'>{element.data}</span></div>) }
          )}
        </div>
      </div>
     </div>
     
   </div>
   </>
  )
}
