/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

import MasterPage from '../../Components/MasterPageGestor';
import { Container, InfoUsu, Formulario, Voltar } from './styles';
import Api from '../../Services/api';

class Doacao extends Component {
    constructor(props) {
        super(props);
        this.state = { nome: '', valor: 0, descricao: '' };
    }

    alteraValor = e => {
        this.setState({ valor: e.target.value });
    };

    alteraNome = e => {
        this.setState({ nome: e.target.value });
    };

    alteraDescricao = e => {
        this.setState({ descricao: e.target.value });
    };

    criaMomennto = () => {
        Api.post(`premio`, {
            descricao: this.state.descricao,
            id: 0,
            nome: this.state.nome,
            valor: this.state.valor,
            img: this.state.imagem,
        }).then(
            response => {
                console.log(response.data);
            },
            error => {
                if (error === 404) {
                    this.setState({
                        message: 'Não foi possível conectar ao portal',
                    });
                    this.setState({ isLoading: false });
                } else {
                    this.setState({
                        message: 'Não foi possível conectar ao portal',
                    });
                    this.setState({ isLoading: false });
                }
                console.log(error);
            }
        );
    };

    handleImageChange = e => {
        e.preventDefault();
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({ imagem: reader.result });
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    render() {
        return (
            <>
                <MasterPage />
                <Voltar>
                    <Link to="/CompraGestor">
                        <FaArrowLeft />
                        <p>Voltar</p>
                    </Link>
                </Voltar>
                <Container>
                    <form>
                        <Formulario>
                            <div>
                                <input
                                    style={{ width: '75%' }}
                                    type="text"
                                    placeholder="Nome"
                                    onChange={this.alteraNome}
                                />
                                <input
                                    style={{ width: '15%' }}
                                    type="number"
                                    placeholder="Preço"
                                    onChange={this.alteraValor}
                                />
                            </div>

                            <textarea
                                type="number"
                                placeholder="Descriçao"
                                onChange={this.alteraDescricao}
                            />
                            <input
                                accept="image/*"
                                className="custom-file-input"
                                type="file"
                                onChange={e => this.handleImageChange(e)}
                            />
                        </Formulario>
                        <Link to={`/NovoMomentoFinaliza`}>
                            <Button onClick={this.criaMomennto}>Criar</Button>
                        </Link>
                    </form>
                </Container>
            </>
        );
    }
}
export default Doacao;
