import React from 'react'
import '../style/skills.css'
import { PythonlDiv ,CpplDiv,CplDiv} from '../datas/skiilsdata'
export default function Skill(props) {
  // https://api.github.com/users/Kaushik1216/repos
  return (
   <>
   <div >
    <div className="row "style={{color:`${props.text}`}}>
    <p className="pageinfo"style={{color:`${props.text}`}}>Skills</p>
    </div>
    <div className="row" style={{color:`${props.text}`}}>
      <div className="code row" style={{border:`2px solid ${props.text!=="#fff"?"black":"#fff"}`}}>
        <h3 class="title">Codding</h3>
        <hr style={{color:"2px solid black"}}/>
        <div className="row">
          <span className='alignsub'><h5 className="subtitle">CP</h5>
          <div className="star"><strong>1</strong><i class="fa-solid fa-star"></i></div><CplDiv className="starline" ></CplDiv><div className="star"><strong>5</strong><i class="fa-solid fa-star"></i></div></span>
        </div>
        <div className="row">
          <span className='alignsub'><h5 className="subtitle">Python</h5>
          <div className="star"><strong>1</strong><i class="fa-solid fa-star"></i></div><PythonlDiv className="starline" ></PythonlDiv><div className="star"><strong>5</strong><i class="fa-solid fa-star"></i></div></span>
        </div>
        <div className="row">
          <span className='alignsub'><h5 className="subtitle">C++</h5>
          <div className="star"><strong>1</strong><i class="fa-solid fa-star"></i></div><CpplDiv className="starline"></CpplDiv><div className="star"><strong>5</strong><i class="fa-solid fa-star"></i></div></span>
        </div>
      </div>
      <div className="code row mt-5 second"style={{border:`2px solid ${props.text!=="#fff"?"black":"#fff"}`}}>
        <h3 class="title">Full stack web development(MERN)</h3>
        <hr style={{color:"2px solid black"}}/>
        <div className="row">
          <span className='alignsub'><h5 className="subtitle">Html</h5>
        <div className="star "><strong>1</strong><i class="fa-solid fa-star"></i></div><CplDiv className="starline" ></CplDiv><div className="star"><strong>5</strong><i class="fa-solid fa-star"></i></div></span>
        </div>
        <div className="row">
          <span className='alignsub'><h5 className="subtitle">Css</h5>
          <div className="star"><strong>1</strong><i class="fa-solid fa-star"></i></div><CplDiv className="starline" ></CplDiv><div className="star"><strong>5</strong><i class="fa-solid fa-star"></i></div></span>
        </div>
        <div className="row">
          <span className='alignsub'><h5 className="subtitle">JS</h5>
          <div className="star"><strong>1</strong><i class="fa-solid fa-star"></i></div><CplDiv className="starline" ></CplDiv><div className="star"><strong>5</strong><i class="fa-solid fa-star"></i></div></span>
        </div>
       
        <div className="row">
          <span className='alignsub'><h5 className="subtitle">ReactJs</h5>
          <div className="star"><strong>1</strong><i class="fa-solid fa-star"></i></div><PythonlDiv className="starline" ></PythonlDiv><div className="star"><strong>5</strong><i class="fa-solid fa-star"></i></div></span>
        </div>
        <div className="row">
          <span className='alignsub'><h5 className="subtitle">NodeJs</h5>
          <div className="star"><strong>1</strong><i class="fa-solid fa-star"></i></div><CpplDiv className="starline"></CpplDiv><div className="star"><strong>5</strong><i class="fa-solid fa-star"></i></div></span>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}
