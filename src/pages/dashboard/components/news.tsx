export default function News(props: any) {
    const { image, title, content } = props;

    return (
        <div className="news__item">
            <img src={image} alt="" />
            <h4>{title}</h4>
            <p>{content}</p>

            <a href="/#">Read more...</a>
        </div>
    );
}
