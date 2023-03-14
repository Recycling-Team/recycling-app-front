import { Card, CardActionArea, CardContent, Paper, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Reserve from './Reserve'

function Category({category}) {
   const [items, setItems] = useState([]);

   //Fetch all items and filter the items based on category id   
   useEffect(() => {
      fetch('https://recycle-app-back-92873459875.azurewebsites.net/api/getitems')
      .then(response => response.json())
      .then(data => {
         const filteredItems = data.filter(item => item.category === category.category_id);
         setItems(filteredItems);
      })
      .catch(error => console.error(error))
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