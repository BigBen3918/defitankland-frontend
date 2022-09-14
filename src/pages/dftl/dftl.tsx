import { BsFillBookmarksFill, BsStack } from "react-icons/bs";
import { FaUsers, FaRecycle, FaCoins } from "react-icons/fa";
import Concepts from "./components/concepts";
import { concepts } from "./components/mocks/concept";
import { ScrollElement } from "../../components/ScrollEvent";

export default function DFTL() {
    return (
        <div className="dftl">
            {/* Begin Intro */}
            <ScrollElement to="dftl_intro">
                <div className="intro">
                    <div className="back__effect">
                        <div>
                            <h1>Defi Tank Land Token (DFTL)</h1>
                            <h4>
                                DFTL is a utility token in the DefiTankLand
                                ecosystem. You can enjoy a strong token
                                ecosystem and high intrinsic value.
                            </h4>
                            <button>Our Version</button>
                        </div>
                    </div>
                </div>
            </ScrollElement>

            {/* Begin Concept */}
            <ScrollElement to="dftl_concept">
                <div className="container">
                    <div className="concept">
                        <div className="spacer-single"></div>
                        <span>
                            <h2>What is DFTL and what makes us storng</h2>
                        </span>
                        <div className="spacer-double"></div>
                        <div className="spacer-double"></div>
                        <div className="row m0 j-center">
                            {concepts.map((item: any, index: number) => (
                                <div className="col-sm-4" key={index}>
                                    <Concepts
                                        title={item.title}
                                        content={item.content}
                                    />
                                    <div className="spacer-double"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollElement>

            {/* Begin Ecosystem */}
            <ScrollElement to="ecosystem">
                <div className="ecosystem">
                    <div className="container">
                        <div className="spacer-single"></div>
                        <span>
                            <h2>Token Ecosystem</h2>
                        </span>
                        <img
                            src={require("../../assets/images/ecosystem.png")}
                            alt=""
                        />
                        <div className="spacer-single"></div>
                    </div>
                </div>
            </ScrollElement>

            <ScrollElement to="stake">
                <div className="stake">
                    <div className="container">
                        <div className="spacer-double"></div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="item__container">
                                    <div>
                                        <span>
                                            <p>Token Price</p>
                                            <h3>0.1$</h3>
                                        </span>
                                        <span>
                                            <BsFillBookmarksFill />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="item__container__reverse">
                                    <div>
                                        <span>
                                            <p>Total Supply</p>
                                            <h3>10M</h3>
                                        </span>
                                        <span>
                                            <FaRecycle />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="item__container">
                                    <div>
                                        <span>
                                            <p>Token Players</p>
                                            <h3>10k</h3>
                                        </span>
                                        <span>
                                            <FaUsers />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="spacer-double"></div>
                        <div className="row m0 j-center j-middle">
                            <div className="col-sm-6">
                                <div className="staking__content">
                                    <span>
                                        <h2>Staking DFTL</h2>
                                    </span>
                                    <h5>
                                        NIL token holder can stake to tank.
                                        <br />
                                        <br /> Each tank has a staking pool, the
                                        sae of which depends an the tank level.
                                        <br />
                                        <br />
                                        The staking has over 300% apy which
                                        decreases over time and there is a 30%
                                        deposit fee..
                                    </h5>

                                    <button>Stake</button>
                                </div>
                                <div className="spacer-single"></div>
                            </div>
                            <div className="col-sm-6">
                                <img
                                    className="apy__diagram"
                                    src={require("../../assets/images/apy.png")}
                                    alt=""
                                />
                            </div>
                        </div>
                        <span className="light_top"></span>
                        <span className="light_bottom"></span>
                    </div>
                </div>
            </ScrollElement>

            <ScrollElement to="stake__metrix">
                <div className="stake__metrix">
                    <div className="container">
                        <div className="spacer-single"></div>
                        <span>
                            <h2>Stake Metrix</h2>
                        </span>
                        <div className="spacer-double"></div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="item__container">
                                    <div>
                                        <span>
                                            <h3>10M</h3>
                                            <p>Token Pool Price</p>
                                        </span>
                                        <span>
                                            <BsFillBookmarksFill />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="item__container__reverse">
                                    <div>
                                        <span>
                                            <h3>10k</h3>
                                            <p>Staked Pool Size</p>
                                        </span>
                                        <span>
                                            <BsStack />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="item__container">
                                    <div>
                                        <span>
                                            <h3>140k</h3>
                                            <p>Staked DFTL on Pool</p>
                                        </span>
                                        <span>
                                            <FaCoins />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="spacer-double"></div>
                    </div>
                </div>
            </ScrollElement>

            <ScrollElement to="available">
                <div className="available">
                    <div className="container">
                        <div className="spacer-single"></div>
                        <span>
                            <h2>DFTL Available on</h2>
                        </span>
                        <div className="links">
                            <button>
                                <img
                                    src={require("../../assets/images/app_google.png")}
                                    alt=""
                                />
                            </button>
                            <button>
                                <img
                                    src={require("../../assets/images/app_apple.png")}
                                    alt=""
                                />
                            </button>
                        </div>
                        <div className="spacer-double"></div>
                        <div className="spacer-double"></div>
                    </div>
                </div>
            </ScrollElement>
        </div>
    );
}
