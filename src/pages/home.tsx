import RoadmapTab from "../components/gamemode";
import HowWork from "../components/howwork";
import roadmapData from "../components/mocks/roadmpa.json";
import { howWork } from "../components/mocks/howwork";
import { ScrollLink, ScrollElement } from "../components/ScrollEvent";

export default function Home() {
    return (
        <div className="dashboard">
            {/* Begin Intro */}
            <ScrollElement to="introduce">
                <div className="intro">
                    <div className="back__effect">
                        <div>
                            <h1>DefiTankLand</h1>
                            <div>
                                <h3>
                                    Competing against players around the world
                                    with NFT tanks
                                </h3>
                            </div>
                        </div>

                        <span></span>
                        <ScrollLink to="metrix">
                            <button>
                                <img
                                    src={require("../assets/images/scrollbutton.png")}
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
                        <span>
                            <h2>Metrix</h2>
                        </span>
                        <div className="spacer-double"></div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="item__container">
                                    <div>
                                        <span>
                                            <p>Token Price</p>
                                            <h3>1010</h3>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="item__container__reverse">
                                    <div>
                                        <span>
                                            <p>Total Tanks</p>
                                            <h3>1010</h3>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="item__container">
                                    <div>
                                        <span>
                                            <p>Token Players</p>
                                            <h3>1010</h3>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="spacer-single"></div>
                    </div>

                    <img src={require("../assets/images/icon2.png")} alt="" />
                </div>
            </ScrollElement>

            {/* Begin HowItWork */}
            <ScrollElement to="howitwork">
                <div className="howitwork">
                    <div className="container">
                        <span>
                            <h2>How It Works</h2>
                        </span>
                        <div className="spacer-double"></div>
                        <div className="row j-center j-middle">
                            {howWork.map((item, index) => (
                                <div className="col-sm-3" key={index}>
                                    <HowWork
                                        image={item.image}
                                        content={item.content}
                                        count={index}
                                    />
                                    <div className="spacer-double"></div>
                                    <div className="spacer-single"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <img src={require("../assets/images/icon1.png")} alt="" />
                </div>
            </ScrollElement>

            {/* Begin GameMode */}
            <ScrollElement to="gamemode">
                <div className="gamemode">
                    {/* <div className="container">
                        <span>
                            <h2>Game Mode</h2>
                        </span>

                        {roadmapData.map((item: any, index: number) => (
                            <RoadmapTab
                                title={item.title}
                                content={item.content}
                                index={index + 1}
                                key={index}
                            />
                        ))}
                    </div> */}
                </div>
            </ScrollElement>

            {/* Begin How Work */}
            <ScrollElement to="news">
                <div className="news">
                    {/* <div className="container">
                        <span>
                            <h2>News</h2>
                        </span>
                    </div> */}
                </div>
            </ScrollElement>
        </div>
    );
}
