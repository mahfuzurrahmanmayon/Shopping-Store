import React from 'react'
import { Link } from 'react-router-dom';

const Product = (props) => {

    return (
      <div className="single-product">
        <div className="product-img">
          <img src={props.image} loading="lazy" alt="" />
        </div>
        <div className="rating">Rating: {props.rating}</div>
        <div className="product-name">{props.name}</div>
        <div className="product-price">${props.price}</div>
        <Link to={`/all/${props.id}`} className="product-details-btn w-inline-block" >
            <div>View Item</div>
        </Link>
      </div>
    );
  };

export default Product