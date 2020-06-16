/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
import React, { Component } from 'react';
import { FaGrinBeam, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
    Container,
    Tabela,
    Card,
    CardGrande,
    Linha,
    MeiaLinha,
} from './styles';
import MasterPage from '../../Components/MasterPage';
import Api from '../../Services/api';

class Compra extends Component {
    state = { rows: [] };

    componentDidMount() {
        const response = Api.get(`premio`).then(
            response => {
                if (response.status === 200) {
                    console.log(response);
                    this.setState({ rows: response.data });
                }
            },
            error => {
                if (error === 404) {
                    this.setState({
                        message: 'Não foi possível conectar ao banco de dados',
                    });
                    this.setState({ isLoading: false });
                } else {
                    this.setState({
                        message: 'Não foi possível conectar ao banco de dados',
                    });
                    this.setState({ isLoading: false });
                }
                console.log(error);
            }
        );
    }

    // eslint-disable-next-line class-methods-use-this
    renderRow = (row, index) => {
        const linhas = this.state.rows.length - 1;
        const SaldoSkill = localStorage.getItem('SaldoSkill');

        if (linhas === index && linhas % 2 === 0) {
            if (row.valor < SaldoSkill) {
                return (
                    <Linha>
                        <CardGrande>
                            <Link
                                to={`/ConfirmaCompra/${row.nome}/${row.valor}/${row.id}`}
                            >
                                <FaGrinBeam />
                                <div>
                                    <h1>{row.nome}</h1>
                                    <h1>Valor: {row.valor}</h1>
                                </div>
                            </Link>
                        </CardGrande>
                    </Linha>
                );
            } else {
                return (
                    <Linha style={{ pointerEvents: 'none' }}>
                        <CardGrande
                            style={{
                                backgroundColor: 'grey',
                            }}
                        >
                            <Link
                                to={`/ConfirmaCompra/${row.nome}/${row.valor}/${row.id}`}
                            >
                                <FaGrinBeam />
                                <div>
                                    <h1>{row.nome}</h1>
                                    <h1>Valor: {row.valor}</h1>
                                </div>
                            </Link>
                        </CardGrande>
                    </Linha>
                );
            }
        } else {
            if (row.valor < SaldoSkill) {
                return (
                    <MeiaLinha>
                        <Card>
                            <Link
                                to={`/ConfirmaCompra/${row.nome}/${row.valor}/${row.id}`}
                            >
                                <FaGrinBeam />
                                <div>
                                    <h1>{row.nome}</h1>
                                    <h1>Valor: {row.valor}</h1>
                                </div>
                            </Link>
                        </Card>
                    </MeiaLinha>
                );
            } else {
                return (
                    <MeiaLinha
                        style={{
                            pointerEvents: 'none',
                        }}
                    >
                        <Card
                            style={{
                                backgroundColor: 'grey',
                            }}
                        >
                            <Link
                                to={`/ConfirmaCompra/${row.nome}/${row.valor}/${row.id}`}
                            >
                                <FaGrinBeam />
                                <div>
                                    <h1>{row.nome}</h1>
                                    <h1>Valor: {row.valor}</h1>
                                </div>
                            </Link>
                        </Card>
                    </MeiaLinha>
                );
            }
        }
    };

    render() {
        const linhas = this.state.rows.length;
        return (
            <>
                <MasterPage />
                <Container>
                    <Tabela>
                        <Link to="/home">
                            <FaArrowLeft />
                            <p>Voltar</p>
                        </Link>
                        {linhas > 0 ? (
                            this.state.rows.map(this.renderRow)
                        ) : (
                            <Linha style={{ pointerEvents: 'none' }}>
                                <CardGrande></CardGrande>
                            </Linha>
                        )}
                    </Tabela>
                </Container>
            </>
        );
    }
}
export default Compra;
