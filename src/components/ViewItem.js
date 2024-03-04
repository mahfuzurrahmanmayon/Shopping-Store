import React, { useEffect, useState } from "react";
import all_products from "./Assets/Product";
import { useParams } from "react-router-dom";

const ViewItem = ({ addToCart, setAddToCart }) => {
  const { productId } = useParams();
  // console.log("productID", productId)
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    setAddToCart(storedCart || []);
  }, [setAddToCart]);

  useEffect(() => {
    const filteredProductData = all_products.filter(
      (product) => product.id === parseInt(productId)
    );
    // console.log('Filtered products:', filteredProductData[0]);
    setProductData(
      filteredProductData.length > 0 ? filteredProductData[0] : null
    );
  }, [productId]);

  const handleAddToCart = () => {
    const filteredProductAddData = all_products.filter(
      (product) => product.id === parseInt(productId)
    );

    const existingCartItemIndex = addToCart.findIndex(
      (item) => item.id === filteredProductAddData[0].id
    );

    console.log(existingCartItemIndex);

    if (existingCartItemIndex === -1) {
      // Product not already in the cart, add it
      const updatedCart = [...addToCart, filteredProductAddData[0]];
    
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setAddToCart(updatedCart);
    } else {
      // Product already in the cart, show alert
      alert("This item is already added to your cart.");
    }
  };

  return (
    <>
      <div className="view-item-section">
        <div className="container">
          <div className="view-item-wrapper">
            <div className="view-item-img">
              {productData ? (
                <img src={productData.image} alt="" />
              ) : (
                <div>No Image Found</div>
              )}
            </div>
            <div className="view-item-details">
              {productData ? (
                <>
                  <h2>Name: {productData.name}</h2>
                  <p>
                    <strong>Price:</strong> ${productData.price}
                  </p>
                  <p>
                    <strong>Rating:</strong> {productData.rating}
                  </p>
                  <p>
                    <strong>Category:</strong> {productData.category}
                  </p>

                  <button
                    onClick={handleAddToCart}
                    className="product-details-btn w-inline-block mt-30"
                  >
                    Add To Cart
                  </button>
                </>
              ) : (
                <p>No product found with ID: {productId}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewItem;
