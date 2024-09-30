"use client";

import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

export default function HotProductsCarousel() {
    const products = [
        { id: 1, name: 'Atlas Copco 2205439800 PRESSURE GAUGE By Air Compressors Parts China Genuine Supplier', imgSrc: '/assets/image/prodimage1.png', link: '/product1' },
        { id: 2, name: 'Atlas Copco 1900100349 CONTROL MODULE By Air Compressors Parts China Genuine Supplier', imgSrc: '/assets/image/prodimage2.png', link: '/product2' },
        { id: 3, name: 'Atlas Copco 1604424780 DECAL ASSEMBLY By Air Compressors Parts China Genuine Supplier', imgSrc: '/assets/image/prodimage1.png', link: '/product3' },
        { id: 4, name: 'Atlas Copco 2906080000: ZR160-315VSD 8000H MAINT-KIT By Air Compressors Parts China Genuine Supplier', imgSrc: '/assets/image/prodimage4.png', link: '/product4' },
        { id: 5, name: 'Ingersoll Rand 47569242001 Pressure Sensor By Air Compressors Parts China Genuine Supplier', imgSrc: '/assets/image/prodimage5.png', link: '/product5' },
        { id: 6, name: 'Atlas Copco 1530240017 CONTROL PANEL By Air Compressors Parts China Genuine Supplier', imgSrc: '/assets/image/prodimage6.png', link: '/product6' },
        { id: 7, name: 'Sullair 88290005-518 Parts By Air Compressors Parts China Genuine Supplier', imgSrc: '/assets/image/prodimage7.png', link: '/product7' },
        { id: 8, name: 'Atlas Copco 1621149100 COOLER By Air Compressors Parts China Genuine Supplier', imgSrc: '/assets/image/prodimage8.png', link: '/product8' },
    ];

    const settings = {
        dots: true,                 // Show navigation dots
        infinite: true,             // Infinite scroll
        speed: 500,                 // Transition speed
        slidesToShow: 4,            // Number of items to show in large screens
        slidesToScroll: 1,          // Scroll one item at a time
        autoplay: true,             // Auto-scrolls
        autoplaySpeed: 3000,        // 3 seconds interval for autoplay
        responsive: [               // Make the carousel responsive
            {
                breakpoint: 1024,   // For tablets and below
                settings: {
                    slidesToShow: 3, // Show 3 products on medium screens
                }
            },
            {
                breakpoint: 768,    // For mobile screens
                settings: {
                    slidesToShow: 2, // Show 2 products on smaller screens
                }
            },
            {
                breakpoint: 480,    // For very small screens
                settings: {
                    slidesToShow: 1, // Show 1 product on very small screens
                }
            }
        ],
    };

    return (
        <div className="container mx-auto py-12 overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8">Hot Products</h2>
            <Slider {...settings}>
                {products.map(product => (
                    <Link href={product.link} key={product.id} className="p-4">
                        <div className="dark:bg-[#1f1f1f] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
                            {/* Image container with fixed height */}
                            <div className="relative h-64 w-full">
                                <Image 
                                    src={product.imgSrc} 
                                    alt={product.name} 
                                    layout="fill" // Ensure it fills the container
                                    objectFit="cover" // Maintain aspect ratio while filling
                                    className="w-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            {/* Text content container with flexible height */}
                            <div className="p-4 flex-grow text-center">
                                <h3 className="text-md font-semibold text-gray-700 dark:text-gray-400">{product.name}</h3>
                                <Link href={product.link}>
                                    <p className="inline-block mt-4 border border-b-2 dark:border-0 dark:bg-[#444444] text-[#050505] dark:text-gray-400 px-4 py-2 rounded dark:hover:bg-[#303030] hover:bg-gray-200 transition">
                                        Read more
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
            <style jsx global>{`
                /* Light mode dots */
                .slick-dots li button:before {
                    color: #898989; /* Default light mode color */
                    font-size: 12px;
                }
                .slick-dots li.slick-active button:before {
                    color: green; /* Active dot light mode color */
                }

                /* Dark mode dots */
                .dark .slick-dots li button:before {
                    color: #050505; /* Dark mode dot color */
                }
                .dark .slick-dots li.slick-active button:before {
                    color: #white; /* Active dot dark mode color */
                }
            `}</style>
        </div>
    );
}
