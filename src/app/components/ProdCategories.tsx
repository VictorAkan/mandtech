import Image from "next/image";
import Link from "next/link";

export default function ProdCategories() {
    const products = [
        { name: 'filters', imgSrc: '/assets/image/filters.png', category: 'filters' },
        { name: 'lubricants', imgSrc: '/assets/image/lubricants.png', category: 'lubricants' },
        { name: 'kits', imgSrc: '/assets/image/kits.png', category: 'kits' },
        { name: 'air end', imgSrc: '/assets/image/airend.png', category: 'air end' },
        { name: 'motor', imgSrc: '/assets/image/motor.png', category: 'motor' },
        { name: 'sensors', imgSrc: '/assets/image/sensors.png', category: 'sensors' },
        { name: 'controllers', imgSrc: '/assets/image/controllers.png', category: 'controller' },
        { name: 'epiroc', imgSrc: '/assets/image/epiroc.png', category: 'epiroc' },
    ];

    return (
        <div className="p-4 sm:p-8 md:p-16 lg:p-32">
            <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Product Categories</h1>
                <div className="w-16 h-1 bg-gray-400 mx-auto mt-2"></div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="text-center">
                        <Link href={{ pathname: '/productsbpage', query: { subcategory: product.category } }} >
                            <Image
                                src={product.imgSrc}
                                alt={product.name}
                                width={500}  // Adjust to full width and dynamic height
                                height={350} 
                                className="w-full h-auto object-cover rounded-lg hover:scale-110 transition-transform duration-300"
                            />
                        </Link>
                        <p className="mt-4 font-semibold capitalize text-lg">{product.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
