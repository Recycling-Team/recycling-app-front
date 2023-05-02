import React from "react";
import { useState } from 'react'
import Text from './Text'
import Header from './Header'
import { Link } from "react-router-dom";
import usersService from '../services/users'
import { Button } from "@mui/material";
import Notification from './Notification'
import { useNavigate } from "react-router-dom"

function Login() {

   const [user, setUser] = useState('')
   const [notification, setNotification] = useState('')
   const [status, setStatus] = useState(null)
   const navigate = useNavigate()

   const handleSubmit = (event) => {
      event.preventDefault();

      if (user !== '') {
         usersService
            .login(user)
            .then(data => {
                  usersService
                     .setUser(data)
                  navigate("/user")
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
      <div >
         <h1>Login</h1>
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
         <Link to="/Registration">
            <Button variant="contained" color="success" size="small">Register</Button>
         </Link>
         <br/>
         <Link to="/">
            <Button variant="contained" color="error" size="small">Go back</Button>
         </Link>
      </div>
   );
}

export default Login;