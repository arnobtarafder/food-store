import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Shop from './Components/Shop/Shop';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Shop></Shop>
    </div>
  );
}

export default App;
