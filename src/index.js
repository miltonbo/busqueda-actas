/**
 * MiltonBO template used to implement Case Study about Movie Searching
 */
import React from 'react';
import ReactDOM from 'react-dom';

// Save a reference to the root element for reuse
const rootEl = document.getElementById("root");

// Create a reusable render method that we can call more than once
let render = () => {
  const MainApp = require('./App').default;
  ReactDOM.render(
    <MainApp />,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    render(
      <App />,
      rootEl
    );
  });
}

render();