import styled from 'styled-components';
import { primary, secundary, dark, clean, hover } from '../../styles/Paleta';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    background-color: ${clean};

    padding: 10px 0;
`;
