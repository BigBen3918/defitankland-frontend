import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import Provider, { useGlobalContext } from "./context";

/** ---------- Begin Pages ---------- */
// main pages
import Home from "./pages/home";
import Profile from "./pages/profile";
import Notfound from "./pages/notfound";

// Layouts
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
/** ---------- End Pages ---------- */

/** Begin SCSS Style */
import "./assets/styles/index.scss";
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
                <Header />
                <Routes>
                    {/* Non Auth Routes */}
                    <Route path="/" element={<Navigate to={"/dashboard"} />} />
                    <Route path="/dashboard" element={<Home />} />

                    {/* Auth Routes */}
                    <Route
                        path="/allnft"
                        element={<PrivateRoute component={Profile} />}
                    />

                    {/* Other Routes */}
                    <Route path="*" element={<Notfound />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
}
