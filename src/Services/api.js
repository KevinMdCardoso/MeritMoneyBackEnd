import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:8080/',
    baseURL: 'http://18.228.47.241:8080/coopCoin/',
});

export default api;
