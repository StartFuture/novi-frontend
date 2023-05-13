import axios from "axios";

export const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export const authLogin = async (email, password_user) => {
    return api.post("/auth/login", {email, password_user});
};