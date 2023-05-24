// import React, {createContext, useEffect, useState} from "react";
// import { useNavigate } from "react-router-dom";

// import {api, authLogin} from  "../../services/Api"

// export const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//     const navigate = useNavigate();
//     const [token, setToken] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const loggedUser = localStorage.getItem("token");

//         if (loggedUser) {
//             setToken(loggedUser);
//         }

//         setLoading(false);
//     }, []);

//     const login = async (email, password_user) => {

//         const response = await authLogin(email, password_user);

//         const token = response.data.access_token;

//         localStorage.setItem("token", token);

//         api.defaults.headers.Authorization = `Bearer ${token}`

//         setToken(token)
//         navigate("/home");
//     };

//     const logout = () => {
//         console.log("logout");
//         localStorage.removeItem("token");
//         api.defaults.headers.Authorization = null;
//         setToken(null);
//         navigate("/");
//     };

//     return(
//         <AuthContext.Provider value={{authenticated: !!token, token, loading, login, logout}}>
//             {children}
//         </AuthContext.Provider>
//     );
// };