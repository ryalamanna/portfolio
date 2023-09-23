import axioss from 'axios';

// Create an Axios instance
const axios = axioss.create({
  baseURL: 'http://localhost:3000/api', // Replace with your backend API URL
});

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    // Modify the request config here (if needed)
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // Modify the response data here (if needed)
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default axios;
