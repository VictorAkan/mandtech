import Navbargen from "../components/Navbargen";
import Services from "../components/Services";

export default function ServicePage() {
    return (
        <div>
            <header>
                <Navbargen />
            </header>
            <div className="lg:mt-[7rem] md:mt-[13rem] mt-[5rem]"></div>
            <Services />
        </div>
    )
}