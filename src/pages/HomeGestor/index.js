/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-shorthand */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';
import { Container } from './styles';
import MasterPageGestor from '../../Components/MasterPageGestor';
import Tabela from '../../Components/TabelaSimplesDoacaoGestor';
import Api from '../../Services/api';

class Home extends Component {
    state = { rows: [] };

    componentDidMount() {
        let rows = [];
        Api.get(`doacao`).then(
            response => {
                for (const row in response.data) {
                    if (response.data[row].auditado === false) {
                        rows = [
                            ...rows,
                            this.createData(
                                response.data[row].usuarioDoador.id,
                                response.data[row].usuarioDoador.nome,
                                response.data[row].usuarioRecebedor.id,
                                response.data[row].usuarioRecebedor.nome,
                                response.data[row].qtdMoedas,
                                response.data[row].id
                            ),
                        ];
                    }
                }
                this.setState({ rows: rows });
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

    createData = (
        idUsuarioDoador,
        nomeDoador,
        idUsuarioRecebedor,
        nomeRecebedor,
        valorDoado,
        idDoacao
    ) => {
        return {
            idUsuarioDoador,
            nomeDoador,
            idUsuarioRecebedor,
            nomeRecebedor,
            valorDoado,
            idDoacao,
        };
    };

    render() {
        return (
            <>
                <MasterPageGestor />
                <Container>
                    <Tabela dados={this.state.rows} />
                </Container>
            </>
        );
    }
}
export default Home;
