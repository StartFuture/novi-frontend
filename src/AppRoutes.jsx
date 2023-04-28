import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LandingPage from "./pages/landingPage/index";
import LoginPage from "./pages/login/index";
import TermsConditionsPage from "./pages/termsConditions/index";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}></Route>
                <Route exact path="/login" element={<LoginPage/>}></Route>
                <Route exact path="/terms-conditions" element={<TermsConditionsPage/>}></Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;