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
import UserMenu from "pages/homePage/userMenu";
import NewTrip from "./pages/newTrip/index";
import LoadingTrip from "./pages/loadingTrip/index";
import ResultTrip from "./pages/resultTrip/index";
import { Private } from "./components/Private";
import { AuthProvider } from "./contexts/auth";
import InterviewEnd from "pages/interviewEnd";
import PaymentPage from "pages/paymentPage";
import Loading from "pages/loadingPage";
import Thanks from "pages/thanksPage";
import MyProfile from "pages/myProfile";

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
                <Route exact path="/interview-start" element={<Private><InterviewStart /></Private>}></Route>
                <Route exact path="/registro" element={<Registro />}></Route>
                <Route exact path="/terms-conditions" element={<TermsConditionsPage/>}></Route>
                <Route exact path="/interview" element={<Private><Interview/></Private>}></Route>
                <Route exact path="/new-trip" element={<Private><NewTrip/></Private>}></Route>
                <Route exact path="/loading-trip" element={<Private><LoadingTrip/></Private>}></Route>
                <Route exact path="/result-trip" element={<Private><ResultTrip/></Private>}></Route>
                <Route exact path="/interview-end" element={<Private><InterviewEnd/></Private>}></Route>
                <Route exact path="/payment" element={<Private><PaymentPage/></Private>}></Route>
                <Route exact path="/loading" element={<Private><Loading/></Private>}></Route>
                <Route exact path="/thank-you" element={<Private><Thanks/></Private>}></Route>
                <Route exact path="/profile" element={<Private><MyProfile/></Private>}></Route>
            </Routes>
        </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
