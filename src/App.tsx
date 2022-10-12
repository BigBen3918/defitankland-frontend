import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
    Outlet,
} from "react-router-dom";
import Provider, { useGlobalContext } from "./context";
import AOS from "aos";

/** ---------- Begin Pages ---------- */
// main pages
import Home from "./pages/dashboard";
import DFTL from "./pages/dftl";
import Notfound from "./pages/notfound";

// Layouts
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
// import ScrollToTop from "./components/layouts/ScrollButton";
import JoinButton from "./components/layouts/JoinButton";
/** ---------- End Pages ---------- */

/** Begin SCSS Style */
import "./assets/styles/index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
    return (
        <Provider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to={"/dashboard"} />} />
                    <Route path="/" element={<SubApp />}>
                        <Route path="/dashboard" element={<Home />} />
                        <Route path="/dftl" element={<DFTL />} />
                    </Route>

                    {/* Not Found */}
                    <Route path="*" element={<Notfound />} />
                </Routes>
                <JoinButton />
            </Router>
        </Provider>
    );
}

const SubApp = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
