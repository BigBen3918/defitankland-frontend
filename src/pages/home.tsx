import RoadmapTab from "../components/roadmap";
import roadmapData from "../components/mocks/roadmpa.json";

// images
import introVideo from "../assets/video/intro.webm";
import item1 from "../assets/images/item1.png";
import item2 from "../assets/images/item2.png";
import item3 from "../assets/images/item3.png";
import tab from "../assets/images/tab.png";
import diagram from "../assets/images/diagram.png";

export default function Home() {
    return (
        <div className="dashboard">
            {/* Begin Intro Video */}
            <div className="intro">
                <div className="back_effect">
                    <video autoPlay loop muted>
                        <source src={introVideo} type="video/webm" />
                    </video>
                    <div></div>
                </div>

                <div className="title">
                    <h1>DefiTankLand</h1>
                    <h3>
                        Competing against players around the world with NFT
                        tanks.
                    </h3>
                </div>
            </div>

            {/* Begin Tokenomics */}
            <div className="tokenomic">
                <div className="container">
                    <div className="spacer-double"></div>
                    <div className="spacer-double"></div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <h2>DefiTankLand Tokenomics</h2>
                            <h4 className="text-white">
                                $DFL is the governance token of Tank Battle. The
                                total supply of $TBL is 1,000,000,000.
                            </h4>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-2">
                            <img src={item1} alt="" />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-2">
                            <img src={item2} alt="" />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-2">
                            <img src={item3} alt="" />
                        </div>
                    </div>
                    <div className="spacer-single"></div>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={tab} alt="" />
                        </div>
                        <div className="col-sm-6">
                            <img src={tab} alt="" />
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
                        <h2>RoadMap</h2>
                        {roadmapData.map((item: any, index: Number) => (
                            <RoadmapTab
                                title={item.title}
                                content={item.content}
                                index={index}
                            />
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
}
