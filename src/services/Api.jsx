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

export const checkToken = (token) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return api.get("/auth/get_user_by_id", config);
};

export const getComment = () => {
  return api.get("/get-comment");
};

export const postQuiz = (formData) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return api.post("/travel_quiz/insert_user_questionnaire", formData, config);
};

export const cepCheck = (cep) => {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
};

export const getUserInfo = (token) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return api.get("/user/read_user", config);
};