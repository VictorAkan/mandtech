"use client";
import { useEffect, useState } from 'react';

const RequestForm = () => {
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [searchedPartNumber, setSearchedPartNumber] = useState("");

    useEffect(() => {
        // Retrieve part number from local storage
        const partNumber = localStorage.getItem('searchedPartNumber');
        if (partNumber) {
            setSearchedPartNumber(partNumber);
        }
    }, []);

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        
        // Handle form submission logic here (e.g., send data to Firestore or an API)
        
        alert('Request submitted!'); // Temporary alert for demonstration
    };

    return (
        <div className="max-w-md mx-auto p-4 py-32">
            <h2 className="text-lg font-bold mb-4">Request Part Number: {searchedPartNumber}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label>WhatsApp Number:</label>
                    <input type="text" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} required className="border bg-gray-800 rounded p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border rounded bg-gray-800 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label>Phone Number:</label>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className="border rounded bg-gray-800 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border rounded bg-gray-800 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label>Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required className="border rounded bg-gray-800 p-2 w-full"></textarea>
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Submit Request</button>
            </form>
        </div>
    );
};

export default RequestForm;