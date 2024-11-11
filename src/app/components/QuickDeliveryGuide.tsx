"use client";

import Image from 'next/image';
import { useState } from 'react';
import emailjs from "emailjs-com";

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

const QuickDeliveryGuide = () => {
    const [showModal, setShowModal] = useState(false);
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

    return (
        <section className="relative py-24 h-full w-full bg-gray-900">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/image/airmark.jpg" // Replace with your actual image path
                    alt="Quick Delivery Background"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
                {/* Gradient/Opacity Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Quick Delivery Guide
                </h2>
                <p className="mt-6 text-lg sm:text-xl text-white max-w-3xl">
                Thank you for choosing ACP to be your trading partner. We will provide EXW, FOB, CIF, CFR, DDU, DDP and other delivery methods. In addition, we also support shipping the goods to your designated freight forwarder.
                The goods will be shipped via express companies FEDEX, TNT, DHL, UPS, etc. Orders will be shipped according to the time specified in the order confirmation. Most orders will be processed within 7 working days after payment is received or payment is confirmed. After sending the goods, we will provide you with the logistics tracking number as soon as possible. You can use the tracking number to know the transportation trajectory of the goods in real time.
                </p>
                <button onClick={() => setShowModal(true)} className="mt-8 px-8 py-3 bg-white hover:bg-gray-300 text-[#050505] font-semibold rounded-lg shadow-lg transition-all duration-300">
                    Call To Action
                </button>
            </div>

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
                                    value={formData.message}
                                    onChange={handleChange}
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
        </section>
    );
};

export default QuickDeliveryGuide;
