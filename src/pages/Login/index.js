import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

class Login extends Component {
    state: {};

    render() {
        return (
            <Container>
                <Link to="/Home">Home</Link>
            </Container>
        );
    }
}
export default Login;
