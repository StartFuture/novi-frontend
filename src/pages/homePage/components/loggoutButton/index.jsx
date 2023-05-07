import React, { useContext } from "react";
import { Button } from "./styles";
import { AuthContext } from "contexts/auth";

export default function LogoutButton() {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <Button onClick={handleLogout}>Logout</Button>
    );
}
