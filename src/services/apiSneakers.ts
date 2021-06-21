import axios from 'axios';

const apiSneakers = axios.create({
  baseURL: process.env.REACT_APP_SNEAKERS_LIST,
});

export default apiSneakers;
