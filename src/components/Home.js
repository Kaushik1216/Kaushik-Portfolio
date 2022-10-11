import React from "react";
import "../style/home.css";
import { Instagram ,Facebook,Github,Linkdin} from "../datas/socialicon";
import me from "./images/profile-img.png";
import {motion} from "framer-motion"
export default function Home() {
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
              <div className="col-md-6 col-12" id="kaushik">
                <motion.div>
                  <motion.h5
                  variants={item}
                  initial="hidden"
                  animate="visible">
                    Hi,✋I'm</motion.h5>
                  <h2 id="name"> Kaushik Vishwakarma</h2>
                  <h6>
                    Enthusiatic tech guy, who love to code,playing with errors
                    and always learnig
                  </h6>
                  <div className="row socialIcon text-start" >
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
                </motion.div>

                
              </div>
              <div className="col-md-6 col-12">
                <div id="img">
                  <img src={me} alt="kaushi" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
