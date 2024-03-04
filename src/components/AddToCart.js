import React from 'react';

const AddToCart = ({ addToCartItems }) => {
  console.log(addToCartItems)
  return (
    <div className='add-to-cart-section'>
      <h3>Cart Items:</h3>
      {addToCartItems.map(item => (
        <p key={item.id}>{item.name}</p> 
      ))}
    </div>
  );
};

export default AddToCart;
