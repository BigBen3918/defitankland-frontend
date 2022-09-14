import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import Provider, { useGlobalContext } from "./context";
import AOS from "aos";

/** ---------- Begin Pages ---------- */
// main pages
import Home from "./pages/dashboard/home";
import DFTL from "./pages/dftl/dftl";
import Notfound from "./pages/notfound";

// Layouts
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import ScrollToTop from "./components/layouts/ScrollButton";
/** ---------- End Pages ---------- */

/** Begin SCSS Style */
import "./assets/styles/index.scss";
import "aos/dist/aos.css";
/** End SCSS Style */

interface Props {
    component: React.ComponentType;
    path?: string;
}

const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const location = useLocation();
    const [state]: any = useGlobalContext();

    if (!state.auth.isAuth) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <RouteComponent />;
};

export default function App() {
    AOS.init({
        duration: 1200,
    });

    return (
        <Provider>
            <Router>
                <Header />
                <Routes>
                    {/* Non Auth Routes */}
                    <Route path="/" element={<Navigate to={"/dashboard"} />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/dftl" element={<DFTL />} />

                    {/* Auth Routes */}
                    {/* <Route
                        path="/allnft"
                        element={<PrivateRoute component={} />}
                    /> */}

                    {/* Other Routes */}
                    <Route path="*" element={<Notfound />} />
                </Routes>
                <Footer />
                <ScrollToTop />
            </Router>
        </Provider>
    );
}
