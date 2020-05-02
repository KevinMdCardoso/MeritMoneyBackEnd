/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

import MasterPage from '../../Components/MasterPage';
import { Container, InfoUsu, Formulario, Voltar } from './styles';

class Doacao extends Component {
    constructor(props) {
        super(props);
        this.state = { quantidadeDoado: 0 };
    }

    alteraValor = e => {
        this.setState({ quantidadeDoado: e.target.value });
    };

    render() {
        return (
            <>
                <MasterPage />
                <Voltar>
                    <Link to="/home">
                        <FaArrowLeft />
                        <p>Voltar</p>
                    </Link>
                </Voltar>
                <Container>
                    <form>
                        <InfoUsu>
                            <FaUserCircle />
                            <h2>{this.props.match.params.nome}</h2>
                        </InfoUsu>
                        <Formulario>
                            <input
                                type="number"
                                placeholder="Doação"
                                onChange={this.alteraValor}
                            />
                            <textarea
                                type="text"
                                placeholder="Qual motivo para dar essas moedas ao colaborador?"
                            />
                        </Formulario>
                        <Link
                            to={`/ConfirmaDoacao/${this.props.match.params.nome}/${this.state.quantidadeDoado}`}
                            onClick={this.CriaDoacao}
                        >
                            <Button>Entrar</Button>
                        </Link>
                    </form>
                </Container>
            </>
        );
    }
}
export default Doacao;
