// For configuring the axios
// For setting the base url type setup in the axios

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL
});

export default axiosInstance;