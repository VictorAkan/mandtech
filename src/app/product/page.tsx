"use client";

import Navbar from "../components/Navbar";
import Products from "../components/AllProducts";
import SearchBar from "../components/Searchbar";
import ProductHead from "../components/ProductHead";
import { useState, useEffect } from "react";

export default function ProductPage() {
    const [selectedCategory, setSelectedCategory] = useState('service kits');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Ensures this only runs on the client side
        setIsClient(true);
    }, []);

    if (!isClient) {
        // Return null during server-side render to avoid errors
        return null;
    }

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <ProductHead category={selectedCategory} />
            <SearchBar />
            <Products selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
    );
}

// import Navbar from "../components/Navbar";
// import Products from "../components/AllProducts";
// import SearchBar from "../components/Searchbar";
// import ProductHead from "../components/ProductHead";
// import { useState, useEffect } from "react";
// import { useRouter } from 'next/router';

// export default function ProductPage() {
//     const router = useRouter();
//     const { category } = router.query; // Retrieve the category from query params
//     const [selectedCategory, setSelectedCategory] = useState(category || 'service kits');
//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//         // Ensures this only runs on the client side
//         setIsClient(true);
//     }, []);

//     useEffect(() => {
//         if (category) {
//             setSelectedCategory(category);
//         }
//     }, [category]); // Update the selected category when query changes

//     if (!isClient) {
//         return null; // Avoid SSR errors
//     }

//     return (
//         <div>
//             <header>
//                 <Navbar />
//             </header>
//             <ProductHead category={selectedCategory} />
//             <SearchBar />
//             <Products selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
//         </div>
//     );
// }
