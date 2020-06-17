/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
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
    MeiaLinha,
} from './styles';
import MasterPage from '../../Components/MasterPageGestor';
import Api from '../../Services/api';

class Compra extends Component {
    state = { rows: [] };

    componentDidMount() {
        let auxLinhas = [];
        const response = Api.get(`premio`).then(
            response => {
                if (response.status === 200) {
                    console.log(response);
                    auxLinhas = response.data;

                    auxLinhas.push({
                        id: 0,
                        nome: 'Adicionar novo produto',
                        valor: 0,
                        descricao: 'Adicionar novo produto',
                    });
                    this.setState({ rows: auxLinhas });
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

    renderRow = (row, index) => {
        const linhas = this.state.rows.length - 1;

        if (linhas === index && linhas % 2 === 0) {
            if (row.valor == 0) {
                return (
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
                );
            } else {
                return (
                    <Linha>
                        <CardAddGrande>
                            <Link to={`/DescriçaoMomento/${row.id}`}>
                                {row.img > '' ? (
                                    <img src={row.img} />
                                ) : (
                                    <FaGrinBeam />
                                )}
                                <div>
                                    <h1>{row.nome}</h1>
                                    <h1>Valor: {row.valor}</h1>
                                </div>
                            </Link>
                        </CardAddGrande>
                    </Linha>
                );
            }
        } else {
            if (row.valor == 0) {
                return (
                    <MeiaLinha>
                        <CardAdd>
                            <Link to={`/NovoMomento`}>
                                <FaPlus />
                                <div>
                                    <h1>Adicionar novo produto</h1>
                                </div>
                            </Link>
                        </CardAdd>
                    </MeiaLinha>
                );
            } else {
                return (
                    <MeiaLinha>
                        <Card>
                            <Link to={`/DescriçaoMomento/${row.id}`}>
                                {row.img > '' ? (
                                    <img src={row.img} />
                                ) : (
                                    <FaGrinBeam />
                                )}
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
                        <Link to="/homeGestor">
                            <FaArrowLeft />
                            <p>Voltar</p>
                        </Link>

                        {linhas > 0 ? (
                            this.state.rows.map(this.renderRow)
                        ) : (
                            <Linha>
                                <CardAddGrande></CardAddGrande>
                            </Linha>
                        )}
                    </Tabela>
                </Container>
            </>
        );
    }
}
export default Compra;
