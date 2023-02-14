import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


function Home() {
   return(
      <div className="body">
         <h1>Recycling App</h1>
         <Link to="/create"><Button variant="contained">Create a listing</Button></Link>
         <Link to="/itemlist"><Button variant="contained">All items</Button></Link>
      </div>
   );
}

export default Home;