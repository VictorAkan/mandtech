import Navbargen from "../components/Navbargen"
import Blog from "../components/blog"

export default function ContactPage() {
    return (
        <div>
            <header>
                <Navbargen />
            </header>
            <div className="lg:mt-[7rem] md:mt-[13rem] mt-[5rem]"></div>
            <Blog />
        </div>
    )
}