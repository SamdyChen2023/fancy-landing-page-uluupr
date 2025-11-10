function Hero() {
  try {
    return (
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--bg-light)] to-white pt-20"
        data-name="hero" 
        data-file="components/Hero.js"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--primary-color)] opacity-10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--secondary-color)] opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your <span className="gradient-text">Digital Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 leading-relaxed">
              Discover cutting-edge solutions that empower your business to reach new heights. 
              Join thousands of companies already transforming their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Start Free Trial</button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
            
            <div className="mt-16 flex items-center justify-center gap-8 text-sm text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <div className="icon-check-circle text-lg text-[var(--primary-color)]"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="icon-check-circle text-lg text-[var(--primary-color)]"></div>
                <span>14-day free trial</span>
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