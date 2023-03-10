import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton, NativeSelect, Paper, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { useEffect } from 'react';
import Header from './Header.js';
import Category from './Category.js';


function ItemList() {

   const [items, setItems] = useState([]);
   const [users, setUsers] = useState([]);
   const [categories, setCategories] = useState([]);
   const [category, setCategory] = useState('');

   useEffect(() => {
      const fetchCategories = async () => {
         try{
            const response = await fetch('http://localhost:7071/api/GetCategories');
            const json = await response.json();
            setCategories(json);
         } catch (error) {
            console.error(error);
         }
      };
      fetchCategories();
   }, [])

   // Maps fetched categories to Paper component
   const categoryPapers = categories.map((category) => (
      <Card key={category.category_id} elevation={3} className='grid-item'>
         <CardActionArea>
            <CardContent onClick={() => setCategory(category.category)}>
               <Typography variant='h5'>{category.category}</Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   ));

   useEffect(() => {
      const fetchItems = async () => {
         try{
            const response = await fetch('http://localhost:7071/api/GetItems');
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
          {categoryPapers}
         </div>
         <div className='homebody'>
            <Category category={category}/>  
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