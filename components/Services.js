function Services() {
    try {
        const services = [
            {
                title: "PHP Laravel Web Apps",
                description: "I will develop robust, scalable PHP Laravel websites, web applications, and admin dashboard systems.",
                icon: "file-code",
                price: "From $15"
            },
            {
                title: "Figma to HTML/Tailwind",
                description: "I will convert your Figma, PSD, or XD designs into pixel-perfect, responsive HTML and Tailwind CSS code.",
                icon: "panel-top",
                price: "From $20"
            },
            {
                title: "Livewire Development",
                description: "Build dynamic, reactive frontend interfaces without writing custom JavaScript using Laravel Livewire.",
                icon: "cpu",
                price: "From $50"
            },
            {
                title: "Admin Dashboards",
                description: "Custom backend management systems and CMS tailored to control your business operations efficiently.",
                icon: "layout-dashboard",
                price: "From $100"
            },
            {
                title: "MySQL Database Design",
                description: "Optimized, normalized, and highly scalable database architectures for your complex applications.",
                icon: "database",
                price: "From $40"
            },
            {
                title: "Bug Fixing & APIs",
                description: "Quick resolution of tricky bugs, REST API integrations, and overall performance optimization.",
                icon: "settings",
                price: "$30/hr"
            }
        ];

        return (
            <section id="services" className="py-20 bg-white" data-name="services" data-file="components/Services.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="section-title mb-4">My Expertise</h2>
                        <p className="text-lg text-gray-600">I focus on clean code, fast communication, and delivering high-quality solutions that help businesses grow.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col">
                                <div className="w-14 h-14 bg-green-100 text-[var(--primary-color)] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <div className={`icon-${service.icon} text-3xl`}></div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-auto">
                                    <span className="font-semibold text-gray-900">{service.price}</span>
                                    <a href="https://www.fiverr.com/codinglab707" target="_blank" rel="noreferrer" className="text-[var(--primary-color)] font-medium flex items-center hover:text-green-700">
                                        Order on Fiverr <div className="icon-arrow-right ml-1 text-sm"></div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        return null;
    }
}