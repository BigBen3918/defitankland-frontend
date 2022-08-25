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
/** ---------- End Pages ---------- */

/** Begin CSS Style */
import "./assets/styles/index.scss";
/** End CSS Style */

interface Props {
    component: React.ComponentType;
    path?: string;
}

const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const location = useLocation();
    const [state, { dispatch }]: any = useGlobalContext();

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
                    {/* Auth Routes */}
                    <Route path="/" element={<Navigate to={"/dashboard"} />} />
                    <Route path="/dashboard" element={<Home />} />

                    {/* Private Routes */}
                    <Route
                        path="/allnft"
                        element={<PrivateRoute component={Profile} />}
                    />

                    {/* Other Routes */}
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </Router>
        </Provider>
    );
}
