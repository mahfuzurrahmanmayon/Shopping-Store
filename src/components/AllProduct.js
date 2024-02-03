import React from 'react'
import Product from './Product';

const AllProductsSection = () => {
    return (
      <div className="all_product-section">
        <div className="container">
          <div className="all_product-wrapper">
            <div className="see-products">
              <div className="product-wrapper">
                <Product imgSrc="images/1.jpg" rating="4.2" productName="Desi Avramovitz" productPrice="50.40" />
                <Product imgSrc="images/1.jpg" rating="4.2" productName="Desi Avramovitz" productPrice="50.40" />
                <Product imgSrc="images/1.jpg" rating="4.2" productName="Desi Avramovitz" productPrice="50.40" />
              </div>
            </div>
            <div className="filter-side">
              <h4>Special Sale</h4>
              <div className="filter-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam perferendis voluptas
                ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit itaque?
              </div>
              <h4>Filter by Price:</h4>
              <div className="filter-text">
                Max Price <strong>$200</strong>
              </div>
              <input className="filter-by-price" type="range" min="0" max="200" />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AllProductsSection