import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "./pages/landingPage/index";
import Home from "./pages/homePage/index"
import Login from "./pages/login/index";
import InterviewStart from "./pages/interviewStart";
import Interview from "./pages/interview";
import Registro from "./pages/registerPage/assets/css/img/svg/index";
import TermsConditionsPage from "./pages/termsConditions/index";
import HomeViagemMarcada from "pages/minhasViagens/homeViagemMarcada/index"
import HomeSemViagemMarcada from "pages/minhasViagens/homeSemViagens/index"
import { Private } from "./components/Private";
import { AuthProvider } from "./contexts/auth";
import UserMenu from "pages/homePage/userMenu";
import InterviewEnd from "pages/interviewEnd";

const AppRoutes = () => {
  return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
                <Route exact path="/home" element={<Home/>}></Route>
                <Route exact path="/home-booked-travel" element={<HomeViagemMarcada/>}></Route>
                <Route exact path="/home-without-travel" element={<HomeSemViagemMarcada/>}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/interview-start" element={<InterviewStart />}></Route>
                <Route exact path="/registro" element={<Registro />}></Route>
                <Route exact path="/terms-conditions" element={<TermsConditionsPage/>}></Route>
                <Route exact path="/interview" element={<Interview/>}></Route>
                <Route exact path="/menuUser" element={<UserMenu/>}></Route>
                <Route exact path="/interview-end" element={<InterviewEnd/>}></Route>
            </Routes>
        </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
