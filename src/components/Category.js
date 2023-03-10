import React from "react";

function Category({category}) {

   console.log(category);

   return(
      <div>
         <h1>{category}</h1>
      </div>
   );
}

export default Category;