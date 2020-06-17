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
        this.state = { quantidadeDoado: 0, motivoDoado: '', moedasEmConta: 0 };
    }

    componentDidMount() {
        this.setState({
            moedasEmConta: localStorage.getItem('collaboratorCoin'),
        });

        Api.get(`usuario/${this.props.match.params.id}`).then(
            response => {
                if (response.status === 200) {
                    this.setState({ imagem: response.data.img3 });
                }
            },
            error => {
                console.log(error);
            }
        );
    }

    alteraValor = e => {
        this.setState({ quantidadeDoado: e.target.value });
    };

    alteraValorMotivo = e => {
        this.setState({ motivoDoado: e.target.value });
    };

    pegaDoador = () => {
        const idLogado = localStorage.getItem('idLogado');
        let usuario = [];
        //consulta para pegar infos de usuario
        const response = Api.get(`usuario/${idLogado}`).then(
            response => {
                if (response.status === 200) {
                    usuario = response.data;
                    usuario.collaboratorCoin =
                        response.data.collaboratorCoin -
                        this.state.quantidadeDoado;
                    //Debitando valor da compra
                    this.debitaConta(usuario);
                }
            },
            error => {
                console.log(error);
            }
        );
    };

    debitaConta = usuario => {
        const idLogado = localStorage.getItem('idLogado');
        const response = Api.put(`usuario/${idLogado}`, {
            id: usuario.id,
            nome: usuario.nome,
            login: usuario.login,
            email: usuario.email,
            senha: usuario.senha,
            data: usuario.data,
            status: usuario.status,
            img3: usuario.img3,
            perfil: {
                id: usuario.perfil.id,
                nome: usuario.perfil.nome,
            },
            collaboratorCoin: usuario.collaboratorCoin,
            skillCoin: usuario.skillCoin,
        }).then(
            response => {
                localStorage.setItem(
                    'collaboratorCoin',
                    usuario.collaboratorCoin
                );
            },
            error => {
                console.log(error);
            }
        );
    };

    CriaDoacao = () => {
        const idLogado = localStorage.getItem('idLogado');
        var data = new Date();
        const response = Api.post(`doacao`, {
            auditado: false,
            data: data,
            qtdMoedas: this.state.quantidadeDoado,
            texto: this.state.motivoDoado,
            valido: true,
            usuarioDoador: {
                id: idLogado,
            },
            usuarioRecebedor: {
                id: this.props.match.params.id,
            },
        }).then(
            response => {
                if (response.status === 201) this.pegaDoador();
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
                            {this.state.imagem > '' ? (
                                <img src={this.state.imagem} />
                            ) : (
                                <FaUserCircle />
                            )}
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
                        this.state.motivoDoado.length > 0 &&
                        this.state.moedasEmConta >=
                            this.state.quantidadeDoado ? (
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
