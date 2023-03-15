import { Card, CardActionArea, CardContent, Paper, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import itemsService from '../services/items'
import Reserve from './Reserve'

function Category({category}) {
   const [items, setItems] = useState([]);

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
   }, [category]);

   const itemCards = items.map((item) =>(
      <Card className='card' key={item.item_id} elevation={2} >
         <CardActionArea>
            <CardContent>
               <Typography>Name: {item.item_name}</Typography>
               <Typography>Description: {item.description}</Typography>
               <Typography>Condition: {item.condition}</Typography>
               <Button variant="contained" onClick={() => Reserve(item)}>Reserve</Button>
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