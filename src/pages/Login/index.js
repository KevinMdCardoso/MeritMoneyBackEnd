/* eslint-disable import/order */
import React, { Component } from 'react';
import logo from './moeda.png';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '@material-ui/core/Button';

class Login extends Component {
    state: {};

    render() {
        return (
            <Container>
                <form>
                    <span>Merit Money</span>
                    <img src={logo} alt="logo" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <Link to="/Home">
                        <Button to="/Home">Entrar</Button>
                    </Link>
                </form>
            </Container>
        );
    }
}
export default Login;
