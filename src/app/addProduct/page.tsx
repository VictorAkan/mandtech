import Navbargen from "../components/Navbargen";
import AddProduct from "../components/ProductForm";

export default function AddProductPage() {
    return (
        <div>
            <header>
                <Navbargen />
            </header>
        <div className="lg:mt-[7rem] md:mt-[13rem] mt-[5rem]"></div>
        <AddProduct />
        </div>
    )
}