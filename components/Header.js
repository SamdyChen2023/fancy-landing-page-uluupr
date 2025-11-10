function Header() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
        }`}
        data-name="header" 
        data-file="components/Header.js"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)]">
              <div className="icon-zap text-xl text-white"></div>
            </div>
            <span className="text-2xl font-bold gradient-text">Innovate</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Features</a>
            <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">About</a>
            <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Contact</a>
            <button className="btn-primary">Get Started</button>
          </nav>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}