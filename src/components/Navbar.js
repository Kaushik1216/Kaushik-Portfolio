import React from 'react'
import '../style/navbar.css'
import { useNavigate} from 'react-router-dom';
export default function Navbar(props) {
  console.log(`${props.text}`);
  const navigate = useNavigate();
  
  const homePage = () => {
      navigate("/")
  }
  const about = () => {
      navigate("/about")
  }
  const skills = () => {
      navigate("/skills")
  }
  const project= () => {
      navigate("/projects")
  }
  const contact = () => {
      navigate("/contact")
  }
  return (
    <>
    <nav className='menu-nav'>
      <div className="logo">
        <h2 onClick={homePage} style={{color:`${props.text}`}}>Kaushik</h2>
      </div>
      <div className="menu-link" >
        <ul >
          <li style={{color:`${props.text}`}} onClick={about}>About</li>
          <li style={{color:`${props.text}`}} onClick={skills}>Skills</li>
          <li style={{color:`${props.text}`}} onClick={project}>Project</li>
          <li style={{color:`${props.text}`}} onClick={contact}>Contact</li>
        </ul>
      </div>
      <div className="theme" style={{color:`${props.text}`,border:`2px solid ${props.text}`}} >
      <input type="checkbox"  className="checkbox" id="checkbox" name="checkBox" onChange={props.themeChange}/><label htmlFor="checkbox" className="label">
  
      <i className={`fa-solid fa-1x fa-${props.font}`} ></i>
  
      </label>
      </div>
    </nav>
    </>
  )
}
