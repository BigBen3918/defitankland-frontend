import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillGridFill, BsXLg } from "react-icons/bs";
import { ScrollLink } from "../ScrollEvent";

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [ShowMenu, setShowMenu] = useState(false);

    useLayoutEffect(() => {
        const handleWindowSizeChange = () => {
            setIsMobile(window.innerWidth <= 992);
        };

        handleWindowSizeChange();
        window.addEventListener("resize", handleWindowSizeChange);
    }, []);

    return (
        <>
            <div className="header">
                <div className="container">
                    {isMobile ? (
                        <div className="row m0 j-center j-middle">
                            <div className="col-4">
                                <p onClick={() => setShowMenu(true)}>
                                    <BsFillGridFill />
                                </p>
                            </div>
                            <div className="col-4">
                                <Link to="/dashboard">
                                    <span className="logo"></span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <a
                                    href={process.env.REACT_APP_LAUNCHAPPURL}
                                    className="sub__button"
                                >
                                    <button>Launch App</button>
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="row m0 j-center j-middle">
                            <div className="col-4">
                                <div className="row text-right j-center">
                                    <div className="col-6">
                                        <ScrollLink to="howitwork">
                                            <Link to="/dashboard">
                                                <p>How It Work</p>
                                            </Link>
                                        </ScrollLink>
                                    </div>
                                    <div className="col-6">
                                        <Link to="/dftl">
                                            <p>DFTL</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <Link to="/dashboard">
                                    <span className="logo"></span>
                                </Link>
                            </div>
                            <div className="col-4 pr0">
                                <div className="row m0 j-center j-middle">
                                    <div className="col-6">
                                        <a href="/#">
                                            <p>Whitepaper</p>
                                        </a>
                                    </div>
                                    <div className="col-6 pr0">
                                        <a
                                            href={
                                                process.env
                                                    .REACT_APP_LAUNCHAPPURL
                                            }
                                        >
                                            <button>Launch App</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {isMobile ? (
                <MenuItem ShowMenu={ShowMenu} setShowMenu={setShowMenu} />
            ) : null}
        </>
    );
}

const MenuItem = (props: any) => {
    const { ShowMenu, setShowMenu } = props;

    return (
        <div className={ShowMenu ? "menu__items" : "hidden"}>
            <ul>
                <li>
                    <button onClick={() => setShowMenu(false)}>
                        <BsXLg />
                    </button>
                </li>
                <li>
                    <ScrollLink to="howitwork">
                        <Link to={"/dashboard"}>
                            <h2 onClick={() => setShowMenu(false)}>
                                How It Work
                            </h2>
                        </Link>
                    </ScrollLink>
                </li>
                <li>
                    <Link to="/dftl">
                        <h2 onClick={() => setShowMenu(false)}>DFTL</h2>
                    </Link>
                </li>
                <li>
                    <a href="/#">
                        <h2>Whitepaper</h2>
                    </a>
                </li>
                <li>
                    <a href={process.env.REACT_APP_LAUNCHAPPURL}>
                        <button>Launch App</button>
                    </a>
                </li>
            </ul>
        </div>
    );
};
