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
  }, []);

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
    // console.log(filteredProductAddData)
    const updatedCart = [...addToCart];
    updatedCart.push(filteredProductAddData[0]);

    // console.log("AddToCart Array:: ",updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setAddToCart(updatedCart);
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
      {/* <Routes>
          <Route path="/cart" element={<AddToCart addToCartItems={addToCart} />} />
        </Routes> */}
      {/* <AddToCart addToCartItems={addToCart} /> */}
    </>
  );
};

export default ViewItem;
