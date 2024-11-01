"use client";

import { useEffect, useState } from "react";
import Navbargen from "../components/Navbargen";
import AddProduct from "../components/ProductForm";

export default function AddProductPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Ensures this runs only on the client side
        setIsClient(true);
    }, []);

    if (!isClient) {
        // Avoids prerender error by returning null on server
        return null;
    }

    return (
        <div>
            <header>
                <Navbargen />
            </header>
            <div className="lg:mt-[7rem] md:mt-[13rem] mt-[5rem]"></div>
            <AddProduct />
        </div>
    );
}
