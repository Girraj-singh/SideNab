import logo from './logo.svg';
import './App.css';
import {math} from './component/math';
import About from './component/About';
import Home from './component/Home';
import Menu from './component/Menu';
import Nab from './component/Nab';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (<>
  <div ><Nab/></div>
    <div style={{width:'100%',display:'flex',flexDirection:'row'}}>
      <div style={{width:'20%',height:'100%',backgroundColor:'gray'}}>
      <Menu/>
      </div>
      <div style={{width:'80%'}}>
        <Routes>
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
