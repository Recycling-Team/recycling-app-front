import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import CreateForm from './components/CreateForm.js'
import Home from './components/Home.js';
import ItemList from './components/ItemList.js';
import NavBar from './components/NavBar.js'
import Search from './components/Search.js'
import UserPage from './components/UserPage';
import Login from './components/Login';
import Registration from './components/Registration';
import ReservationPage from './components/ReservationPage';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='create' element={<CreateForm/>}/>
        <Route path='itemlist' element={<ItemList/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='user' element={<UserPage/>}/>
        <Route path="/reservations/:itemId" element={<ReservationPage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='registration' element={<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
