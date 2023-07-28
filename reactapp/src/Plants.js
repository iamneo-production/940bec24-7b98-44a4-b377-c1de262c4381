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
import './Navbar.css';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import {Link} from "react-router-dom"
import { Dropdown ,ButtonToolbar} from 'rsuite';
import ReceiptIcon from '@mui/icons-material/Receipt';
import 'react-dropdown/style.css';
import {
  Box1,
  Container1,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import rosePlantImage from './img/roseplant.jpg';
import orchidPlantImage from './img/orchid.jpg';
import BonsaiTree from './img/Bonsai Plant.jpg';
import Sunflowerseeds from './img/SunflowerSeeds.jpg';
import HerbKit from './img/HerbKit.jpeg';
import IndoorSet from './img/IndoorSet.jpg';
import GardeningSet from './img/GardeningSet.jpg';
import Pruning from './img/Pruning.jpg';
import Gloves from './img/gloves.jpg';
import Bg1 from './img/Bg1.jpg';
import Bg2 from './img/bg2.jpg';
import Bg3 from './img/Bg3.jpg';
import Bg4 from './img/Bg4.jpg';
import { Slide , Fade ,Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import CartPage from './CartPage';







const Navbar = ({ addToCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const [productQuantities, setProductQuantities] = useState({}); // State to hold the quantities of each product

  const open = Boolean(anchorEl);
  const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    default:
      return state;
  }
};
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleQuantityChange = (event, productId) => {
    const newQuantities = { ...productQuantities, [productId]: parseInt(event.target.value) };
    setProductQuantities(newQuantities);
  };

  const products = [
    {
      id: 1,
      name: 'Rose Plant',
      image: rosePlantImage,
      price: 699,
      description: 'Beautiful rose plant for your garden.',
    },
    {
      id: 2,
      name: 'Orchid Plant',
      image: orchidPlantImage,
      price: 899,
      description: 'Elegant orchid plant with vibrant flowers.',
    },
    {
      id: 3,
      name: 'Bonsai Tree',
      image: BonsaiTree,
      price: 1299,
      description: 'Artistic bonsai tree for a calming atmosphere.',
    },
    {
      id: 4,
      name: 'Sunflower Seeds',
      image: Sunflowerseeds,
      price: 199,
      description: 'Packet of sunflower seeds to grow your own sunflowers.',
    },
    {
      id: 5,
      name: 'Herb Garden Kit',
      image: HerbKit,
      price: 799,
      description: 'Complete kit for growing a variety of herbs in your home.',
    },
    {
      id: 6,
      name: 'Indoor Succulent Set',
      image: IndoorSet,
      price: 399,
      description: 'Set of small indoor succulent plants.',
    },
    {
      id: 7,
      name: 'Garden Tool Set',
      image: GardeningSet,
      price: 599,
      description: 'Complete set of essential gardening tools.',
    },
    {
      id: 8,
      name: 'Pruning Shears',
      image: Pruning,
      price: 299,
      description: 'Sharp pruning shears for trimming plants and shrubs.',
    },
    {
      id: 9,
      name: 'Gardening Gloves',
      image: Gloves,
      price: 199,
      description: 'Protective gloves for comfortable gardening.',
    },
  ];

  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
 
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const handleAddToCart = (product) => {
    const quantity = productQuantities[product.id] || 1; // Use the selected quantity or default to 1 if not set
    const item = { ...product, quantity };
    addToCart(item);
  };
  
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink className="all" to="/About">
            About
          </NavLink>
          <NavLink className="all" to="/Navbar">
           Home
          </NavLink>
          <NavLink className="all" to="/Plants">
           Plants
          </NavLink>
          <NavLink className="all" to="/Tools">
            Tools
          </NavLink>
          <NavLink className="all" to="/Pesticides">
            Pesticides
          </NavLink>
          <NavLink className="all" to="/Fertilizers">
            Fertilizers
          </NavLink>
          <NavLink className="all" to="/Seeds">
          Seeds
          </NavLink>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="all" to="/Cart">
            <Tooltip title="Cart">
              <IconButton size="small" >
              <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </NavLink>
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
          <MenuItem component={Link} to="/Profile" onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          
          <MenuItem component={Link} to="/Orders" onClick={handleClose}>
  <ListItemIcon>
    <ReceiptIcon fontSize="small" />
  </ListItemIcon>
  Orders
</MenuItem>

          <Divider />
         
          <MenuItem component={Link} to="/Settings" onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem component={Link} to="/" onClick={handleClose}>
           
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
            
          </MenuItem>
        </Menu>
      </Nav>
      <Container>
      
    
      <Box className="search-bar" sx={{ mb: 2 }}>
  <TextField
    className="search-input"
    label="Search"
    variant="outlined"
    value={searchTerm}
    onChange={handleSearchChange}
    size="small" // Enlarge the search bar by setting the size prop to "small"
    fullWidth // Make the search bar take up the full width of the container
  />
</Box>


    <Typography style={{fontFamily:"Georgia, 'Times New Roman', Times, serif",fontSize:"45px"}} align="center" gutterBottom>
         Plants 
        </Typography>

        <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                style={{ border: '4px solid lightgreen' }}
                component="img"
                height="450"
                src={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  type="number"
                  label="Quantity"
                  variant="outlined"
                  value={productQuantities[product.id] || 1} // Use the selected quantity or default to 1 if not set
                  onChange={(event) => handleQuantityChange(event, product.id)}
                  inputProps={{ min: 1 }}
                  sx={{ width: '80px', mr: 2 }}
                />
                <Button
                  sx={{ color: 'red' }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    

      </Container>
      
    </>
  );
};


export default Navbar;
