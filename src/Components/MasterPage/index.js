import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaCoins, FaUserCircle } from 'react-icons/fa';
import { Container, Saldo, Usuario, Menu } from './styles';

class Home extends Component {
    state = {
        SaldoSkill: 0,
        SaldoCollaborator: 0,
        UsuarioNome: '',
    };

    constructor(props) {
        super(props);
        this.state.SaldoCollaborator = 40;
        this.state.SaldoSkill = 75;
        this.state.UsuarioNome = 'Kevin Cardoso';
    }

    render() {
        return (
            <Container>
                <Usuario>
                    <FaUserCircle />
                    <h1>{this.state.UsuarioNome}</h1>
                </Usuario>
                <Saldo>
                    <div>
                        <FaCoins />
                        <h1>{this.state.SaldoCollaborator}</h1>
                    </div>
                    <div>
                        <FaCoins />
                        <h1>{this.state.SaldoSkill}</h1>
                    </div>
                </Saldo>
                <Menu>
                    <div>
                        <Link to="/Compra">
                            <FaShoppingCart />
                        </Link>
                    </div>
                </Menu>
            </Container>
        );
    }
}
export default Home;
