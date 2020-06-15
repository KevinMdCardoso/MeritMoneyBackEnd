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
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
    background-color: ${brancoEscuro};
    margin: 0;
    padding: 7px 0;
    min-height: 80vh;
`;

export const Tabela = styled.div`
    display: flex;
    /* flex-direction: column; */
    width: 65vw;
    min-height: 20vh;
    flex-wrap: wrap;

    a {
        display: flex;
        flex-direction: row;
        color: ${primary};
        text-decoration: none;
        white-space: nowrap;
        width: 100%;
        padding: 0 0 3px 0;
        svg {
            margin-right: 7px;
        }
    }
`;
export const Linha = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${clean};
    width: 100%;
    height: 15vh;
    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0;
        color: ${dark};
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${clean};
    width: 100%;
    height: 100%;
    border: 1px solid ${brancoEscuro};

    div {
        display: flex;
        flex-direction: column;
        margin: 0 15px 0 15px;
        h1 {
            font-size: 16px;
        }
    }
    svg {
        width: 15%;
        height: 100%;
    }

    &:hover {
        cursor: pointer;
        background-color: ${hover};
        color: ${clean};
        opacity: 0.8;
    }
`;
export const CardAdd = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${clean};
    width: 100%;
    height: 100%;
    border: 1px solid ${brancoEscuro};

    div {
        display: flex;
        flex-direction: column;
        margin: 0 15px 0 15px;
        h1 {
            font-size: 16px;
        }
    }
    svg {
        width: 15%;
        height: 100%;
    }

    &:hover {
        cursor: pointer;
        background-color: ${hover};
        color: ${clean};
        opacity: 0.8;
    }
`;
export const CardAddGrande = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${clean};
    width: 100%;
    height: 100%;
    border: 1px solid ${brancoEscuro};
    a {
        width: 100%;
        height: 100%;
        div {
            display: flex;
            flex-direction: column;
            margin: 0 15px 0 15px;
            h1 {
                font-size: 16px;
            }
        }
        svg {
            width: 8%;
            height: 100%;
        }

        &:hover {
            cursor: pointer;
            background-color: ${hover};
            color: ${clean};
            opacity: 0.8;
        }
    }
`;

export const MeiaLinha = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${clean};
    width: 50%;
    height: 15vh;
    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0;
        color: ${dark};
    }
`;
