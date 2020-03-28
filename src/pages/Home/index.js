import React, { Component } from 'react';

import { Container } from '../Compra/styles';

import MasterPage from '../../Components/MasterPage';
import Tabela from '../../Components/Tabela';

class Home extends Component {
    state = {};

    render() {
        return (
            <>
                <MasterPage />
                <Container>
                    <Tabela />
                </Container>
            </>
        );
    }
}
export default Home;
