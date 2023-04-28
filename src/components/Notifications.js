import React, { useEffect, useState } from "react";
import { Alert, Snackbar } from '@mui/material';
import { useSnackbar } from 'notistack';
import usersService from '../services/users'
import reservationsService from "../services/reservations";
import itemsService from "../services/items";

function Notifications() {

   const [reservations, setReservations] = useState([]);
   const [notifications, setNotifications] = useState([]);
   const [userItems, setUserItems] = useState([]);
   const [user, setUser] = useState([]);
   const [activeNotification, setActiveNotification] = useState(null);
   const { enqueueSnackbar } = useSnackbar();

   

   useEffect(() => {
      
      reservationsService
         .getUnnotifiedReservations()
         .then(data => {
            console.log(data);
            setReservations(data);
         })
         .catch(error => {
            console.log(error);
         })

      itemsService
         .itemsByUser()
         .then(data => {
            setUserItems(data);
         })
      
      let user = usersService.getUser()
      setUser(user)

   }, []);

   //Filter reservations that has notifications 'True' and add them to array
   useEffect(() => {
      const unnotifiedReservations = reservations.filter(reservation => reservation.notification === 'True' && user.user_id === reservation.item.user);
      setNotifications(unnotifiedReservations);
      },[reservations, user.user_id])


   //Calls updateReservationNotification and sends data, that notification has been seen.
   const handleSnackBarClose = (notification) => {
      reservationsService.updateReservationNotification(notification)
         .then(() => {
            reservationsService
               .getUnnotifiedReservations()
               .then(data => {
                  setReservations(data);
                  setActiveNotification(null);
               })
               .catch(error => {
                  console.log(error);
               })
         })
         .catch(error => {
            console.log(error);
         })

   }

   useEffect(() => {
      if (notifications.length > 0) {
         setActiveNotification(notifications[0]);
      }
   }, [notifications])
      

  


   return (
      <div>
         {notifications.map(notification => (
            <Snackbar
               key={notification.item_id}
               open={true}
               onClose={() => {handleSnackBarClose(notification)}}
               anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
               <Alert variant="filled" severity="success" onClose={() => {handleSnackBarClose(notification)}}>
                  {`You have a new reservation for ${notification.item.item_name}`}
               </Alert>
            </Snackbar>
         ))}
      </div>
   );
}

export default Notifications;