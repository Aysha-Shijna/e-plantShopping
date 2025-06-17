import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // 🔢 Calculate total for all items
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, '')); // Remove ₹ symbol
      return total + price * item.quantity;
    }, 0);
  };

  // ➕ Increment quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // ➖ Decrement quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  // ❌ Remove item
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // 🧮 Subtotal for each item
  const calculateTotalCost = (item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return price * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>
        Total Cart Amount: ₹{calculateTotalAmount()}
      </h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.imageUrl} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.price}</div>

              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >−</button>

                <span className="cart-item-quantity-value">{item.quantity}</span>

                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >+</button>
              </div>

              <div className="cart-item-total">
                Subtotal: ₹{calculateTotalCost(item)}
              </div>

              <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
