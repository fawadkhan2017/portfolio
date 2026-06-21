function Hero() {
    try {
        return (
            <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden" data-name="Hero" data-file="components/Hero.js">
                {/* Background Decoration */}
                <div className="absolute top-1/4 -right-64 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
                <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>

                <div className="section-padding grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] w-fit border border-[var(--primary)]/20">
                            <span className="icon-star text-sm"></span>
                            <span className="text-sm font-semibold tracking-wide">Level 1 Seller on Fiverr</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-emerald-300">Digital</span> Experiences That Matter.
                        </h1>
                        <p className="text-lg text-[var(--text-muted)] max-w-lg leading-relaxed">
                            I am a passionate Web Developer providing high-quality, scalable, and visually stunning web solutions to help your business grow online.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <a href="https://www.fiverr.com/codinglab707" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                View Fiverr Profile
                                <span className="icon-arrow-right"></span>
                            </a>
                            <a href="#portfolio" className="btn-outline">
                                View Projects
                            </a>
                        </div>
                        
                        <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-800">
                            <div>
                                <h4 className="text-2xl font-bold">100+</h4>
                                <p className="text-sm text-[var(--text-muted)]">Projects Done</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold">5.0</h4>
                                <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                                    <span className="icon-star text-[var(--primary)] text-xs fill-current"></span>
                                    Rating
                                </p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold">100%</h4>
                                <p className="text-sm text-[var(--text-muted)]">Job Success</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden md:block">
                        <div className="w-full aspect-square rounded-full border border-gray-800 absolute -top-8 -right-8"></div>
                        <div className="w-full aspect-square rounded-full border border-gray-800 absolute top-8 right-8"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Developer Workspace" 
                            className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500 border border-gray-800"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-[var(--bg-card)] p-4 rounded-xl shadow-xl border border-gray-700 z-20 flex items-center gap-4 animate-bounce">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                                <span className="icon-check text-[var(--primary)] text-xl"></span>
                            </div>
                            <div>
                                <p className="text-sm text-[var(--text-muted)]">Available for</p>
                                <p className="font-bold">New Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        return null;
    }
}