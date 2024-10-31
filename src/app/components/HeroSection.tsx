"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/assets/image/bg1.jpg',
        '/assets/image/bg2.jpg',
        '/assets/image/bg3.jpg',
        '/assets/image/bg4.jpg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative h-screen">
            {/* Image Container */}
            <div className="absolute inset-0">
                <Image
                    src={images[currentImageIndex]}
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-1000"
                    priority={true} // Ensures the image is loaded quickly
                />
                {/* Opacity Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-8"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-8 flex flex-col mt-24 justify-center items-center h-full text-center px-4">
            <h1 className="text-white font-bold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    {/* AIR COMPRESSOR HOME */}
                    <span className='text-green-500'>MANDTECH SERVICES</span> 
                    <br />
                    <span className="font-thin text-[2rem]">YOUR TRUSTED PARTNER IN AIR COMPRESSOR SOLUTIONS</span>
                </h1>
                <p className="text-white mb-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    {/* The most professional accessories matching solution, the most competitive price, the most reliable trading partner. */}
                    {/* <br /> */}
                    {/* We provide top notch services for Atlas Copco/Ingersoll Rand/Sullair  */}
                </p>
                <Link href="/product" className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
                    VIEW ALL PRODUCTS
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
