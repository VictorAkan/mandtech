'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig'; // Ensure you import your Firestore config
import Navbargen from '../components/Navbargen';
import { Loader } from '../components/Loader';
import Link from 'next/link';

function ProductContent() {
    const searchParams = useSearchParams();
    const subcategory = searchParams.get('subcategory');

    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true); // To handle loading state

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const productRef = collection(db, 'products');
                const q = subcategory ? query(productRef, where('category', '==', subcategory)) : productRef;
                const querySnapshot = await getDocs(q);

                const productsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [subcategory]);

    return (
        <div className="p-10">
            <h1 className="text-2xl capitalize font-bold mb-4">
                {subcategory ? `Products: ${subcategory}` : 'All Products'}
            </h1>

            {loading ? (
                <Loader />
            ) : products.length === 0 ? (
                <div className="flex items-center justify-center h-[50vh] p-10 text-center bg-gray-100 dark:bg-gray-950 rounded-lg">
                    <p className="text-xl font-semibold text-gray-700">
                        No products for this category yet.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="p-4 border rounded shadow-md">
                            <img src={product.imageUrl} alt={product.productName} className="w-full h-48 object-cover mb-4" />
                            <h2 className="text-lg font-semibold">{product.productName}</h2>
                            <p className="text-gray-700">{product.description}</p>
                            <Link href={`/productDetails?id=${product.id}`} className="mt-2 text-green-500 hover:underline">Read more</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function ProductSBPage() {
    return (
        <>
            <header>
                <Navbargen />
            </header>
            <div className="lg:mt-[7rem] md:mt-[13rem] mt-[5rem]"></div>
            <Suspense fallback={<Loader />}>
                <ProductContent />
            </Suspense>
        </>
    );
}