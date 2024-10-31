import CompanySection from "../components/CompanySection"
import ContactUs from "../components/ContactHero"
import Location from "../components/Location"
import Navbargen from "../components/Navbargen"

export default function ContactPage() {
    return (
        <div>
            <header>
                <Navbargen />
            </header>
        <div className="lg:mt-[7rem] md:mt-[13rem] mt-[5rem]"></div>
            <ContactUs />
            <CompanySection />
            <Location />
        </div>
    )
}