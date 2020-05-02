import styled from 'styled-components';
import { primary, hover, clean, secundary } from '../../styles/Paleta';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${primary};
    width: 100vw;
    height: 100vh;

    a {
        text-decoration: none;
        color: ${clean};
        font-size: 15px;
        min-width: 40%;
        height: 40px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 40%;
        background-color: ${clean};
        border-radius: 20px;
        min-height: 45%;

        span {
            width: 80%;
            text-align: center;
        }

        svg {
            transform: rotate(45deg);
            height: 20%;
            width: 20%;
            color: red;
        }

        div {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-around;
            button {
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
        }
    }
`;
