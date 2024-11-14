"use client";
import { useEffect, useState } from 'react';
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

const RequestForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [PartNumber, setSearchedPartNumber] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        whatsapp: '',
        email: '',
        message: '',
        partNumber: PartNumber,
    });

    useEffect(() => {
        // Retrieve part number from local storage
        const partNumber = localStorage.getItem('searchedPartNumber');
        if (partNumber) {
            setSearchedPartNumber(partNumber);
        }
    }, []);

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const updatedFormData = {
            ...formData,
            partNumber: PartNumber,
        };

        try {
            await emailjs.sendForm(
                'service_k1ma9b4',
                'template_7a2mvzd',
                e.target,
                'rRLScIWFZDZ9S71S1'
            );
            setIsModalOpen(true); // Show modal on success
            setFormData({
                name: '',
                email: '',
                companyName: '',
                whatsapp: '',
                message: '',
                partNumber: '',
            });
        } catch (error) {
            console.error('Email sending failed:', error);
            // Handle errors (optional: display an error message)
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 py-32">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p className="text-center text-green-500 font-bold">Email Sent Successfully!</p>
            </Modal>
            <h2 className="text-lg font-bold mb-4">Request Part Number: {PartNumber}</h2>
            <form onSubmit={handleSubmit}>
            <input
                        type="hidden"
                        name="partNumber"
                        value={PartNumber}
                    />
                <div className="mb-4">
                    <label>WhatsApp Number:</label>
                    <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required className="border dark:bg-gray-800 rounded p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name}  onChange={handleChange} required className="border rounded dark:bg-gray-800 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label>Company Name:</label>
                    <input type="text" name="companyName" value={formData.companyName}  onChange={handleChange} required className="border rounded dark:bg-gray-800 p-2 w-full" />
                </div>
                {/* <div className="mb-4">
                    <label>Phone Number:</label>
                    <input type="text" value={formData.ph} = onChange={handleChange}alue)} required className="border rounded bg-gray-800 p-2 w-full" />
                </div> */}
                <div className="mb-4">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="border rounded dark:bg-gray-800 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label>Message:</label>
                    <textarea value={formData.message} name="message" onChange={handleChange} required className="border rounded dark:bg-gray-800 p-2 w-full"></textarea>
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Submit Request</button>
            </form>
        </div>
    );
};

export default RequestForm;