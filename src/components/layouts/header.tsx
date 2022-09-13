import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillGridFill, BsXLg } from "react-icons/bs";

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
                                <span className="logo"></span>
                            </div>
                            <div className="col-4">
                                <a href="/#" className="sub__button">
                                    <button>Launch App</button>
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="row m0 j-center j-middle">
                            <div className="col-4">
                                <div className="row text-right j-center">
                                    <div className="col-6">
                                        <Link to="">
                                            <p>How It Work</p>
                                        </Link>
                                    </div>
                                    <div className="col-6">
                                        <Link to="">
                                            <p>DFTL</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <span className="logo"></span>
                            </div>
                            <div className="col-4 pr0">
                                <div className="row m0 j-center j-middle">
                                    <div className="col-6">
                                        <Link to="">
                                            <p>Whitepaper</p>
                                        </Link>
                                    </div>
                                    <div className="col-6 pr0">
                                        <a href="/#">
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
                    <h2>Home</h2>
                </li>
                <li>
                    <h2>How It Work</h2>
                </li>
                <li>
                    <h2>DFTL</h2>
                </li>
                <li>
                    <h2>Whitepaper</h2>
                </li>
                <li>
                    <button>Launch App</button>
                </li>
            </ul>
        </div>
    );
};
