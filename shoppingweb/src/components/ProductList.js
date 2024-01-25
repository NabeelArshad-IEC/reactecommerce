import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Fetch your products from the API and set the products state
    axios.get("your_api_endpoint").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleCategoryClick = (category) => {
    // Set the selected category when a category button is clicked
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      {/* Category buttons */}
      <button onClick={() => handleCategoryClick("mobile")}>Mobile</button>
      <button onClick={() => handleCategoryClick("tablet")}>Tablet</button>
      {/* Render products */}
      {filteredProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
