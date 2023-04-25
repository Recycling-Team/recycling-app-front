import React, { useEffect, useRef, useState } from "react";
import { Alert, MenuItem, Select, Snackbar } from '@mui/material';
import usersService from '../services/users'
import reservationsService from "../services/reservations";
import itemsService from "../services/items";

function Notifications() {

   const [notifications, setNotifications] = useState([]);
   //const [userReservations, setUserReservations] = useState([]);
   const [reservations, setReservations] = useState([]);
   const [showNotification, setShowNotification] = useState(false);
   const [currentNotification, setCurrentNotification] = useState(null);
   const [userItems, setUserItems] = useState([]);
   const [user, setUser] = useState([]);

   useEffect(() => {
      
      reservationsService
         .getUnnotifiedReservations()
         .then(data => {
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

   useEffect(() => {
      const filteredNotifications = reservations.filter(reservation => reservation.notification === 'True');
      setNotifications(filteredNotifications);
      if (filteredNotifications.length > 0) {
         setCurrentNotification(filteredNotifications[0]);
         setShowNotification(true);
      }
   }, [reservations]);

   const handleSnackbarClose = () => {
      setShowNotification(false);

      const index = reservations.findIndex(
         (reservation) => reservation.item_id === currentNotification.item_id
      );
      
      const nextIndex = index + 1;

      if (nextIndex < reservations.length) {
         setCurrentNotification(reservations[nextIndex]);
         setShowNotification(true);
         //console.log(currentNotification);
      } else {
         setNotifications([]);
         setCurrentNotification(null);
      }

      reservationsService.updateReservationNotification(currentNotification)
         .then(() => {
            reservationsService
               .getUnnotifiedReservations()
               .then(data => {
                  setReservations(data);
               })
               .catch(error => {
                  console.log(error);
               })
         })
         .catch(error => {
            console.log(error);
         })
   }


   return (
      <div>
      {showNotification && (
         <Snackbar
            open={showNotification}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }} sx={{width: '100%', padding: '50px'}}
        >
          <Alert 
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{width:'100%'}}
          >
          {`You have a new reservation for ${currentNotification.item_id}`}
          </Alert>
        </Snackbar>
      )}
  </div>
   );
}

export default Notifications;