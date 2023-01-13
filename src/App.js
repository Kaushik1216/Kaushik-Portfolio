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
  const [kaushik,setkaushik]=useState(faviiconlight);
  const favicon = document.getElementById("favicon");
  const [mode,setmode]=useState("light");
  const themeChange = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.background="#191919"
      favicon.href='favicondark.png';
      setkaushik(faviicondark);
    } else {
      setmode("light")
      setkaushik(faviiconlight);
      document.body.style.background="#F8F8F8"
      favicon.href='faviconlight.png';
    }
  };
  return (
      <div className="App" id="app">
        <Navbar themeChange={themeChange} kaushik={kaushik} />
        <Routes>
          <Route path="/" element={<Home  />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/skills" element={<Skill/>}></Route>
          <Route path="/projects" element={<Project/>}></Route>
        </Routes>
        <Downbar />
      </div>
  );
}

export default App;
