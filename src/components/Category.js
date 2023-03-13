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

   return(
      <div>
         <h1>{category.category_id}  {category.category}</h1>
         <ul>
            {items.map(item => (
               <li key={item.item_id}>
               Item: {item.item_name} 
               <br/>
               Description: {item.description}
               <br/> 
               Condition: {item.condition}
               <br />  
               <button onClick={() => Reserve(item.item_id)}>Reserve</button>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Category;