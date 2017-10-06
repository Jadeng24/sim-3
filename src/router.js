import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './components/login/Login.js'

export default (
    <div>
    
    <Switch>
        <Route component={ Login } exact path='/'/>
            
    </Switch>
    </div>
  )