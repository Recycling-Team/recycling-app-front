import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Create from './components/Create.js'
import Home from './components/Home.js';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
