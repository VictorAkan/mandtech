"use client";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'; // Adjust the import path as necessary
import Modal from "./SearchModal"; // Create a Modal component for displaying search results
import Link from "next/link";

const SearchBarNav = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [searchedPartNumber, setSearchedPartNumber] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowSearchBar(true);
            } else {
                setShowSearchBar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleInputChange = (e:any) => {
        const value = e.target.value;
        setSearchInput(value);
        
        if (value.length > 0) {
            fetchProducts(value);
        } else {
            setSearchResults([]);
            setErrorMessage("");
            setModalOpen(false);
        }
    };

    const fetchProducts = async (input:any) => {
        try {
            const productRef = collection(db, "products");
            const productSnapshot = await getDocs(productRef);
            
            let results:any[] = [];
            
            // Filter products based on input
            productSnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.productName.toLowerCase().includes(input.toLowerCase()) || 
                    data.pnID.toLowerCase().includes(input.toLowerCase())) {
                    results.push({ id: doc.id, ...data });
                }
            });
    
            if (results.length === 0) {
                setErrorMessage("No products found. Please check your input.");
                setSearchedPartNumber(input)    
            } else {
                setErrorMessage("");
                setSearchedPartNumber("");
            }
    
            setSearchResults(results);
            setModalOpen(true);
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    };

    const handleProductClick = (id:any) => {
        // Navigate to product details page
        window.location.href = `/productDetails?id=${id}`;
    };

    return (
        <>
            {showSearchBar && (
                <div className="fixed top-20 right-0 flex justify-center z-10">
                    <div className="flex items-center bg-white dark:bg-[#050505] shadow-md rounded-full px-4 py-2 w-full max-w-md md:max-w-lg lg:max-w-2xl">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={searchInput}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-l-full focus:outline-none dark:bg-[#050505] bg-white dark:text-white text-gray-800"
                        />
                        <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700">
                            Search
                        </button>
                    </div>
                </div>
            )}
            {modalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                    {errorMessage ? (
                        <div>
                        <p>{errorMessage}</p>
                        <Link href={`/requestForm`} passHref>
                        <button 
                            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                            onClick={() => localStorage.setItem('searchedPartNumber', searchedPartNumber)} // Store part number in local storage
                        >
                            Request this Part Number
                        </button>
                    </Link>
                </div>
            ) : (
                <>
                            <button className="mb-4 justify-end items-end" onClick={() => setModalOpen(false)}>X</button>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {searchResults.map((product) => (
                                <div key={product.id} className="border p-2 rounded-lg cursor-pointer" onClick={() => handleProductClick(product.id)}>
                                    <img src={product.imageUrl} alt={product.productName} className="w-full h-24 object-cover mb-2 rounded-lg" />
                                    <h3 className="text-sm font-semibold">{product.productName}</h3>
                                </div>
                            ))}
                        </div>
                        </>
                    )}
                </Modal>
            )}
        </>
    );
};

export default SearchBarNav;


