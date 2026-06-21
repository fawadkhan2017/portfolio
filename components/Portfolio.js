function Portfolio() {
    try {
        const projects = [
            {
                title: 'SaaS Dashboard Interface',
                category: 'Web App',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://www.fiverr.com/codinglab707'
            },
            {
                title: 'Modern E-Commerce Store',
                category: 'E-Commerce',
                image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://www.fiverr.com/codinglab707'
            },
            {
                title: 'Corporate Landing Page',
                category: 'Web Design',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://www.fiverr.com/codinglab707'
            },
            {
                title: 'Real Estate Platform',
                category: 'Full Stack',
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://www.fiverr.com/codinglab707'
            },
            {
                title: 'Custom API Integration',
                category: 'Backend',
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://www.fiverr.com/codinglab707'
            },
            {
                title: 'Restaurant Ordering System',
                category: 'Web App',
                image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://www.fiverr.com/codinglab707'
            },
            {
                title: 'WordPress Business Theme',
                category: 'CMS',
                image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://www.fiverr.com/codinglab707'
            },
            {
                title: 'Responsive Email Template',
                category: 'HTML/CSS',
                image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://www.fiverr.com/codinglab707'
            }
        ];

        return (
            <section id="portfolio" className="bg-[var(--bg-card)]" data-name="Portfolio" data-file="components/Portfolio.js">
                <div className="section-padding">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                            <p className="text-[var(--text-muted)] max-w-xl">A glimpse into my latest work. I craft solutions that are not only visually appealing but also highly functional.</p>
                        </div>
                        <a href="https://www.fiverr.com/codinglab707" target="_blank" rel="noopener noreferrer" className="btn-outline shrink-0">
                            View All on Fiverr <span className="icon-external-link"></span>
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-[var(--bg-dark)] block">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-[var(--primary)] font-medium mb-2 tracking-wider text-sm uppercase">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-[var(--primary)] transition-colors w-fit">
                                        View on Fiverr <span className="icon-arrow-right"></span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Portfolio component error:', error);
        return null;
    }
}