import React from 'react'
import '../style/about.css'
import me from "./images/me3.png";
import { useSelector } from 'react-redux';
export default function About() {
  const themecolor = useSelector((state)=>state.changeThetheme);
  return (
   <>
   <div id="about">
   <p className='topic'style={{color:`${themecolor.headcolor}`}}>About Me</p>
    <div className="row mx-auto">
    <div className="col-md-6 col-push-12" id="smallimgdiv">
                <div id="smallimg">
                  <img src={me} alt="kaushik" />
                </div>
              </div>
       <div className="col-md-6 col-12 leftabout">
        <p className="about-content" style={{color:`${themecolor.textcolor}`}}>
        Hi, My name is  Kaushik Vishwakarma .I am currently pursuing Btech in Computer Science        and Engineering from IIT MANDI.Always keep exploring and learning new technology.<br/>
        I currently know DSA,Web development,Basic of Machine learning .Always Interested in contributing in open-source projects,helping people and Freeliance
      <br/> I have recently developed many webdevelopment and machine-learning projects.
      <br/>
      <br/>
      </p>
      <div className="row">
        <p className='about-content' style={{color:`${themecolor.textcolor}`}}>Here are some technology on which I worked recently : </p>
        <div className="row">
          <div className="col-6" style={{color:`${themecolor.textcolor}`}}>
          <ul >
          <li ><i className="fa-solid fa-arrow-right"style={{color:`${themecolor.headcolor}`}}></i>C++</li>
          <li><i className="fa-solid fa-arrow-right"style={{color:`${themecolor.headcolor}`}}></i>Python</li>
          <li><i className="fa-solid fa-arrow-right"style={{color:`${themecolor.headcolor}`}}></i>React JS</li>
        </ul>
          </div>
          <div className="col-6" style={{color:`${themecolor.textcolor}`}}>
          <ul typeof='disk'>
          <li><i className="fa-solid fa-arrow-right"style={{color:`${themecolor.headcolor}`}}></i>Node JS</li>
          <li><i className="fa-solid fa-arrow-right"style={{color:`${themecolor.headcolor}`}}></i>ML</li>
          <li><i className="fa-solid fa-arrow-right"style={{color:`${themecolor.headcolor}`}}></i>Robotic's</li>
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
