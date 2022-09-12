import RoadmapTab from "../components/roadmap";
import HowWork from "../components/howwork";
import roadmapData from "../components/mocks/roadmpa.json";
import { howWork } from "../components/mocks/howwork";

// images
import introVideo from "../assets/video/intro.webm";
import item1 from "../assets/images/item1.png";
import item2 from "../assets/images/item2.png";
import item3 from "../assets/images/item3.png";
import diagram from "../assets/images/diagram.png";

export default function Home() {
    return (
        <div className="dashboard">
            {/* Begin Intro Video */}
            <div className="intro">
                <div className="back__effect">
                    <video autoPlay loop muted>
                        <source src={introVideo} type="video/webm" />
                    </video>
                    <div></div>
                </div>

                <div className="title">
                    <h1>DefiTankLand</h1>
                    <h3>
                        Competing against players around the world with NFT
                        tanks
                    </h3>
                </div>
            </div>

            {/* Begin Tokenomics */}
            <div className="tokenomic">
                <div className="container">
                    <div className="spacer-double"></div>
                    <div className="spacer-double"></div>
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <h2>DefiTankLand Tokenomics</h2>
                            <h4 className="text-white">
                                $DFL is the governance token of Tank Battle. The
                                total supply of $TBL is 1,000,000,000.
                            </h4>
                        </div>
                        <div className="col-sm-12 col-md-8">
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
                        </div>
                    </div>
                    <div className="spacer-single"></div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="tab">
                                <div className="row j-middle p2">
                                    <div className="col-md-3">
                                        <h3>Hunters</h3>
                                    </div>
                                    <div className="col-md-9">
                                        <p>
                                            Tank Battle's smart contracts
                                            successfully audited by verichains
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="tab">
                                <div className="row j-middle p2">
                                    <div className="col-md-3">
                                        <h3>$DFL</h3>
                                    </div>
                                    <div className="col-md-9">
                                        <p>
                                            $DFL is the government token used
                                            for trading NFTs and other
                                            activities in the Tank Battle
                                            ecosystem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="spacer-double"></div>
                    <div className="spacer-double"></div>
                </div>
            </div>

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