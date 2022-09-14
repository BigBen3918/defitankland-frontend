import { BsFillBookmarksFill, BsStack } from "react-icons/bs";
import { FaUsers, FaRecycle, FaCoins } from "react-icons/fa";
import Concepts from "./components/concepts";
import { concepts } from "./components/mocks/concept";
import { ScrollElement } from "../../components/ScrollEvent";
import TabGroup from "../../components/tabgroup";

export default function DFTL() {
    return (
        <div className="dftl">
            {/* Begin Intro */}
            <ScrollElement to="dftl_intro">
                <div className="intro">
                    <div className="back__effect">
                        <div data-aos="zoom-in" data-aos-once="true">
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
                        <div className="spacer-double"></div>
                        <span data-aos="zoom-in" data-aos-once="true">
                            <h2>What is DFTL and what makes us storng</h2>
                        </span>
                        <div className="spacer-triple"></div>
                        <div
                            className="row m0 j-center"
                            data-aos="fade-down"
                            data-aos-delay="300"
                            data-aos-once="true"
                        >
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
                        <div className="spacer-triple"></div>
                    </div>
                </div>
            </ScrollElement>

            {/* Begin Ecosystem */}
            <ScrollElement to="ecosystem">
                <div className="ecosystem">
                    <div className="container">
                        <div className="spacer-double"></div>
                        <span data-aos="zoom-in" data-aos-once="true">
                            <h2>Token Ecosystem</h2>
                        </span>
                        <div className="spacer-double"></div>
                        <img
                            src={require("../../assets/images/ecosystem.webp")}
                            alt=""
                            data-aos="zoom-out-up"
                            data-aos-delay="500"
                            data-aos-once="true"
                        />
                        <div className="spacer-triple"></div>
                    </div>
                </div>
            </ScrollElement>

            <ScrollElement to="stake">
                <div className="stake">
                    <div className="container">
                        <div className="spacer-triple"></div>
                        <div
                            className="row"
                            data-aos="zoom-in-down"
                            data-aos-delay="700"
                            data-aos-once="true"
                        >
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Token Price"}
                                    content={"0.1$"}
                                    contentIcon={BsFillBookmarksFill}
                                    classname={"tabgroup__item__container"}
                                />
                            </div>
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Total Supply"}
                                    content={"10M"}
                                    contentIcon={FaRecycle}
                                    classname={
                                        "tabgroup__item__container__reverse"
                                    }
                                />
                            </div>
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Token Players"}
                                    content={"10k"}
                                    contentIcon={FaUsers}
                                    classname={"tabgroup__item__container"}
                                />
                            </div>
                        </div>
                        <div className="spacer-double"></div>
                        <div className="row m0 j-center j-middle">
                            <div
                                className="col-sm-6"
                                data-aos="fade-right"
                                data-aos-delay="700"
                                data-aos-once="true"
                            >
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
                            <div
                                className="col-sm-6"
                                data-aos="fade-left"
                                data-aos-delay="700"
                                data-aos-once="true"
                            >
                                <img
                                    className="apy__diagram"
                                    src={require("../../assets/images/apy.webp")}
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
                        <span data-aos="zoom-in" data-aos-once="true">
                            <h2>Stake Metrix</h2>
                        </span>
                        <div className="spacer-triple"></div>
                        <div
                            className="row"
                            data-aos="zoom-in-down"
                            data-aos-delay="1000"
                            data-aos-once="true"
                        >
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Token Pool Price"}
                                    content={"10M"}
                                    contentIcon={BsFillBookmarksFill}
                                    classname={"tabgroup__item__container"}
                                />
                            </div>
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Staked Pool Size"}
                                    content={"10k"}
                                    contentIcon={BsStack}
                                    classname={
                                        "tabgroup__item__container__reverse"
                                    }
                                />
                            </div>
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Staked DFTL on Pool"}
                                    content={"140k"}
                                    contentIcon={FaCoins}
                                    classname={"tabgroup__item__container"}
                                />
                            </div>
                        </div>
                        <div className="spacer-double"></div>
                    </div>
                </div>
            </ScrollElement>

            <ScrollElement to="available">
                <div className="available">
                    <div className="container">
                        <span data-aos="zoom-in" data-aos-once="true">
                            <h2>DFTL Available on</h2>
                        </span>
                        <div className="links">
                            <button>
                                <img
                                    src={require("../../assets/images/app_google.webp")}
                                    alt=""
                                />
                            </button>
                            <button>
                                <img
                                    src={require("../../assets/images/app_apple.webp")}
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
