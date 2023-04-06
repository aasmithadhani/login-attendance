import React from 'react'
import Nav from '../Components/Nav'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import { Typography,
Button } from '@mui/material';
import Box from '@mui/material/Box';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import './Teacher.css'
const drawerWidth=120
const Teacher = () => {
  return (
    // <Box 
    // component="main"
    // sx={{ flexGrow: 1, pl: '10%',pr:'10%', width: '100%'}}>
    <Box sx={{display:'flex'}}>
 <Nav/>
 <Box
    component="main"
    sx={{ flexGrow: 1, p: 10,mt:10, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
  >
    <Toolbar />
    <div style={{
        display:'flex',
        flexDirection:'row'
    }}>
        <Typography className='date'>
            March 4th  
        </Typography>
        <Typography className='date'>
        &nbsp;  Tomorrow
        </Typography>
    </div>
       
        <Paper elevation={5}>
      <Card sx={{ maxWidth: '100%' , display:'flex',position:'relative', flexDirection:'row'}}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SE-COMPUTER ENGINEERING-A3
        </Typography>
        <Typography variant="body2" color="text.secondary">
         12:30-2:30
        </Typography>
        <Typography variant="body2" color="text.secondary">
         computer networks
        </Typography>
      </CardContent>
      <CardActions sx={{float:'right'}}>
        <Button size="large"><CancelOutlinedIcon fontSize='large' color='blue'/></Button>
        
      </CardActions>
    </Card>
      </Paper>
    </Box>
    </Box>
   
  )
}


export default Teacher