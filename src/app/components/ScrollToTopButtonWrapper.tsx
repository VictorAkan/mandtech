// ScrollToTopButtonWrapper.js
"use client";

import dynamic from "next/dynamic";

// Dynamically import ScrollToTopButton and disable SSR
const ScrollToTopButton = dynamic(() => import("./ScrollToTop"), {
    ssr: false,
});

export default ScrollToTopButton;
