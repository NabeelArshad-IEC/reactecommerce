// Checkout.js

import React, { useState } from "react"; // Import useState from React
import styled from "styled-components";
import { Button } from "./styles/Button";

const Checkout = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleCheckout = () => {
    // Perform checkout logic here

    // Show the success message
    setShowPopup(true);

    // You can also close the popup after a certain delay if needed
    setTimeout(() => {
      setShowPopup(false);
      onClose();
    }, 3000);
  };

  return (
    <CheckoutWrapper>
      <h2>Checkout</h2>
      {/* Your checkout form and details go here */}
      <Button onClick={handleCheckout}>Place Order</Button>

      {/* Popup message */}
      {showPopup && (
        <PopupMessage>
          <p>Order placed successfully!</p>
        </PopupMessage>
      )}
    </CheckoutWrapper>
  );
};

const CheckoutWrapper = styled.div`
  // Add your styling for the checkout component
`;

const PopupMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export default Checkout;
