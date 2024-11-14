"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
// import SearchBarNav from "./SearchBarNav";
import emailjs from "emailjs-com";
import "./navlink.css";

const Modal = ({ children, isOpen, onClose }: any) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-50 transition-opacity">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                    {children}
                    <button onClick={onClose} className="mt-4 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function Navbargen() {
    const [navbar, setNavbar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        whatsapp: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                'service_xau1lhm',
                'template_awnd4cx',
                e.target,
                'TJ5Q4YnHgoDF4U20i'
            );
            setIsModalOpen(true); // Show modal on success
            setFormData({
                name: '',
                email: '',
                companyName: '',
                whatsapp: '',
                message: '',
            });
        } catch (error) {
            console.error('Email sending failed:', error);
            // Handle errors (optional: display an error message)
        }
    };

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
                                <Link href={{ pathname: '/productsbpage', query: { subcategory: 'controller' } }} className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Controller
                                </Link>
                                <Link href={{ pathname: '/productsbpage', query: { subcategory: 'compressor parts' } }} className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Compressor Parts
                                </Link>
                                <Link href={{ pathname: '/productsbpage', query: { subcategory: 'air/oil filter' } }} className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Air/Oil Filter
                                </Link>
                                <Link href={{ pathname: '/productsbpage', query: { subcategory: 'seperator' } }} className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Seperator
                                </Link>
                                <Link href={{ pathname: '/productsbpage', query: { subcategory: 'motor' } }} className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Motor
                                </Link>
                                <Link href={{ pathname: '/productsbpage', query: { subcategory: 'couplings' } }} className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Couplings
                                </Link>
                                <Link href={{ pathname: '/productsbpage', query: { subcategory: 'pipes hoses and flexibles' } }} className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Pipes hoses and flexibles
                                </Link>
                                <Link href={{ pathname: '/productsbpage', query: { subcategory: 'seals and o-rings' } }} className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Seals and o-rings
                                </Link>
                                <Link href={{ pathname: '/productsbpage', query: { subcategory: 'bearings and gears' } }} className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    Bearings and gears
                                </Link>
                            </div>
                        </div>
                        <Link className="font-semibold nav-link hover:text-green-500" onClick={() => setNavbar(!navbar)} href="/servicessec">SERVICES</Link>
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
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                            <p className="text-center text-green-500 font-bold">Email Sent Successfully!</p>
                    </Modal>
                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 space-y-4 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                            onClick={() => setShowModal(false)} // Close modal
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold text-gray-800">Send Us An Email</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="mt-1 w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Company Name
                                </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    className="mt-1 w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="Company's name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Whatsapp Number
                                </label>
                                <input
                                    type="text"
                                    name="whatsapp"
                                    className="mt-1 w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="Whatsapp number"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="mt-1 w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
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
            {/* <SearchBarNav /> */}
        </div>
    );
}