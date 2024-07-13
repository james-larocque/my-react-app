import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import HomePage from '../pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);// render element on div with ID of 'root'