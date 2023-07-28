import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Container, Typography, Grid, Card, CardMedia, CardContent,Button } from '@mui/material';
import './Homenav.css';
import { Nav, NavLink, Bars, NavMenu } from './Homeelements';
import {Link} from "react-router-dom"
import { Dropdown ,ButtonToolbar} from 'rsuite';
import ReceiptIcon from '@mui/icons-material/Receipt';
import 'react-dropdown/style.css';










const Navbar = ({ addToCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const [productQuantities, setProductQuantities] = useState({}); // State to hold the quantities of each product

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 

  
 
 
  return (
    <>
    
      <Nav>
        <Bars />
        <NavMenu>
          
          <NavLink className="all" to="/Homenav">
           Home
          </NavLink>
          <NavLink className="all" to="/Homenav">
           Plants
          </NavLink>
          <NavLink className="all" to="/Homenav">
            Tools
          </NavLink>
          <NavLink className="all" to="/Homenav">
            Pesticides
          </NavLink>
          <NavLink className="all" to="/Homenav">
            Fertilizers
          </NavLink>
          <NavLink className="all" to="/Homenav">
          Seeds
          </NavLink>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
        </NavMenu>
       
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'black',color:'white' }}>C</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            
          
          <MenuItem component={Link} to="/" onClick={handleClose}>
           
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
            
          </MenuItem>
        </Menu>
      </Nav>
      <Typography style={{backgroundColor:"lightgrey",marginBottom:"-63px",fontSize:"45px"}} align="center" gutterBottom>
          Perform CRUD on Home Page
        </Typography>
      <div className="allign">
  <a>
    <Link to="/HomePost"><button className="rec1">Post Details</button></Link></a>
    <a><Link to="/HomeGet"><button className="rec2">Get Details</button></Link></a>
    <a><Link to="/HomeUpdate"><button className="rec3">Update Details</button></Link></a>
    <a><Link to="/HomeDelete"><button className="rec4">Delete Details</button></Link></a>
    </div>
      
    </>
  );
};


export default Navbar;
