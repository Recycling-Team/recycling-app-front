import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, NativeSelect, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Image } from '@mui/icons-material';
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
         <div className='grid-container'>
            <Paper className='grid-container1' elevation={3}>
               <Typography variant='h3'>Category 1</Typography> 
               <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography> 
            </Paper>
            <Paper className='grid-container2' elevation={3}>
               <Typography variant='h3'>Category 2</Typography> 
               <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography> 
            </Paper>
            <Paper className='grid-container3' elevation={3}>
               <Typography variant='h3'>Category 3</Typography> 
               <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>  
            </Paper>
         </div>
         <div className='homebody'>
            <Header text='All items'/>
            {items.map((item) =>(
            <div key={item.item_id}>
               <h5>{item.item_name}</h5>
            </div>
         ))}
         </div>
      </div>
   );
}

export default ItemList;