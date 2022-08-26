import { useState } from "react";

export default function RoadmapTab(props) {
    const { title, content, index } = props;

    return (
        <div className="tab">
            <span>
                <b>{index}</b>
            </span>
            <h3>{title}</h3>
            <h5>
                {content.map((item) => (
                    <p>{item}</p>
                ))}
            </h5>
        </div>
    );
}
