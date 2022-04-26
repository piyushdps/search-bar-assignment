import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchContextProvider from './Context/Provides/SearchContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
  {/* CONTEXT PROVIDER */}
root.render(
    <SearchContextProvider>
    <App />
    </SearchContextProvider>
  
);

