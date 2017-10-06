import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './components/login/Login.js';
import Dashboard from './components/dashboard/Dashboard.js';
import Profile from './components/profile/Profile.js';
import Search from './components/search/Search.js';

export default (
    <div>
    
    <Switch>
            <Route component={Login} exact path='/' />
            <Route component={Dashboard} path='/dashboard' />
            <Route component={Profile} path='/profile' />
            <Route compoent={Search} path='/search' />
            
    </Switch>
    </div>
  )