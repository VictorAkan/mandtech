import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="dark:bg-[#050505] bg-white text-[#050505] dark:text-gray-200 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo and Title */}
                <div className="flex flex-col items-center md:items-start">
                    <Image
                        src="/assets/image/manlog.jpg" // Replace with your actual logo path
                        alt="Company Logo"
                        width={100}
                        height={50}
                    />
                    <h2 className="mt-4 text-xl font-semibold">Our Company</h2>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="/" className="dark:hover:text-white hover:text-gray-700">Home</a></li>
                        <li><a href="/products" className="dark:hover:text-white hover:text-gray-700">Product</a></li>
                        <li><a href="/page" className="dark:hover:text-white hover:text-gray-700">Page</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.facebook.com/mandtechservices?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="dark:hover:text-white hover:text-gray-700">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="dark:hover:text-white hover:text-gray-700">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="dark:hover:text-white hover:text-gray-700">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">

                    {/* Copyright */}
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Our Company. All rights reserved.
                    </p>

                    {/* Payment Methods */}
                    <div className="flex items-center mt-4 md:mt-0 space-x-4">
                        <p className="text-sm">We accept:</p>
                        <SiVisa size={32} className="text-gray-400" />
                        <SiMastercard size={32} className="text-gray-400" />
                        <SiPaypal size={32} className="text-gray-400" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
