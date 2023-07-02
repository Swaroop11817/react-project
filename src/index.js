import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/userContext';
import { MainDataContextProvider } from './context/mainDataContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 <MainDataContextProvider>
  <UserContextProvider>
    <App />
  </UserContextProvider>
 </MainDataContextProvider>
 </BrowserRouter>
);

