import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LandingPage from "./pages/landingPage/landingPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}></Route>
                <Route exact path="/login" element={<LoginPage/>}></Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;