import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";

export default function Footer() {
    return (
        <div className="footer">
            <span className="logo"></span>
            <img src={icon1} alt="" className="icon__1" />
            <img src={icon2} alt="" className="icon__2" />
            <div className="container">
                <div className="spacer-double"></div>
                <div className="spacer-single"></div>
                <div className="row m0 text-center">
                    <div className="col-sm-6 col-lg-2">
                        <a href="/#">
                            <h5>Tokenomics</h5>
                        </a>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <a href="/#">
                            <h5>Marketplace</h5>
                        </a>
                    </div>
                    <div className="col-sm-0 col-lg-4"></div>
                    <div className="col-sm-6 col-lg-2">
                        <a href="/#">
                            <h5>Roadmap</h5>
                        </a>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <a href="/#">
                            <h5>Contact Us</h5>
                        </a>
                    </div>
                </div>
                <p className="text-center">
                    &copy; Copyright {new Date().getFullYear() - 1} -{" "}
                    {new Date().getFullYear()}{" "}
                    <a href="/#">
                        <b>Tank Battle</b>
                    </a>
                    . All Rights Reserved. Terms | Privacy Policy
                </p>
            </div>
        </div>
    );
}
