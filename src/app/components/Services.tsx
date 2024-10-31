"use client";

import { useState } from 'react';
import ServiceModal from '../components/ServiceModal';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const services = [
        'Installations',
        'Commissioning',
        'Repairs',
        'Troubleshooting',
        'Annual Maintenance Contracts (AMCs)',
        'Leasing / Rentals'
    ];

    const handleServiceClick = (service:any) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <div className="container mx-auto p-6 py-[8rem]">
            <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onClick={() => handleServiceClick(service)}
                        className="cursor-pointer border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center"
                    >
                        <h2 className="text-xl font-semibold">{service}</h2>
                    </div>
                ))}
            </div>
            {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
        </div>
    );
};

export default Services;
