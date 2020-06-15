import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FaArrowLeft, FaArrowRight, FaUserCircle } from 'react-icons/fa';
import {
    Container,
    Detalhes,
    Voltar,
    Perfil,
    SetaValor,
    Cabecalho,
    Botoes,
} from './styles';
import MasterPage from '../../Components/MasterPageGestor';
import Api from '../../Services/api';

class DetalhesDoacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moedasMensais: 0,
            email: '',
            AuxMoedasMensais: '',
            Auxemail: '',
        };
    }

    componentDidMount() {
        Api.get(`parametro`).then(
            response => {
                if (response.status === 200) {
                    let fLen = response.data.length;
                    for (let i = 0; i < fLen; i++) {
                        if (response.data[i].nome === 'CollaboratorCoinMonth') {
                            this.setState({
                                idMoedasMensais: response.data[i].id,
                                moedasMensais: response.data[i].valor,
                            });
                        }
                        if (response.data[i].nome === 'EmailRH') {
                            this.setState({
                                idEmail: response.data[i].id,
                                email: response.data[i].valor,
                            });
                        }
                    }
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

    alteraValor = e => {
        this.setState({ AuxMoedasMensais: e.target.value });
    };

    alteraEmail = e => {
        this.setState({ Auxemail: e.target.value });
    };

    atualizaParametros = () => {
        if (this.state.AuxMoedasMensais != '')
            Api.put(`parametro/${this.state.idMoedasMensais}`, {
                valor: this.state.AuxMoedasMensais,
            }).then(
                response => {},
                error => {
                    console.log(error);
                }
            );
        if (this.state.Auxemail != '')
            Api.put(`parametro/${this.state.idEmail}`, {
                valor: this.state.Auxemail,
            }).then(
                response => {},
                error => {
                    console.log(error);
                }
            );
    };

    render() {
        return (
            <>
                <MasterPage />
                <Voltar>
                    <Link to="/HomeGestor">
                        <FaArrowLeft />
                        <p>Voltar</p>
                    </Link>
                </Voltar>
                <Container>
                    <Detalhes>
                        <Cabecalho>
                            <h1>Moedas recebidas Mensais:</h1>
                            <input
                                style={{
                                    maxWidth: '10%',
                                    marginRight: '35%',
                                }}
                                type="number"
                                placeholder="Moedas"
                                onChange={this.alteraValor}
                            />
                            <h1>Atualmente sao: {this.state.moedasMensais}</h1>
                        </Cabecalho>
                        <Cabecalho>
                            <h1>Moedas recebidas Mensais:</h1>
                            <input
                                style={{ minWidth: '35%' }}
                                type="text"
                                placeholder="Email"
                                onChange={this.alteraEmail}
                            />
                            <h1>Atualmente é: {this.state.email}</h1>
                        </Cabecalho>
                        <Botoes>
                            <Link to="/ConfiguracaoFinalizada">
                                <Button onClick={this.atualizaParametros}>
                                    Atualizar
                                </Button>
                            </Link>
                        </Botoes>
                    </Detalhes>
                </Container>
            </>
        );
    }
}
export default DetalhesDoacao;
