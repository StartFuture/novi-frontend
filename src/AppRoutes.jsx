import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LandingPage from "./pages/landingPage/index";
import Login from "./pages/login/index";
import InterviewStart from "./pages/interviewStart";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/interviewStart" element={<InterviewStart/>}></Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;