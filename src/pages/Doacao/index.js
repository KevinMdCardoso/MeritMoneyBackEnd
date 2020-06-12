/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import Api from '../../Services/api';
import MasterPage from '../../Components/MasterPage';
import { Container, InfoUsu, Formulario, Voltar } from './styles';

class Doacao extends Component {
    constructor(props) {
        super(props);
        this.state = { quantidadeDoado: 0, motivoDoado: '' };
    }

    alteraValor = e => {
        this.setState({ quantidadeDoado: e.target.value });
    };

    alteraValorMotivo = e => {
        this.setState({ motivoDoado: e.target.value });
    };

    CriaDoacao = () => {
        var data = new Date();
        const response = Api.post(`doacao`, {
            auditado: false,
            data: data,
            qtdMoedas: this.state.quantidadeDoado,
            texto: this.state.motivoDoado,
            valido: true,
        }).then(
            response => {
                console.log(response.data);
                // if (response.data) {
                // } else {
                // }
            },
            error => {
                if (error === 404) {
                    this.setState({
                        message: 'Não foi possível conectar ao portal',
                    });
                    this.setState({ isLoading: false });
                } else {
                    this.setState({
                        message: 'Não foi possível conectar ao portal',
                    });
                    this.setState({ isLoading: false });
                }
                console.log(error);
            }
        );
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
                                onChange={this.alteraValorMotivo}
                            />
                        </Formulario>
                        {this.state.quantidadeDoado > 0 &&
                        this.state.motivoDoado.length > 0 ? (
                            <Link
                                onClick={this.CriaDoacao}
                                to={`/ConfirmaDoacao/${this.props.match.params.nome}/${this.state.quantidadeDoado}`}
                            >
                                <Button>Entrar</Button>
                            </Link>
                        ) : (
                            <Link
                                style={{ pointerEvents: 'none' }}
                                onClick={this.CriaDoacao}
                                to={`/ConfirmaDoacao/${this.props.match.params.nome}/${this.state.quantidadeDoado}`}
                            >
                                <Button>Entrar</Button>
                            </Link>
                        )}
                    </form>
                </Container>
            </>
        );
    }
}
export default Doacao;
