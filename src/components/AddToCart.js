import React, { useState } from "react";

const AddToCart = ({ addToCartItems }) => {
  const [cartItems, setCartItems] = useState(addToCartItems || []);

  const handleDecreaseQuantity = (id) => {
    console.log("Decrement")
    setCartItems(prevCartItems => {
      return prevCartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
    });
  };

  const handleIncreaseQuantity = (id) => {
    console.log("Increment")
    setCartItems(prevCartItems => {
      return prevCartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
    });
  };
  


  return (
    <div className="add-to-cart-section">
      <h3>Your Cart</h3>
      <table>
        <thead>
          <tr>
            <th className="header">Product</th>
            <th className="header">Price</th>
            <th className="header">Quantity</th>
            <th className="header">Total</th>
          </tr>
        </thead>
        <tbody>
          {addToCartItems.length > 0 ? (
            addToCartItems.map((item) => (
              <tr className="tr" key={item.id}>
                <td className="cart-product-img">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                </td>
                <td className="cart-product-price">
                  <h4>${item.price}</h4>
                </td>
                <td className="cart-product-quantity">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </button>
                  <h4>{item.quantity}</h4>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </button>
                </td>
                <td className="cart-product-total">
                  <h4>${item.price * item.quantity}</h4>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Data Found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AddToCart;
