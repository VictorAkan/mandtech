import Navbargen from "../components/Navbargen";
import SignIn from "../components/AdSignIn";

export default function Admin() {
    return (
        <div>
            <header>
                <Navbargen />
            </header>
        <div className="lg:mt-[7rem] md:mt-[13rem] mt-[5rem]"></div>
        <SignIn />
        </div>
    )
}