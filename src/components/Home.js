import { Button, Stack, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


function Home() {
   return(
      <div className='homebody'>
         <div className='grid-container'>
            <Paper className='grid-container1' elevation={3}>
               <Typography variant='h3'>Something 1</Typography> 
               <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography> 
            </Paper>
            <Paper className='grid-container2' elevation={3}>
               <Typography variant='h3'>Something 2</Typography> 
               <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography> 
            </Paper>
            <Paper className='grid-container3' elevation={3}>
               <Typography variant='h3'>Something 3</Typography> 
               <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>  
            </Paper>
         </div>
      </div>
   );
}

export default Home;