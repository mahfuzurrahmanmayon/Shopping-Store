import React, { useEffect, useState } from 'react';
import view_item_img from './Assets/product_1.png';
import all_products from './Assets/Product';
import { useParams } from 'react-router-dom';

const ViewItem = () => {
  const { productId } = useParams();
  console.log("productID", productId)
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const filteredProductData = all_products.filter((product) => product.id === productId);
    console.log('Filtered products:', filteredProductData[0]);
    setProductData(filteredProductData.length > 0 ? filteredProductData[0] : null);
  }, [productId]);

  return (
    <div className='view-item-section'>
      <div className='container'>
        <div className='view-item-wrapper'>
          <div className='view-item-img'>
            <img src={view_item_img} alt="" />
          </div>
          <div className='view-item-details'>
            {productData ? (
              <>
                <h2>Name: {productData.name}</h2>
                <p><strong>Price:</strong> ${productData.price}</p>
                <p><strong>Rating:</strong> {productData.rating}</p>
                <p><strong>Category:</strong> {productData.category}</p>
                <div className='quantity'>
                  <div className='update-number'>-</div>
                  <input className='update-input' type="number" min="0" />
                  <div className='update-number'>+</div>
                </div>
                <button className='product-details-btn w-inline-block mt-30'>Add To Cart</button>
              </>
            ) : (
              <p>No product found with ID: {productId}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
