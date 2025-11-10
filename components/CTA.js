function CTA() {
  try {
    return (
      <section 
        className="py-24 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] relative overflow-hidden"
        data-name="cta" 
        data-file="components/CTA.js"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-10 opacity-90">
              Join thousands of satisfied customers and transform your business today.
              Start your free trial now, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-[var(--primary-color)] rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CTA component error:', error);
    return null;
  }
}