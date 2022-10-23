import React from "react";
import "../style/home.css";
import { Twitter ,Facebook,Github,Linkdin,Twitterl,Facebookl,Githubl,Linkdinl} from "../datas/socialicon";
import me from "./images/myphoto2circle.png";
import {html,coder,fulls} from "../datas/snipet"
import hand from "./images/hi.gif"
import { useState } from "react";
import {motion} from "framer-motion"
export default function Home(props) {
  const item = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }}

    const [code,setCode]=useState(html);
    function codechange(x){
      if(x==="Coder"){
        setCode(coder);
      }
      else if(x==="fulls"){
        setCode(fulls)
      }
      else{
        setCode(html)
      }
    }
  return (
    <>
      <div class="container-fluid main_header">
        <div class="row">
          <div class=" col-12 mx-auto">
            <div className="row">
              <div className="col-md-6 col-12 " id="kaushik" style={{color:`${props.text}`}}>
               
                {/* <div></div> */}
                <motion.div>
                <div className="codeup">{`${code.firstline}`}<br/>{`${code.second}`}<br id="break"/><br/>{`${code.middleone}`}</div>
                  <motion.h5
                  variants={item}
                  initial="hidden"
                  animate="visible">
                    <p id="title">Hi<sup><img src={hand} style={{height:"40px"}}/></sup>I'm</p></motion.h5>

                  <h1 id="name"> Kaushik Vishwakarma</h1>
                  <h3 id="devinfo"style={{color:`${props.text==="#000"?"#0A192F":"#ECECEC"}`,textShadow:`2px 1px 1px ${props.text==="#fff"?"#fff":"#000"}`}}><span onMouseEnter={()=>{codechange("Coder")}}>CODER</span>&nbsp;+&nbsp;<span onMouseEnter={()=>{codechange("fulls")}}>FULL STACK DEVELOPER</span></h3>
                  <h6>
                    A Enthusiastiac newbie in tech who everyday try to learn new tech stuf
                  </h6>
                  <div className="row socialIcon text-start" style={{display:`${props.text==='#000'?'':'none'}`}}>
                    <motion.div className="col-1"
                     initial={{transform:"scale(0)"}}
                     animate={{scale:[0,1,1.5,1]}}
                     transition={{type:'spring', duration:1, delay:0.25}}
                     > <a target="_blank"rel="noreferrer" href="https://github.com/Kaushik1216"><Github></Github></a></motion.div>
                    <motion.div className="col-1"
                     initial={{transform:"scale(0)"}}
                     animate={{scale:[0,1,1.5,1]}}
                     transition={{type:'spring', duration:1, delay:0.5}}
                     > <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kaushik-vishwakarma-103b20223/"><Linkdin></Linkdin></a></motion.div>
                    <motion.div className="col-1"
                     initial={{transform:"scale(0)"}}
                     animate={{scale:[0,1,1.5,1]}}
                     transition={{type:'spring', duration:1, delay:0.75}}
                     > <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100079232611563">
                    <Facebook></Facebook></a></motion.div>
                    <motion.div className="col-1"
                     initial={{transform:"scale(0)"}}
                     animate={{scale:[0,1,1.5,1]}}
                     transition={{type:'spring', duration:1, delay:1}}
                     ><a rel="noreferrer" target="_blank" href="https://twitter.com/Undefinekaushik"><Twitter></Twitter></a></motion.div>
                   </div>
                  <div className="row socialIcon text-start" style={{display:`${props.text==='#fff'?'':'none'}`}}>
                    <motion.div className="col-1"
                     initial={{transform:"scale(0)"}}
                     animate={{scale:[0,1,1.5,1]}}
                     transition={{type:'spring', duration:1, delay:0.25}}
                     > <a target="_blank"rel="noreferrer" href="https://github.com/Kaushik1216"><Githubl></Githubl></a></motion.div>
                    <motion.div className="col-1"
                     initial={{transform:"scale(0)"}}
                     animate={{scale:[0,1,1.5,1]}}
                     transition={{type:'spring', duration:1, delay:0.5}}
                     > <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kaushik-vishwakarma-103b20223/"><Linkdinl></Linkdinl></a></motion.div>
                    <motion.div className="col-1"
                     initial={{transform:"scale(0)"}}
                     animate={{scale:[0,1,1.5,1]}}
                     transition={{type:'spring', duration:1, delay:0.75}}
                     > <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100079232611563">
                    <Facebookl></Facebookl></a></motion.div>
                    <motion.div className="col-1"
                     initial={{transform:"scale(0)"}}
                     animate={{scale:[0,1,1.5,1]}}
                     transition={{type:'spring', duration:1, delay:1}}
                     ><a rel="noreferrer" target="_blank" href="https://twitter.com/Undefinekaushik"><Twitterl></Twitterl></a></motion.div>
                   </div>
                </motion.div>

                <div className="codedown">{`${code.middlelast}`}<br id="break"/><br/>{`${code.lastsecond}`}<br/>{`${code.lastline}`}</div>
              </div>
              <div className="col-md-6 col-12" id="imgdiv">
                <div id="img">
                  <img src={me} alt="kaushi" style={{}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
