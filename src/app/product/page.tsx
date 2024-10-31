"use client";

import Navbar from "../components/Navbar"
import Products from "../components/AllProducts"
import SearchBar from "../components/Searchbar"
import ProductHead from "../components/ProductHead"
import { useState } from "react"

export default function ProductPage() {
    const [selectedCategory, setSelectedCategory] = useState('service kits');

    return (
        <div>
            <header>
                <Navbar />
            </header>
        {/* <div className="mt-[9rem]"></div> */}
        <ProductHead category={selectedCategory} />
        <SearchBar />
        <Products selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
    )
}