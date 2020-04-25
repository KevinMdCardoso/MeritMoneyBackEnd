/* eslint-disable import/order */
import React, { Component } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '@material-ui/core/Button';

class ConfirmaDoacao extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <form>
                    <FaCheck />
                    <span>
                        Sua doação de {this.props.match.params.quantidadeDoacao}{' '}
                        ao colega {this.props.match.params.nome} foi cadastrada
                        com sucesso
                    </span>
                    <Link to="/Home">
                        <Button to="/Home">OK</Button>
                    </Link>
                </form>
            </Container>
        );
    }
}
export default ConfirmaDoacao;
