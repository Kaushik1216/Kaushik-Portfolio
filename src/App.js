import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Downbar from "./components/Downbar";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import faviiconlight from "./components/images/faviconlight.png"
import faviicondark from "./components/images/favicondark.png"
// import Projectcard from "./components/subcomponent/Projectcard";
import About from "./components/About";
// import favicondark from './components/images/favicondark.png'
function App() {
  const [mode, setMode] = useState("light");
  const [text,setText]=useState("#383838");
  const [headcolor,setheadcolor]=useState("#6D83F2");
  const [kaushik,setkaushik]=useState(faviiconlight);
  const favicon = document.getElementById("favicon");
 
  const themeChange = () => {
    if (mode === "light") {
      setMode("dark");
      setText("#F8F8F8");
      setheadcolor("#74FAC0")
      // document.body.style.background="#002147";
      // document.body.style.background="#111827";
      // document.body.style.background="#0A192F";
      document.body.style.background="#191919"
      favicon.href='favicondark.png';
      setkaushik(faviicondark);
      // document.body.style.background="#000033";
      // document.body.style.background="#29272A";
    } else {
      setMode("light");
      setheadcolor("#6D83F2");
      setText("#383838");
      setkaushik(faviiconlight);
      document.body.style.background="#F8F8F8"
      favicon.href='faviconlight.png';
      // document.body.style.background="#1D1D1D"
    }
  };
  return (
      <div className="App" id="app">
        <Navbar themeChange={themeChange} kaushik={kaushik} text={text} headcolor={headcolor}/>
        <Routes>
          <Route path="/" element={<Home themeChange={themeChange}  headcolor={headcolor} text={text}/>}></Route>
          <Route path="/about" element={<About themeChange={themeChange}  headcolor={headcolor} text={text}/>}></Route>
          <Route path="/contact" element={<Contact  themeChange={themeChange} headcolor={headcolor}  text={text} />}></Route>
          <Route path="/skills" element={<Skill themeChange={themeChange} headcolor={headcolor}  text={text}/>}></Route>
          <Route path="/projects" element={<Project themeChange={themeChange} headcolor={headcolor} text={text} />}></Route>
        </Routes>
        <Downbar />
      </div>
  );
}

export default App;
