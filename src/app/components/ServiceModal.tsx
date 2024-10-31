"use client";

import { useState } from 'react';

const ServiceModal = ({ service, onClose }: any) => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        whatsappNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data:', formData);
        onClose();  // Close the modal on submission
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white w-full max-w-md mx-4 p-6 rounded-lg shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 text-2xl font-bold hover:text-gray-700"
                >
                    &times;
                </button>
                <h2 className="text-2xl text-gray-900 font-bold mb-4 text-center">{service}</h2>
                <form onSubmit={handleSubmit}>
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
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
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
                            rows="4"
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
