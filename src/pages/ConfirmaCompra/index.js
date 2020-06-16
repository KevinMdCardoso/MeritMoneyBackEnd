/* eslint-disable import/order */
import React, { Component } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '@material-ui/core/Button';
import Api from '../../Services/api';

// eslint-disable-next-line react/prefer-stateless-function
class ConfirmaCompra extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    compra = () => {
        const idLogado = localStorage.getItem('idLogado');
        let usuario = [];
        //consulta para pegar infos de usuario
        const response = Api.get(`usuario/${idLogado}`).then(
            response => {
                if (response.status === 200) {
                    usuario = response.data;
                    usuario.skillCoin =
                        response.data.skillCoin - this.props.match.params.valor;
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
        Api.put(`usuario/${idLogado}`, {
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
            response => {
                localStorage.setItem('SaldoSkill', usuario.skillCoin);
                //Envio do email
                this.enviaEmailSolicitandoPremio(usuario);
                //registra compra do premio
                this.registraPremioSolicitado(idLogado);
            },
            error => {
                console.log(error);
            }
        );
    };

    enviaEmailSolicitandoPremio = usuario => {
        const texto =
            'Eu ' +
            usuario.nome +
            ' estou solicitando o prêmio ' +
            this.props.match.params.momento +
            ' como recompensa pelos bons serviços colaborativos evidenciados pelo CoopCoin.';

        Api.get(`parametro`).then(
            response => {
                if (response.status === 200) {
                    console.log(response);

                    for (let index = 0; index < response.data.length; index++) {
                        if (response.data[index].nome === 'EmailRH') {
                            Api.get(
                                `premio/EnviaEmail/${usuario.email}/${response.data[index].valor}/${texto}`
                            ).then(
                                response => {
                                    if (response.status === 200) {
                                        console.log(response);
                                    }
                                },
                                error => {
                                    console.log(error);
                                }
                            );
                        }
                    }
                }
            },
            error => {
                console.log(error);
            }
        );
    };

    registraPremioSolicitado = idLogado => {
        Api.post(`usuario_premio`, {
            data: new Date(),
            premio: {
                id: this.props.match.params.idMomento,
            },
            usuario: {
                id: idLogado,
            },
        }).then(
            response => {
                console.log(response.data);
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
            <Container>
                <form>
                    <FaQuestion />
                    <span>
                        Confirma o pedido de {this.props.match.params.momento}{' '}
                        sera cobrado {this.props.match.params.valor} da sua
                        conta.
                    </span>
                    <div>
                        {' '}
                        <Link to="/Compra">
                            <Button>Cancelar</Button>
                        </Link>
                        <Link to="/CompraFinalizada">
                            <Button onClick={() => this.compra()}>
                                Confirmar
                            </Button>
                        </Link>
                    </div>
                </form>
            </Container>
        );
    }
}
export default ConfirmaCompra;
