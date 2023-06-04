import React from 'react';
import { Provider } from 'react-redux';
import {store} from 'components/store/index'
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
