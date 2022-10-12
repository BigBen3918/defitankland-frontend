import { useEffect } from "react";
import { BsFillBookmarksFill, BsStack } from "react-icons/bs";
import { FaUsers, FaRecycle, FaCoins } from "react-icons/fa";
import Concepts from "./components/concepts";
import { concepts } from "./components/mocks/concept";
import { ScrollElement } from "../../components/ScrollEvent";
import TabGroup from "../../components/tabgroup";

export default function DFTL() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

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
                        <div className="spacer-double"></div>
                        <span>
                            <h2>What is DFTL and what makes us storng</h2>
                        </span>
                        <div className="spacer-triple"></div>
                        <div className="row j-center">
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
                        <span>
                            <h2>Token Ecosystem</h2>
                        </span>
                        <div className="spacer-double"></div>
                        <img
                            src={require("../../assets/images/ecosystem.webp")}
                            alt=""
                        />
                        <div className="spacer-triple"></div>
                    </div>
                </div>
            </ScrollElement>

            <ScrollElement to="stake">
                <div className="stake">
                    <div className="container">
                        <div className="spacer-triple"></div>
                        <div className="row">
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
                            <div className="col-sm-6">
                                <div className="staking__content">
                                    <span>
                                        <h2>Staking DFTL</h2>
                                    </span>
                                    <h4>
                                        NIL token holder can stake to tank.
                                        <br />
                                        <br /> Each tank has a staking pool, the
                                        sae of which depends an the tank level.
                                        <br />
                                        <br />
                                        The staking has over 300% apy which
                                        decreases over time and there is a 30%
                                        deposit fee..
                                    </h4>
                                    <div className="spacer-single"></div>
                                    <button>Stake</button>
                                </div>
                                <div className="spacer-single"></div>
                            </div>
                            <div className="col-sm-6">
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
                        <span>
                            <h2>Stake Metrix</h2>
                        </span>
                        <div className="spacer-triple"></div>
                        <div className="row">
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
                        <span>
                            <h2>DFTL Available on</h2>
                        </span>
                        <div className="links">
                            <span>
                                <div>
                                    <img
                                        src={
                                            require("../../assets/images/partners/pancakeswap-cake-logo.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                    <p>Pancake Swap</p>
                                </div>
                            </span>
                            <span>
                                <div>
                                    <img
                                        src={require("../../assets/images/partners/pinkmoon.png")}
                                        alt=""
                                    />
                                    <p>Pink Swap</p>
                                </div>
                            </span>
                        </div>
                        <div className="spacer-double"></div>
                        <div className="spacer-double"></div>
                    </div>
                </div>
            </ScrollElement>
        </div>
    );
}
