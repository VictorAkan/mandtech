// import Image from "next/image";
import SearchBar from "./components/Searchbar";
import HeroSection from "./components/HeroSection";
import ProdCategories from "./components/ProdCategories";
import HotProductsCarousel from "./components/HotProducts";
import TeamSection from "./components/TeamSection";
import CompanySection from "./components/CompanySection";
import QuickDeliveryGuide from "./components/QuickDeliveryGuide";

import Navbar from "./components/Navbar";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (

    <div className="relative">
      <header>
          <Navbar />
        </header>
        <div className="mt-[9rem]"></div>
      <HeroSection />
      <SearchBar />
      <ProdCategories />
      <HotProductsCarousel />
      <TeamSection />
      <CompanySection />
      <QuickDeliveryGuide />
    </div>
  );
}
