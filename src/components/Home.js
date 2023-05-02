import { Button, Stack, Paper, Typography, Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import Login from "./Login";



function Home() {
   
   /*const handleLoginClick = () => {
      history.push("/login");
    };
  
    const handleRegistrationClick = () => {
      history.push("/registration");
    };*/

   return(
      <div className='wrapper'>
         <div className="left-div">
            <h2>Welcome to Recycling App</h2>
            <p>The Recycling app is a website where you can giveaway your unwanted belongings, also you can search for items yourself. You create an account and after that you can list a new item, find listed items and reserve items for pick-up.</p>
         </div>
         <div className="right-div">
            <Login/>
         </div>
      </div>
      );
}

export default Home;