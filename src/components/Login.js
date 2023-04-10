import React from "react";
import { useState } from 'react'
import Text from './Text'
import Header from './Header'
import { NavLink } from "react-router-dom";
import usersService from '../services/users'
import { Button } from "@mui/material";
import Notification from './Notification'

function Login() {

   const [user, setUser] = useState('')
   const [notification, setNotification] = useState('')
   const [status, setStatus] = useState(null)

   const handleSubmit = (event) => {
      event.preventDefault();

      if (user !== '') {
         usersService
            .login(user)
            .then(data => {
                  usersService
                     .set(data)
                  setNotification(`Welcome ${user}!`)
                  setStatus(true)
            })
            .catch(error => {
               console.log(error)
               setNotification(`User ${user} not found.`)
               setStatus(false)
            })

            setTimeout(() => {
               setNotification(null)
               setStatus(null)
             }, 4000)

         setUser('')
         return
      }
   }

   const handleinputChange = event => {
      console.log(event.target.value)
      setUser(event.target.value)
   }

  
   return(
      <div className="homebody">
         <Header text="Log in" />
         <Notification text={notification} status={status}/>
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