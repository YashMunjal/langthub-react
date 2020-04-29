import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware,compose } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//STORE->GLOBALIZED STATE
const langthubStore = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middleware))

)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={langthubStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
