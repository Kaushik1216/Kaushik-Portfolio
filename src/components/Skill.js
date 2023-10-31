import React from 'react'
import '../style/skills.css'
import { skillsdata } from '../datas/skiilsdata'
import { useSelector } from 'react-redux';
import { Experiencesdata ,Experiencesdatadark} from '../datas/experiencedata';
import Experiencecard from '../components/subcomponent/Experiencecard'
import Workcard from '../components/subcomponent/Workcard'
import { workdata } from '../datas/workdata';
export default function Skill(props) {
  // https://api.github.com/users/Kaushik1216/repos
  const themecolor = useSelector((state)=>state.changeThetheme);
  return (
   <>
   <div id="skillpage">
    <div className="skillpage"style={{color:`${themecolor.textcolor}`}}>
    <p className="pageinfo"style={{color:`${themecolor.headcolor}`}}> My Experience</p>
    </div>
    <div id="bigscreenexp">
     <div className="row">
      <div className="col-lg-8 col-md-8 col-sm-12 align-self-end">
            <div className="row mb-4 mt-2 m-5 text-center" style={{color:`${themecolor.headcolor}`, fontWeight: 'bold'}} >
              SOME TECHNOLOGIES I'VE WORKED WITH
            </div>
            <div className="row   row-cols-1 row-cols-sm-2 row-cols-lg-5 row-cols-md-3 gy-lg-3">
          {Experiencesdata.map((item, index) => (
        <Experiencecard key={index} item={item} />
      ))}
            </div>
         </div>
  
      <div className="col-lg-4 col-md-4 col-sm-12 align-self-start" >
        <div className="row mb-4 mt-2 m-5 d-flex justify-content-center align-items-center" style={{color:`${themecolor.headcolor}`, fontWeight: 'bold',textAlign: 'center'}}>WHERE I'VE WORKED</div>
        <div className="row">
        {workdata.map((item, index) => (
        <Workcard key={index} item={item} />
      ))}
        </div>
      </div>
     </div>
     
   </div>
   </div>
   
   </>
  )
}
