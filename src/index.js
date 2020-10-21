import React from 'react';
//  ReactDOM is a package used for rendering
import ReactDOM from 'react-dom'; 
import './index.css';
import { App } from './components';

//  We are rendering main App component inside a div with id "root"
ReactDOM.render( <App />, document.getElementById('root') );

