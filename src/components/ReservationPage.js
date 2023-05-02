import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import reservationsService from '../services/reservations';
import itemsService from '../services/items';
import usersService from '../services/users'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

function ReservationPage() {
   const [user, setUser] = useState('');
   const [item, setItem] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const { itemId } = useParams();
 
 
   useEffect(() => {
   let user = usersService.getUser()
   setUser(user)
}, []);
 
     useEffect(() => {
      console.log("Fetching item data...");
      itemsService.getItem(itemId).then(itemData => {
        console.log("Item data fetched successfully.");
        setItem(itemData);
        setIsLoading(false);
      }).catch(error => {
        console.log("Error fetching item data:", error);
        setIsLoading(false);
      });
    }, [itemId]);

   useEffect(() => {
      console.log("item state updated:", item);
    }, [item]);
 
 
   if (isLoading) {
     return <div>Loading...</div>;
   }

   return (
      <div className="reservations">
        <h1 style={{ textAlign: 'center' }}>{user.username} your reservation:</h1>
        {item.map((itemData, index) => (
          <Card className='card' key={index} sx={{ maxWidth: 500 }} style={{backgroundColor: '#7AE582'}}>
            <CardActionArea>
              <CardContent sx={{ padding: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {itemData.item_name}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p" gutterBottom>
                  Description: {itemData.description}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p" gutterBottom>
                  Pick Time: {itemData.pick_time}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p" gutterBottom>
                  Condition: {itemData.condition  === 1 ? 'Good' : item.condition === 2 ? 'Average' : 'Bad'}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p" gutterBottom>
                  Message: {itemData.message}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    );
 }
 

export default ReservationPage;


 
 