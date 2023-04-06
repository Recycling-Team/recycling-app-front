import React, { useEffect, useState } from 'react';
import itemsService from '../services/items';
import usersService from '../services/users';
import reservationsService from '../services/reservations';
import { Alert, MenuItem, Select, Snackbar } from '@mui/material';
import Text from './Text.js'
import Notifications from './Notifications';
import { Card, CardActionArea, CardContent, Typography, Button } from "@mui/material";


function UserPage() {

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
      
      reservationsService
         .getAll()
         .then(data => {
            setReservations(data)
         })
         .catch(error => {
            console.log(error)
         })
      
   }, [])


   const handleDropChange = (event) => {
      setLoggedUser(parseInt(event.target.value));
      const filteredItems = items.filter(item => item.user === loggedUser);
      setUserItems(filteredItems);
   };

  
   const itemCards = userItems.map((item) =>(
      <Card className='card' key={item.item_id} elevation={2} >
         <CardActionArea>
            <CardContent>
               <Typography>Name: {item.item_name}</Typography>
               <Typography>Description: {item.description}</Typography>
               <Typography>Condition: {item.condition}</Typography>
               <Typography>Available: {item.available}</Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   ))
  

   return (
      <div className="homebody">
         <h1>Your items</h1>
         <Text text='Choose user' />
                  <Select 
                     className='dropdown'
                     variant="outlined"
                     sx={{
                        width: 200,
                        height: 40,
                        marginRight: 15,
                        border: "1px solid darkgrey",
                        color: "black",
                     }}
                     id='user' 
                     defaultValue='User'
                     value={loggedUser} 
                     onChange={handleDropChange}
                     fullWidth
                     label='User'
                     >
                     {users.map((user) => (
                        <MenuItem key={user.user_id} value={user.user_id}>{user.username}</MenuItem>
                     ))}
                  </Select>
            {itemCards}
            <Notifications/>               
      </div>
   )
}

export default UserPage
