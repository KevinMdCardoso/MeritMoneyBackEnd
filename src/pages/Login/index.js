/* eslint-disable import/order */
import React, { Component } from 'react';
import logo from './Logo.png';
import { Container } from './styles';
import Button from '@material-ui/core/Button';
import Api from '../../Services/api';
import history from '../../history';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            senha: '',
        };
    }

    componentDidMount() {
        localStorage.removeItem('UsuarioNome');
        localStorage.removeItem('idLogado');
        localStorage.removeItem('collaboratorCoin');
        localStorage.removeItem('SaldoSkill');
    }

    alteraLogin = e => {
        this.setState({ login: e.target.value });
    };

    alteraSenha = e => {
        this.setState({ senha: e.target.value });
    };

    logar = () => {
        Api.get(`usuario/Logar/${this.state.login}/${this.state.senha}`).then(
            response => {
                if (response.status === 200) {
                    console.log(response);
                    if (response.data !== '') {
                        localStorage.setItem('idLogado', response.data.id);
                        if (response.data.perfil.nome === 'Gestor') {
                            history.push('/homeGestor');
                            window.location.reload(false);
                        } else {
                            history.push('/home');
                            window.location.reload(false);
                        }
                    } else {
                        alert('Senha/usuario errada.');
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
    };

    erro = () => {
        alert('Digite login e senha.');
    };

    render() {
        return (
            <Container>
                <form>
                    <img src={logo} alt="logo" />
                    <input
                        id="login"
                        type="text"
                        placeholder="Login"
                        value={this.state.login}
                        onChange={this.alteraLogin}
                    />
                    <input
                        id="loginSenha"
                        type="password"
                        value={this.state.senha}
                        placeholder="Senha"
                        onChange={this.alteraSenha}
                    />

                    {this.state.senha.length > 0 &&
                    this.state.login.length > 0 ? (
                        <Button onClick={this.logar}>Entrar</Button>
                    ) : (
                        <Button onClick={this.erro}>Entrar</Button>
                    )}
                </form>
            </Container>
        );
    }
}
export default Login;
