import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Loadable from 'react-loadable';
import { Layout } from './layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
      return (
        <Layout></Layout>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));