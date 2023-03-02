import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, NativeSelect } from '@mui/material';
import { useEffect } from 'react';
import Header from './Header.js'


function ItemList() {

   const [items, setItems] = useState([]);
   const [users, setUsers] = useState([]);
  


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

   useEffect(() => {
      const fetchItems = async () => {
          try{
             const response = await fetch('http://localhost:8080/users');
             const json = await response.json();
             setUsers(json);
             console.log(json);
          } catch (error) {
             console.error(error);
          }
       };
       fetchItems();
    }, [])

    const handleChange = (event) => {
      console.log(event.target.value);
      }


   return(
      <div className='homebody'>
         <Header text='All items'/>
         {items.map((item) =>(
            <div key={item.item_id}>
               <h5>{item.item_name}</h5>
            </div>
         ))}
      </div>
   );
}

export default ItemList;