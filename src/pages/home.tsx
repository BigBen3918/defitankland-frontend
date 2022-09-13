import RoadmapTab from "../components/roadmap";
import HowWork from "../components/howwork";
import roadmapData from "../components/mocks/roadmpa.json";
import { howWork } from "../components/mocks/howwork";
import { ScrollLink, ScrollElement } from "../components/ScrollEvent";

// images
import btnScroll from "../assets/images/scrollbutton.png";
import item1 from "../assets/images/item1.png";
import item2 from "../assets/images/item2.png";
import item3 from "../assets/images/item3.png";
import diagram from "../assets/images/diagram.png";

export default function Home() {
    return (
        <div className="dashboard">
            {/* Begin Intro Video */}
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
                                <img src={btnScroll} alt="" />
                            </button>
                        </ScrollLink>
                    </div>
                </div>
            </ScrollElement>

            {/* Begin Tokenomics */}
            <ScrollElement to="metrix">
                <div className="metrix">
                    <div className="container">
                        <span>
                            <h2>Metrix</h2>
                        </span>
                        <div className="spacer-double"></div>
                        <div className="row m0">
                            <div className="col-sm-4">
                                <div className="item__1">
                                    <img src={item1} alt="" />
                                    <h4>1B</h4>
                                    <p>Token total suply</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="item__2">
                                    <img src={item2} alt="" />
                                    <h4>4%</h4>
                                    <p>Token initial liquid supply</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="item__3">
                                    <img src={item3} alt="" />
                                    <h4>$TBL</h4>
                                    <p>Game Token</p>
                                </div>
                            </div>
                        </div>
                        <div className="spacer-single"></div>
                    </div>
                </div>
            </ScrollElement>
            {/* Begin Allocation */}
            <div className="allocation">
                <div className="container">
                    <h2>Token Allocation</h2>
                    <img src={diagram} alt="" />
                </div>
            </div>
            {/* Begin RoadMap */}
            <div className="roadmap">
                <div className="container">
                    <span className="p3">
                        <h2>Play to Earn</h2>
                        {roadmapData.map((item: any, index: number) => (
                            <RoadmapTab
                                title={item.title}
                                content={item.content}
                                index={index + 1}
                                key={index}
                            />
                        ))}
                    </span>
                </div>
            </div>
            {/* Begin How Work */}
            <div className="how__work">
                <div className="container">
                    <h2>How It Works</h2>
                    <div className="row j-center">
                        {howWork.map((item: any, index: number) => (
                            <HowWork
                                image={item.image}
                                content={item.content}
                                color={item.color}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
                <div className="spacer-double"></div>
            </div>
        </div>
    );
}
