export default function HowWork(props: any) {
    const { image, content, color } = props;

    return (
        <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="work__item">
                <div>
                    <img
                        src={image}
                        alt=""
                        style={{ border: `15px solid ${color}` }}
                    />

                    <div>
                        <h5>{content}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
