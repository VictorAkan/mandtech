import Image from 'next/image';

const About = () => {
    return (
        <div className="container mx-auto py-12 px-4 lg:px-8">
            {/* Hero Section */}
            <section className="bg-gray-100 py-12 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">About Mandtech Services</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Providing industrial equipment solutions that encompass Sales, After-Sales Service, Parts, Leasing, and Technical Advice to support your operational needs.
                </p>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-12">
                <h2 className="text-3xl font-semibold text-center mb-8">Our Mission & Vision</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                            At Mandtech Services, our mission is to empower industries by providing high-quality, reliable equipment solutions that streamline operations, minimize downtime, and enhance productivity.
                        </p>
                    </div>
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We envision becoming the leading industrial equipment provider known for excellence in service, innovation, and sustainability, helping businesses reach new heights.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-gray-100 py-12">
                <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Sales</h3>
                        <p className="text-gray-600">Offering a wide range of industrial equipment tailored to meet specific needs.</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">After-Sales Service</h3>
                        <p className="text-gray-600">Comprehensive after-sales support to ensure your equipment runs optimally.</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Parts</h3>
                        <p className="text-gray-600">Supplying genuine parts to extend the lifespan and reliability of your machinery.</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Leasing</h3>
                        <p className="text-gray-600">Flexible leasing options to meet your short-term and long-term equipment needs.</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Technical Advice</h3>
                        <p className="text-gray-600">Expert technical advice to optimize equipment performance and productivity.</p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-12">
                <h2 className="text-3xl font-semibold text-center mb-8">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                        <p className="text-gray-600">We are committed to honest and transparent business practices in all our operations.</p>
                    </div>
                    <div className="text-center bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                        <p className="text-gray-600">Constantly advancing to bring cutting-edge solutions to our clients.</p>
                    </div>
                    <div className="text-center bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
                        <p className="text-gray-600">Dedicated to delivering exceptional service and exceeding client expectations.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gray-100 py-12">
                <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Mandtech Services?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Experienced Team</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Our team consists of experts who bring years of experience and in-depth knowledge to every project.
                        </p>
                    </div>
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Comprehensive Solutions</h3>
                        <p className="text-gray-700 leading-relaxed">
                            From sales to technical support, we provide a complete suite of services tailored to your needs.
                        </p>
                    </div>
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Commitment to Quality</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We prioritize quality in every aspect of our business to ensure the best results for our clients.
                        </p>
                    </div>
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Customer-Centric Approach</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We are dedicated to understanding and meeting each customer’s unique requirements.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
