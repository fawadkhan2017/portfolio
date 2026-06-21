function Navbar() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);

        const navLinks = [
            { name: 'Home', href: '#home' },
            { name: 'Services', href: '#services' },
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'Reviews', href: '#reviews' },
        ];

        return (
            <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 transition-all" data-name="navbar" data-file="components/Navbar.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="#" className="text-2xl font-bold text-[var(--primary-color)] tracking-tighter">Fawad.</a>
                        </div>
                        
                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-gray-600 hover:text-[var(--primary-color)] font-medium transition-colors">
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" className="btn-primary py-2 px-4 text-sm">Hire Me</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                <div className={`icon-${isOpen ? 'x' : 'menu'} text-2xl`}></div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--primary-color)] hover:bg-gray-50"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[var(--primary-color)]">
                                Hire Me
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        return null;
    }
}