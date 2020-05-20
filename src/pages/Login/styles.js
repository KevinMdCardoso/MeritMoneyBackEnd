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
        min-width: 65%;
        height: 40px;
        padding-bottom: 27vh;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 50%;
        background-color: ${clean};
        border-radius: 20px;
        min-height: 350px;

        img {
            height: 70%;
            margin: 30px 0;
            border-radius: 10%;
            /* padding-bottom: 100px; */
        }

        input {
            margin-bottom: 10px;
            border: 2px solid ${secundary};
            border-radius: 15px;
            padding-left: 20px;
            min-height: 40px;
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
    }

    span {
        /* font-size: 32px; */
    }
`;
