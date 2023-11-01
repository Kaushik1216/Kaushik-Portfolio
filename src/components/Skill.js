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
   <div className="skillpage text-center text"style={{color:`${themecolor.textcolor}`}}>
    <p className="pageinfo"style={{color:`${themecolor.headcolor}`}}> My Experience</p>
    </div>
   <div id="skillpage">
    
    <div id="bigscreenexp">
     <div className="row">
      <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="row mb-4 mt-2 text-center" style={{color:`${themecolor.headcolor}`, fontWeight: 'bold'}} >
              <p className='text-lg-start mx-lg-5' style={{marginBottom:"-1%"}}> SOME TECHNOLOGIES I'VE WORKED WITH </p>
              
            </div>
            <div className="row   row-cols-1 row-cols-sm-2 row-cols-lg-5 row-cols-md-3 gy-lg-3 mx--5">
          {Experiencesdata.map((item, index) => (
        <Experiencecard key={index} item={item} />
      ))}
            </div>
         </div>
  
      <div className="col-lg-4 col-md-4 col-sm-12 align-self-start" >
        <div className="row mb-4 mt-2 m-5 d-flex justify-content-center align-items-center" style={{color:`${themecolor.headcolor}`, fontWeight: 'bold',textAlign: 'center'}}>
          <p className='text-center' style={{marginBottom:"-1%"}}> WHERE I'VE WORKED </p>
          </div>
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
