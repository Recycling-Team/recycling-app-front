import React, { useEffect, useState } from 'react';
import itemsService from '../services/items';
import usersService from '../services/users';
import reservationsService from '../services/reservations';
import { Alert, MenuItem, Select, Snackbar } from '@mui/material';
import Text from './Text.js'
import Notifications from './Notifications';
import { Card, CardActionArea, CardContent, Typography, Button } from "@mui/material";


function UserPage() {

   const [user, setUser] = useState('');
   const [users, setUsers] = useState([]);
   const [items, setItems] = useState([]);
   const [userItems, setUserItems] = useState([]);
   const [loggedUser, setLoggedUser] = useState('');
   const [reservations, setReservations] = useState([]);
   

   useEffect(() => {
      itemsService
         .getAll()
         .then(data => {
            setItems(data)
         })
         .catch(error => {
            console.log(error)
         })
      
      usersService
         .getAll()
         .then(data => {
            setUsers(data)
         })
         .catch(error => {
            console.log(error)
         })
        
      usersService
         .getUser()
         .then(data => {
            setUser(data);
         })
      
      reservationsService
         .getAll()
         .then(data => {
            setReservations(data)
         })
         .catch(error => {
            console.log(error)
         })
      
      }, [])

   useEffect(() => {
      const filteredItems = items.filter(item => item.user === user.user_id);
      setUserItems(filteredItems);
   }, [user, items])

      if (!user.user_id) {
         return <div className='homebody'>You must login to see User page.</div>;
      }

   const itemCards = userItems.map((item) =>(
      <Card className='card' key={item.item_id} elevation={2} >
         <CardActionArea>
            <CardContent>
               <Typography>Name: {item.item_name}</Typography>
               <Typography>Description: {item.description}</Typography>
               <Typography>Condition: {item.condition === 1 ? 'Good' : item.condition === 2 ? 'Average' : 'Bad'}</Typography>
               <Typography>Available: {item.available}</Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   ))
  

   return (
      <div className="homebody">
         <h1>Welcome {user.username}</h1>
         <h3>Your items</h3>
         {itemCards}
         <Notifications user={user} items={userItems}/>               
      </div>
   )
}

export default UserPage
