import React, { useState, useEffect} from 'react'
import data_product from '../components/Assets/Product'
import Product from './Product';


const Women = () => {
  const [maxPrice, setMaxPrice] = useState(200)
  const [filterWomenProducts, setFilterWomenProducts] = useState([])


  useEffect(() => {
    const filterWomenProductItem = data_product.filter((item) => item.category === "women");
    setFilterWomenProducts(filterWomenProductItem);

    const filterWomenProductByPrice = filterWomenProductItem.filter((item) => item.price <= maxPrice)
    setFilterWomenProducts(filterWomenProductByPrice)
  }, [maxPrice]);

  const handlePriceChange = (e) => {
    setMaxPrice(e.target.value)
  }

  return (
    <div className="all_product-section">
    <div className="container">
      <div className="all_product-wrapper">
        <div className="see-products">
          <div className="product-wrapper">
            {filterWomenProducts.map((item, i) => {
              console.log(item)
              return <Product key={i} id={item.id} image={item.image}
              rating={item.rating}
              name={item.name}
              price={item.price} />
            })}
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
            Max Price <strong>${maxPrice}</strong>
          </div>
          <input className="filter-by-price" type="range" min="0" max="200" value={maxPrice} onChange={handlePriceChange} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Women