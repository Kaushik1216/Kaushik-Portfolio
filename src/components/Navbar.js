import React from 'react'
import '../style/navbar.css'
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { darktheme } from '../actions';
import { lighttheme } from '../actions';
export default function Navbar(props) {

  const themecolor = useSelector((state)=>state.changeThetheme);
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const [active,setactive]=useState({"home":true,"about":false,"skills":false,"project":false,"contact":false});
  const homePage = () => {
     setactive({"home":true,"about":false,"skills":false,"project":false,"contact":false});
     document.title="Kaushik | Home";
      navigate("/")
  }
  const about = () => {
    setactive({"home":false,"about":true,"skills":false,"project":false,"contact":false});
    document.title="Kaushik | About";
      navigate("/about")
  }
  const skills = () => {
    setactive({"home":false,"about":false,"skills":true,"project":false,"contact":false});
    document.title="Kaushik | Skills";
      navigate("/skills")
  }
  const project= () => {
    setactive({"home":false,"about":false,"skills":false,"project":true,"contact":false});
    document.title="Kaushik | Projects";
      navigate("/projects")
  }
  const contact = () => {
    setactive({"home":false,"about":false,"skills":false,"project":false,"contact":true});
    document.title="Kaushik | Contact";
      navigate("/contact")
  }
  
  return (
    <>
    <nav className='menu-nav'>
      <div className="logo">
        <h2 onClick={homePage}style={{color:`${themecolor.headcolor}`}}>
          <img src={props.kaushik} alt="" />
          {/* <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav__logo"><path d="M30.5641 39.6086L12.7018 18.7015L24.9536 3.21452C26.3093 1.55091 28.3579 0.528463 30.6109 0.522708H30.8407V0.00333681H19.7472V0.512639H20.2549C21.6977 0.512639 22.4125 1.94703 21.5196 3.23082L9.1325 20.2457L26.5343 40.5601C35.8616 51.4447 43.7342 50.3518 47.2125 49.4886V48.9131C40.7537 48.9131 34.7589 44.5347 30.5641 39.6091V39.6086ZM37.5136 33.5579L24.1171 17.8772L33.3056 6.26214C34.3229 5.01431 35.8589 4.24748 37.5486 4.24316H37.7215V3.85375H29.401V4.23596H29.7818C30.8639 4.23596 31.4001 5.31164 30.7304 6.27461L21.4403 19.0358L34.4914 34.271C41.4869 42.4351 47.3915 41.6151 50 40.9677V40.5361C45.156 40.5361 40.6596 37.2525 37.5136 33.5584V33.5579ZM10.8077 39.7031C8.96922 39.7031 7.47785 38.0893 7.44371 36.0852V4.15301C7.49536 2.1657 8.97928 0.570682 10.8068 0.570682L11.4713 0.572116L11.4796 0.00237089L7.29006 0V0.00333681H4.18958V0H0L0.00874992 0.575453L0.673236 0.570682C2.50385 0.570682 3.99085 2.17192 4.03637 4.16595V36.0848C4.00223 38.0889 2.51085 39.7031 0.672795 39.7031L0.00832244 39.7021L0 40.2714H11.4809L11.4722 39.7021L10.8077 39.7031Z" fill="currentColor"></path></svg> */}
          </h2>
        {/* <h2 onClick={homePage}style={{color:`${props.text==="#000"?"#6D83F2":"#74FAC0"}`}}>𝓚𝓪𝓾𝓼𝓱𝓲𝓴</h2> */}
      </div>
      <div className="menu-link" >
        <ul >
          <li style={{color:`${active.home===true?`${themecolor.headcolor}`:`${themecolor.textcolor}`}`}} onClick={homePage}>Home</li>
          <li style={{color:`${active.about===true?`${themecolor.headcolor}`:`${themecolor.textcolor}`}`}} onClick={about}>About</li>
          <li style={{color:`${active.skills===true?`${themecolor.headcolor}`:`${themecolor.textcolor}`}`}} onClick={skills}>Skills</li>
          <li style={{color:`${active.project===true?`${themecolor.headcolor}`:`${themecolor.textcolor}`}`}} onClick={project}>Project</li>
          <li style={{color:`${active.contact===true?`${themecolor.headcolor}`:`${themecolor.textcolor}`}`}} onClick={contact}>Contact</li>
        </ul>
      </div>
      <div className="theme" style={{color:`${themecolor.textcolor}`,border:`2px solid ${themecolor.textcolor}`}} >
      <input type="checkbox"  className="checkbox" id="checkbox" name="checkBox" onChange={props.themeChange}/><label htmlFor="checkbox" className="label">
  
      <i className={`fa-solid fa-1x fa-moon`}  style={{display:themecolor.background==="#F8F8F8"?"":"none"}} onClick={()=>dispatch(lighttheme())}></i>
      <i className={`fa-solid fa-1x fa-sun`} style={{display:themecolor.background==="#191919"?"":"none  "}} onClick={()=>dispatch(darktheme())}></i>
  
      </label>
      </div>
    </nav>
    </>
  )
}
