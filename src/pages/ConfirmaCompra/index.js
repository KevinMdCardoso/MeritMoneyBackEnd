/* eslint-disable import/order */
import React, { Component } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line react/prefer-stateless-function
class ConfirmaCompra extends Component {
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
                            <Button>Confirmar</Button>
                        </Link>
                    </div>
                </form>
            </Container>
        );
    }
}
export default ConfirmaCompra;
