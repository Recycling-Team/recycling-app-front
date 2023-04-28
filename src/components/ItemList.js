import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton, NativeSelect, Paper, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { useEffect } from 'react';
import Header from './Header.js';
import Category from './Category.js';
import categoriesService from '../services/categories'
import itemsService from '../services/items'


function ItemList() {

   const [items, setItems] = useState([]);
   const [users, setUsers] = useState([]);
   const [categories, setCategories] = useState([]);
   const [category, setCategory] = useState([]);

   useEffect(() => {
      categoriesService
         .getAll()
         .then(data => {
            setCategories(data)
         })
         .catch(error =>{
            console.log(error)
         })

      itemsService
         .getAll()
         .then(data => {
            setItems(data);
         })
         .catch(error =>{
            console.log(error)
         })
   }, [])

   // Maps fetched categories to Card component
   const categoryPapers = categories.map((category) => (
      <Card key={category.category_id} elevation={3} className='grid-item' style={{backgroundColor: '#7AE582'}}>
         <CardActionArea>
            <CardContent onClick={() => setCategory(category)}>
               <Typography variant='h5'>{category.category}</Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   ));


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
      </div>
   );
}

export default ItemList;