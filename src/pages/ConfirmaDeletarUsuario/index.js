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

    deletaUsuario = () => {
        Api.delete(`usuario/${this.props.match.params.idUsuario}`).then(
            response => {},
            error => {
                console.log(error);
            }
        );
    };

    render() {
        console.log(this.props);
        return (
            <Container>
                <form>
                    <FaQuestion />
                    <span>
                        Certeza que quer deletar o colaborador{' '}
                        {this.props.match.params.nome} ?
                    </span>
                    <div>
                        <Link to="/Colaboradores">
                            <Button>Voltar</Button>
                        </Link>
                        <Link to="/DeletarColaboradorFinalizada">
                            <Button onClick={this.deletaUsuario}>
                                Confirmar
                            </Button>
                        </Link>
                    </div>
                </form>
            </Container>
        );
    }
}
export default ConfirmaNegarDoacao;
