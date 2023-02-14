import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Create from './components/Create.js'
import Home from './components/Home.js';
import ItemList from './components/ItemList.js';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='create' element={<Create/>}/>
        <Route path='itemlist' element={<ItemList/>}/>
      </Routes>
    </div>
  );
}

export default App;
