import React, { useEffect } from "react";
import "../style/home.css";
import { Twitter ,Facebook,Github,Linkdin,Twitterl,Facebookl,Githubl,Linkdinl} from "../datas/socialicon";
import me from "./images/me1.png";
import {html,coder,fulls} from "../datas/snipet"
import hand from "./images/hi.gif"
import { useState } from "react";
import {motion} from "framer-motion"
import { useSelector } from "react-redux";
export default function Home() {
  const themecolor = useSelector((state)=>state.changeThetheme);

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
    function  makeTimer(){
      setInterval(() => {
        let rand = Math.floor(Math.random() * 10) + 1
         if(rand>=1 && rand<=4){
          setCode(coder);
         }else if( rand<=7){
          setCode(fulls)
         }else{
           setCode(html);

         }
      }, 8000)
    }
    useEffect(()=>{
      makeTimer();
    })
  return (
    <>
      <div className="container-fluid main_header">
        <div className="row">
          <div className=" col-12 mx-auto">
            <div className="row">
              <div className="col-md-6 col-12 " id="kaushik" style={{color:`${themecolor.textcolor}`}}>
               
                {/* <div></div> */}
                <motion.div>
                <div className="codeup text-center">{`${code.firstline}`}<br/>{`${code.second}`}<br id="break"/><br/>{`${code.middleone}`}</div>
                  <motion.h5
                  variants={item}
                  initial="hidden"
                  animate="visible">
                    <p id="title">Hi<sup><img src={hand} style={{height:"40px"}}/></sup>I'm</p></motion.h5>

                  <h1 id="name"> Kaushik Vishwakarma</h1>
                  <h3 id="devinfo"style={{color:`${themecolor.headcolor}`}}><span onMouseEnter={()=>{codechange("Coder")}}>CODER</span>&nbsp;+&nbsp;<span onMouseEnter={()=>{codechange("fulls")}}>FULL STACK DEVELOPER</span></h3>
                  {/* <h6> 
                    A Enthusiastiac newbie in tech who everyday try to learn new tech stuf
                  </h6> */}
                  <div className="row socialIcon text-start" style={{display:`${themecolor.textcolor==='#191919'?'':'none'}`}}>
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
                  <div className="row socialIcon text-start" style={{display:`${themecolor.textcolor==='#F8F8F8'?'':'none'}`}}>
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
                  <img src={me} alt="kaushik" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
