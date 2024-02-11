import React from 'react';
import view_item_img from './Assets/product_1.png';

const ViewItem = (props) => {

  return (
    <div className='view-item-section'>
      <div className='container'>
        <div className='view-item-wrapper'>
          <div className='view-item-img'>
            <img src={view_item_img} alt="" />
          </div>
          <div className='view-item-details'>
            <h2>Name: {props.name}</h2>
            <p><strong>Price:</strong> ${props.price}</p>
            <p><strong>Rating:</strong> {props.rating}</p>
            <p><strong>Category: {props.category}</strong></p>
            <button className='product-details-btn w-inline-block mt-30'>Add To Cart</button>
            <div className='quantity'>
              <div className='update-number'>-</div>
              <input className='update-input' type="number" min="0" />
              <div className='update-number'>+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
