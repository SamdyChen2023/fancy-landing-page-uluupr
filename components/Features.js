function Features() {
  try {
    const features = [
      {
        icon: 'rocket',
        title: 'Lightning Fast',
        description: 'Experience blazing-fast performance that keeps your workflow smooth and efficient.'
      },
      {
        icon: 'shield-check',
        title: 'Secure & Reliable',
        description: 'Enterprise-grade security measures to protect your data and ensure peace of mind.'
      },
      {
        icon: 'users',
        title: 'Team Collaboration',
        description: 'Work seamlessly with your team using powerful collaboration tools built-in.'
      },
      {
        icon: 'bar-chart',
        title: 'Analytics Dashboard',
        description: 'Get actionable insights with comprehensive analytics and beautiful visualizations.'
      },
      {
        icon: 'sparkles',
        title: 'AI-Powered',
        description: 'Leverage artificial intelligence to automate tasks and boost productivity.'
      },
      {
        icon: 'headphones',
        title: '24/7 Support',
        description: 'Our dedicated support team is always here to help you succeed.'
      }
    ];

    return (
      <section 
        id="features"
        className="py-24 bg-[var(--bg-light)]"
        data-name="features" 
        data-file="components/Features.js"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to succeed, all in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[var(--secondary-color)] bg-opacity-10 mb-6">
                  <div className={`icon-${feature.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}