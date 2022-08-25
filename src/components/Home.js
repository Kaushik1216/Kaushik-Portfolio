import React from 'react';
import '../style/home.css';
import {motion} from 'framer-motion';
import me from './images/profile-img.png'
export default function Home() {
  const hand={
  //  initial:{rotate:-40},
  //  animate:{rotate:40}
  // animate={{ rotate: 45, scale: 1.5 }}
  // transition={{ ease: "anticipate", duration: 2 }}
}
  return (
    <div id="home">
     <div className="container-fluid">
        <div className="row">
        <div className="col-sm" id="left" >
          <div id="kaushik">
           <h1>Hi,<motion.span
           variants={hand}
           initial="initial"
           animate="animate"
           >✋</motion.span></h1>
           <h2>I'm Kaushik</h2>
           <h4>Enthusiatic tech guy,<br/>
           who  love to code,playing <br/>
           with errors and always learnig</h4>
           </div>
        </div>
        <div className="col-sm" id="right">
          <div id="pooja">
 <img src={me} alt="kaushi"/>
          </div>  
        </div>
        </div>
     </div>
    </div>
  )
}
