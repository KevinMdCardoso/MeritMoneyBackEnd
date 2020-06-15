/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/order */
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
import Api from '../../Services/api';

// eslint-disable-next-line react/prefer-stateless-function
class DetalhesDoacao extends Component {
    constructor(props) {
        super(props);
    }

    state = {};

    componentDidMount() {
        Api.get(`doacao/${this.props.match.params.idDoacao}`).then(
            response => {
                if (response.status === 200) {
                    this.setState({
                        doaçao: response.data,
                        idDoador: response.data.usuarioDoador.id,
                        doador: response.data.usuarioDoador.nome,
                        recebedor: response.data.usuarioRecebedor.nome,
                        idRecebedor: response.data.usuarioRecebedor.id,
                        moedasDoadas: response.data.qtdMoedas,
                        Motivo: response.data.texto,
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
            }
        );
    }

    AceitarDoacao = () => {
        Api.put(`doacao/${this.props.match.params.idDoacao}`, {
            texto: this.state.doaçao.texto,
            qtdMoedas: this.state.doaçao.qtdMoedas,
            auditado: true,
            textoAuditado: 'ACEITO PELO AUDITOR',
            valido: true,
            usuarioDoador: this.state.doaçao.usuarioDoador,
            usuarioRecebedor: this.state.doaçao.usuarioRecebedor,
            data: this.state.doaçao.data,
        }).then(
            response => {
                if (response.status === 201) {
                    this.darMoedasAoRecebedor();
                }
            },
            error => {}
        );
    };

    darMoedasAoRecebedor = () => {
        let usuario = [];
        //consulta para pegar infos de usuario
        Api.get(`usuario/${this.state.idRecebedor}`).then(
            response => {
                if (response.status === 200) {
                    usuario = response.data;
                    usuario.skillCoin =
                        response.data.skillCoin + this.state.moedasDoadas;
                    //devolve valor da doado.
                    this.atualizaAceiteConta(usuario);
                }
            },
            error => {
                console.log(error);
            }
        );
    };

    atualizaAceiteConta = usuario => {
        Api.put(`usuario/${this.state.idRecebedor}`, {
            id: usuario.id,
            nome: usuario.nome,
            login: usuario.login,
            email: usuario.email,
            senha: usuario.senha,
            perfil: {
                id: usuario.perfil.id,
                nome: usuario.perfil.nome,
            },
            collaboratorCoin: usuario.collaboratorCoin,
            skillCoin: usuario.skillCoin,
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
                                <h1>{this.state.doador}</h1>
                            </Perfil>
                            <SetaValor>
                                <FaArrowRight />
                                <p>
                                    Doado {this.state.moedasDoadas}{' '}
                                    collaboratorCoin
                                </p>
                            </SetaValor>
                            <Perfil>
                                <FaUserCircle />
                                <h1>{this.state.recebedor}</h1>
                            </Perfil>
                        </Cabecalho>
                        <h2>Motivo da doação:</h2>
                        <h2>{this.state.Motivo}</h2>
                        <Botoes>
                            <Link
                                to={`/ConfirmaNegarDoacao/${this.state.idDoador}`}
                            >
                                <Button>Negar</Button>
                            </Link>
                            <Link to="/AceitarDoacaoFinalizada">
                                <Button onClick={this.AceitarDoacao}>
                                    Aceitar
                                </Button>
                            </Link>
                        </Botoes>
                    </Detalhes>
                </Container>
            </>
        );
    }
}
export default DetalhesDoacao;
