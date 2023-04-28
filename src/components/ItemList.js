import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton, NativeSelect, Paper, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { useEffect } from 'react';
import Header from './Header.js';
import Category from './Category.js';
import categoriesService from '../services/categories'
import itemsService from '../services/items'
import usersService from '../services/users.js'
import ButtonOptions from './ButtonOptions'


function ItemList() {

   const [items, setItems] = useState([]);
   const [user, setUser] = useState([]);
   const [categories, setCategories] = useState([]);
   const [category, setCategory] = useState([]);
   const [categoryText, setCategoryText] = useState('')

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

      let user = usersService.getUser()
      setUser(user.user_id)
   }, [])

   // Maps fetched categories to Card component
   const categoryPapers = categories.map((category) => (
      <Card key={category.category_id} elevation={3} className='grid-item' style={{backgroundColor: '#7AE582'}}>
         <CardActionArea>
            <CardContent onClick={() => {
               setCategory(category);
               setCategoryText(category.category);
            }}>
               <Typography variant='h5'>{category.category}</Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   ));


   const allItems = items.map((item) => (
      <Card key={item.item_id} elevation={3} className='card' style={{backgroundColor: '#7AE582'}}>
         <CardActionArea>
            <CardContent>
            <Typography>Name: {item.item_name}</Typography>
               <Typography>Description: {item.description}</Typography>
               <Typography>Condition: {item.condition === 1 ? 'Good' : item.condition === 2 ? 'Average' : 'Bad'}</Typography>
               <ButtonOptions item={item} loggedUser={user}  />
            </CardContent>
         </CardActionArea>
      </Card>
   ));

    const handleChange = (event) => {
      console.log(event.target.value);
      }

   
   return (
      <div className='homebody'>
         <div className='grid-container'>
            {categoryPapers}
      </div>
      {category.category_id ?
         <div className='homebody'>
            <h3>{categoryText}</h3>
            <Category category={category}/>
         </div>
      :
      <div className='homebody'>
         <h3>All Items</h3>
         {allItems}
         </div>
      }
      </div>
      );
}

export default ItemList;