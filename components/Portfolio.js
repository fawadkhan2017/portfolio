function Portfolio() {
    try {
        const [projects, setProjects] = React.useState([]);
        const [loading, setLoading] = React.useState(true);

        React.useEffect(() => {
            const fetchProjects = async () => {
                try {
                    const res = await trickleListObjects('portfolio_project', 100, true);
                    // Filter out any entries that might be missing required fields just in case
                    const validProjects = (res.items || []).filter(p => p.objectData && p.objectData.Title && p.objectData.ImageUrl);
                    setProjects(validProjects);
                } catch (error) {
                    console.error("Error fetching projects:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchProjects();
        }, []);

        return (
            <section id="portfolio" className="py-20 bg-gray-50" data-name="portfolio" data-file="components/Portfolio.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
                            <p className="text-lg text-gray-600">Explore some of my latest projects delivered successfully to clients globally.</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <a href="admin.html" className="text-sm text-gray-400 hover:text-gray-900 transition-colors flex items-center">
                                <div className="icon-settings mr-1"></div> Admin
                            </a>
                            <a href="https://www.fiverr.com/codinglab707" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center text-[var(--primary-color)] font-medium hover:underline">
                                See more on Fiverr <div className="icon-external-link ml-1"></div>
                            </a>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="icon-loader text-4xl animate-spin text-[var(--primary-color)]"></div>
                        </div>
                    ) : projects.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            <p>No projects to display yet.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 gap-8">
                            {projects.map((project) => (
                                <div key={project.objectId} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="aspect-[16/9] w-full overflow-hidden bg-gray-200">
                                        <img 
                                            src={project.objectData.ImageUrl} 
                                            alt={project.objectData.Title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'; }}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                        <span className="text-green-400 font-medium text-sm mb-2">{project.objectData.Category}</span>
                                        <h3 className="text-white text-2xl font-bold">{project.objectData.Title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    <div className="mt-8 text-center md:hidden">
                        <a href="https://www.fiverr.com/codinglab707" target="_blank" rel="noreferrer" className="btn-secondary w-full">
                            See more on Fiverr
                        </a>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Portfolio component error:', error);
        return null;
    }
}