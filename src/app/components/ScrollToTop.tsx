"use client";

import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa"; // Importing an up arrow icon from react-icons (or you can use another library)

export default function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    // Toggle button visibility based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-500 transition duration-300"
                >
                    <FaAngleUp className="text-2xl" />
                </button>
            )}
        </div>
    );
}
