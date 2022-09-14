import { Link } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

export default function Notfound() {
    return (
        <div className="notfound">
            <div className="back__effect">
                <div className="container">
                    <div className="content">
                        <h1>404</h1>
                        <h2>
                            Oops, the page you're looking for does not exist.
                        </h2>
                        <p>
                            You may want to head back to the homepage. If you
                            think something is broken, report a problem.
                        </p>
                        <div className="spacer-double"></div>

                        <Link to="/dashboard">
                            <span>
                                <BsArrowLeftCircleFill />
                                Go To Home
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
