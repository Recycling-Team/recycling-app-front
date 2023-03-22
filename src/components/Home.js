import { Button, Stack, Paper, Typography, Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


function Home() {
   
   /*const handleLoginClick = () => {
      history.push("/login");
    };
  
    const handleRegistrationClick = () => {
      history.push("/registration");
    };*/

   return(
      <div className='homebody'>
         <div className="homebody">
            <h2>Welcome to Recycling App</h2>
         </div>
         <div className='grid-container-home'>
            <Card className="grid-item" elevation={3} component={Link} to='/login'>
               <CardActionArea>
                  <CardContent>
                     <Typography variant="h5">LOGIN</Typography>
                  </CardContent>
               </CardActionArea>
            </Card>
            <Card className="grid-item" elevation={3} component={Link} to='/registration'>
               <CardActionArea>
                  <CardContent>
                     <Typography variant="h5">REGISTER</Typography>
                  </CardContent>
               </CardActionArea>
            </Card>
         </div>
      </div>
   );
}

export default Home;