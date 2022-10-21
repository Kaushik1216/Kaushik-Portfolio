import React from "react";
import "../style/home.css";
import { Instagram ,Facebook,Github,Linkdin,Instagraml,Facebookl,Githubl,Linkdinl} from "../datas/socialicon";
import me from "./images/profile-img.png";
import hand from "./images/hi.gif"
import {motion} from "framer-motion"
import html from "./html"
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
  return (
    <>
      <div class="container-fluid main_header">
        <div class="row">
          <div class="col-md-10 col-12 mx-auto">
            <div className="row">
              <div className="col-md-6 col-12 " id="kaushik" style={{color:`${props.text}`}}>
                <motion.div>
                  <motion.h5
                  variants={item}
                  initial="hidden"
                  animate="visible">
                    <p id="title">Hi<sup><img src={hand} style={{height:"40px"}}/></sup>I'm</p></motion.h5>

                  <h1 id="name"> Kaushik <br/>Vishwakarma</h1>
                  <h3 id="devinfo">CODER&nbsp;+&nbsp;FULL STACK DEVELOPER</h3>
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
                     ><a rel="noreferrer" target="_blank" href="https://www.instagram.com/kaushik_1090/"><Instagram></Instagram></a></motion.div>
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
                     ><a rel="noreferrer" target="_blank" href="https://www.instagram.com/kaushik_1090/"><Instagraml></Instagraml></a></motion.div>
                   </div>
                </motion.div>

                
              </div>
              <div className="col-md-6 col-12" id="imgdiv">
                <div id="img">
                  <img src={me} alt="kaushi" style={{height:"500px"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
