import React from "react";
import "../style/about.css";
import me from "./images/me5.jpeg";
import { useSelector } from "react-redux";
export default function About() {
  const themecolor = useSelector((state) => state.changeThetheme);
  return (
    <>
    <div className="skillpage text-center text"style={{color:`${themecolor.textcolor}`}}>
    <p className="pageinfo"style={{color:`${themecolor.headcolor}`}}>About Me</p>
    <h6 >
    </h6>
    </div>
      <div id="about">
        <div className="row mx-auto">
          <div className="col-md-6 col-sm-12" id="smallimgdiv">
            <div id="smallimg">
            <figure class="image-container">
              <div class="aspect-ratio-box">
                <img
                  src={me}
                  alt="Kaushik"
                  class="cropped-image"
                  width="1920"
                  height="1282"
                  loading="lazy"
                  style={{border:`3px solid ${themecolor.headcolor}` }}
                />
              </div>
            </figure>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 leftabout">
            <p
              className="about-content"
              style={{ color: `${themecolor.textcolor}` }}
            >
              Hi, my name is Kaushik Vishwakarma. I am currently pursuing B.Tech
              in Computer Science and Engineering from IIT Mandi. I always enjoy
              exploring and learning new technologies.
              <br />
              Currently, I have knowledge in DSA, web development, and machine
              learning. I am particularly interested in contributing to
              open-source projects, helping others, and taking on freelance
              work. These pursuits allow me to not only apply my skills but also
              contribute to the larger tech community and make a positive
              impact.
              <br /> Recently, I have developed several web development and
              machine learning projects. I consider myself a quick learner and I
              am always eager to tackle new challenges and expand my skill set.
              <br />
              <br />
            </p>
            <div className="row">
              <p
                className="about-content"
                style={{ color: `${themecolor.textcolor}` }}
              >
                Here are some technology on which I worked recently :{" "}
              </p>
              <div className="row">
                <div
                  className="col-6"
                  style={{ color: `${themecolor.textcolor}` }}
                >
                  <ul>
                    <li>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ color: `${themecolor.headcolor}` }}
                      ></i>
                      C++
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ color: `${themecolor.headcolor}` }}
                      ></i>
                      Python
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ color: `${themecolor.headcolor}` }}
                      ></i>
                      React JS
                    </li>
                  </ul>
                </div>
                <div
                  className="col-6"
                  style={{ color: `${themecolor.textcolor}` }}
                >
                  <ul typeof="disk">
                    <li>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ color: `${themecolor.headcolor}` }}
                      ></i>
                      Node JS
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ color: `${themecolor.headcolor}` }}
                      ></i>
                      ML
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ color: `${themecolor.headcolor}` }}
                      ></i>
                      Robotic's
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-push-12" id="imgdiv">
            <figure class="image-container">
              <div class="aspect-ratio-box">
                <img
                  src={me}
                  alt="Kaushik"
                  class="cropped-image"
                  width="1920"
                  height="1282"
                  loading="lazy"
                  style={{ borderColor: `${themecolor.headcolor}` }}
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
