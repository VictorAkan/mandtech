// pages/productDetails.js
"use client";

import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Navbargen from '../components/Navbargen';

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');

            if (!id) return;

            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProduct(docSnap.data());
            } else {
                console.error("No such document!");
            }
            setLoading(false);
        };

        fetchProduct();
    }, []);

    if (loading) return <p className="text-center text-lg mt-20">Loading...</p>;

    return (
        <>
            <header>
                <Navbargen />
            </header>
            <div className="lg:mt-[7rem] md:mt-[15rem] mt-[7rem]"></div>
            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-4 md:p-8">
                <div
                    className="w-full md:w-3/4 h-64 bg-cover bg-center rounded-lg shadow-lg relative"
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                    <h1 className="md:text-4xl text-2xl font-bold text-white drop-shadow-xl text-center pt-20 relative z-8">
                        {product.productName}
                    </h1>
                </div>
                <div className="bg-white dark:bg-black shadow-md rounded-lg p-6 mt-4 w-full md:w-3/4 transition duration-300 transform hover:scale-105">
                    <Zoom>
                        <img
                            src={product.imageUrl}
                            alt={product.productName}
                            className="w-full h-auto cursor-pointer rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                        />
                    </Zoom>
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Product Details</h2>
                        <div className="mt-4 text-gray-600">
                            <p className="py-2 dark:text-gray-300"><strong className="text-gray-700 dark:text-gray-100">Category:</strong> {product.category}</p>
                            <p className="py-2 dark:text-gray-300"><strong className="text-gray-700 dark:text-gray-100">Product Name:</strong> {product.productName}</p>
                            <p className="py-2 dark:text-gray-300"><strong className="text-gray-700 dark:text-gray-100">Tag:</strong> {product.tag}</p>
                            <p className="py-2 dark:text-gray-300"><strong className="text-gray-700 dark:text-gray-100">PN:</strong> {product.pnID}</p>
                            <p className="py-2 dark:text-gray-300"><strong className="text-gray-700 dark:text-gray-100">Origin:</strong> {product.origin}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
