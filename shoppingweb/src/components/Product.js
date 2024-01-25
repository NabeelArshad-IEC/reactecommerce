import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import AddToCart from "./AddToCart";

const Product = (curElem) => {
  const { id, name, price, image } = curElem;
  const { addToCart } = useCartContext();

  const addToCartHandler = () => {
    addToCart(id, null, 1, curElem);
  };

  return (
    <div>
       <NavLink to={`/singleproduct/${id}`}>
      <StyledProductCard>
        <figure>
          {/* Make the image clickable */}
          <NavLink to={`/singleproduct/${id}`}>
            <img src={image} alt={name} />
          </NavLink>
          <figcaption className="caption">hot</figcaption>
        </figure>

        <div className="card-data">
          <div className="product-info">
            <h3>
              {name} - <FormatPrice price={price} />
            </h3>
          </div>
        </div>
      </StyledProductCard>
      </NavLink>
      {/* "Add to Cart" button placed outside the card */}
      <div className="add-to-cart-container">
        <AddToCart product={curElem} addToCart={addToCartHandler} />
      </div>
    </div>
  );
};

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px; /* Add margin as needed */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add box shadow */

  .card-data {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
  }

  h3 {
    margin: 0;
  }
`;

export default Product;
