import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import {Auth0Provider} from '@auth0/auth0-react'
import { CartProvider } from "./context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(


  <AppProvider>
    <Auth0Provider
 domain="dev-qptdkxe8mdc5qz27.us.auth0.com"
 clientId="rE3ddCGV9BlWjiFSZcHnx2InKz6F0EpG"
 redirectUri={window.location.orgin} >

  </Auth0Provider>
      <CartProvider>
        <App />
      </CartProvider>
   
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();