/* eslint-disable */
import dotenv from "dotenv";
dotenv.config({path: `${__dirname}/src/.env`});
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log("index", process.env);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);