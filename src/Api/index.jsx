import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api-academy.onlenkan.com/api/',
});

export default Api;
