"use client";
import React, {useState} from 'react';
import { useSearchParams } from 'next/navigation';
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

const CTAForm = () => {
    const searchParams = useSearchParams();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Retrieve product details from query parameters
    const product = {
        imageUrl: searchParams.get('imageUrl'),
        productName: searchParams.get('productName') || '',
        category: searchParams.get('category'),
        tag: searchParams.get('tag'),
        pnID: searchParams.get('pnID') || '',
        origin: searchParams.get('origin'),
    };

    const [formData, setFormData] = useState({
        productName: product.productName,
        name: '',
        companyName: '',
        whatsapp: '',
        email: '',
        location: '',
        message: '',
        partNumber: product.pnID,
    });

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        
        try {
            await emailjs.sendForm(
                'service_k1ma9b4',
                'template_lyzs9qu',
                event.target,
                'rRLScIWFZDZ9S71S1'
            );
            setIsModalOpen(true); // Show modal on success
            setFormData({
                productName: product.productName,
                name: '',
                companyName: '',
                whatsapp: '',
                email: '',
                location: '',
                message: '',
                partNumber: '',
            });
        } catch (error) {
            console.error('Email sending failed:', error);
            // Handle errors (optional: display an error message)
        }
    };

    return (
        <div className="p-6 md:p-8 my-10 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg max-w-lg mx-auto">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p className="text-center text-green-500 font-bold">Email Sent Successfully!</p>
            </Modal>
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Submit Order Request</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="hidden"
                        name="partNumber"
                        value={product.pnID}
                    />
                {/* Product Image */}
                {product.imageUrl && (
                    <div className="text-center">
                        <img src={product.imageUrl} alt={product.productName} className="w-32 h-32 object-cover mx-auto rounded-lg shadow" />
                    </div>
                )}
                
                {/* Product Name */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Product Name:</label>
                    <input
                        type="text"
                        name="productName"
                        value={product.productName}
                        readOnly
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* User Name */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Your Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Company Name:</label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your Company's name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* User Email */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Your Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* WhatsApp Number */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">WhatsApp Number:</label>
                    <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        placeholder="Enter your WhatsApp number"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="Enter your location"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Message:</label>
                    <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows={4}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default CTAForm;
