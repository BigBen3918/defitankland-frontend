export default function Concepts(props: any) {
    const { title, content } = props;

    return (
        <div className="concept__item">
            <span>
                <h5>{title}</h5>
            </span>
            <div className="spacer-single"></div>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    );
}
