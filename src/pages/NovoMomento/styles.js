/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import {
    primary,
    secundary,
    clean,
    hover,
    brancoEscuro,
} from '../../styles/Paleta';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    background-color: ${brancoEscuro};
    margin: 0;
    padding: 4px 0;
    min-height: 76vh;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 60vh;
        background-color: ${clean};
        border-radius: 20px;

        img {
            height: 50px;
            margin: 30px 0;
        }
        textarea {
            margin-bottom: 10px;
            border: 2px solid ${secundary};
            border-radius: 12px;
            padding-left: 7px;
            height: 70%;
            min-width: 65%;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
            &:focus {
                box-shadow: 0 0 0 0;
                outline: 0;
            }
        }

        button {
            margin: 20px 0;
            background-color: ${primary};
            color: ${clean};
            border-radius: 20px;
            width: 100%;
            border: 0 none;
            cursor: pointer;

            &:focus {
                box-shadow: 0 0 0 0;
                border: 0 none;
                outline: 0;
            }

            &:hover {
                background-color: ${hover};
                opacity: 0.8;
            }
        }

        a {
            color: ${clean};
            text-decoration: none;
            width: 50%;
        }
    }
`;

export const Voltar = styled.div`
    width: 100vw;
    background-color: #e3e3e3;
    padding-top: 4px;
    a {
        margin-left: 24.5%;
        display: flex;
        flex-direction: row;
        color: ${primary};
        text-decoration: none;
        white-space: nowrap;
        svg {
            margin-right: 7px;
        }
    }
`;

export const InfoUsu = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 40%;
    padding: 10px 0;
    svg {
        width: 20%;
        height: 100%;
    }
`;

export const Formulario = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 50%;
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        min-width: 65%;
        input {
            border: 2px solid ${secundary};
            border-radius: 12px;
            height: 40px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
            text-align: center;
            margin-bottom: 15px;

            &:focus {
                box-shadow: 0 0 0 0;
                outline: 0;
            }
        }
    }
`;
