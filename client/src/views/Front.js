
import React from "react";
import { Route, Switch } from 'react-router-dom';
import agent from '../agent';

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import Signin from "components/Signin";
import Signup from "components/Signup";
import Lists from "components/Lists";
import ListDetail from "components/ListDetail";

import { store } from '../store';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';



import Home from "components/Home";

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {

  // componentWillMount() {
  //   document.documentElement.classList.remove("nav-open");
  //   React.useEffect(() => {
  //     document.body.classList.add("index");
  //     return function cleanup() {
  //       document.body.classList.remove("index");
  //     };
  //   });
  // }
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {

      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      // this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render(){
    return (
      <div>
        <IndexNavbar />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/lists" component={Lists} exact />
            <Route path="/lists/:id" component={ListDetail} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
