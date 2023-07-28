import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Signup';
import Logo from './Logo.js';
import Navbar from './Navbar';
import About from './assets/About';
import Aim from './assets/Aim';
import CartPage from './CartPage';
import Pesticide from './Pesticides';
import Tools from './Tools';
import Fertilizers from './Fertilizers';
import Seeds from './Seeds';
import Plants from './Plants';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Checkout from './pages/Checkout';
import Adminlogin from './Adminlogin'
import Homenav from './Adminside/Homenav' 
import HomePost from './Credmethods/HomePost'
import HomeGet from './Credmethods/HomeGet'
import HomeUpdate from './Credmethods/HomeUpdate'
import HomeDelete from './Credmethods/HomeDelete'
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  // Retrieve cartItems from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cartItems to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Logo}></Route>
          <Route exact path="/Signup" component={Signup}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Aim" component={Aim}></Route>
          <Route exact path="/Orders" component={Orders}></Route>
          <Route exact path="/Profile" component={Profile}></Route>
          <Route exact path="/Settings" component={Settings}></Route>
          <Route exact path="/Adminlogin" component={Adminlogin}></Route>
          <Route exact path="/Homenav" component={Homenav}></Route>
          <Route exact path="/HomePost" component={HomePost}></Route>
          <Route exact path="/HomeGet" component={HomeGet}></Route>
          <Route exact path="/HomeUpdate" component={HomeUpdate}></Route>
          <Route exact path="/HomeDelete" component={HomeDelete}></Route>
          <Route
            exact
            path="/Cart"
            render={(props) => (
              <CartPage
                {...props}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            )}
          />
          <Route
            exact
            path="/Navbar"
            render={(props) => <Navbar {...props} addToCart={addToCart} />}
          />
          <Route
            exact
            path="/Plants"
            render={(props) => <Plants {...props} addToCart={addToCart} />}
          />
          <Route
            exact
            path="/Checkout"
            render={(props) => <Checkout {...props} addToCart={addToCart} />}
          />
          <Route
            exact
            path="/Tools"
            render={(props) => <Tools {...props} addToCart={addToCart} />}
          />
          <Route
            exact
            path="/Pesticides"
            render={(props) => <Pesticide {...props} addToCart={addToCart} />}
          />
          <Route
            exact
            path="/Fertilizers"
            render={(props) => <Fertilizers {...props} addToCart={addToCart} />}
          />
          <Route
            exact
            path="/Seeds"
            render={(props) => <Seeds {...props} addToCart={addToCart} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
