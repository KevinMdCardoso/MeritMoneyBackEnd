import React, { Component } from 'react';
import { FaGrinBeam, FaArrowLeft, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
    Container,
    Tabela,
    Card,
    CardAddGrande,
    CardAdd,
    Linha,
} from './styles';
import MasterPage from '../../Components/MasterPageGestor';

class Compra extends Component {
    state = {};

    componentDidMount() {}

    render() {
        return (
            <>
                <MasterPage />
                <Container>
                    <Tabela>
                        <Link to="/homeGestor">
                            <FaArrowLeft />
                            <p>Voltar</p>
                        </Link>
                        <Linha>
                            <Card>
                                <Link to={`/DescriçaoMomento/1`}>
                                    <FaGrinBeam />
                                    <div>
                                        <h1>Ingreço para cinema</h1>
                                        <h1>Valor: 30</h1>
                                    </div>
                                </Link>
                            </Card>

                            <Card>
                                <Link to={`/DescriçaoMomento/1`}>
                                    <FaGrinBeam />
                                    <div>
                                        <h1>Ingreço para cinema</h1>
                                        <h1>Valor: 30</h1>
                                    </div>
                                </Link>
                            </Card>
                        </Linha>
                        <Linha>
                            <Card>
                                <Link to={`/DescriçaoMomento/1`}>
                                    <FaGrinBeam />
                                    <div>
                                        <h1>Ingreço para cinema</h1>
                                        <h1>Valor: 30</h1>
                                    </div>
                                </Link>
                            </Card>
                            <CardAdd>
                                <Link to={`/NovoMomento`}>
                                    <FaPlus />
                                    <div>
                                        <h1>Adicionar novo produto</h1>
                                    </div>
                                </Link>
                            </CardAdd>
                        </Linha>
                        <Linha>
                            <CardAddGrande>
                                <Link to={`/NovoMomento`}>
                                    <FaPlus />
                                    <div>
                                        <h1>Adicionar novo produto</h1>
                                    </div>
                                </Link>
                            </CardAddGrande>
                        </Linha>
                    </Tabela>
                </Container>
            </>
        );
    }
}
export default Compra;
