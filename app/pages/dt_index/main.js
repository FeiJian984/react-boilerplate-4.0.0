/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import 'sanitize.css/sanitize.css';

// Import root app
import DidCatch from 'components/DidCatch';
import App from './App';

import configureStore from './configureStore';

// Import CSS reset and Global Styles
import '../../global-styles.css';

// Create redux store
const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={UTS.history}>
        <DidCatch>
          <App />
        </DidCatch>
      </Router>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
