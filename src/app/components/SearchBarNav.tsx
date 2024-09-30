"use client";
import { useState, useEffect } from "react";

const SearchBarNav = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Adjust this value as needed
                setShowSearchBar(true);
            } else {
                setShowSearchBar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {showSearchBar && (
                <div className="fixed top-24 right-0 flex justify-center z-10">
                    <div className="flex items-center bg-white dark:bg-[#050505] shadow-md rounded-full px-4 py-2 w-full max-w-md md:max-w-lg lg:max-w-2xl">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full px-4 py-2 rounded-l-full focus:outline-none dark:bg-[#050505] bg-white dark:text-white text-gray-800"
                        />
                        <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700">
                            Search
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchBarNav;
