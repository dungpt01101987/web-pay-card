import axiosClient from 'api/config/axiosClient';

// Flow register account 
const register = ({ email, password, username }) => {
    const url = 'v1/auth/register';
    return axiosClient.post(url, { email, password, username });
};

const registerVerifyOtp = ({ username, otp }) => {
    const url = 'auth/register/verify-otp';
    return axiosClient.post(url, { username, otp });
};


// Flow login
const login = ({ email, password }) => {
    const url = 'auth/login';
    return axiosClient.post(url, { email, password });
}

const loginVerifyOtp = ({ email, otp }) => {
    const url = 'auth/login/verify-otp';
    return axiosClient.post(url, { email, otp });
}


// Flow change password




export { register, registerVerifyOtp, login, loginVerifyOtp }