import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeGestor from './pages/HomeGestor';
import Login from './pages/Login';
import Doacao from './pages/Doacao';
import Compra from './pages/Compra';
import ConfirmaDoacao from './pages/ConfirmaDoacao';
import ConfirmaCompra from './pages/ConfirmaCompra';
import CompraFinalizada from './pages/CompraFinalizada';
import ConfirmaNegarDoacao from './pages/ConfirmaNegarDoacao';
import ConfirmaAceitarDoacao from './pages/ConfirmaAceitarDoacao';
import NegarDoacaoFinalizada from './pages/NegarDoacaoFinalizada';
import AceitarDoacaoFinalizada from './pages/AceitarDoacaoFinalizada';
import DetalhesDoacao from './pages/DetalhesDoacao';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Home" exact component={Home} />
                <Route path="/HomeGestor" exact component={HomeGestor} />
                <Route path="/Doacao/:id/:nome" exact component={Doacao} />
                <Route path="/Compra" exact component={Compra} />
                <Route
                    path="/DetalhesDoacao/:idDoacao"
                    exact
                    component={DetalhesDoacao}
                />
                <Route
                    path="/ConfirmaDoacao/:nome/:quantidadeDoacao"
                    exact
                    component={ConfirmaDoacao}
                />
                <Route
                    path="/ConfirmaCompra/:momento/:valor"
                    exact
                    component={ConfirmaCompra}
                />
                <Route
                    path="/ConfirmaNegarDoacao/:doador/:recebedor"
                    exact
                    component={ConfirmaNegarDoacao}
                />
                <Route
                    path="/ConfirmaAceitarDoacao/:doador/:recebedor"
                    exact
                    component={ConfirmaAceitarDoacao}
                />
                <Route
                    path="/CompraFinalizada"
                    exact
                    component={CompraFinalizada}
                />
                <Route
                    path="/NegarDoacaoFinalizada"
                    exact
                    component={NegarDoacaoFinalizada}
                />
                <Route
                    path="/AceitarDoacaoFinalizada"
                    exact
                    component={AceitarDoacaoFinalizada}
                />
                <Route path="*" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}
