import OEMPartnersSection from "./OEMPartnersSection";

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

const OEMPartnersPage = () => {
    return (
        <div className="container mx-auto py-12 px-4 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-8">Our Trusted OEM Partners</h1>
            <p className="text-lg text-center mb-6 max-w-3xl mx-auto">
                We are proud to collaborate with top-notch Original Equipment Manufacturers (OEMs) to bring you quality services and products. Here’s a look at some of our esteemed partners.
            </p>
            <OEMPartnersSection partners={partners} />
        </div>
    );
};

export default OEMPartnersPage;
