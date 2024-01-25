import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import AddToCart from "./AddToCart";

const Product = (curElem) => {
  const { id, name, price, image, category } = curElem;
  const { addToCart } = useCartContext();

  const addToCartHandler = () => {
    addToCart(id, null, 1, curElem);
  };

  return (
    <div>
      <NavLink to={`/singleproduct/${id}`}>
        <StyledProductCard>
          <figure>
            <NavLink to={`/singleproduct/${id}`}>
              <img src={image} alt={name} />
            </NavLink>
            <figcaption className="caption">{category}</figcaption>
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
      <div className="add-to-cart-container">
        <AddToCart product={curElem} addToCart={addToCartHandler} />
      </div>
    </div>
  );
};

const StyledProductCard = styled.div`
  // ... your existing styles
`;

export default Product;
