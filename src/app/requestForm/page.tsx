import Navbargen from "../components/Navbargen";
import RequestForm from "../components/RequestForm";

export default function RequestFormPage() {
    return (
        <div>
            <header>
                <Navbargen />
            </header>
            <div className="lg:mt-[7rem] md:mt-[13rem] mt-[5rem]"></div>
            <RequestForm />
        </div>
    )
}