import React, {  } from 'react';

const AddToCart = ({ addToCartItems  }) => {
  console.log(addToCartItems); 
  return (
    <div className='add-to-cart-section'>
      <h3>Your Cart</h3>
      <table>
        <thead>
          <tr>
            <th className='header'>Product</th>
            <th className='header'>Price</th>
            <th className='header'>Quantity</th>
            <th className='header'>Total</th>
          </tr>
        </thead>
        <tbody>
          {addToCartItems.length > 0 ? ( 
            addToCartItems.map(item => ( 
              <tr className='tr' key={item.id}>
                <td className='cart-product-img'>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                </td>
                <td className='cart-product-price'>
                  <h4>${item.price}</h4>
                </td>
                <td className='cart-product-quantity'>
                  <h4>1</h4>
                </td>
                <td className='cart-product-total'>
                  <h4>$85</h4>
                </td>
                
              </tr>
            ))
          ) : (
            <div>
              No Data Found.
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AddToCart;
