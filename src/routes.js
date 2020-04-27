import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Doacao from './pages/Doacao';
import Compra from './pages/Compra';
import ConfirmaDoacao from './pages/ConfirmaDoacao';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Home" exact component={Home} />
                <Route path="/Doacao/:id/:nome" exact component={Doacao} />
                <Route path="/Compra" exact component={Compra} />
                <Route
                    path="/ConfirmaDoacao/:nome/:quantidadeDoacao"
                    exact
                    component={ConfirmaDoacao}
                />
                <Route path="*" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}
