/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import MasterPage from '../../Components/MasterPageGestor';
import { Container, Formulario, Voltar, Botoes } from './styles';
import Api from '../../Services/api';

class Doacao extends Component {
    constructor(props) {
        super(props);
        this.state = { nome: '', valor: 0, descricao: '' };
    }

    componentDidMount() {
        Api.get(`premio/${this.props.match.params.idMomento}`).then(
            response => {
                if (response.status === 200) {
                    console.log(response);
                    this.setState({
                        nome: response.data.nome,
                        valor: response.data.valor,
                        descricao: response.data.descricao,
                    });
                }
            },
            error => {
                if (error === 404) {
                    this.setState({
                        message: 'Não foi possível conectar ao banco de dados',
                    });
                    this.setState({ isLoading: false });
                } else {
                    this.setState({
                        message: 'Não foi possível conectar ao banco de dados',
                    });
                    this.setState({ isLoading: false });
                }
                console.log(error);
            }
        );
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

    deletaMomento = () => {
        Api.delete(`premio/${this.props.match.params.idMomento}`).then(
            response => {},
            error => {
                console.log(error);
            }
        );
    };

    alteraMomento = () => {
        Api.put(`premio/${this.props.match.params.idMomento}`, {
            nome: this.state.nome,
            valor: this.state.valor,
            descricao: this.state.descricao,
        }).then(
            response => {},
            error => {
                console.log(error);
            }
        );
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
                                    value={this.state.nome}
                                    onChange={this.alteraNome}
                                />
                                <input
                                    style={{ width: '15%' }}
                                    type="number"
                                    value={this.state.valor}
                                    placeholder="Preço"
                                    onChange={this.alteraValor}
                                />
                            </div>
                            <textarea
                                type="number"
                                value={this.state.descricao}
                                placeholder="Descriçao"
                                onChange={this.alteraDescricao}
                            />
                        </Formulario>
                        <Botoes>
                            <Link to={`/DeletarMomentoFinaliza`}>
                                <Button onClick={this.deletaMomento}>
                                    Deletar
                                </Button>
                            </Link>
                            <Link to={`/AlteracaoMomentoFinaliza`}>
                                <Button onClick={this.alteraMomento}>
                                    Alterar
                                </Button>
                            </Link>
                        </Botoes>
                    </form>
                </Container>
            </>
        );
    }
}
export default Doacao;
