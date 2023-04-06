import React, { useEffect, useRef, useState } from "react";
import { Alert, MenuItem, Select, Snackbar } from '@mui/material';

function Notifications() {

   const [notifications, setNotifications] = useState([]);

   useEffect(() => {
      setNotifications([
        { message: 'One of your items has been made available again', type: 'info' },
        { message: 'One of your items has been reserved!', type: 'success' },
        { message: 'One of your items has been deleted!', type: 'error' }
      ]);
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