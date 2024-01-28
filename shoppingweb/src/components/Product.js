import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import AddToCart from "./AddToCart";
import { FiEye } from 'react-icons/fi'; // Import the eye icon

const Product = (curElem) => {
  const { id, name, price, image, category } = curElem;
  const { addToCart } = useCartContext();
  const [isEyeIconVisible, setIsEyeIconVisible] = useState(false);

  const addToCartHandler = () => {
    addToCart(id, null, 1, curElem);
  };

  return (
    <div>
      <NavLink to={`/singleproduct/${id}`}>
        <StyledProductCard
          onMouseEnter={() => setIsEyeIconVisible(true)}
          onMouseLeave={() => setIsEyeIconVisible(false)}
        >
          <figure>
            <NavLink to={`/singleproduct/${id}`}>
              <img src={image} alt={name} />
              {isEyeIconVisible && <FiEye className="eye-icon" />}
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
  position: relative;

  .eye-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff; 
    font-size: 5rem; 
    display: none;
  }

  &:hover .eye-icon {
    display: block;
    
  }
`;

export default Product;
