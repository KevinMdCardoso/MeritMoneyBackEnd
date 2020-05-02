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
    padding: 10px 0;
    min-height: 76vh;
`;

export const Voltar = styled.div`
    width: 100vw;
    background-color: #e3e3e3;
    padding-top: 4px;
    a {
        margin-left: 17%;
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
