/* eslint-disable import/order */
import React, { Component } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line react/prefer-stateless-function
class ConfirmaAceitarDoacao extends Component {
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
                        Aceitar doação do colaborador{' '}
                        {this.props.match.params.doador} para o{' '}
                        {this.props.match.params.recebedor}?
                    </span>
                    <div>
                        {' '}
                        <Link to="/HomeGestor">
                            <Button>Voltar</Button>
                        </Link>
                        <Link to="/AceitarDoacaoFinalizada">
                            <Button>Confirmar</Button>
                        </Link>
                    </div>
                </form>
            </Container>
        );
    }
}
export default ConfirmaAceitarDoacao;
