"use client";

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

const ServiceModal = ({ service, onClose }: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        whatsapp: '',
        email: '',
        message: '',
        sservice: service,
    });

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                'service_xau1lhm',
                'template_cc03r0f',
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
                sservice: service,
            });
        } catch (error) {
            console.error('Email sending failed:', error);
            // Handle errors (optional: display an error message)
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p className="text-center text-green-500 font-bold">Email Sent Successfully!</p>
            </Modal>
            <div className="relative bg-white w-full max-w-md mx-4 p-6 rounded-lg shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 text-2xl font-bold hover:text-gray-700"
                >
                    &times;
                </button>
                <h2 className="text-2xl text-gray-900 font-bold mb-4 text-center">{service}</h2>
                <form onSubmit={handleSubmit}>
                <input
                        type="hidden"
                        name="service"
                        value={formData.sservice}
                    />
                    <div className="mb-4">
                        <label className="block text-sm text-gray-900 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 font-semibold mb-2">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 font-semibold mb-2">WhatsApp Number</label>
                        <input
                            type="text"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded text-gray-800"
                            rows={4}
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ServiceModal;
