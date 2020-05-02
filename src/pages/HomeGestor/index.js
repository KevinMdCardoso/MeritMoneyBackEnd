import React, { Component } from 'react';
import { Container } from './styles';
import MasterPage from '../../Components/MasterPage';
import Tabela from '../../Components/TabelaSimplesDoacaoGestor';

class Home extends Component {
    state = {};

    createData = (
        idUsuarioDoador,
        nomeDoador,
        idUsuarioRecebedor,
        nomeRecebedor,
        valorDoado,
        idDoacao
    ) => {
        return {
            idUsuarioDoador,
            nomeDoador,
            idUsuarioRecebedor,
            nomeRecebedor,
            valorDoado,
            idDoacao,
        };
    };

    render() {
        const rows = [
            this.createData(1, 'Eduardo Pires Infra', 1, 'Jader Rampa', 10, 1),
            this.createData(1, 'kevin Cardoso', 1, 'Jader Rampa', 7, 1),
            this.createData(1, 'Jader Rampa', 1, 'kevin Cardoso', 2, 1),
            this.createData(1, 'kevin Cardoso', 1, 'Eduardo Pires Infra', 4, 1),
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
