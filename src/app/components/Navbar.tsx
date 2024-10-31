"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchBarNav from "./SearchBarNav";
import "./navlink.css";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isDark, setIsDark] = useState(false);

    // Function to check the theme and set isDark state
    const checkTheme = () => {
        if (typeof window !== 'undefined') {
            const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDark(isDarkTheme);
        }
    };

    // Listen for theme changes using matchMedia
    useEffect(() => {
        checkTheme(); // Check theme on initial load

        // Create a media query listener for theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleThemeChange = (e: MediaQueryListEvent) => setIsDark(e.matches);

        // Add listener for changes
        mediaQuery.addEventListener('change', handleThemeChange);

        // Clean up the listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleThemeChange);
        };
    }, []);

    return (
        <div>
            <nav className="fixed top-0 dark:bg-[#050505] bg-white left-0 right-0 z-10">
                <div className="lg:flex items-center md:block flex justify-between px-4 py-4 md:px-8 md:py-6">
                    {/* LOGO */}
                    <Link href="/">
                        <Image src="/assets/image/manlog.jpg" alt="mandtech-img" width={200} height={200} />
                        {/* <div className="logo-container">
                            <div className="flex">
                            <div className="letter">M</div>
                            <div className="letter">A</div>
                            <div className="letter">N</div>
                            <div className="letter">D</div>
                            <div className="letter">T</div>
                            <div className="letter">E</div>
                            <div className="letter">C</div>
                            <div className="letter">H</div>
                            </div>
                            <div className="underline-container">
                                <div className="underline"></div>
                                <div className="underline"></div>
                                <div className="underline"></div>
                            </div>
                        </div> */}

                    </Link>

                    {/* MOBILE MENU BUTTON */}
                    <div className="md:hidden">
                        <button
                            className="p-2 rounded-md focus:outline-none"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <Image src={isDark ? "/assets/image/closewhite_one.svg" : "/assets/image/closeblack_one.svg"} width={30} height={30} alt="close menu" />
                            ) : (
                                <Image src={isDark ? "/assets/image/burgerwhite_one.svg" : "/assets/image/burgerblack_one.svg"} width={30} height={30} alt="open menu" />
                            )}
                        </button>
                    </div>

                    {/* NAV LINKS */}
                    <div className={`flex-col items-center justify-center space-y-6 absolute left-0 dark:bg-[#050505] bg-white top-24 w-full py-6 md:space-x-10 md:space-y-0 md:static md:flex-row md:flex md:w-auto ${navbar ? 'flex' : 'hidden'}`}>
                        <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/">HOME</Link>
                        {/* <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/product">ALL PRODUCTS</Link> */}
                        {/* Dropdown for "ALL PRODUCTS" */}
                        <div className="relative group">
                            <Link className="font-semibold nav-link hover:text-green-500" href="/product">PRODUCTS</Link>
                            <div className="absolute hidden group-hover:block bg-white dark:bg-[#050505] shadow-md rounded-md py-2 w-48 z-20">
                                <Link href="/product/subcategory1" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Controller
                                </Link>
                                <Link href="/product/subcategory2" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Compressor Parts
                                </Link>
                                <Link href="/product/subcategory3" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Air/Oil Filter
                                </Link>
                                <Link href="/product/subcategory3" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Seperator
                                </Link>
                                <Link href="/product/subcategory3" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Motor
                                </Link>
                                <Link href="/product/subcategory3" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Couplings
                                </Link>
                                <Link href="/product/subcategory3" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Pipes hoses and flexibles
                                </Link>
                                <Link href="/product/subcategory3" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Seals and o-rings
                                </Link>
                                <Link href="/product/subcategory3" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Bearings and gears
                                </Link>
                            </div>
                        </div>
                        {/* <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/">FILTERS</Link> */}
                        {/* <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/">AIREND</Link> */}
                        {/* <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/">SPARES</Link> */}
                        {/* <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/">LUBRICANTS</Link> */}
                        <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/services">SERVICES</Link>
                        <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/oempartners">OEM PARTNERS</Link>
                        <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/blog">BLOG</Link>
                        <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/contact">CONTACT</Link>
                        {/* <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/admin">ADMIN</Link> */}
                        <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/about">ABOUT US</Link>

                        {/* CONTACT ICONS - Visible in mobile as well */}
                        <div className="flex md:hidden space-x-2 justify-center">
                            <a href="#" onClick={() => setShowModal(true)} className="bg-blue-500 p-2 rounded-sm hover:scale-110 transition-transform duration-300">
                                <Image src="/assets/image/envelope.svg" alt="mail image" width={30} height={30} />
                            </a>
                            <a href="https://wa.me/+2348064204187" target="_blank" className="bg-green-500 px-2 py-[6px] rounded-sm hover:scale-110 transition-transform duration-300">
                                <Image src="/assets/image/whatsapp.svg" alt="whatsapp image" width={30} height={30} />
                            </a>
                        </div>
                    </div>

                    {/* CONTACT ICONS */}
                    <div className="hidden md:flex space-x-2">
                        <a href="#" onClick={() => setShowModal(true)} className="bg-blue-500 p-2 rounded-sm hover:scale-110 transition-transform duration-300">
                            <Image src="/assets/image/envelope.svg" alt="mail image" width={30} height={30} />
                        </a>
                        <a href="https://wa.me/+2348064204187" target="_blank" className="bg-green-500 px-2 py-[6px] rounded-sm hover:scale-110 transition-transform duration-300">
                            <Image src="/assets/image/whatsapp.svg" alt="whatsapp image" width={30} height={30} />
                        </a>
                    </div>
                </div>
            </nav>

            {/* Modal */}
            {showModal ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 space-y-4 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                            onClick={() => setShowModal(false)} // Close modal
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold text-gray-800">Send Us An Email</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Company Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="Company's name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Whatsapp Number
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="Whatsapp number"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    className="mt-1 w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="Type your message"
                                    rows={4}
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
            <SearchBarNav />
        </div>
    );
}