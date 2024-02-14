import React from 'react';

const AddToCart = ({ addToCartItems }) => {
  return (
    <div className='add-to-cart-section'>
      <h3>Cart Items:</h3>
      <ul>
        {addToCartItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> - <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCart;
