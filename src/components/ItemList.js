import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect } from 'react';

function ItemList() {

   const [items, setItems] = useState([]);

   useEffect(() => {
      const fetchItems = async () => {
         try{
            const response = await fetch('http://localhost:8080/items');
            const json = await response.json();
            setItems(json);
         } catch (error) {
            console.error(error);
         }
      };
      fetchItems();
   }, [])


   return(
      <div>
         <h1>All items</h1>
         {items.map((item) =>(
            <div key={item.item_id}>
               {item.item_name}
            </div>
         ))}
         <Link to="/"><Button variant='contained'>Home</Button></Link>
      </div>
   );
}

export default ItemList;