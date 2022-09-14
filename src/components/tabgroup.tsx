import { IconType } from "react-icons";

export interface TabGroupObject {
    title: string;
    content: string;
    classname: string;
    contentIcon: IconType;
}

export default function TabGroup(props: TabGroupObject) {
    const { title, content, classname } = props;

    return (
        <>
            <div className={classname}>
                <div>
                    <span>
                        <p>{title}</p>
                        <h3>{content}</h3>
                    </span>
                    <span>
                        <props.contentIcon />
                    </span>
                </div>
            </div>
            <div className="spacer-single"></div>
        </>
    );
}
