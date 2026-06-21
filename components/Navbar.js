function Navbar() {
    try {
        const [isScrolled, setIsScrolled] = React.useState(false);
        const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 20);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const navLinks = [
            { name: 'Home', href: '#home' },
            { name: 'Services', href: '#services' },
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'Reviews', href: '#reviews' },
        ];

        return (
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-dark)]/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`} data-name="Navbar" data-file="components/Navbar.js">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
                    <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-[var(--primary)] flex items-center justify-center">
                            <span className="icon-code text-white text-xl"></span>
                        </div>
                        CodingLab707
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors font-medium">
                                {link.name}
                            </a>
                        ))}
                        <a href="https://www.fiverr.com/codinglab707" target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-5 text-sm">
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-white text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span className={`icon-${mobileMenuOpen ? 'x' : 'menu'}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-card)] border-t border-gray-800 py-4 px-6 shadow-xl flex flex-col gap-4">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-[var(--primary)] font-medium">
                                {link.name}
                            </a>
                        ))}
                        <a href="https://www.fiverr.com/codinglab707" target="_blank" rel="noopener noreferrer" className="btn-primary justify-center w-full mt-2">
                            Hire Me on Fiverr
                        </a>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        return null;
    }
}