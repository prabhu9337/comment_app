import axios from 'axios';

const axiosInstance = axios.create({baseURL : "http://localhost:80/api"})

export default axiosInstance