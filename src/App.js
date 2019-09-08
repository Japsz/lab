import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './views/Index/Index';
import ProyWall from './views/proyecto/proyWall';
import PrivateProyWall from './views/proyecto/proyWallPrivate';
import Header from './components/common/Header';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-oldschool-dark';
import {Provider as Redux} from "react-redux";
import reduxStore from './store/store'

import Footer from "./components/common/Footer";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./views/Index/Login";

function App() {
  const options = {
    position: 'bottom center',
    timeout: 4000,
    offset: '30px',
    transition: 'scale'
  }
  return (
    <Redux store={reduxStore}>
        <Router>
          <Header/>
          <AlertProvider template={AlertTemplate} {...options}>
            <Switch>
              <Route exact path={'/login'} component={Login}/>
              <PrivateRoute exact path={'/'} component={Index}/>
              <PrivateRoute path={'/proy/:id'} component={ProyWall}/>
              <PrivateRoute path={'/intern/:id/:section'} component={PrivateProyWall}/>
              <Route component={Login}/>
            </Switch>
          </AlertProvider>
        </Router>
    </Redux>
  );
}
export default App;
