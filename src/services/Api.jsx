import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.novi.startfuture.com.br",
});

export const authLogin = async (email, password_user) => {
    return api.post("/auth/login", {email, password_user});
};

export const cepCheck = (cep) => {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}