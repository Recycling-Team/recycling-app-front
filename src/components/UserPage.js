import React, { useEffect, useState } from 'react';
import itemsService from '../services/items';
import usersService from '../services/users';
import reservationsService from '../services/reservations';
import { Alert, MenuItem, Select, Snackbar } from '@mui/material';
import Text from './Text.js'
import Notifications from './Notifications';
import { Card, CardActionArea, CardContent, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';


function UserPage() {

   const [user, setUser] = useState('');
   const [users, setUsers] = useState([]);
   const [items, setItems] = useState([]);
   const [reservations, setReservations] = useState([]);
   const [userReservations, setUserReservations] = useState([]);
   

   useEffect(() => {
      itemsService
         .itemsByUser()
         .then(data => {
            setItems(data)
         })
         .catch(error => {
            console.log(error)
         })
      
      /*usersService
         .getAll()
         .then(data => {
            setUsers(data)
         })
         .catch(error => {
            console.log(error)
         })*/
        
      let user = usersService.getUser()
      setUser(user)
      
      
      /*reservationsService
         .getAll()
         .then(data => {
            setAllReservations(data)
         })
         .catch(error => {
            console.log(error)
         })*/

      reservationsService
         .reservationsByUser()
         .then(data => {
            setReservations(data)
         })
         .catch(error => {
            console.log(error)
         })
      }, [])

   /*useEffect(() => {
      const filteredItems = items.filter(item => item.user === user.user_id);
      setUserItems(filteredItems);
   }, [user, items])*/
   
   useEffect(() => {
      const promises = reservations.map(async reservation => {
         const response = await fetch(`https://recycle-app-back-92873459875.azurewebsites.net/api/item-by-item_id?item_id=${reservation.item_id}`);
         const data = await response.json();
         return {...reservation, item: data[0]};
      });

      Promise.all(promises).then(data => {
         setUserReservations(data);
      }).catch(error => {
         console.log(error)
      })
   }, [reservations])

   if (!user.user_id) {
      return <div className='homebody'>You must login to see User page.</div>;
   }


   const itemCards = items.map((item) =>(
      <Card className='card' key={item.item_id} elevation={2} style={{backgroundColor: '#7AE582'}}  >
         <CardActionArea>
            <CardContent>
               <Typography>ID: {item.user}</Typography>
               <Typography>Name: {item.item_name}</Typography>
               <Typography>Description: {item.description}</Typography>
               <Typography>Condition: {item.condition === 1 ? 'Good' : item.condition === 2 ? 'Average' : 'Bad'}</Typography>
               <Typography>Available: {item.available}</Typography>
               <Typography>Message: {item.message}</Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   ))

   const reservationCards = userReservations.map((reservation) =>(
      <Card className='card' key={reservation.item.item_id} elevation={2} style={{backgroundColor: '#7AE582'}}>
        <Link to={`/reservations/${reservation.item.item_id}`}>
          <CardActionArea>
            <CardContent>
              <Typography color="black">Name: {reservation.user_id}</Typography>
              <Typography color="black">Name: {reservation.item.item_name}</Typography>
              <Typography color="black">Description: {reservation.item.description}</Typography>
              <Typography color="black">Condition: {reservation.item.condition === 1 ? 'Good' : reservation.item.condition === 2 ? 'Average' : 'Bad'}</Typography>
              <Typography color="black">Available: {reservation.item.available}</Typography>
              <Typography color="black">Message: {reservation.item.message}</Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    ))


    
 
   //<h1>Welcome {user.username}</h1>
   //<Notifications user={user} items={userItems}/>
   return (
   <div className='homebody'>
      <h1>Welcome {user.username}</h1>
      <div className="userpage-container">
         
         <div className='userpage-child1'>
            <h3>Your items</h3>
               {itemCards}
         </div>
         <div className='userpage-child2'>
            <h3>Your reservations</h3>
               {reservationCards}
         </div>   
      <Notifications/>              
      </div>
   </div>
   )
}

export default UserPage
