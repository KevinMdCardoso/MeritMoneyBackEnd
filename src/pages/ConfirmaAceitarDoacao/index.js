/* eslint-disable spaced-comment */
/* eslint-disable lines-between-class-members */
/* eslint-disable import/order */
import React, { Component } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '@material-ui/core/Button';
import Api from '../../Services/api';

// eslint-disable-next-line react/prefer-stateless-function
class ConfirmaAceitarDoacao extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    state = { doador: '', recebedor: '' };

    componentDidMount() {
        Api.get(`doacao/${this.props.match.params.idDoacao}`).then(
            response => {
                if (response.status === 200) {
                    console.log(response);
                    this.setState({
                        doaçao: response.data,
                        doador: response.data.usuarioDoador.nome,
                        recebedor: response.data.usuarioRecebedor.nome,
                        idRecebedor: response.data.usuarioRecebedor.id,
                        moedasDoadas: response.data.qtdMoedas,
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

    darMoedasAoDoador = () => {
        let usuario = [];
        //consulta para pegar infos de usuario
        Api.get(`usuario/${this.state.idRecebedor}`).then(
            response => {
                if (response.status === 200) {
                    usuario = response.data;
                    usuario.skillCoin =
                        response.data.skillCoin + this.state.moedasDoadas;
                    //devolve valor da doado.
                    this.atualizaConta(usuario);
                }
            },
            error => {
                console.log(error);
            }
        );
    };

    atualizaConta = usuario => {
        Api.put(`usuario/${this.state.idRecebedor}`, {
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
            response => {},
            error => {
                console.log(error);
            }
        );
    };

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
                    this.darMoedasAoDoador();
                }
            },
            error => {}
        );
    };

    render() {
        return (
            <Container>
                <form>
                    <FaQuestion />
                    <span>
                        Aceitar doação do colaborador {this.state.doador} para o{' '}
                        {this.state.recebedor}?
                    </span>
                    <div>
                        {' '}
                        <Link to="/HomeGestor">
                            <Button>Voltar</Button>
                        </Link>
                        <Link to="/AceitarDoacaoFinalizada">
                            <Button onClick={this.AceitarDoacao}>
                                Confirmar
                            </Button>
                        </Link>
                    </div>
                </form>
            </Container>
        );
    }
}
export default ConfirmaAceitarDoacao;
