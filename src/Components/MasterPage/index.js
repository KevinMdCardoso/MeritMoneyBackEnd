import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaCoins, FaUserCircle } from 'react-icons/fa';
import { Container, Saldo, Usuario, Menu } from './styles';
import { IoMdExit } from 'react-icons/io';
import Api from '../../Services/api';

class Home extends Component {
    state = {};

    constructor(props) {
        super(props);
        const collaboratorCoin = localStorage.getItem('collaboratorCoin');
        const SaldoSkill = localStorage.getItem('SaldoSkill');
        const UsuarioNome = localStorage.getItem('UsuarioNome');
        const Imagem = localStorage.getItem('Imagem');
        // console.log(collaboratorCoin);
        // console.log(SaldoSkill);
        // console.log(UsuarioNome);
        // console.log(Imagem);
        if (
            UsuarioNome !== null &&
            SaldoSkill !== null &&
            collaboratorCoin !== null &&
            Imagem !== null
        ) {
            this.state.SaldoCollaborator = collaboratorCoin;
            this.state.SaldoSkill = SaldoSkill;
            this.state.UsuarioNome = UsuarioNome;
            this.state.Imagem = Imagem;
        }
    }

    componentDidMount() {
        const collaboratorCoin = localStorage.getItem('collaboratorCoin');
        const SaldoSkill = localStorage.getItem('SaldoSkill');
        const UsuarioNome = localStorage.getItem('UsuarioNome');
        const Imagem = localStorage.getItem('Imagem');

        // console.log(collaboratorCoin);
        // console.log(SaldoSkill);
        // console.log(UsuarioNome);
        // console.log(Imagem);

        if (
            UsuarioNome === null ||
            SaldoSkill === null ||
            collaboratorCoin === null ||
            Imagem === null
        ) {
            this.consultaUsuario();
        }
    }

    consultaUsuario = async () => {
        const idLogado = localStorage.getItem('idLogado');
        await Api.get(`usuario/${idLogado}`).then(
            response => {
                if (response.status === 200) {
                    this.setState({
                        SaldoCollaborator: response.data.collaboratorCoin,
                        SaldoSkill: response.data.skillCoin,
                        UsuarioNome: response.data.nome,
                        Imagem: response.data.img3,
                    });

                    localStorage.setItem(
                        'collaboratorCoin',
                        response.data.collaboratorCoin
                    );
                    localStorage.setItem('SaldoSkill', response.data.skillCoin);
                    localStorage.setItem('UsuarioNome', response.data.nome);
                    localStorage.setItem('Imagem', response.data.img3);
                }
            },
            error => {
                if (error === 404) {
                    this.setState({
                        message: 'Não foi possível conectar ao banco de dados',
                    });
                    this.setState({ isLoading: false });
                } else {
                    this.setState({
                        message: 'Não foi possível conectar ao banco de dados',
                    });
                    this.setState({ isLoading: false });
                }
                console.log(error);
            }
        );
    };

    render() {
        return (
            <Container>
                <Usuario>
                    {this.state.Imagem > '' ? (
                        <img src={this.state.Imagem} />
                    ) : (
                        <FaUserCircle />
                    )}
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
                    <div>
                        <Link to="/Login">
                            <IoMdExit />
                        </Link>
                    </div>
                </Menu>
            </Container>
        );
    }
}
export default Home;
