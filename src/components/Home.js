import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


function Home() {
   return(
      <div className="body">
         <Link to="/create"><Button variant="contained">Create a listing</Button></Link>
      </div>
   );
}

export default Home;