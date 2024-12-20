"use client";

import Image from 'next/image';
import { useState } from 'react';
import emailjs from 'emailjs-com';

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

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        whatsapp: '',
        message: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    return (
        <div className="relative w-full h-full bg-gray-800">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p className="text-center text-green-500 font-bold">Email Sent Successfully!</p>
            </Modal>
            {/* Background Image with Gradient */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/image/contactbg.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-8 flex flex-col items-center justify-center h-full px-4 py-12 text-center">
                {/* Title */}
                <h1 className="text-4xl font-bold text-white">CONTACT US</h1>
                {/* Dotted line below title */}
                <div className="w-16 h-1 mt-2 border-b-2 border-dotted border-white"></div>
                {/* Subtitle */}
                <p className="mt-4 text-lg text-gray-300">
                    Need an expert? You are more than welcomed to leave your contact info, and we will be in touch shortly.
                </p>

                {/* Contact Form */}
                <form className="w-full max-w-lg p-8 mt-8 bg-white bg-opacity-80 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-left text-gray-700" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 text-gray-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                            className="w-full px-3 py-2 text-gray-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                            className="w-full px-3 py-2 text-gray-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                            className="w-full px-3 py-2 text-gray-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                            className="w-full px-3 py-2 text-gray-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows={4}
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
