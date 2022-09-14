import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [is_visible, setIs_visible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) setIs_visible(true);
            else setIs_visible(false);
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="scroll-to-top">
            {is_visible && (
                <FaArrowCircleUp
                    className="icon-position icon-style"
                    onClick={scrollToTop}
                />
            )}
        </div>
    );
}
