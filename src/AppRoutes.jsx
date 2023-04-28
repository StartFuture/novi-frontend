import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LandingPage from "./pages/landingPage/index";
import Login from "./pages/login/index";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;