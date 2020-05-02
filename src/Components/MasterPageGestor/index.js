import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    FaShoppingCart,
    FaUserCircle,
    FaCogs,
    FaUsersCog,
    FaUserPlus,
} from 'react-icons/fa';
import { Container, Usuario, Menu } from './styles';

class Home extends Component {
    state = {
        UsuarioNome: '',
    };

    constructor(props) {
        super(props);
        this.state.UsuarioNome = 'Kevin Cardoso';
    }

    render() {
        return (
            <Container>
                <Usuario>
                    <FaUserCircle />
                    <h1>{this.state.UsuarioNome}</h1>
                </Usuario>
                <Menu>
                    <div>
                        <Link to="/Colaboradores">
                            <FaUsersCog />
                        </Link>
                    </div>
                    <div>
                        <Link to="/NovoColaborador">
                            <FaUserPlus />
                        </Link>
                    </div>
                    <div>
                        <Link to="/CompraGestor">
                            <FaShoppingCart />
                        </Link>
                    </div>
                    <div>
                        <Link to="/Configuracoes">
                            <FaCogs />
                        </Link>
                    </div>
                </Menu>
            </Container>
        );
    }
}
export default Home;
