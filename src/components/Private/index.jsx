import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { checkToken } from "services/Api";

export const Private = ({ children }) => {
  const nav = useNavigate();

  useEffect(() => {
    checkToken()
      .then((ress) => {console.log(ress.data)})
      .catch((err) => {
        console.log(err)
        nav("/login")
      });
  }, []);

  return children;
};
