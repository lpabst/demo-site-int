
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ Home } path='/:type' exact />

    </Switch>
)
