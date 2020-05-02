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
    state = {};

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
                            <Perfil>
                                <FaUserCircle />
                                <h1>kevin cardoso</h1>
                            </Perfil>
                            <SetaValor>
                                <FaArrowRight />
                                <p>Doado 10 collaboratorCoin</p>
                            </SetaValor>
                            <Perfil>
                                <FaUserCircle />
                                <h1>Jader Rampa</h1>
                            </Perfil>
                        </Cabecalho>
                        <h2>Motivo da doação:</h2>
                        <h2>
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </h2>
                        <Botoes>
                            {' '}
                            <Link to="/NegarDoacaoFinalizada">
                                <Button>Negar</Button>
                            </Link>
                            <Link to="/AceitarDoacaoFinalizada">
                                <Button>Aceitar</Button>
                            </Link>
                        </Botoes>
                    </Detalhes>
                </Container>
            </>
        );
    }
}
export default DetalhesDoacao;
