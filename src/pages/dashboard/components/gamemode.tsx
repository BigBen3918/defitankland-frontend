export default function GameMode(props: any) {
    const { image, content } = props;

    return (
        <div className="gamemode">
            <img src={image} alt="" />
            <span>
                <h4>{content}</h4>
            </span>
        </div>
    );
}
