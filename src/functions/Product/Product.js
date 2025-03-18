import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import axios from 'axios';
axios.defaults.withCredentials = true;

const apiPort = import.meta.env.VITE_API_PORT || 3000;
const apiUrl = `http://localhost:${apiPort}`;

export const GetProducts = async () => {
    const url = `${apiUrl}/products`;

    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; // Re-throw the error to handle it in the calling function
    }
}

export const AddProduct = async (data) => {
    const url = `${apiUrl}/addProducts`;
    const token = Cookies.get('token');
    console.log(token);
    try {
        console.log(data);
        const response = await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; // Re-throw the error to handle it in the calling function
    }
}