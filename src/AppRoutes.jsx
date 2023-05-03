import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LandingPage from "./pages/landingPage/index";
import LoginPage from "./pages/login/index";
import Registro from "./pages/registerPage/assets/css/img/svg/index";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}></Route>
                <Route exact path="/registro" element={<Registro/>}></Route>
                <Route exact path="/login" element={<LoginPage/>}></Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;