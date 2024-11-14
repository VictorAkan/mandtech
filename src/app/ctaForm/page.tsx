import Navbargen from "../components/Navbargen";
import CTAForm from "../components/CTAForm";
import { Suspense } from "react";
import { Loader } from "../components/Loader";

export default function CTAFormPage() {
    return (
        <div>
            <header>
                <Navbargen />
            </header>
            <div className="lg:mt-[11rem] md:mt-[13rem] mt-[5rem]"></div>
            <Suspense fallback={<Loader />}>
                <CTAForm />
            </Suspense>
        </div>
    )
}