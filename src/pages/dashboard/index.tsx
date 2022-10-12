import { GiTank } from "react-icons/gi";
import { BsFillBookmarksFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";

import HowWork from "./components/howwork";
import News from "./components/news";
import { gamemode } from "./components/mocks/gamemode";
import { howWork } from "./components/mocks/howwork";
import { news } from "./components/mocks/news";
import { partners } from "./components/mocks/partners";
import { ScrollLink, ScrollElement } from "../../components/ScrollEvent";
import TabGroup from "../../components/tabgroup";
import { useEffect } from "react";
import { FadeUp } from "../../components/animTag";

export default function Home() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="dashboard">
            {/* Begin Intro */}
            <ScrollElement to="introduce">
                <div className="intro">
                    <div className="back__effect">
                        <FadeUp>
                            <h1>DefiTankLand</h1>
                            <div>
                                <h3>
                                    Competing against players around the world
                                    with NFT tanks
                                </h3>
                            </div>
                        </FadeUp>

                        <div className="effect"></div>
                        <ScrollLink to="howitwork">
                            <button>
                                <img
                                    src={require("../../assets/images/scrollbutton.webp")}
                                    alt=""
                                />
                            </button>
                        </ScrollLink>
                    </div>
                </div>
            </ScrollElement>

            {/* Begin Metrix */}
            <ScrollElement to="metrix">
                <div className="metrix">
                    <div className="container">
                        <FadeUp>
                            <h2>Metrix</h2>
                        </FadeUp>
                        <div className="spacer-triple"></div>
                        <div className="spacer-double"></div>
                        <div className="row">
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Token Price"}
                                    content={"1010"}
                                    contentIcon={BsFillBookmarksFill}
                                    classname={"tabgroup__item__container"}
                                />
                            </div>
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Total Tanks"}
                                    content={"1010"}
                                    contentIcon={GiTank}
                                    classname={
                                        "tabgroup__item__container__reverse"
                                    }
                                />
                            </div>
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Token Players"}
                                    content={"1010"}
                                    contentIcon={FaUsers}
                                    classname={"tabgroup__item__container"}
                                />
                            </div>
                        </div>
                        <div className="spacer-triple"></div>
                        <div className="spacer-double"></div>
                    </div>
                </div>
            </ScrollElement>

            {/* Begin HowItWork */}
            <ScrollElement to="howitwork">
                <div className="howitwork">
                    <div className="container">
                        <FadeUp>
                            <h2>How It Works</h2>
                        </FadeUp>
                        <div className="spacer-double"></div>
                        <div className="row j-center j-middle">
                            {howWork.map((item: any, index: number) => (
                                <div className="col-sm-3" key={index}>
                                    <HowWork
                                        image={item.image}
                                        content={item.content}
                                        count={index}
                                    />
                                    <div className="spacer-triple"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollElement>

            {/* Begin GameMode */}
            <ScrollElement to="gamemode">
                <div className="gamemode">
                    <div className="container">
                        <div className="spacer-single"></div>
                        <FadeUp>
                            <h2>Game Mode</h2>
                        </FadeUp>
                        <div className="spacer-single"></div>
                        <div className="row j-center j-around slide_image">
                            <Carousel
                                autoPlay
                                emulateTouch
                                infiniteLoop
                                showArrows
                                showStatus={false}
                                showThumbs
                                showIndicators
                            >
                                {gamemode.map((item: any, index: number) => (
                                    <div className="how_to_item" key={index}>
                                        <img
                                            src={item.image}
                                            alt=""
                                            key={index}
                                            style={{ zIndex: 1 }}
                                        />
                                        <h2>{item.content}</h2>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <span className="light_top"></span>
                        <span className="light_bottom"></span>
                        <div className="spacer-double"></div>
                    </div>
                </div>
            </ScrollElement>

            {/* Begin News */}
            <ScrollElement to="news">
                <div className="news">
                    <div className="container">
                        <FadeUp>
                            <h2>News</h2>
                        </FadeUp>
                        <div className="spacer-double"></div>
                        <div className="row j-center j-around">
                            {news.map((item: any, index: number) => (
                                <div className="col-sm-4" key={index}>
                                    <News
                                        image={item.image}
                                        title={item.title}
                                        content={item.content}
                                    />
                                    <div className="spacer-single"></div>
                                </div>
                            ))}
                        </div>
                        <div className="spacer-double"></div>
                    </div>
                </div>
            </ScrollElement>

            {/* Begin Partner */}
            <ScrollElement to="partner">
                <div className="partner">
                    <div className="container">
                        <FadeUp>
                            <h2>Our Partners</h2>
                        </FadeUp>
                        <div className="spacer-double"></div>
                        <div className="row j-center j-around">
                            {partners.map((item: any, index: number) => (
                                <div className="col-sm-4" key={index}>
                                    <div className="partner__item">
                                        <img src={item.image} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="spacer-double"></div>
                    </div>
                </div>
            </ScrollElement>
        </div>
    );
}
