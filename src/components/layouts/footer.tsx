import { BsTwitter, BsFacebook, BsMedium, BsYoutube } from "react-icons/bs";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row m0 j-center j-middle text-center">
                        <div className="col-12 col-md-5">
                            <a href="https://twitter.com/">
                                <BsTwitter />
                            </a>
                            <a href="https://facebook.com/">
                                <BsFacebook />
                            </a>
                            <a href="https://medium.com/">
                                <BsMedium />
                            </a>
                            <a href="https://youtube.com/">
                                <BsYoutube />
                            </a>
                        </div>
                        <div className="col-md-2">
                            <span className="logo"></span>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="search__box">
                                <input
                                    type={"email"}
                                    placeholder="Enter Email ID"
                                />
                                <button>Subscription</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="spacer-half"></div>
            <p className="text-center">
                Copyright &copy;{new Date().getFullYear()} <b>defitankland</b>.
                All Rights Reserved. Terms | Privacy Policy
            </p>
            <div className="spacer-half"></div>
        </>
    );
}
