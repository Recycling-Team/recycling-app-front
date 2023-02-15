import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, NativeSelect } from '@mui/material';
import { useEffect } from 'react';

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
      <div>
         <h1>All items</h1>
         {items.map((item) =>(
            <div key={item.item_id}>
               {item.item_name}
            </div>
         ))}
          <NativeSelect defaultValue={'DEFAULT'} onChange={e => handleChange(e)}>
 <option value="DEFAULT" disabled>Users</option>
{users.map(user => (
<option value={user.user_id} key={user.user_id}>{user.user_name}</option>
))
}

 </NativeSelect>
         <Link to="/"><Button variant='contained'>Home</Button></Link>
      </div>
   );
}

export default ItemList;