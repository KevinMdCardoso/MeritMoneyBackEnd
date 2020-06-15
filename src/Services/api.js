import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:7090/',
    // baseURL: 'http://18.231.111.56:8080/coopcoin/',
});

export default api;
