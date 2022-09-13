import { useState } from "react";

export default function RoadmapTab(props: any) {
    const { title, content, index } = props;
    const [tabFlag, setTabFlag] = useState(false);

    return (
        <div className="tab no-select" onClick={() => setTabFlag(!tabFlag)}>
            <span>
                <b>{index}</b>
            </span>
            <h3>{title}</h3>
            {content.map((item: any, index: number) => (
                <h5 key={index} className={tabFlag ? "text-white" : "hide"}>
                    {item}
                </h5>
            ))}
        </div>
    );
}
