/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

import MasterPage from '../../Components/MasterPageGestor';
import { Container, Formulario, Voltar, Botoes } from './styles';
import Api from '../../Services/api';

class NovoColaborador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idUsuario: 0,
            nome: '',
            login: '',
            senha: '',
            email: '',
            moedasRecebidas: 18,
            moedasDoaveis: 13,
            perfil: [],
            perfilSelecionado: 0,
        };
    }

    componentDidMount() {
        Api.get(`perfil`).then(
            response => {
                if (response.status === 200) {
                    console.log(response);
                    this.setState({
                        perfil: response.data,
                        perfilSelecionado: response.data[0].id,
                    });
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

    alteraLogin = e => {
        this.setState({ login: e.target.value });
    };

    alteraNome = e => {
        this.setState({ nome: e.target.value });
    };

    alteraSenha = e => {
        this.setState({ senha: e.target.value });
    };

    alteraPerfil = e => {
        this.setState({ perfilSelecionado: e.target.value });
    };

    alteraEmail = e => {
        this.setState({ email: e.target.value });
    };

    criaUsuario = () => {
        Api.post(`usuario`, {
            email: this.state.email,
            id: 0,
            login: this.state.nome,
            nome: this.state.login,
            perfil: {
                id: this.state.perfilSelecionado,
            },
            senha: this.state.senha,
            skillCoin: 0,
            collaboratorCoin: 0,
        }).then(
            response => {
                console.log(response.data);
            },
            error => {
                if (error === 404) {
                    this.setState({
                        message: 'Não foi possível conectar ao portal',
                    });
                    this.setState({ isLoading: false });
                } else {
                    this.setState({
                        message: 'Não foi possível conectar ao portal',
                    });
                    this.setState({ isLoading: false });
                }
                console.log(error);
            }
        );
    };

    render() {
        console.log('Render:' + this.state.perfil);

        return (
            <>
                <MasterPage />
                <Voltar>
                    <Link to="/Colaboradores">
                        <FaArrowLeft />
                        <p>Voltar</p>
                    </Link>
                </Voltar>
                <Container>
                    <form>
                        <Formulario>
                            <input
                                type="text"
                                placeholder="Nome"
                                value={this.state.nome}
                                onChange={this.alteraNome}
                            />
                            <input
                                type="text"
                                placeholder="Login"
                                value={this.state.login}
                                onChange={this.alteraLogin}
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                value={this.state.senha}
                                onChange={this.alteraSenha}
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.alteraEmail}
                            />
                            <select id="perfis" onChange={this.alteraPerfil}>
                                {this.state.perfil.map(perfil => (
                                    <option value={perfil.id}>
                                        {perfil.nome}
                                    </option>
                                ))}
                            </select>
                        </Formulario>
                        <Botoes>
                            <Link to="/NovoColaboradorFinaliza">
                                <Button onClick={this.criaUsuario}>
                                    Criar
                                </Button>
                            </Link>
                        </Botoes>
                    </form>
                </Container>
            </>
        );
    }
}
export default NovoColaborador;
