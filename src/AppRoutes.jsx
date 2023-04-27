import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Registro from "./pages/RegisterPage/RegisterPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}></Route>
                <Route exact path="/login" element={<LoginPage/>}></Route>
                <Route exact path="/registro" element={<Registro/>}></Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;