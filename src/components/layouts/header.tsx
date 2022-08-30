import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <span className="logo"></span>
            <div className="container">
                <div className="menu">
                    <button>menu</button>
                </div>
                <div className="row m0 text-center">
                    <div className="col-2">
                        <Link to="">
                            <h5>Tokenomics</h5>
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link to="">
                            <h5>Marketplace</h5>
                        </Link>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-2">
                        <Link to="">
                            <h5>Roadmap</h5>
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link to="">
                            <h5>Contact Us</h5>
                        </Link>
                    </div>
                </div>
                <div className="spacer-half"></div>
            </div>
        </div>
    );
}
