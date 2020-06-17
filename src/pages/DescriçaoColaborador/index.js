/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

import MasterPage from '../../Components/MasterPageGestor';
import { Container, Formulario, Voltar, Botoes, Moedas } from './styles';
import Api from '../../Services/api';

class DescriçaoColaborador extends Component {
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
                    this.setState({
                        perfil: response.data,
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

        Api.get(`usuario/${this.props.match.params.idUsuario}`).then(
            response => {
                if (response.status === 200) {
                    this.setState({
                        nome: response.data.nome,
                        login: response.data.login,
                        senha: response.data.senha,
                        email: response.data.email,
                        data: response.data.data,
                        status: true,
                        img3: response.data.img3,
                        moedasRecebidas: response.data.skillCoin,
                        moedasDoaveis: response.data.collaboratorCoin,
                        perfilSelecionado: response.data.perfil.id,
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

    alteraUsuario = () => {
        Api.put(`usuario/${this.props.match.params.idUsuario}`, {
            nome: this.state.nome,
            login: this.state.login,
            senha: this.state.senha,
            email: this.state.email,
            data: this.state.data,
            status: true,
            img3: this.state.img3,
            moedasRecebidas: this.state.skillCoin,
            moedasDoaveis: this.state.collaboratorCoin,
            perfil: { id: this.state.perfilSelecionado },
        }).then(
            response => {},
            error => {
                console.log(error);
            }
        );
    };

    handleImageChange = e => {
        e.preventDefault();
        let reader = new FileReader();
        reader.onloadend = () => {
            console.log(reader);

            this.setState({ img3: reader.result });
        };
        reader.readAsDataURL(e.target.files[0]);
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
                            <input
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.alteraEmail}
                            />
                            <input
                                accept="image/*"
                                className="custom-file-input"
                                type="file"
                                onChange={e => this.handleImageChange(e)}
                            />
                            <select id="perfis" onChange={this.alteraPerfil}>
                                {this.state.perfil.map(perfil =>
                                    this.state.perfilSelecionado ==
                                    perfil.id ? (
                                        <option value={perfil.id} selected>
                                            {perfil.nome}
                                        </option>
                                    ) : (
                                        <option value={perfil.id}>
                                            {perfil.nome}
                                        </option>
                                    )
                                )}
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
                                to={`/ConfirmaDeletarUsuario/${this.props.match.params.idUsuario}/${this.state.nome}`}
                            >
                                <Button>Deletar</Button>
                            </Link>
                            <Link to="/AlteracaoColaboradorFinaliza">
                                <Button onClick={this.alteraUsuario}>
                                    Atualizar
                                </Button>
                            </Link>
                        </Botoes>
                    </form>
                </Container>
            </>
        );
    }
}
export default DescriçaoColaborador;
