import React from "react";
import "../style/contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
// import styled ,{ keyframes } from 'styled-components'
import {
  Twitter2,
  Facebook2,
  Linkdin2,
  Instagram2,
  Twitter2l,
  Facebook2l,
  Instagram2l,
  Linkdin2l,
} from "../datas/socialicon";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Contact() {
  const form = useRef();
  const sendmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8yv3on1",
        "template_71fj839",
        form.current,
        "46M5VR9yZGLRuZYYn"
      )
      .then(
        (result) => {
          alert("your email send");
        },
        (error) => {
          alert("Error occure");
        }
      );
  };

  const themecolor = useSelector((state) => state.changeThetheme);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const Button = styled.button`
  padding: 0.7em 3em;
  border: 2px solid ${themecolor.headcolor};
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  transition: .3s;
  z-index: 1;
  font-family: inherit;
  color: ${themecolor.headcolor};

  &::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: ${themecolor.headcolor};
    transition: .5s ease;
    display: block;
    z-index: -1;
   }

   &:hover::before {
    width: 105%;
   }

   &:hover {
    color: ${themecolor.textcolor};
   }
  
  `
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const item1 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const item2 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const item3 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  // function map(){
  //   window.location.replace("https://www.google.com/maps/d/u/0/viewer?msa=0&ie=UTF8&t=h&source=embed&vpsrc=0&z=12&mid=1QdUiFNGmF3zr_84PrAJFTcpQaAw&ll=18.930320128560858%2C72.83583616882323")
  // }
  // const Button = styled.button`
  // background-color:${themecolor.background};
  // color:${themecolor.textcolor};
  // border:2px solid ${themecolor.headcolor};
  // border-radius: 3px;
  // background: linear-gradient(to right, ${themecolor.headcolor} 50%, white 50%);
  // transition: all .5s ease-out;
  // background-size: 200% 100%;
  // background: rotate(20deg);
  // background-position: right bottom;
  // &:hover{
  // background-color:${themecolor.headcolor};
  // color:${themecolor.background};
  // background-position: left bottom;
  // }
  // `
  return (
    <>
    <div className="skillpage text-center text"style={{color:`${themecolor.textcolor}`}}>
    <p className="pageinfo"style={{color:`${themecolor.headcolor}`}}>Let's Connect</p>
    <h6 >
    Do you speak Hindi? It's ok if you don't, I speak English too.
    </h6>
    </div>
      <div className="container-fluid mx-auto">
        <div className="first">
          <div
            className="form-container"
            style={{ color: `${themecolor.textcolor}` }}
          >
            <div className="row mx-auto">
              <div className="col-md-6 col-12">
                <form
                  ref={form}
                  onSubmit={sendmail}
                  id="form"
                  className="contactform"
                  style={{ marginTop: "-25px" }}
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div className="inputgroup">
                          <input
                            type="text"
                            placeholder="Full name"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="inputgroup">
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputgroup" id="subject">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="row" id="textarea">
                      <div className="col">
                        <textarea
                          className="area"
                          rows="6"
                          style={{ width: "100%" }}
                          name="text"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="row mt-2 pd-2 button">
                      <div className="col button2">
                        {/* <button
                          type="Submit"
                          className="form-btn-contact"
                          style={{
                            border: `2px solid ${themecolor.headcolor}`,
                            backgroundColor: `${themecolor.background}`,
                            color: `${themecolor.textcolor}`,
                          }}
                        >
                          <span>Send</span>
                        </button> */}
                        <Button> Send
                       </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-1 col-12"></div>
              <div className="col-md-5 col-12 rightrow">
                <div className="row rightrowup">
                  <h5>Kaushik Vishwarkarma</h5>
                  <h6>
                    <span>Residance:</span>&nbsp;
                    <a
                      rel="noreferrer"
                      href="https://www.google.com/maps/d/u/0/viewer?msa=0&ie=UTF8&t=h&source=embed&vpsrc=0&z=12&mid=1QdUiFNGmF3zr_84PrAJFTcpQaAw&ll=18.930320128560858%2C72.83583616882323"
                      target="_blank"
                    >
                      <i
                        className="fa-sharp fa-solid fa-location-dot "
                        style={{ color: "red" }}
                      ></i>
                    </a>
                    Mumbai,India
                  </h6>
                  <h6>
                    <span>Open Source:</span>&nbsp;Always
                  </h6>
                  <h6>
                    <span>Freelance:</span>&nbsp;Available
                  </h6>
                  <h6>
                    <span className="email">E-MAIL:</span>
                    &nbsp;kaushik.vishwakarma2003@gmail.com
                  </h6>
                </div>
                <div className="row rightrowdown">
                  <div className="h5">
                    Feeling social? Find me on these online spaces too!
                    <div
                      className="row mt-4 "
                      style={{
                        display: `${
                          themecolor.textcolor === "#191919" ? "" : "none"
                        }`,
                      }}
                    >
                      <div className="col-6  social">
                        {" "}
                        <motion.div
                          className="container"
                          variants={container}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div
                            className="social"
                            variants={item}
                            initial={{ transform: "scale(0)" }}
                            animate={{ scale: [0, 1, 1.5, 1] }}
                            transition={{
                              type: "spring",
                              duration: 1,
                              delay: 0.25,
                            }}
                          >
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://www.instagram.com/kaushik_1090/"
                            >
                              <Instagram2></Instagram2>
                            </a>
                          </motion.div>
                        </motion.div>
                      </div>
                      <div className="col-6 social">
                        <motion.div
                          className="container"
                          variants={container}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div
                            className="social"
                            varients={item1}
                            initial={{ transform: "scale(0)" }}
                            animate={{ scale: [0, 1, 1.5, 1] }}
                            transition={{
                              type: "spring",
                              duration: 1,
                              delay: 0.5,
                            }}
                          >
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://www.linkedin.com/in/kaushik-vishwakarma-103b20223/"
                            >
                              <Linkdin2></Linkdin2>
                            </a>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                    <div
                      className="row mt-4"
                      style={{
                        display: `${
                          themecolor.textcolor === "#191919" ? "" : "none"
                        }`,
                      }}
                    >
                      <div className="col-6 social">
                        {" "}
                        <motion.div
                          className="container"
                          variants={container}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div
                            className="social"
                            varients={item2}
                            initial={{ transform: "scale(0)" }}
                            animate={{ scale: [0, 1, 1.5, 1] }}
                            transition={{
                              type: "spring",
                              duration: 1,
                              delay: 0.75,
                            }}
                          >
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://www.facebook.com/profile.php?id=100079232611563"
                            >
                              <Facebook2></Facebook2>
                            </a>
                          </motion.div>
                        </motion.div>
                      </div>
                      <div className="col-6 social">
                        <motion.div
                          className="container"
                          variants={container}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div
                            className="social"
                            varients={item3}
                            initial={{ transform: "scale(0)" }}
                            animate={{ scale: [0, 1, 1.5, 1] }}
                            transition={{
                              type: "spring",
                              duration: 1,
                              delay: 1,
                            }}
                          >
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://twitter.com/Undefinekaushik"
                            >
                              <Twitter2></Twitter2>
                            </a>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                    <div
                      className="row mt-4 "
                      style={{
                        display: `${
                          themecolor.textcolor === "#F8F8F8" ? "" : "none"
                        }`,
                      }}
                    >
                      <div className="col-6  social">
                        {" "}
                        <motion.div
                          className="container"
                          variants={container}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div
                            className="social"
                            variants={item}
                            initial={{ transform: "scale(0)" }}
                            animate={{ scale: [0, 1, 1.5, 1] }}
                            transition={{
                              type: "spring",
                              duration: 1,
                              delay: 0.25,
                            }}
                          >
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://www.instagram.com/kaushik_1090/"
                            >
                              <Instagram2l></Instagram2l>
                            </a>
                          </motion.div>
                        </motion.div>
                      </div>
                      <div className="col-6 social">
                        <motion.div
                          className="container"
                          variants={container}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div
                            className="social"
                            varients={item1}
                            initial={{ transform: "scale(0)" }}
                            animate={{ scale: [0, 1, 1.5, 1] }}
                            transition={{
                              type: "spring",
                              duration: 1,
                              delay: 0.5,
                            }}
                          >
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://www.linkedin.com/in/kaushik-vishwakarma-103b20223/"
                            >
                              <Linkdin2l></Linkdin2l>
                            </a>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                    <div
                      className="row mt-4"
                      style={{
                        display: `${
                          themecolor.textcolor === "#F8F8F8" ? "" : "none"
                        }`,
                      }}
                    >
                      <div className="col-6 social">
                        {" "}
                        <motion.div
                          className="container"
                          variants={container}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div
                            className="social"
                            varients={item2}
                            initial={{ transform: "scale(0)" }}
                            animate={{ scale: [0, 1, 1.5, 1] }}
                            transition={{
                              type: "spring",
                              duration: 1,
                              delay: 0.75,
                            }}
                          >
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://www.facebook.com/profile.php?id=100079232611563"
                            >
                              <Facebook2l></Facebook2l>
                            </a>
                          </motion.div>
                        </motion.div>
                      </div>
                      <div className="col-6 social">
                        <motion.div
                          className="container"
                          variants={container}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div
                            className="social"
                            varients={item3}
                            initial={{ transform: "scale(0)" }}
                            animate={{ scale: [0, 1, 1.5, 1] }}
                            transition={{
                              type: "spring",
                              duration: 1,
                              delay: 1,
                            }}
                          >
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://twitter.com/Undefinekaushik"
                            >
                              <Twitter2l></Twitter2l>
                            </a>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
