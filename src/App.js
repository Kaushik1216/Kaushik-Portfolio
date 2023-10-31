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
import { useSelector } from "react-redux";
// import Projectcard from "./components/subcomponent/Projectcard";
import About from "./components/About";
// import favicondark from './components/images/favicondark.png'
function App() {
  const themecolor = useSelector((state)=>state.changeThetheme);
  const [kaushik,setkaushik]=useState(faviiconlight);
  const favicon = document.getElementById("favicon");
  const [mode,setmode]=useState("light");
  const themeChange = () => {
    const link = document.querySelector('link[rel="icon"]');
    if (mode === "light") {
      setmode("dark")
      document.body.style.background="#061119";
      // document.body.style.background="#0B1D2A";
      // const favicon = document.getElementById("favicon");
      // favicon.href="%PUBLIC_URL%/favicondark.png" ;
      link.setAttribute('href', '%PUBLIC_URL%/favicondark.png');
      setkaushik(faviicondark);
    } else {
      setmode("light")
      setkaushik(faviiconlight);
      // const favicon = document.getElementById("favicon");
      document.body.style.background="#F8F8F8";
      link.setAttribute('href', '%PUBLIC_URL%/faviconlight.png');
    }
  };
  return (
      <div className="App" id="app">
        <Navbar themeChange={themeChange} kaushik={kaushik} />
        <Routes>
          <Route path="/Portfolio" element={<Home  />}></Route>
          <Route path="/Portfolio/about" element={<About />}></Route>
          <Route path="/Portfolio/contact" element={<Contact/>}></Route>
          <Route path="/Portfolio/experience" element={<Skill/>}></Route>
          <Route path="/Portfolio/works" element={<Project/>}></Route>
          <Route path="/Portfolio/*" element={<Home  />}></Route>
        </Routes>
        <Downbar />
      </div>
  );
}

export default App;
