import axios from 'axios';
import config from '../config';

export default axios.create({
  baseURL: config.BASE_URL,
  headers: {
    Authorization: `Bearer ${config.API_KEY}`
  }
})
