import Navbargen from "../components/Navbargen";
import OEMPartnersPage from "../components/OEMPartners";

export default function OempartnersPage() {
    return (
        <div>
            <header>
                <Navbargen />
            </header>
            <div className="lg:mt-[7rem] md:mt-[13rem] mt-[5rem]"></div>
            <OEMPartnersPage />
        </div>
    )
}