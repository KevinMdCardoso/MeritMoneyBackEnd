import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FaArrowLeft, FaArrowRight, FaUserCircle } from 'react-icons/fa';
import {
    Container,
    Detalhes,
    Voltar,
    Perfil,
    SetaValor,
    Cabecalho,
    Botoes,
} from './styles';
import MasterPage from '../../Components/MasterPageGestor';

class DetalhesDoacao extends Component {
    constructor(props) {
        super(props);
        this.state = { moedasMensais: 20 };
    }

    alteraValor = e => {
        this.setState({ AuxMoedasMensais: e.target.value });
    };

    render() {
        return (
            <>
                <MasterPage />
                <Voltar>
                    <Link to="/HomeGestor">
                        <FaArrowLeft />
                        <p>Voltar</p>
                    </Link>
                </Voltar>
                <Container>
                    <Detalhes>
                        <Cabecalho>
                            <h1>Moedas recebidas Mensais:</h1>
                            <input
                                type="number"
                                placeholder="Moedas"
                                onChange={this.alteraValor}
                            />
                            <h1>Atualmente sao: {this.state.moedasMensais}</h1>
                        </Cabecalho>
                        <Botoes>
                            <Link to="/ConfiguracaoFinalizada">
                                <Button>Atualizar</Button>
                            </Link>
                        </Botoes>
                    </Detalhes>
                </Container>
            </>
        );
    }
}
export default DetalhesDoacao;
