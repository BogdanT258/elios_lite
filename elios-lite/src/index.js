import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { loaderReducer } from './redux/loaderReducer';

const store = configureStore({
  reducer: loaderReducer // Pass your root reducer to configureStore
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>,
);

reportWebVitals();
