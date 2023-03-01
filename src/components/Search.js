import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Home() {
   return(
      <div>
         <SearchBar/>
         <div className="homebody">
            <div className="grid-container">
               <div className="grid-item1">GRID TESTING, WE CAN SHOW ITEMS ETC HERE FOR EXAMPLE</div>
               <div className="grid-item2">GRID TESTING, WE CAN SHOW ITEMS ETC HERE FOR EXAMPLE</div>
               <div className="grid-item3">GRID TESTING, WE CAN SHOW ITEMS ETC HERE FOR EXAMPLE</div>
            </div>
         </div>
      </div>    
   );
}

export default Home;