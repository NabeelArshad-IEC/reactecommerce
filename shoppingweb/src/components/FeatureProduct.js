import React, { useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { useProductContext } from "../context/productcontex";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  const filteredProducts = selectedCategory
    ? featureProducts.filter((product) => product.category === selectedCategory)
    : featureProducts;

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="common-heading">Design&Sense Products</div>
        
        <div className="buttons-row">
          <div className="spacer"></div>
          <div className="button-container">

          <button
              className="custom-button"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
            <button
              className="custom-button"
              onClick={() => setSelectedCategory("mobile")}
            >
              Mobile
            </button>
            <button
              className="custom-button"
              onClick={() => setSelectedCategory("tablet")}
            >
              Hot
            </button>
           
          </div>
        </div>

        <div className="grid grid-three-column">
          {filteredProducts.map((curElem) => (
            <Product key={curElem.id} {...curElem} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 100%;
      margin-top: 1.5rem;
      height: 25rem;
      transition: all 0.2s linear;
    
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: #0C6980;
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
margin-top: 3px;
padding:10px 107px;
      &:hover {
        background-color: #0C6980;
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }

  .buttons-row {
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 1rem; // Adjust the margin as needed
  }

  .custom-button {
    border: 1px solid #000;
    color: #0C6980;
    background-color: transparent;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .buttons-row {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem; // Adjust the margin as needed
  }

  .spacer {
    flex: 1; // This will create a flexible space to push buttons to the right
  }

  .button-container {
    display: flex;
  }

  .custom-button {
    border: 1px solid #0C6980;;
    color: #0C6980;
    background-color: transparent;
    padding: 1rem 3rem;
    cursor: pointer;
  margin-left:10px;
  
  }
  .custom-button:hover {
    color: #FFFFFF; /* Change text color on hover */
    background-color: #0C6980; /* Change background color on hover */
}
`;

export default FeatureProduct;