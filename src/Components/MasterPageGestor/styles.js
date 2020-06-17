import styled from 'styled-components';
import { primary, secundary, dark, clean, hover } from '../../styles/Paleta';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${primary};
    margin: 0;
    color: ${clean};
    height: 20vh;
    width: 100%;
`;

export const Usuario = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30vw;
    height: 100%;

    svg {
        width: 50%;
        height: 50%;
    }
    img {
        width: 30%;
        height: 60%;
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: row;
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    width: 80vw;
    height: 100%;

    svg {
        width: 40%;
        height: 60%;
    }
    div {
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            color: ${secundary};
        }

        border-radius: 50%;
        border: 2px solid ${secundary};
        width: 45px;
        height: 45px;
        margin: 1%;
        background-color: ${clean};

        &:hover {
            background-color: ${hover};
            cursor: pointer;
            svg {
                color: ${clean};
            }
        }
    }
`;
