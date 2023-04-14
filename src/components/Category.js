import { Card, CardActionArea, CardContent, Paper, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import itemsService from '../services/items'
import ButtonOptions from './ButtonOptions'
import usersService from '../services/users'
import Reserve from './Reserve'

function Category({category}) {
   const [items, setItems] = useState([]);
   const [user, setUser] = useState(null)
   //const [userId, setUserId] = useState(1);

   //Fetch all items and filter the items based on category id   
   useEffect(() => {
      itemsService
         .getAll()
         .then(data => {
            const filteredItems = data.filter(item => item.category === category.category_id);
            setItems(filteredItems);
         })
         .catch(error =>{
            console.log(error)
         })
      
      usersService
         .getUser()
         .then(data => {
            setUser(data.user_id);
         })
         .catch(error => {
            console.log(error)
         })
   }, [category]);

   /*if (!user) {
      return <div>You must login to see items</div>;
   }*/
   
   const itemCards = items.map((item) =>(
      <Card className='card' key={item.item_id} elevation={2} >
         <CardActionArea>
            <CardContent>
               <Typography>Name: {item.item_name}</Typography>
               <Typography>Description: {item.description}</Typography>
               <Typography>Condition: {item.condition}</Typography>
               <ButtonOptions item={item} loggedUser={user}  />
            </CardContent>
         </CardActionArea>
      </Card>
   ))

   return(
      <div>
         {itemCards}
      </div>
   );
}

export default Category;