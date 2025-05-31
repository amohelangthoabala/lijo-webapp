import axios from 'axios';

const client = axios.create({
  baseURL: 'http://lijo-app.test/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
