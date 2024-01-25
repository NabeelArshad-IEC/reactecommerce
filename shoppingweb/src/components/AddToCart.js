import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";
import styled from "styled-components";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id } = product;

  const handleAddToCart = () => {
    addToCart(id, null, 1, product); // You may pass default values for color and quantity
  };

  return (
    <Wrapper>
     
    
        <Button className="btn " onClick={handleAddToCart}>Add To Carts</Button>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
