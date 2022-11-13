import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store.js';
import 'modern-normalize/modern-normalize.css';
import { App } from 'components/App';
import { GlobalStyle } from './index.styled.js';
import './index.styled.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
