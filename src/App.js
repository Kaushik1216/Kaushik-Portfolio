import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Downbar from "./components/Downbar";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");
  const [text,setText]=useState("#000");
  const[font,setFont]=useState('sun');
 
  const themeChange = () => {
    if (mode === "light") {
      setMode("dark");
      setFont("sun");
      setText("#fff");
      // document.body.style.background="#002147";
      document.body.style.background="#0A192F";
      // document.body.style.background="#000033";
      // document.body.style.background="#29272A";
    } else {
      setMode("light");
      setFont("moon");
      setText("#000");
      document.body.style.background="#ECECEC"
    }
  };
  return (
      <div className="App" id="app">
        <Navbar themeChange={themeChange} font={font} text={text} />
        <Routes>
          <Route path="/" element={<Home themeChange={themeChange} font={font} text={text}/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/skills" element={<Skill />}></Route>
          <Route path="/projects" element={<Project />}></Route>
        </Routes>
        <Downbar />
      </div>
  );
}

export default App;
