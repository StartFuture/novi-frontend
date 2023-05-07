import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loggedUser = localStorage.getItem("user");

        if (loggedUser) {
            setUser(JSON.parse(loggedUser));
        }

        setLoading(false);
    }, []);

    const login = (email, password) => {

        const loggedUser = {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if ( password === "secret") {
            console.log("login auth", {email, password});
            setUser(loggedUser)
            navigate("/home");    
        }
    };

    const logout = () => {
        console.log("logout");
        setUser(null);
        localStorage.removeItem("user");
        navigate("/");
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};