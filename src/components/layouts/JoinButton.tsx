import { FaDiscord } from "react-icons/fa";

export default function JoinButton() {
    return (
        <div className="join__us">
            <div>
                <div className="spacer-double"></div>
                <a href="#">
                    <FaDiscord />
                    <h5>Join our Discord</h5>
                </a>
            </div>
        </div>
    );
}
