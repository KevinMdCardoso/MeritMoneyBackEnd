import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    FaShoppingCart,
    FaUserCircle,
    FaCogs,
    FaUsersCog,
    FaUserPlus,
} from 'react-icons/fa';
import { IoMdExit } from 'react-icons/io';
import { Container, Usuario, Menu } from './styles';
import Api from '../../Services/api';

class Home extends Component {
    state = {};

    constructor(props) {
        super(props);

        const UsuarioNome = localStorage.getItem('UsuarioNome');
        const Imagem = localStorage.getItem('Imagem');

        if (UsuarioNome !== null || Imagem !== null) {
            this.state.UsuarioNome = UsuarioNome;
            this.state.Imagem = Imagem;
        }
    }

    componentDidMount() {
        const UsuarioNome = localStorage.getItem('UsuarioNome');
        console.log(UsuarioNome);
        if (UsuarioNome === null) {
            const idLogado = localStorage.getItem('idLogado');
            const response = Api.get(`usuario/${idLogado}`).then(
                response => {
                    console.log(response.data);
                    if (response.status === 200) {
                        this.setState({
                            UsuarioNome: response.data.nome,
                            Imagem: response.data.img3,
                        });
                        localStorage.setItem('UsuarioNome', response.data.nome);
                        localStorage.setItem('Imagem', response.data.img3);
                    }
                },
                error => {
                    if (error === 404) {
                        this.setState({
                            message:
                                'Não foi possível conectar ao banco de dados',
                        });
                        this.setState({ isLoading: false });
                    } else {
                        this.setState({
                            message:
                                'Não foi possível conectar ao banco de dados',
                        });
                        this.setState({ isLoading: false });
                    }
                    console.log(error);
                }
            );
        }
    }

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
