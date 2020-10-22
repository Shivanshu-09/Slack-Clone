import React from 'react';
//  ReactDOM is a package used for rendering
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './components';
import UserProvider from './providers/UserProvider';

//  We are rendering main App component inside a div with id "root"
ReactDOM.render(
  <UserProvider>
    {/* Whatever is inside User Provider component, those components will get the
    access of the state "user" , "loading" */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
);
