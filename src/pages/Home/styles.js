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
    align-items: center;
    flex-direction: row;
    background-color: ${brancoEscuro};
    margin: 0;
    padding: 10px 0;
`;
