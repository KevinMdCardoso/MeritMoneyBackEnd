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

    debitaConta = usuario => {
        const idLogado = localStorage.getItem('idLogado');
        const response2 = Api.put(`usuario/${idLogado}`, {
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
            response2 => {
                localStorage.setItem('SaldoSkill', usuario.skillCoin);
                //Envio do email
            },
            error => {
                console.log(error);
            }
        );
    };

    compra = () => {
        console.log('teste');
        const idLogado = localStorage.getItem('idLogado');
        let SaldoSkill = 0;
        let usuario = [];
        //consulta para pegar infos de usuario
        const response = Api.get(`usuario/${idLogado}`).then(
            response => {
                if (response.status === 200) {
                    console.log(response.data);
                    usuario = response.data;
                    console.log(usuario);
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
