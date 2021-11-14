import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GalleryContextProvider from './Context.js/context';


ReactDOM.render(
  <GalleryContextProvider>
     <BrowserRouter>
       <App />
     </BrowserRouter>
 </GalleryContextProvider>
 
 ,
  document.getElementById('root')
);
