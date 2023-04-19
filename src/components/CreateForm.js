import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { MenuItem, Select} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Text from './Text.js'
import Header from './Header.js'
import categoriesService from '../services/categories'
import conditionsService from '../services/conditions'
import itemsService from '../services/items'
import usersService from '../services/users'


function CreateForm() {
   const [categories, setCategories] = useState([]);
   const [conditions, setConditions] = useState([]);
   const [loggedUser, setLoggedUser] = useState(0)
   const [item, setItem ] = useState({
      item_name:'', condition:'', description: '', available: 'Yes', category:'', user: loggedUser, pick_time: null
   });

   //fetch categories and conditions data from server
   useEffect(() => {
      categoriesService
         .getAll()
         .then(data => {
            setCategories(data);
         })
         .catch(error =>{
            console.log(error)
         })

      conditionsService
         .getAll()
         .then(data => {
            setConditions(data)
         })
         .catch(error => {
            console.log(error)
         })
        
      let user = usersService.getUser()
      setLoggedUser(user.user_id)
      setItem((prevItem) => ({
         ...prevItem,
         user: user.user_id,
      }))
   }, [])

   const handleChange = (event) => {
      const { name, value } = event.target;
      console.log(loggedUser)
      setItem((prevItem) => ({
         ...prevItem,
         [name]: value,
      }));
   };

   const handleDateChange = (date) => {
      console.log(date);
      setItem((prevItem) => ({
         ...prevItem,
         pick_time: date,
      }));
   }


   const handleSubmit = (event) => {
      console.log(item);
      saveItem(item);
      event.preventDefault();
      setItem({
          item_name:'', condition:'', description: '', available: 'Yes', category:'', message:'', user: loggedUser, pick_time: null
      })
   }

   const saveItem = (item) => {
      itemsService
         .addItem(item)
         .then( response => {
            console.log(`added ${item.item_name} to items`)
         })
         .catch(error => {
            console.log(error)
         })
   }

   const handleDropChange = (event) => {
      setItem({...item, [event.target.name]: event.target.value});
  };

  if (!loggedUser) {
      return <div className='homebody'>You need to login to create a listing</div>;
   }

   return(
      <div className="homebody">
            <Header text='Create a listing'/>
            <form onSubmit={handleSubmit}>
                <Text text='Name'/>
                <input 
                    id='item_name' 
                    name='item_name' 
                    type='text' 
                    value={item.item_name} 
                    onChange={e=>handleChange(e)}
                />
                <Text text='Description' />
                <input
                    id='description'
                    name='description'
                    type='text'
                    value={item.description}
                    onChange={e => handleChange(e)}
                />
               <label>
                <Text text='Choose condition' />
                  <Select 
                     className='dropdown'
                     variant="outlined"
                     sx={{
                        width: 200,
                        height: 40,
                        marginRight: 15,
                        border: "1px solid darkgrey",
                        color: "black",
                     }}
                     id='condition' 
                     name='condition' 
                     defaultValue='Condition'
                     value={item.condition} 
                     onChange={handleDropChange}
                     fullWidth
                     label='Category'
                     >
                     {conditions.map((condition) => (
                        <MenuItem key={condition.condition_id} value={condition.condition_id}>{condition.condition}</MenuItem>
                     ))}
                  </Select>
                </label>
                <br></br>
                <label>
            
                <Text text='Choose a category' />
                  <Select 
                     className='dropdown'
                     variant="outlined"
                     sx={{
                        width: 200,
                        height: 40,
                        marginRight: 15,
                        border: "1px solid darkgrey",
                        color: "black",
                     }}
                     id='category' 
                     name='category' 
                     defaultValue='Category'
                     value={item.category} 
                     onChange={handleDropChange}
                     fullWidth
                     label='Category'
                     >
                     {categories.map((category) => (
                        <MenuItem key={category.category_id} value={category.category_id}>{category.category}</MenuItem>
                     ))}
                  </Select>
                </label>
                <br></br>
<label>
                <Text text='Choose Date' />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                   <DatePicker 
                   id='pick_time'
                   value={item.pick_time}
                   onChange={e=>handleDateChange(e)}
                   />
                  </LocalizationProvider>
</label>
                  <br></br>
               
                  <Text text='Message' />
                  <textarea
                 id='message'
                 name='message'
                value={item.message}
                onChange={e=>handleChange(e)}
                rows={5} 
                style={{ width: '100%', padding: '10px', border: '1px solid darkgrey' }} 
               />

                <input type="submit" value="Submit" />
            </form>
        </div>
        
    )
}

export default CreateForm;