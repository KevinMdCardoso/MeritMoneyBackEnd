/* eslint-disable import/order */
import React, { Component } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line react/prefer-stateless-function
class ConfirmaNegarDoacao extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
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
                            <Button>Confirmar</Button>
                        </Link>
                    </div>
                </form>
            </Container>
        );
    }
}
export default ConfirmaNegarDoacao;
