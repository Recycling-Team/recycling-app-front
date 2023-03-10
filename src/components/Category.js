import React, { useEffect, useState } from "react";

function Category({category}) {
   const [items, setItems] = useState([]);

   useEffect(() => {
      fetch('http://localhost:7071/api/GetItems')
      .then(response => response.json())
      .then(data => {
         const filteredItems = data.filter(item => item.category === category.category_id);
         setItems(filteredItems);
      })
      .catch(error => console.error(error))
   }, [category]);

   return(
      <div>
         <h1>{category.category_id} | {category.category}</h1>
         <ul>
            {items.map(item => (
               <li key={item.item_id}>
               Item: {item.item_name} 
               <br/>
               Description: {item.description}
               <br/> 
               Condition: {item.condition}  
               </li>
               
            ))}
         </ul>
      </div>
   );
}

export default Category;