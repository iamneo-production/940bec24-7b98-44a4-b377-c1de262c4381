import React from 'react';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <div className='cart'>
        <h1>Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      border: '4px solid black',
                      maxWidth: '300px',
                      maxHeight: '300px',
                    }}
                  />
                </div>
                <p className='tttt'>Price: {item.price}</p>
                <p className='tttt'>Quantity: {item.quantity}</p> {/* Added quantity */}
                <button
                  className='bt'
                  style={{ backgroundColor: 'black', color: 'white' }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <p className='tttt'>Total Price: {getTotalPrice()}</p>
            <Link to='/Checkout'>
              <button className='button'>Proceed for Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
