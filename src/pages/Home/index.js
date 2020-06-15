/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';
import { Container } from './styles';
import MasterPage from '../../Components/MasterPage';
import Tabela from '../../Components/TabelaSimplesDoacao';
import Api from '../../Services/api';

class Home extends Component {
    state = {
        rows: [],
    };

    componentDidMount() {
        let rows = [];
        const idLogado = localStorage.getItem('idLogado');
        Api.get(`usuario`).then(
            response => {
                for (const row in response.data) {
                    if (response.data[row].id != idLogado) {
                        if (response.data[row].perfil.id === 1) {
                            rows = [
                                ...rows,
                                this.createData(
                                    response.data[row].id,
                                    response.data[row].nome
                                ),
                            ];
                        }
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

    createData = (idUsuario, nome) => {
        return { idUsuario, nome };
    };

    render() {
        return (
            <>
                <MasterPage />
                <Container>
                    <Tabela dados={this.state.rows} />
                </Container>
            </>
        );
    }
}
export default Home;
