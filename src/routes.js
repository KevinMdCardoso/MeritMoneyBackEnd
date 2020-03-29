import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
}
