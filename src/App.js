import './App.css';
import Navbar from './components/Navbar';
import Downbar from './components/Downbar';
import Home from './components/Home'
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App" id="app" >
      
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
     <Downbar/>
    </div>
  );
}

export default App;
