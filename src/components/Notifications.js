import React, { useEffect, useRef, useState } from "react";
import { Alert, MenuItem, Select, Snackbar } from '@mui/material';
import usersService from '../services/users'
import reservationsService from "../services/reservations";
import itemsService from "../services/items";

function Notifications({user, items}) {

   const [notifications, setNotifications] = useState([]);
   const [reservations, setReservations] = useState([]);
   //const [userItems, setUserItems] = useState([]);

   useEffect(() => {
      reservationsService
         .getAll()
         .then(data => {
            setReservations(data);
            data.forEach(reservation => {
               items.forEach(item => {
                  if(reservation.item_id === item.item_id) {
                     //console.log(reservation);
                     const reservationDate = new Date(reservation.date);
                     const lastLoginDate = new Date(user.last_login);
                     //console.log(reservationDate);
                     //console.log(lastLoginDate);
                     if (reservationDate > lastLoginDate) {
                        const message = `Your ${item.item_name} has been reserved!`;
                        const type = 'success';
                        showNotification(message, type);
                     } 
                     
                  }
               })
            })
         })
         .catch(error => {
            console.log(error)
         })
         
        }, [items, user.last_login]);


   // Check if the same notification has been displayed before
   const showNotification = (message, type) => {
      if (notifications.some(n => n.message === message && n.type === type)) {
         return;
      }
      setNotifications((prev) => [...prev, {message, type}]);
   };

   // Remove the closed notification from the state
   const handleCloseNotification = (notification) => {
      setNotifications((prev) => prev.filter(n => n !== notification));
   };
  
   return(
      <>
         {notifications.map((notification, index) => (
            <Snackbar
               key={index}
               open={true}
               autoHideDuration={5000}
               onClose={() => handleCloseNotification(notification)}
               anchorOrigin={{ vertical: 'top', horizontal: 'center' }} sx={{width: '100%', padding: '50px'}}
            >
               <Alert onClose={() => handleCloseNotification(notification)} severity={notification.type} variant='filled' sx={{width:'100%'}}>
                  {notification.message}
               </Alert>
            </Snackbar>
         ))}
      </>
   );
}

export default Notifications;