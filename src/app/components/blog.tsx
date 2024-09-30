import Image from "next/image";

const Blog = () => {
    return (
        <div className="w-full px-4 py-12 dark:bg-black bg-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Blog Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold dark:text-white text-gray-800">Our Blog</h1>
                    <p className="mt-4 text-lg dark:text-gray-300 text-gray-600">
                        Stay informed about the latest innovations and updates in air compressors, lubricants, filters, and Ingersoll sales engineering.
                    </p>
                </div>

                {/* Blog Posts */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Blog Post 1 */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="/assets/image/pat1.jpg"
                                alt="Air Compressors"
                                layout="fill"
                                objectFit="cover"
                                // width={500}
                                // height={300}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold dark:text-white text-gray-800">The Importance of Air Compressors</h2>
                            <p className="mt-4 text-gray-600">
                                Discover how air compressors have revolutionized industries worldwide, offering efficient solutions for various applications.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 text-green-600 hover:underline"
                            >
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="/assets/image/pat2.jpg"
                                alt="Lubricants"
                                layout="fill"
                                objectFit="cover"
                                // width={500}
                                // height={300}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold dark:text-white text-gray-800">Lubricants: Essential for Machine Longevity</h2>
                            <p className="mt-4 text-gray-600">
                                Learn about the role of high-quality lubricants in reducing wear and tear on industrial machines, including air compressors.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 text-green-600 hover:underline"
                            >
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="/assets/image/pat3.jpg"
                                alt="Filters"
                                layout="fill"
                                objectFit="cover"
                                // width={500}
                                // height={300}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold dark:text-white text-gray-800">Filters: Ensuring Clean and Efficient Operations</h2>
                            <p className="mt-4 text-gray-600">
                                Filters are critical for maintaining optimal performance in air compressors. Understand the different types and their benefits.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 text-green-600 hover:underline"
                            >
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 4 */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="/assets/image/pat4.jpg"
                                alt="Ingersoll Sales"
                                layout="fill"
                                objectFit="cover"
                                // width={500}
                                // height={300}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold dark:text-white text-gray-800">Ingersoll Rand: Leaders in Sales Engineering</h2>
                            <p className="mt-4 text-gray-600">
                                Explore Ingersoll Rand&apos;s legacy in sales engineering, providing innovative solutions for industrial machinery and systems.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 text-green-600 hover:underline"
                            >
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 5 */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="/assets/image/pat5.jpg"
                                alt="Maintenance"
                                layout="fill"
                                objectFit="cover"
                                // width={500}
                                // height={300}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold dark:text-white text-gray-800">Maintenance Tips for Air Compressors</h2>
                            <p className="mt-4 text-gray-600">
                                Get practical advice on how to maintain your air compressors for optimal efficiency and longevity.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 text-green-600 hover:underline"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
