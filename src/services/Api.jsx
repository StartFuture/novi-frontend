import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.novi.startfuture.com.br",
});

export const authLogin = async (email, password_user) => {
  const params = new URLSearchParams();
  params.append("username", email);
  params.append("password", password_user);
  return api.post("/auth/login", params);
};

export const getComment = () => {
  return api.get("/get-comment")
}

export const cepCheck = (cep) => {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
};