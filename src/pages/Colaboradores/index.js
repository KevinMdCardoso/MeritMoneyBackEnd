/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Voltar } from './styles';

import MasterPageGestor from '../../Components/MasterPageGestor';
import Tabela from '../../Components/TabelaSimplesColaboradoresGestor';
import Api from '../../Services/api';

class Home extends Component {
    state = { rows: [] };

    componentDidMount() {
        let rows = [];
        const idLogado = localStorage.getItem('idLogado');
        const response = Api.get(`usuario`).then(
            response => {
                for (const row in response.data) {
                    if (response.data[row].id != idLogado) {
                        rows = [
                            ...rows,
                            this.createData(
                                response.data[row].id,
                                response.data[row].nome,
                                response.data[row].perfil.nome
                            ),
                        ];
                    }
                }
                this.setState({ rows: rows, idLogado: idLogado });
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

    createData = (idUsuario, nome, perfil) => {
        return {
            idUsuario,
            nome,
            perfil,
        };
    };

    render() {
        return (
            <>
                <MasterPageGestor />
                <Voltar>
                    <Link to="/homeGestor">
                        <FaArrowLeft />
                        <p>Voltar</p>
                    </Link>
                </Voltar>
                <Container>
                    <Tabela dados={this.state.rows} />
                </Container>
            </>
        );
    }
}
export default Home;
