"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CompanySection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselItems = [
        {
            imageUrl: '/assets/image/comp.jpg', // Replace with actual image path
            title: 'Our Company',
            subtitle: 'Building the future, today.',
        },
        {
            imageUrl: '/assets/image/offenv.jpg', // Replace with actual image path
            title: 'Office Environment',
            subtitle: 'A place of innovation and collaboration.',
        },
        {
            imageUrl: '/assets/image/team.jpg', // Replace with actual image path
            title: 'Our Team',
            subtitle: 'Together, we achieve more.',
        },
    ];

    const handlePrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? carouselItems.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const isLastSlide = currentIndex === carouselItems.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="light:bg-gray-5 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Carousel */}
                <div className="relative">
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${index === currentIndex ? 'block' : 'hidden'
                                } relative h-96 w-full rounded-lg overflow-hidden shadow-lg`}
                        >
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                                <p className="mt-2 text-sm sm:text-base">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}

                    {/* Carousel Controls */}
                    <button
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                        onClick={handlePrev}
                    >
                        <FaChevronLeft className="text-gray-800" />
                    </button>
                    <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                        onClick={handleNext}
                    >
                        <FaChevronRight className="text-gray-800" />
                    </button>
                </div>

                {/* Company Info */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-extrabold dark:text-white text-gray-900">Our Company</h2>
                    <p className="mt-6 text-lg dark:text-gray-400 text-gray-600">
                        Our company is a leader in the industry, driven by innovation and a dedication to excellence. We believe in the power of collaboration and are committed to creating an environment where creativity and expertise can flourish. Our team is passionate about delivering top-notch solutions and continuously pushing the boundaries to exceed expectations. We pride ourselves on our core values: integrity, respect, and continuous learning. Together, we’re shaping the future, one project at a time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CompanySection;
