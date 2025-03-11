import axios from 'axios';
axios.defaults.withCredentials = true;
const apiPort = import.meta.env.VITE_API_PORT || 3000;
const apiUrl = `http://localhost:${apiPort}`;

export const Login = async (data) => {
    const url = `${apiUrl}/members/login`;

    try {
        console.log(data);
        const response = await axios.post(url, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; // Re-throw the error to handle it in the calling function
    }
};