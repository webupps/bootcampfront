import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
//import { Router, Switch, Route, useParams  } from 'react-router';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import { Layout } from './layout/layout';
import { Homepage } from './layout/homepage';
import { Portfolio } from './layout/portfolio';
import { Bootcamp } from './layout/bootcamp';
import { Login } from './layout/login';
import { RoutePath } from './helpers/types/enums/route-path';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import rootReducer from './store/rootreducer'; 

const store = createStore(rootReducer);

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
      return (
        <Router>
            <Switch>
              <Route exact path={RoutePath.Home} component={Homepage} />
              <Route exact path={RoutePath.Bootcamp} component={Bootcamp} />
              <Route exact path={RoutePath.Login} component={Login} />
              <Route exact path={RoutePath.Portfolio} component={Portfolio} />
            </Switch>
        </Router>
      );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));