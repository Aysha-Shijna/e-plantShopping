import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem, addItem } from "../CartSlice";

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.substring(1)); // Assuming cost is like "₹299"
    return (price * item.quantity).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  if (!cartItems.length) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Your cart is empty</h2>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Shopping Cart</h2>
      <button onClick={handleContinueShopping} style={{ marginBottom: "20px" }}>
        Continue Shopping
      </button>

      {cartItems.map((item) => (
        <div
          key={item.name}
          style={{
            borderBottom: "1px solid #ddd",
            paddingBottom: "10px",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{ width: "100px", marginRight: "20px" }}
            />
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>Unit Price: {item.cost}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ₹{calculateTotalCost(item)}</p>
            </div>

            <div>
              <button onClick={() => handleIncrement(item)}>+</button>
              <button onClick={() => handleDecrement(item)}>-</button>
              <button
                onClick={() => handleRemove(item)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Optionally, add a Checkout button here */}
    </div>
  );
};

export default CartItem;
