import React, { useState } from 'react';

const AddToCart = ({ addToCartItems }) => {
  console.log(addToCartItems); 
  const [counter, setCounter] = useState(1);


  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };


  return (
    <div className='add-to-cart-section'>
      <h3>Your Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {addToCartItems.length > 0 ? ( 
            addToCartItems.map(item => ( 
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                </td>
                <td>
                  <h4>{item.price}</h4>
                </td>
                <td>
                <div className="quantity">
                    <div
                      onClick={() => handleDecrement()}
                      className="update-number"
                    >
                      -
                    </div>
                    <div className="update-input">{counter}</div>
                    <div
                      onClick={() => handleIncrement()}
                      className="update-number"
                    >
                      +
                    </div>
                  </div>
                </td>
                <td>{item.total}</td>
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
