/* eslint-disable import/order */
import React, { Component } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '@material-ui/core/Button';
import Api from '../../Services/api';

// eslint-disable-next-line react/prefer-stateless-function
class ConfirmaNegarDoacao extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    state = { doador: '', recebedor: '', textoAuditado: '' };

    componentDidMount() {
        Api.get(`doacao/${this.props.match.params.idDoacao}`).then(
            response => {
                if (response.status === 200) {
                    console.log(response);
                    this.setState({
                        doaçao: response.data,
                        idDoador: response.data.usuarioDoador.id,
                        doador: response.data.usuarioDoador.nome,
                        recebedor: response.data.usuarioRecebedor.nome,
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

    devolveMoedasAoDoador = () => {
        let usuario = [];
        //consulta para pegar infos de usuario
        Api.get(`usuario/${this.state.idDoador}`).then(
            response => {
                if (response.status === 200) {
                    usuario = response.data;
                    usuario.collaboratorCoin =
                        response.data.collaboratorCoin +
                        this.state.moedasDoadas;
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
        Api.put(`usuario/${this.state.idDoador}`, {
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

    negaDoacao = () => {
        Api.put(`doacao/${this.props.match.params.idDoacao}`, {
            texto: this.state.doaçao.texto,
            qtdMoedas: this.state.doaçao.qtdMoedas,
            auditado: true,
            textoAuditado: this.state.textoAuditado,
            valido: false,
            usuarioDoador: this.state.doaçao.usuarioDoador,
            usuarioRecebedor: this.state.doaçao.usuarioRecebedor,
            data: this.state.doaçao.data,
        }).then(
            response => {
                if (response.status === 201) {
                    this.devolveMoedasAoDoador();
                }
            },
            error => {}
        );
    };

    alteraTextoAuditado = e => {
        this.setState({ textoAuditado: e.target.value });
    };

    render() {
        return (
            <Container>
                <form>
                    <FaQuestion />
                    <span>
                        Negar doação do colaborador {this.state.doador} para o{' '}
                        {this.state.recebedor}? Porque?
                    </span>
                    <textarea
                        type="text"
                        placeholder="Qual o motivo?"
                        onChange={e => this.alteraTextoAuditado(e)}
                    />
                    <div>
                        {' '}
                        <Link to="/HomeGestor">
                            <Button>Voltar</Button>
                        </Link>
                        <Link to="/NegarDoacaoFinalizada">
                            <Button onClick={this.negaDoacao}>Confirmar</Button>
                        </Link>
                    </div>
                </form>
            </Container>
        );
    }
}
export default ConfirmaNegarDoacao;
