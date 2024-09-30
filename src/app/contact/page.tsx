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
        <div className="mt-[9rem]"></div>
            <ContactUs />
            <CompanySection />
            <Location />
        </div>
    )
}