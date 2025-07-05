import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './assets/styles/main.scss';
import { NewsProvider } from './context/NewsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NewsProvider>
        <App />
      </NewsProvider>
    </BrowserRouter>
  </React.StrictMode>
);