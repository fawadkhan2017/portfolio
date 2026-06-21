function Hero() {
    try {
        return (
            <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden" data-name="hero" data-file="components/Hero.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-[var(--primary-color)] text-sm font-semibold mb-6">
                                <div className="icon-badge-check mr-2"></div>
                                Level 1 Seller on Fiverr
                            </div>
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                <span className="block xl:inline">Full Stack</span>{' '}
                                <span className="block text-[var(--primary-color)]">Laravel Developer</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Hi, I'm Fawad! With 5+ years of experience, I specialize in building modern, responsive, and scalable web applications using PHP Laravel, Livewire, and Tailwind CSS.
                            </p>
                            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="https://www.fiverr.com/codinglab707" target="_blank" rel="noreferrer" className="btn-primary text-lg px-8 py-4">
                                    Hire Me on Fiverr
                                </a>
                                <a href="#services" className="btn-secondary text-lg px-8 py-4">
                                    View My Services
                                </a>
                            </div>
                            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500 font-medium">
                                <div className="flex items-center">
                                    <div className="icon-star text-yellow-400 mr-1"></div>
                                    5.0 (20+ Reviews)
                                </div>
                                <div className="flex items-center">
                                    <div className="icon-clock text-[var(--primary-color)] mr-1"></div>
                                    Fast Response
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                            <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden bg-white aspect-[4/3] flex items-center justify-center border border-gray-100">
                                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Coding Workspace" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 to-transparent"></div>
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