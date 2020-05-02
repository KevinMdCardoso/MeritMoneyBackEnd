/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

import MasterPage from '../../Components/MasterPageGestor';
import { Container, Formulario, Voltar, Botoes } from './styles';

class Doacao extends Component {
    constructor(props) {
        super(props);
        this.state = { nome: '', valor: 0, descricao: '' };
    }

    alteraValor = e => {
        this.setState({ valor: e.target.value });
    };

    alteraNome = e => {
        this.setState({ nome: e.target.value });
    };

    alteraDescricao = e => {
        this.setState({ descricao: e.target.value });
    };

    render() {
        return (
            <>
                <MasterPage />
                <Voltar>
                    <Link to="/CompraGestor">
                        <FaArrowLeft />
                        <p>Voltar</p>
                    </Link>
                </Voltar>
                <Container>
                    <form>
                        <Formulario>
                            <div>
                                <input
                                    style={{ width: '75%' }}
                                    type="text"
                                    placeholder="Nome"
                                    onChange={this.alteraNome}
                                />
                                <input
                                    style={{ width: '15%' }}
                                    type="number"
                                    placeholder="Preço"
                                    onChange={this.alteraValor}
                                />
                            </div>
                            <textarea
                                type="number"
                                placeholder="Descriçao"
                                onChange={this.alteraDescricao}
                            />
                        </Formulario>
                        <Botoes>
                            <Link to={`/DeletarMomentoFinaliza`}>
                                <Button>Deletar</Button>
                            </Link>
                            <Link to={`/AlteracaoMomentoFinaliza`}>
                                <Button>Alterar</Button>
                            </Link>
                        </Botoes>
                    </form>
                </Container>
            </>
        );
    }
}
export default Doacao;
