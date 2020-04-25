import React, { Component } from 'react';
import { FaGrinBeam, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container, Tabela, Card, CardGrande, Linha } from './styles';
import MasterPage from '../../Components/MasterPage';

class Compra extends Component {
    state = {};

    componentDidMount() {}

    render() {
        return (
            <>
                <MasterPage />
                <Container>
                    <Tabela>
                        <Link to="/home">
                            <FaArrowLeft />
                            <p>Voltar</p>
                        </Link>
                        <Linha>
                            <Card>
                                <FaGrinBeam />
                                <div>
                                    <h1>Ingreço para cinema</h1>
                                    <h1>Valor: 30</h1>
                                </div>
                            </Card>
                            <Card>
                                <FaGrinBeam />
                                <div>
                                    <h1>Ingreço para cinema</h1>
                                    <h1>Valor: 30</h1>
                                </div>
                            </Card>
                        </Linha>
                        <Linha>
                            <CardGrande>
                                <FaGrinBeam />
                                <div>
                                    <h1>Ingreço para cinema</h1>
                                    <h1>Valor: 30</h1>
                                </div>
                            </CardGrande>
                        </Linha>
                    </Tabela>
                </Container>
            </>
        );
    }
}
export default Compra;
