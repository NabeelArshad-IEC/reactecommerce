import React, { useState } from "react";
import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { Button } from "./styles/Button";
import FormatPrice from "./Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  // State to track if the cart is empty
  const [isEmpty, setIsEmpty] = useState(cart.length === 0);

  // State for managing popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // State to store the generated order number
  const [orderNumber, setOrderNumber] = useState("");

  // Function to generate a random order number
  const generateRandomOrderNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `#order${randomNumber}`;
  };

  // Function to handle the checkout process
  const handleCheckout = () => {
    // Handle the checkout logic, e.g., creating an order, etc.
    const generatedOrderNumber = generateRandomOrderNumber();
    console.log("Order placed with number:", generatedOrderNumber);

    // For demonstration purposes, clear the cart after placing the order
    clearCart();

    // Update the state to indicate that the cart is now empty
    setIsEmpty(true);

    // Update the state to show the popup with the order number
    setOrderNumber(generatedOrderNumber);
    setShowPopup(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
    setOrderNumber("");
  };

  return (
    <Wrapper>
      <div className="container">
        {isEmpty ? (
          <EmptyDiv>
            <h3>No Cart in Item </h3>
          </EmptyDiv>
        ) : (
          <div>
            <div className="cart_heading grid grid-five-column">
              {/* ... (your existing cart headings) */}
            </div>
            <hr />
            <div className="cart-item">
              {cart.map((curElem) => (
                <CartItem key={curElem.id} {...curElem} />
              ))}
            </div>
            <hr />
            <div className="cart-two-button">
              <Button onClick={handleCheckout}>Checkout</Button>
              <Button className="btn btn-clear" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
            <div className="order-total--amount">
              <div className="order-total--subdata">
                {/* ... (your existing order total_amount content) */}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Popup message */}
      {showPopup && (
        <Popup>
          <div>
            <p>Order Placed Successfully!</p>
            <p>Order Number: {orderNumber}</p>
            <Button onClick={handleClosePopup}>Close</Button>
          </div>
        </Popup>
      )}
    </Wrapper>
  );
};


// Styled components

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
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

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }


  `;
  const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10rem;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;


export default Cart;