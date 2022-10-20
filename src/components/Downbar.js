import React ,{useRef}from "react";
import '../style/downbar.css'
import { Link } from 'react-router-dom';
export default function Downbar() {
  // const [windowSize, setWindowSize] = useState(getWindowSize());

  // useEffect(() => {
  //   function handleWindowResize() {
  //     setWindowSize(getWindowSize());
  //   }

  //   window.addEventListener('resize', handleWindowResize);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, []);
  // function getWindowSize() {
  //   const {innerWidth, innerHeight} = window;
  //   if(innerWidth<701){
  //     downbar.current.style.display="none";
  //     arrowt.current.style.display="none";
  //   }
  //   return {innerWidth, innerHeight};
  // }
  // console.log(windowSize.innerWidth);
  const arrowup=useRef(null);
  const arrowdown=useRef(null);
  const downbar=useRef(null);
  const display=useRef(null);
  const arrow =(a)=>{
    if(a===1){
      arrowup.current.style.display="none";
      arrowdown.current.style.display="block";
      downbar.current.style.display="block";
    }else if(a===2){
      arrowup.current.style.display="block";
      arrowdown.current.style.display="none";
      downbar.current.style.display="none";
      display.current.className="arrow1";
    }
  }
  return (
    <>  
    <div className="align"  >

    <div className="arrow" id="down">
     
    <div className="arrow1 display" ref={display}><i className="fa-solid fa-angle-up fa-2x" style={{color:"#fff"}} ref={arrowup} onClick={()=>arrow(1)}></i></div>
      <div className="arrow2"><i className="fa-solid fa-angle-down fa-2x" style={{color:"#fff"}} ref={arrowdown} onClick={()=>arrow(2)}></i></div>
      </div>
   
    <div className="downbar" id="footer"ref={downbar}>
      
      <div className="row down">
        <div className="col">
         <div className="row"><i className="fa-solid fa-info" style={{color:"#fff"}}></i></div> 
          <div className="row"><Link to="/about">About</Link></div>
        </div>
        <div className="col">
        <div className="row"><i className="fa-solid fa-rocket"style={{color:"#fff"}}></i></div> 
          <div className="row"> <Link to="/skills">Skills</Link></div>
          </div>
          <div className="col">
        <div className="row"><i className="fa-solid fa-heart"style={{color:"#fff"}}></i></div> 
          <div className="row"> <Link to="/project">Project</Link></div>
        </div>
        <div className="col">
        <div className="row"><i className="fa-solid fa-info"style={{color:"#fff"}}></i></div> 
          <div className="row"> <Link to="/contact">Contact</Link></div>
       </div>
       
      </div>
      </div>
      </div>
    </>
  );
}
