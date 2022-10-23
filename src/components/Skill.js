import React from 'react'
import '../style/skills.css'
import { PythonlDiv ,CpplDiv,CplDiv} from '../datas/skiilsdata'
export default function Skill() {
  
  return (
   <>
   <div >
    <div className="row">
    <p className="pageinfo">Skills</p>
    </div>
    <div className="row">
      <div className="code row">
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
      <div className="code row mt-5">
        <h3 class="title">Full stack web development(MERN)</h3>
        <hr style={{color:"2px solid black"}}/>
        <div className="row">
          <span className='alignsub'><h5 className="subtitle">Html</h5>
          <div className="star"><strong>1</strong><i class="fa-solid fa-star"></i></div><CplDiv className="starline" ></CplDiv><div className="star"><strong>5</strong><i class="fa-solid fa-star"></i></div></span>
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
          <span className='alignsub'><h5 className="subtitle">React Js</h5>
          <div className="star"><strong>1</strong><i class="fa-solid fa-star"></i></div><PythonlDiv className="starline" ></PythonlDiv><div className="star"><strong>5</strong><i class="fa-solid fa-star"></i></div></span>
        </div>
        <div className="row">
          <span className='alignsub'><h5 className="subtitle">Node Js</h5>
          <div className="star"><strong>1</strong><i class="fa-solid fa-star"></i></div><CpplDiv className="starline"></CpplDiv><div className="star"><strong>5</strong><i class="fa-solid fa-star"></i></div></span>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}
