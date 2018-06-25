import React, { Component } from 'react';
import ReactDOM from 'react-router';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import Auth from './container/Auth.js';
import Home from './container/Home.js';
import login from './container/login.js';
import SignUp from './container/SignUp.js';

class App extends Component {
  render() {
    return (
      <Router children={this.props.children}>
        <Switch>
          <Route exact path='/login' component={login}/>
          <Route exact path='/SignUp' component={SignUp}/>
          <Auth>
            <Route exact path='/' component={Home}/>
          </Auth>
        </Switch>
      </Router>      
    );
  }
}
export default App;    
      
