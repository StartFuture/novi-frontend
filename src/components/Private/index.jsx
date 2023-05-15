import { AuthContext } from "contexts/auth";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="loading">Loading .....</div>
    }

    if ( !authenticated ) {
        return <Navigate to="/login"/>
    }

    return children;
};