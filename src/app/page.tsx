// import Image from "next/image";
import SearchBar from "./components/Searchbar";
import HeroSection from "./components/HeroSection";
import ProdCategories from "./components/ProdCategories";
import HotProductsCarousel from "./components/HotProducts";
import TeamSection from "./components/TeamSection";
import CompanySection from "./components/CompanySection";
import QuickDeliveryGuide from "./components/QuickDeliveryGuide";
import OEMPartnersSection from "./components/OEMPartnersSection";

import Navbar from "./components/Navbar";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { name: 'Atlas Copco', logo: '/assets/image/atlascopco.png', url: 'https://www.atlascopco.com/' },
  { name: 'Ingersoll Rand', logo: '/assets/image/ingersollrand.png', url: 'https://www.ingersollrand.com/' },
  { name: 'Sullair', logo: '/assets/image/sullair.png', url: 'https://www.sullair.com/' },
  { name: 'Denair', logo: '/assets/image/denair.png', url: 'https://www.denair.net/' },
  { name: 'Comair', logo: '/assets/image/comair.png', url: 'https://www.comaircorp.com/' },
  { name: 'JMG', logo: '/assets/image/jmg.png', url: 'https://www.jmglimited.com/' },
  { name: 'Kaeser', logo: '/assets/image/kaeser.png', url: 'https://us.kaeser.com/' },
  // Add more partners as needed
];

export default function Home() {
  return (

    <div className="relative">
      <header>
          <Navbar />
        </header>
        {/* <div className="md:mt-0 mt-[1rem]"></div> */}
      <HeroSection />
      <SearchBar />
      <ProdCategories />
      <HotProductsCarousel />
      {/* <TeamSection /> */}
      <CompanySection />
      <OEMPartnersSection partners={partners} />
      <QuickDeliveryGuide />
    </div>
  );
}
