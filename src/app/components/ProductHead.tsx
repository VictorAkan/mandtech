"use client";

import Link from 'next/link';

const ProductHead = ({ category }:any) => {
    return (
        <div className="relative bg-cover bg-center h-96 md:h-[30rem]" style={{ backgroundImage: "url('/assets/image/prodimg.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-9 flex flex-col justify-center items-center h-full text-center text-white px-4">
                <nav className="mb-4 md:mt-32 mt-40">
                    <Link href="/" className="text-green-300">
                        Home
                    </Link>
                    <span className='capitalize'> / {category}</span> 
                </nav>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-bold">ALL PRODUCTS</h1>
            </div>
        </div>
    );
};

export default ProductHead;

