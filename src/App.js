import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Shop from './Components/Shop/Shop';
import Navbar from './Components/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Shop></Shop>
    </div>
  );
}

export default App;
