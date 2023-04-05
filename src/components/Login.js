import React from "react";
import { useState } from 'react'
import Text from './Text'
import Header from './Header'
import { NavLink } from "react-router-dom";
import usersService from '../services/users'
import { Button } from "@mui/material";



function Login() {

   const [user, setUser] = useState('')

   const handleSubmit = (event) => {
      event.preventDefault();

      if (user !== '') {
         const loginUser = {
            user: user
         }
         usersService
            .add(loginUser)
            .then(data => {
               usersService
                  .set(data.id)
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
         <Header text="Log in" />
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
            <Button variant="contained" type="submit">Log in</Button>
         </form>
         <Text text="Don't have a user yet?"/>
         <NavLink to="/Registration">
         <Button variant="contained" color="success" size="small">Register</Button>
         </NavLink>
         <br/>
         <NavLink to="/">
         <Button variant="contained" color="error" size="small">Go back</Button>
         </NavLink>
      </div>
   );
}

export default Login;