import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Home from '@my-lawyer-portal/product-home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);// render element on div with ID of 'root'