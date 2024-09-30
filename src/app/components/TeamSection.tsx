import Image from 'next/image';

const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Mbuotidem John',
            imageUrl: '/assets/image/mb.jpg', // Example path, replace with your actual image
            story: `John has been working in the industry for over a decade. His experience spans across various fields, making him an essential part of the team. John’s passion for innovation and creativity drives the team forward, ensuring that every project reaches its full potential. He’s a mentor to many and a constant source of inspiration.`,
        },
        {
            name: 'Carter Yang',
            imageUrl: '/assets/image/cy.png', // Example path, replace with your actual image
            story: `Yang’s journey is one of perseverance and dedication. With a strong background in technology and leadership, he has brought transformative changes to the way the team operates. His hands-on approach and keen eye for detail ensure that the team consistently delivers high-quality results. Yang’s story is one of growth, adaptability, and excellence.`,
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-[#050505] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold dark:text-white text-gray-900">Meet The Team</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Team members</p>
                <div className="mt-1 border-t-4 border-[#050505] dark:border-white w-24 mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto mt-10 grid gap-12 lg:grid-cols-2 px-4 sm:px-6 lg:px-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="lg:w-1/3">
                            <Image
                                src={member.imageUrl}
                                alt={member.name}
                                width={300}
                                height={300}
                                className="rounded-full shadow-lg object-cover"
                            />
                        </div>
                        <div className="lg:w-2/3 lg:ml-8 mt-6 lg:mt-0 text-center lg:text-left">
                            <h3 className="text-xl font-semibold dark:text-white text-gray-800">{member.name}</h3>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">{member.story}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
