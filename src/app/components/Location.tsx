"use client";

import { useState } from 'react';
import Image from 'next/image';

const Location = () => {
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="relative w-full h-screen bg-gray-800">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/image/loco.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-8 flex flex-col items-center justify-center h-full px-4 py-12 text-center space-y-6">
                <h1 className="text-4xl font-bold text-white">Contact Us</h1>
                <p className="text-lg text-white">Company address and contact email</p>
                <p className="text-lg text-white">49 Old Refinery Road, Elelenwo, Portharcourt, Rivers State, Nigeria</p>
                <p className="text-lg text-white">Email: info@mandtech.com.ng</p>

                {/* Send Message Button */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-2 mt-4 text-lg text-white bg-green-600 rounded-lg hover:bg-green-700"
                >
                    Send us a message
                </button>

                {/* Modal for Form */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={() => setIsModalOpen(false)}
                            >
                                &times;
                            </button>
                            <h2 className="mb-4 text-xl text-gray-900 font-bold text-center">Ask For A Quick Quote</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-2 text-left text-gray-700" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-left text-gray-700" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-left text-gray-700" htmlFor="companyName">Company Name</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your company name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-left text-gray-700" htmlFor="whatsapp">WhatsApp Number</label>
                                    <input
                                        type="text"
                                        id="whatsapp"
                                        name="whatsapp"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your WhatsApp number"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-left text-gray-700" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        rows={4}
                                        placeholder="Your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Google Map Embed */}
                <div className="mt-8 w-full h-64 sm:h-96">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.1234567890!2d7.000123!3d4.814321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12345abc123456789%3A0x1234567890abcdef!2s49+Old+Refinery+Rd%2C+Elelenwo%2C+Port+Harcourt%2C+Rivers%2C+Nigeria!5e0!3m2!1sen!2sng!4v1234567890123"
                        allowFullScreen={true}
                        loading="lazy"
                        title="Company Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Location;
