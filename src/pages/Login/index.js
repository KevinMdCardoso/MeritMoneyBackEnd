/* eslint-disable import/order */
import React, { Component } from 'react';
import logo from './moeda.png';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '@material-ui/core/Button';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pushTela: 'Home',
        };
    }

    alteraLogin = e => {
        if (e.target.value === 'gestor') {
            this.setState({ login: e.target.value, pushTela: 'HomeGestor' });
        } else {
            this.setState({ login: e.target.value, pushTela: 'Home' });
        }
    };

    render() {
        return (
            <Container>
                <form>
                    <span>Merit Money</span>
                    <img src={logo} alt="logo" />
                    <input
                        type="text"
                        placeholder="Login"
                        value={this.state.login}
                        onChange={this.alteraLogin}
                    />
                    <input type="password" placeholder="Senha" />
                    <Link to={`/${this.state.pushTela}`}>
                        <Button>Entrar</Button>
                    </Link>
                </form>
            </Container>
        );
    }
}
export default Login;
