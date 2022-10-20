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
  const [text,setText]=useState("light");
  const[font,setFont]=useState('sun');
  const themeChange = () => {
    if (mode === "light") {
      setMode("dark");
      setFont("sun");
      setText("light");
      document.body.style.background="#29272A";
    } else {
      setMode("light");
      setFont("moon");
      setText("dark");
      document.body.style.background="#ECECEC"
    }
  };
  return (
      <div className="App" id="app">
        <Navbar themeChange={themeChange} font={font} text={text} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
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
