export default function HowWork(props: any) {
    const { image, content, count } = props;

    return (
        <div
            className={
                count % 2 === 0
                    ? `how even count${count}`
                    : `how odd count${count}`
            }
        >
            <img src={image} alt="" />

            <h5>{content}</h5>
        </div>
    );
}
