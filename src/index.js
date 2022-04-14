import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


