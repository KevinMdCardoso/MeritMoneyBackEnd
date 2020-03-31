/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

import MasterPage from '../../Components/MasterPage';
import { Container, InfoUsu, Formulario } from './styles';

class Doacao extends Component {
    constructor(props) {
        super(props);
    }

    CriaDoacao = () => {
        console.log('Realizando doaçao.');
    };

    render() {
        console.log(this.props);
        console.log(this.props.match.params.nome);

        return (
            <>
                <MasterPage />
                <Container>
                    <form>
                        <InfoUsu>
                            <FaUserCircle />
                            <h2>{this.props.match.params.nome}</h2>
                        </InfoUsu>
                        <Formulario>
                            <input type="number" placeholder="Valor Doado." />
                            <textarea
                                type="text"
                                placeholder="Qual motivo para dar essas moedas ao colaborador?"
                            />
                        </Formulario>
                        <Link to="/Home" onClick={this.CriaDoacao}>
                            <Button>Entrar</Button>
                        </Link>
                    </form>
                </Container>
            </>
        );
    }
}
export default Doacao;
