import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar class= "bg-secondary"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
      {/* 
      http://localhost:3000/ or http://localhost:3000/#/ -> Home
      http://localhost:3000/#/about -> About
      http://localhost:3000/#/contact -> Contact
      # because hashrouter and not browser router
      */}
    </div>
  );
}

export default App;