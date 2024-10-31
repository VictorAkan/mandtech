import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const OEMPartnersSection = ({ partners }:any) => {
    return (
        <div className="container mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Our OEM Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {partners.map((partner:any, index:number) => (
                    <a key={index} href={partner.url} target="_blank">
                        <a target="_blank" rel="noopener noreferrer" className="block transform transition duration-200 hover:scale-110">
                            <div className="relative group">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={150}
                                    height={150}
                                    className="object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110 animate-pulse"
                                />
                            </div>
                        </a>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default OEMPartnersSection;
