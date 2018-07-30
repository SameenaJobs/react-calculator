import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './component/frame';
import './styles/main.css';
// using the render method, we will mount this node into our DOM (html file) on the element with 
// id of 'app'
ReactDOM.render(
  <Frame/>,
  document.getElementById('app')
);