import React, { Component } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Voltar } from './styles';

import MasterPageGestor from '../../Components/MasterPageGestor';
import Tabela from '../../Components/TabelaSimplesColaboradoresGestor';

class Home extends Component {
    state = {};

    createData = (idUsuario, nome, perfil) => {
        return {
            idUsuario,
            nome,
            perfil,
        };
    };

    render() {
        const rows = [
            this.createData(1, 'Eduardo Pires Infra', 'Colaborador'),
            this.createData(2, 'kevin Cardoso', 'Colaborador'),
            this.createData(3, 'Jader Rampa', 'Colaborador'),
            this.createData(4, 'Sergio Veio', 'Gestor'),
        ];

        return (
            <>
                <MasterPageGestor />
                <Voltar>
                    <Link to="/homeGestor">
                        <FaArrowLeft />
                        <p>Voltar</p>
                    </Link>
                </Voltar>
                <Container>
                    <Tabela dados={rows} />
                </Container>
            </>
        );
    }
}
export default Home;
