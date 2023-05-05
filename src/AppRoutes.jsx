import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LandingPage from "./pages/landingPage/index";
import LoginPagePage from "./pages/login/index";
import Registro from "./pages/registerPage/assets/css/img/svg/index";
import TermsConditionsPage from "./pages/termsConditions/index";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}></Route>
                <Route exact path="/registro" element={<Registro/>}></Route>
                <Route exact path="/login" element={<LoginPagePage/>}></Route>
                <Route exact path="/terms-conditions" element={<TermsConditionsPage/>}></Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;