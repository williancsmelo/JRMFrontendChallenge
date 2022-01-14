import axios from 'axios';

const api = axios.create({
  baseURL: 'https://processoreact.projetos.jrmendonca.com.br',
});

export default api;
