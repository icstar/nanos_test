
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store} from './store';


import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/css/detail.css";


import { Route, Switch, BrowserRouter } from 'react-router-dom';

// pages
import App from "views/Front.js";
import Admin from "views/Admin.js";


ReactDOM.render((
  <Provider store={store}>
  <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin}/>
        <Route path="/" component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));