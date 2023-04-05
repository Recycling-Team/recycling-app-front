import React from "react";
import { useState } from 'react'
import Text from './Text'
import Header from './Header'
import { NavLink } from "react-router-dom";
import usersService from '../services/users'
import { Button } from "@mui/material";



function Login() {

   const [user, setUser] = useState('')

   const handleSubmit = event => {
      event.preventDefault()
      const newUser = {
         user: user
      }
      if (user !== ''){
         event.preventDefault();
         usersService
            .create(newUser)
            .then(response => {
               alert(`New account ${user} has been created`)
               console.log(response)
            })
            .catch(error => {
               console.log(error)
            })
         setUser('')
      }
   }

   const handleinputChange = event => {
      console.log(event.target.value)
      setUser(event.target.value)
   }
   return(
      <div className="homebody">
         <Header text="Register" />
         <form onSubmit={handleSubmit}>
            <Text text='Username:'/>
            <input 
               id='user' 
               name='user' 
               type='text' 
               value={user} 
               onChange={e=>handleinputChange(e)}
            />
            <br/>
            <br/>
            <Button variant="contained" type="submit">Sign up</Button>
         </form>
         <br/>
         <NavLink to="/Login">
         <Button variant="contained" color="error" size="small">go back</Button>
         </NavLink>
      </div>
   );
}

export default Login;