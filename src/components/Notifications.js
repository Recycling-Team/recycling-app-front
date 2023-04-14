import React, { useEffect, useRef, useState } from "react";
import { Alert, MenuItem, Select, Snackbar } from '@mui/material';
import usersService from '../services/users'
import reservationsService from "../services/reservations";
function Notifications() {

   const [notifications, setNotifications] = useState([]);
   const [user, setUser] = useState([]);
   const [reservations, setReservations] = useState([]);

   useEffect(() => {
      setNotifications([
        { message: 'One of your items has been made available again', type: 'info' },
        { message: 'One of your items has been reserved!', type: 'success' },
        { message: 'One of your items has been deleted!', type: 'error' }
      ]);

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

      /*const compareDatesAndNotify = () => {
         if (user.user_id === reservations.user_id ) {
            const reservationDate = new Date(reservations.date);
            const lastLoginDate = new Date(user.last_login)

            if (reservationDate > lastLoginDate) {
               const message = 'One of your items has been reserved!';
               const type = 'success';
               showNotification(message, type);
            }
         }
      }*/

   }, []);


   const showNotification = (message, type) => {
      setNotifications((prev) => [...prev, {message, type}]);
   };



  
   return(
      <>
         {notifications.map(({ message, type }, index) => (
         <Snackbar
            key={index}
            open={notifications.length - 1 === index}
            onClose={() => {
               setNotifications((prev) => prev.slice(0, index).concat(prev.slice(index + 1)));
            }}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }} sx={{width: '100%', padding: '50px'}}
         >
            <Alert onClose={() => {
               setNotifications((prev) => prev.slice(0, index).concat(prev.slice(index + 1)));
            }} severity={type} sx={{width: '100%'}} variant='filled' >
               {message}
            </Alert>
         </Snackbar>
         ))}  
      </>
   );
}

export default Notifications;