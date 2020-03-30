import React, { Component } from 'react';
import { Container } from './styles';
import MasterPage from '../../Components/MasterPage';
import Tabela from '../../Components/TabelaSimples';

class Home extends Component {
    state = {};

    createData = (idUsuario, nome) => {
        return { idUsuario, nome };
    };

    render() {
        const rows = [
            this.createData(1, 'Kevin Machado Cardoso'),
            this.createData(2, 'Jader Rampa'),
            this.createData(3, 'Sergio Velhaço'),
            this.createData(4, 'Guilherme Careca'),
            this.createData(5, 'Vitor guaselli'),
            this.createData(6, ' wgtw4eg w e gwegewgfgbfnghnm'),
            this.createData(7, 'gewegewgewg eg ewgewg e'),
            this.createData(8, 'fewf ew ew ewewge'),
            this.createData(9, 'testette tretet'),
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
