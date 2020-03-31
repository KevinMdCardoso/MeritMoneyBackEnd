import React, { Component } from 'react';
import MasterPage from '../../Components/MasterPage';
import { Container } from './styles';

class Compra extends Component {
    state = {};

    render() {
        return (
            <>
                <MasterPage />
                <Container>
                    <p>teste</p>
                </Container>
            </>
        );
    }
}
export default Compra;
