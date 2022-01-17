import React from 'react';
import ReactDOM from 'react-dom';
import Providers from './providers';

const rootElement = document.getElementById("root");
ReactDOM.render(
   <React.StrictMode> 
        <Providers />
    </React.StrictMode>
    , rootElement);