import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "./pages/landingPage/index";
import DefaultHome from "pages/homePage/default/index";
import Login from "./pages/login/index";
import InterviewStart from "./pages/interviewStart";
import Registro from "./pages/registerPage/assets/css/img/svg/index";
import TermsConditionsPage from "./pages/termsConditions/index";
import QuizObejtivoViagem from "pages/quiz/quizObjetivosDaViagem";
import { Private } from "@components/Private";

const AppRoutes = () => {
  return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
                <Route exact path="/defaultHome" element={<Private><DefaultHome/></Private>}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/interviewStart" element={<InterviewStart />}></Route>
                <Route exact path="/registro" element={<Registro />}></Route>
                <Route exact path="/terms-conditions" element={<TermsConditionsPage/>}></Route>
                <Route exact path="/quizObjetivos" element={<QuizObejtivoViagem/>}></Route>
            </Routes>
        </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
