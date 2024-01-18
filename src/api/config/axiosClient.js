import axios from 'axios';

const TIME_OUT = 20000;

const axiosClient = axios.create({
    // baseURL: process.env.REACT_APP_API_ENDPOINT,
    baseURL: "http://localhost:8080/api/v1",
    timeout: TIME_OUT,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;

// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        let authenticationData = JSON.parse(localStorage.getItem('user_token'));

        if (authenticationData && authenticationData.accessToken) {
            config.headers['authorization'] =
                'Bearer ' + authenticationData.accessToken;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        if (
            error.code === 'ERR_BAD_REQUEST' &&
            error.response.data.message === '400_JWT_TOKEN_IS_EXPIRED'
        ) {
            localStorage.removeItem('user_token');
            // localStorage.removeItem('password_expire');
            window.location.replace('/');
            window.location.reload();
        }
        return Promise.reject(error);
    },
);
