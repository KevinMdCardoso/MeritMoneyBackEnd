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
import Configuracoes from './pages/Configuracoes';
import ConfiguracaoFinalizada from './pages/ConfiguracaoFinalizada';
import CompraGestor from './pages/CompraGestor';
import DescriçaoMomento from './pages/DescriçaoMomento';
import AlteracaoMomentoFinaliza from './pages/AlteracaoMomentoFinaliza';
import DeletarMomentoFinaliza from './pages/DeletarMomentoFinaliza';
import NovoMomentoFinaliza from './pages/NovoMomentoFinaliza';
import NovoMomento from './pages/NovoMomento';
import Colaboradores from './pages/Colaboradores';
import ConfirmaDeletarUsuario from './pages/ConfirmaDeletarUsuario';
import DeletarColaboradorFinalizada from './pages/DeletarColaboradorFinalizada';
import DescriçaoColaborador from './pages/DescriçaoColaborador';
import AlteracaoColaboradorFinaliza from './pages/AlteracaoColaboradorFinaliza';
import NovoColaborador from './pages/NovoColaborador';
import NovoColaboradorFinaliza from './pages/NovoColaboradorFinaliza';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Home" exact component={Home} />
                <Route path="/HomeGestor" exact component={HomeGestor} />
                <Route path="/Doacao/:id/:nome" exact component={Doacao} />
                <Route path="/Compra" exact component={Compra} />
                <Route path="/Colaboradores" exact component={Colaboradores} />
                <Route
                    path="/ConfirmaDeletarUsuario/:idUsuario/:nome"
                    exact
                    component={ConfirmaDeletarUsuario}
                />
                <Route
                    path="/DeletarColaboradorFinalizada"
                    exact
                    component={DeletarColaboradorFinalizada}
                />
                <Route
                    path="/AlteracaoColaboradorFinaliza"
                    exact
                    component={AlteracaoColaboradorFinaliza}
                />
                <Route
                    path="/DescriçaoColaborador/:idUsuario"
                    exact
                    component={DescriçaoColaborador}
                />
                <Route
                    path="/NovoColaborador"
                    exact
                    component={NovoColaborador}
                />
                <Route
                    path="/NovoColaboradorFinaliza"
                    exact
                    component={NovoColaboradorFinaliza}
                />
                <Route path="/CompraGestor" exact component={CompraGestor} />
                <Route
                    path="/AlteracaoMomentoFinaliza"
                    exact
                    component={AlteracaoMomentoFinaliza}
                />{' '}
                <Route path="/NovoMomento" exact component={NovoMomento} />
                <Route
                    path="/NovoMomentoFinaliza"
                    exact
                    component={NovoMomentoFinaliza}
                />
                <Route
                    path="/DeletarMomentoFinaliza"
                    exact
                    component={DeletarMomentoFinaliza}
                />
                <Route
                    path="/DescriçaoMomento/:idMomento"
                    exact
                    component={DescriçaoMomento}
                />
                <Route
                    path="/ConfiguracaoFinalizada"
                    exact
                    component={ConfiguracaoFinalizada}
                />
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
                <Route path="/Configuracoes" exact component={Configuracoes} />
                <Route path="*" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}
