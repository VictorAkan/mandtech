import Navbargen from "../components/Navbargen";
import About from "../components/About";

export default function ServicePage() {
    return (
        <div>
            <header>
                <Navbargen />
            </header>
            <div className="lg:mt-[7rem] md:mt-[13rem] mt-[5rem]"></div>
            <About />
        </div>
    )
}