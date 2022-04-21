import axios from 'axios';

import {api} from './UrlConfig';
console.log(api);

const axiosIntance = axios.create({
  baseURL: api,
});

export default axiosIntance;
