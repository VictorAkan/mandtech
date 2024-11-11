"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from '../firebase/firebaseConfig';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Loader } from './Loader';

const categories = [
    { name: 'service kits', subcategories: [] },
    { name: 'filters', subcategories: ['Air/Oil Filter', 'Separator'] },
    { name: 'compressor parts', subcategories: ['controller', 'bearings and gears', 'cooling system', 'couplings', 'fan', 'motor', 'pipes hoses and flexibles', 'seals and o-rings', 'sensors and switches', 'valves', 'other compressor parts'] },
    { name: 'air end', subcategories: [] },
    { name: 'lubricants', subcategories: [] },
    { name: 'ingersoll rand', subcategories: [] },
    { name: 'sullair', subcategories: [] },
    { name: 'denair', subcategories: [] },
    { name: 'comair', subcategories: [] },
    { name: 'jmg', subcategories: [] },
    { name: 'kaeser', subcategories: [] },
];

const Products = ({ selectedCategory, setSelectedCategory }: any) => {
    const [products, setProducts] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const productsPerPage = 9;

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            const productsArray: any[] = [];
            const querySnapshot = await getDocs(collection(db, "products"));
            const storage = getStorage();

            querySnapshot.forEach(async (doc) => {
                const productData = doc.data();
                const imageRef = ref(storage, productData.imageUrl);
                const imageURL = await getDownloadURL(imageRef);

                productsArray.push({
                    id: doc.id,
                    title: productData.productName,
                    img: imageURL,
                    category: productData.category,
                });
                setLoading(false);
                setProducts([...productsArray]);
            });
        };

        fetchProducts();
    }, []);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setOpenDropdown(null);
    };

    const handleDropdownClick = (category: string) => {
        setOpenDropdown(openDropdown === category ? null : category);
    };

    const filteredProducts = products.filter(
        (product) => product.category === selectedCategory
    );
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

    if (loading) return (<Loader />);

    return (
        <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 bg-gray-100 dark:bg-gray-900 p-4">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index} className="mb-2">
                            <button
                                className={`w-full uppercase flex justify-between items-center py-3 px-2 hover:bg-green-200 dark:hover:text-black ${selectedCategory === category.name ? 'bg-green-500 text-black' : ''}`}
                                onClick={() => category.subcategories.length > 0 ? handleDropdownClick(category.name) : handleCategoryClick(category.name)}
                            >
                                {category.name}
                                {category.subcategories.length > 0 && (
                                    openDropdown === category.name ? (
                                        <FaChevronUp className="text-sm ml-2" />
                                    ) : (
                                        <FaChevronDown className="text-sm ml-2" />
                                    )
                                )}
                            </button>
                            {category.subcategories.length > 0 && openDropdown === category.name && (
                                <ul className="pl-4 mt-1 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
                                    {category.subcategories.map((sub, subIndex) => (
                                        <li key={subIndex} className="py-2 px-3 w-full hover:bg-green-300 rounded cursor-pointer">
                                            <button
                                                className={`w-full text-left capitalize hover:text-black text-sm ${selectedCategory === sub ? 'bg-green-400 text-gray-700' : 'text-gray-700 dark:text-gray-200'}`}
                                                onClick={() => handleCategoryClick(sub)}
                                            >
                                                {sub}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main content */}
            <div className="w-full md:w-3/4 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProducts.length > 0 ? (
                        currentProducts.map((product) => (
                            <div key={product.id} className="border p-4 rounded-lg">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-full h-48 object-cover mb-4 rounded-lg"
                                />
                                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                                <Link href={`/productDetails?id=${product.id}`}>
                                    <p className="bg-green-500 rounded-sm text-white p-2">Read more</p>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No products available in this category.</p>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-6">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`mx-2 px-4 py-2 ${currentPage === i + 1 ? 'bg-green-500 text-white' : 'bg-gray-200'} rounded`}
                            onClick={() => paginate(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
