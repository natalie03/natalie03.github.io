import './index.scss'
import Content from './src/app/content';
import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <Content />
);


var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);