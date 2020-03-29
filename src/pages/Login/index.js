import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
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
