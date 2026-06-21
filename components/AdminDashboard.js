function AdminDashboard() {
    try {
        const [projects, setProjects] = React.useState([]);
        const [loading, setLoading] = React.useState(true);
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [form, setForm] = React.useState({ title: '', category: '', imageUrl: '' });

        const fetchProjects = async () => {
            setLoading(true);
            try {
                const res = await trickleListObjects('portfolio_project', 100, true);
                setProjects(res.items || []);
            } catch (err) {
                console.error("Failed to fetch projects:", err);
            } finally {
                setLoading(false);
            }
        };

        React.useEffect(() => {
            fetchProjects();
        }, []);

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setForm(prev => ({ ...prev, [name]: value }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!form.title || !form.category || !form.imageUrl) {
                alert("Please fill all fields.");
                return;
            }
            setIsSubmitting(true);
            try {
                await trickleCreateObject('portfolio_project', {
                    Title: form.title,
                    Category: form.category,
                    ImageUrl: form.imageUrl
                });
                setForm({ title: '', category: '', imageUrl: '' });
                await fetchProjects();
            } catch (err) {
                console.error("Failed to add project:", err);
                alert("Failed to add project.");
            } finally {
                setIsSubmitting(false);
            }
        };

        const handleDelete = async (objectId) => {
            if (!confirm("Are you sure you want to delete this project?")) return;
            try {
                await trickleDeleteObject('portfolio_project', objectId);
                await fetchProjects();
            } catch (err) {
                console.error("Failed to delete project:", err);
                alert("Failed to delete project.");
            }
        };

        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-name="admin-dashboard" data-file="components/AdminDashboard.js">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Add Project Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Project</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                                    <input 
                                        type="text" 
                                        name="title"
                                        value={form.title}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] outline-none" 
                                        placeholder="e.g. E-Commerce Platform"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <input 
                                        type="text" 
                                        name="category"
                                        value={form.category}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] outline-none" 
                                        placeholder="e.g. Laravel Web App"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                    <input 
                                        type="url" 
                                        name="imageUrl"
                                        value={form.imageUrl}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] outline-none" 
                                        placeholder="https://..."
                                    />
                                    {form.imageUrl && (
                                        <div className="mt-2 text-xs text-gray-500">Preview:
                                            <div className="mt-1 aspect-video w-full rounded bg-gray-100 overflow-hidden">
                                                <img src={form.imageUrl} alt="Preview" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button type="submit" disabled={isSubmitting} className="w-full btn-primary mt-2">
                                    {isSubmitting ? 'Adding...' : 'Add Project'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Project List */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-gray-900">Manage Portfolio</h2>
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{projects.length} Projects</span>
                            </div>
                            
                            {loading ? (
                                <div className="p-8 text-center text-gray-500 flex flex-col items-center">
                                    <div className="icon-loader text-2xl animate-spin mb-2 text-[var(--primary-color)]"></div>
                                    Loading projects...
                                </div>
                            ) : projects.length === 0 ? (
                                <div className="p-8 text-center text-gray-500">
                                    <div className="icon-folder-open text-4xl mb-2 text-gray-300 mx-auto"></div>
                                    No projects found. Add your first one!
                                </div>
                            ) : (
                                <ul className="divide-y divide-gray-200">
                                    {projects.map((project) => (
                                        <li key={project.objectId} className="p-6 hover:bg-gray-50 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4">
                                                    <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img src={project.objectData.ImageUrl} alt={project.objectData.Title} className="h-full w-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-sm font-medium text-gray-900">{project.objectData.Title}</h3>
                                                        <p className="text-sm text-gray-500">{project.objectData.Category}</p>
                                                    </div>
                                                </div>
                                                <button 
                                                    onClick={() => handleDelete(project.objectId)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                                    title="Delete Project"
                                                >
                                                    <div className="icon-trash text-lg"></div>
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("AdminDashboard component error:", error);
        return null;
    }
}