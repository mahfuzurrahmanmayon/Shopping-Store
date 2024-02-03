import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({ imgSrc, rating, productName, productPrice }) => {
    return (
      <div className="single-product">
        <div className="product-img">
          <img src={imgSrc} loading="lazy" alt="" />
        </div>
        <div className="rating">Rating: {rating}</div>
        <div className="product-name">{productName}</div>
        <div className="product-price">${productPrice}</div>
        <Link to="#" className="product-details-btn w-inline-block">
          <div>View Item</div>
        </Link>
      </div>
    );
  };

export default Product