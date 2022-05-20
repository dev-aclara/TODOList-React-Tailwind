import axios from 'axios';

// Base da URL: https://jsonplaceholder.typicode.com
// Users: https://jsonplaceholder.typicode.com/users
// ToDos: https://jsonplaceholder.typicode.com/todos

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default api;

