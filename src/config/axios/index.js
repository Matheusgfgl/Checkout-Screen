import axios from 'axios';

axios.defaults.headers.common['Content-type'] = 'aplication/json';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export default api;