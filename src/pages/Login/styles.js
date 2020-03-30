import styled from 'styled-components';
import { primary, clean } from '../../styles/Paleta';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    width: 100vw;
    height: 100vh;

    a {
        text-decoration: none;
        color: ${clean};
        font-size: 15px;
        min-width: 65%;
        height: 40px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 40%;
        background-color: ${clean};
        border-radius: 20px;
        min-height: 350px;

        img {
            height: 50px;
            margin: 30px 0;
        }

        input {
            margin-bottom: 10px;
            border: 3px solid #ddd;
            border-radius: 15px;
            padding-left: 20px;
            height: 40px;
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
                background-color: ${primary};
                opacity: 0.8;
            }
        }
    }

    span {
        /* font-size: 32px; */
    }
`;
