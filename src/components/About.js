import React from 'react'
import '../style/about.css'
import me from "./images/me1.png";
export default function About(props) {
  
  return (
   <>
   <div id="about">
   <p className='topic'style={{color:`${props.headcolor}`}}>About Me</p>
    <div className="row mx-auto">
     
       <div className="col-md-6 col-12 leftabout">
        <p className="about-content" style={{color:`${props.text}`}}>
        Hi, My name is  Kaushik Vishwakarma .I am currently pursuing Btech in Computer science
        and Engineering form IIT MANDI.I love to bulid things which help people and make them 
        more lazy <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, culpa quo vel ad ullam eius cum reiciendis neque vitae, odio, laboriosam ipsa autem consequuntur amet fugit enim dolorem deleniti illum aliquam aspernatur nostrum minus possimus!<br/> Odio recusandae eos unde minima velit praesentium necessitatibus accusamus architecto maxime ullam sed natus, veritatis libero laboriosam, 
      </p>
      <div className="row">
        <p className='about-content' style={{color:`${props.text}`}}>Here are some technology on which I worked recently : </p>
        <div className="row">
          <div className="col-6" style={{color:`${props.text}`}}>
          <ul >
          <li ><i class="fa-solid fa-arrow-right"style={{color:`${props.headcolor}`}}></i>C++</li>
          <li><i class="fa-solid fa-arrow-right"style={{color:`${props.headcolor}`}}></i>Python</li>
          <li><i class="fa-solid fa-arrow-right"style={{color:`${props.headcolor}`}}></i>React JS</li>
        </ul>
          </div>
          <div className="col-6" style={{color:`${props.text}`}}>
          <ul typeof='disk'>
          <li><i class="fa-solid fa-arrow-right"style={{color:`${props.headcolor}`}}></i>Node JS</li>
          <li><i class="fa-solid fa-arrow-right"style={{color:`${props.headcolor}`}}></i>ML</li>
          <li><i class="fa-solid fa-arrow-right"style={{color:`${props.headcolor}`}}></i>Robotic's</li>
        </ul>
          </div>
        </div>
        
      </div>
             </div>
             <div className="col-md-6 col-push-12" id="imgdiv">
                <div id="img">
                  <img src={me} alt="kaushik" />
                </div>
              </div>
    </div>
   </div>
   </>
  )
}
