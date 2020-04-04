import React, { Component } from 'react';
import { Container } from './styles';
import MasterPage from '../../Components/MasterPage';
import Tabela from '../../Components/TabelaSimplesDoacao';

class Home extends Component {
    state = {};

    createData = (idUsuario, nome) => {
        return { idUsuario, nome };
    };

    render() {
        const rows = [
            this.createData(1, 'Eduardo Pires Infra'),
            this.createData(2, 'Kevin Machado Cardoso'),

            this.createData(3, 'Sergio Velhaço'),
            this.createData(4, 'Guilherme Careca'),
            this.createData(5, 'Vitor guaselli'),
            this.createData(6, 'Gustavo lokurada'),
            this.createData(7, 'Lukas Alien'),
            this.createData(8, 'mikael macedo'),
            this.createData(9, 'Ze pequeno'),
            this.createData(10, 'Jader Rampa'),
        ];

        return (
            <>
                <MasterPage />
                <Container>
                    <Tabela dados={rows} />
                </Container>
            </>
        );
    }
}
export default Home;
