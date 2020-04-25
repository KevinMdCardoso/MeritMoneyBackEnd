/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import {
    primary,
    secundary,
    dark,
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
    padding: 10px 0;
    min-height: 80vh;

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
        input {
            margin-bottom: 10px;
            border: 2px solid ${secundary};
            border-radius: 12px;
            padding-left: 7px;
            height: 40px;
            max-width: 12%;
            margin-right: 53%;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
            text-align: center;
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
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 50%;
`;
