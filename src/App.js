import './App.css';
import Navbar from './components/Navbar';
import Downbar from './components/Downbar';
// import Contact from './components/Contact';
import Home from './components/Home'
import {Route,Routes} from 'react-router-dom';
import {useState} from 'react';
function App() {
  const[mode,setMode]=useState('light');
  const themeChange=()=>{
    if(mode==='light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  }
  return (
    <div className="App" id="app" >
      
     <Navbar themeChange={themeChange} />
    {/* <Contact  /> */}
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
     <Downbar/>
    </div>
  );
}

export default App;
