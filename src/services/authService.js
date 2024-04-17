import axios from "axios";

const URL_API = "https://api4back.onrender.com/api";

export function addUser(user) {
    return axios.post(`${URL_API}/register/user`, user);
}

export function addProduct(product) {
    return axios.post(`${URL_API}/register/product`, product);
}

export function addProvider(provider) {
    return axios.post(`${URL_API}/register/provider`, provider);
}

export function login(user) {
    return axios.post(`${URL_API}/login`, user);
}