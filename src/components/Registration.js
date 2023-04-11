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

   const handleSubmit = event => {
      event.preventDefault()
      const newUser = {
         username: user
      }
      if (user !== ''){
         event.preventDefault();
         usersService
            .create(newUser)
            .then(response => {
               setNotification(`New user ${user} created.`)
               setStatus(true)
               console.log(response)
            })
            .catch(error => {
               setNotification(`Error. user ${user} not created.`)
               setStatus(false)
               console.log(error)
            })
            setTimeout(() => {
               setNotification(null)
               setStatus(null)
            }, 4000)
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