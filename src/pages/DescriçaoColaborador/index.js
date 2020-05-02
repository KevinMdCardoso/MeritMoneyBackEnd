/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

import MasterPage from '../../Components/MasterPageGestor';
import { Container, Formulario, Voltar, Botoes, Moedas } from './styles';

class DescriçaoColaborador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idUsuario: 1,
            login: '',
            nome: 'kevin',
            senha: '',
            moedasRecebidas: 18,
            moedasDoaveis: 13,
        };
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

    render() {
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
                            <select id="perfis">
                                <option value="Colaborador" selected>
                                    Colaborador
                                </option>
                                <option value="Gestor">Gestor</option>
                            </select>
                        </Formulario>
                        <Moedas>
                            <h1>
                                Moedas Recebidas: {this.state.moedasRecebidas}
                            </h1>
                            <h1>Moedas Doaveis: {this.state.moedasDoaveis}</h1>
                        </Moedas>
                        <Botoes>
                            <Link
                                to={`/ConfirmaDeletarUsuario/${this.state.idUsuario}/${this.state.nome}`}
                            >
                                <Button>Deletar</Button>
                            </Link>
                            <Link to="/AlteracaoColaboradorFinaliza">
                                <Button>Atualizar</Button>
                            </Link>
                        </Botoes>
                    </form>
                </Container>
            </>
        );
    }
}
export default DescriçaoColaborador;
