import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { MenuItem, Select } from '@mui/material';
import Text from './Text.js'
import Input from './Input.js'
import Header from './Header.js'
import { DateTimePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function CreateForm() {
   const [categories, setCategories] = useState([]);
   const [conditions, setConditions] = useState([]);
   const [item, setItem ] = useState({
      item_name:'',condition:'', description: '', category:'', picktime: null, user: 1
   });

   useEffect(() => {
      const fetchCategories = async () => {
         try{
            const response = await fetch('https://recycle-app-back-92873459875.azurewebsites.net/api/getcategories');
            const json = await response.json();
            setCategories(json);
         } catch (error) {
            console.error(error);
         }
      };
      fetchCategories();
   }, [])

   useEffect(() => {
      const fetchConditions = async () => {
         try{
            const response = await fetch('https://recycle-app-back-92873459875.azurewebsites.net/api/getconditions');
            const json = await response.json();
            setConditions(json);
         } catch (error) {
            console.error(error);
         }
      };
      fetchConditions();
   }, [])


   const handleChange = (event) => {
      const { name, value } = event.target;
      setItem((prevItem) => ({
         ...prevItem,
         [name]: value,
      }));
   };

   /*const handleDateChange = (date) => {
      console.log(date);
      setItem((prevItem) => ({
         ...prevItem,
         picktime: date,
      }));
   }*/


   const handleSubmit = (event) => {
      saveItem(item);
      event.preventDefault();
      setItem({
          item_name:'', condition:'', description: '', category:'', user: 1
      })
   }

   const saveItem = (item) => {
      fetch('https://recycle-app-back-92873459875.azurewebsites.net/api/add-item', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
      })
      .then(res => console.log(item))
      .catch(err => console.error(err))
  }

   const handleDropChange = (event) => {
      setItem({...item, [event.target.name]: event.target.value});
  };

   return(
      <div className="homebody">
            <Header text='Create a listing'/>
            <form onSubmit={handleSubmit}>
                <Text text='Name'/>
                <Input 
                    id='item_name' 
                    name='item_name' 
                    type='text' 
                    value={item.item_name} 
                    onchange={e=>handleChange(e)}
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
                <input type="submit" value="Submit" />
            </form>
        </div>
        
    )
}

export default CreateForm;