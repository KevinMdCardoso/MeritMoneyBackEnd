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
                        Negar doação do colaborador{' '}
                        {this.props.match.params.doador} para o{' '}
                        {this.props.match.params.recebedor}? Porque?
                    </span>
                    <textarea type="text" placeholder="Qual o motivo?" />
                    <div>
                        {' '}
                        <Link to="/HomeGestor">
                            <Button>Voltar</Button>
                        </Link>
                        <Link to="/NegarDoacaoFinalizada">
                            <Button>Confirmar</Button>
                        </Link>
                    </div>
                </form>
            </Container>
        );
    }
}
export default ConfirmaNegarDoacao;
