function Services() {
    try {
        const services = [
            {
                title: 'Figma to HTML/Tailwind',
                description: 'Convert your Figma designs into pixel-perfect, responsive HTML and Tailwind CSS websites.',
                icon: 'icon-file-code',
                link: 'https://www.fiverr.com/s/kLQyjPQ'
            },
            {
                title: 'Laravel Web Apps',
                description: 'Develop powerful, scalable PHP Laravel websites and custom web applications.',
                icon: 'icon-braces',
                link: 'https://www.fiverr.com/s/0bpgjEv'
            },
            {
                title: 'WordPress E-Commerce',
                description: 'Build robust WordPress e-commerce websites with Elementor Pro tailored to your business.',
                icon: 'icon-shopping-cart',
                link: 'https://www.fiverr.com/s/e6zpqQ3'
            },
            {
                title: 'Bug Fixing & Support',
                description: 'Expertly fix HTML, CSS, JavaScript, and PHP website bugs and errors quickly and efficiently.',
                icon: 'icon-bug',
                link: 'https://www.fiverr.com/s/kLQyjPQ'
            },
            {
                title: 'eBay HTML Templates',
                description: 'Design professional and highly attractive eBay HTML listing templates to boost your sales.',
                icon: 'icon-shopping-bag',
                link: 'https://www.fiverr.com/s/bdVxj7X'
            },
            {
                title: 'Responsive Websites',
                description: 'Build fast, responsive, and modern websites from scratch using HTML, CSS, and JavaScript.',
                icon: 'icon-monitor-smartphone',
                link: 'https://www.fiverr.com/s/6Yyg3wR'
            },
            {
                title: 'Design to WordPress',
                description: 'Convert Figma or PSD design files into fully functional WordPress sites using Elementor.',
                icon: 'icon-layout-template',
                link: 'https://www.fiverr.com/s/lja25qy'
            }
        ];

        return (
            <section id="services" className="bg-[var(--bg-dark)] border-t border-gray-800" data-name="Services" data-file="components/Services.js">
                <div className="section-padding">
                    <h2 className="section-title">My Services</h2>
                    <p className="section-subtitle">Comprehensive digital solutions tailored to your needs. From bug fixing to full-stack development, I've got you covered.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <a href={service.link} target="_blank" rel="noopener noreferrer" key={index} className="bg-[var(--bg-card)] p-8 rounded-2xl border border-gray-800 hover:border-[var(--primary)] transition-colors duration-300 group block cursor-pointer">
                                <div className="w-14 h-14 rounded-xl bg-gray-800 group-hover:bg-[var(--primary)] transition-colors duration-300 flex items-center justify-center mb-6">
                                    <span className={`${service.icon} text-2xl text-[var(--primary)] group-hover:text-white transition-colors duration-300`}></span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">{service.title}</h3>
                                <p className="text-[var(--text-muted)] leading-relaxed mb-4">{service.description}</p>
                                <span className="text-sm font-medium text-[var(--primary)] inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Hire for this <span className="icon-arrow-right text-xs"></span>
                                </span>
                            </a>
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