const About = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            About Memoir
          </h1>
          
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto leading-relaxed">
            A simple, secure journaling platform designed for capturing your thoughts 
            and experiences in the digital age.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-base-200 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-base-content mb-4 text-center">Our Mission</h2>
          <p className="text-base-content/80 text-center leading-relaxed">
            To provide a clean, intuitive platform where people can freely express their thoughts, 
            document their experiences, and create lasting memories.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-base-200 rounded-lg p-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-lg">✍️</span>
            </div>
            <h3 className="text-lg font-semibold text-base-content mb-2">Simple Writing</h3>
            <p className="text-base-content/70">
              Clean, distraction-free interface that lets you focus on your thoughts.
            </p>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-lg">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-base-content mb-2">Privacy First</h3>
            <p className="text-base-content/70">
              Your data is encrypted and secure. Your memories deserve protection.
            </p>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-lg">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-base-content mb-2">Cross-Platform</h3>
            <p className="text-base-content/70">
              Access your journal from anywhere, on any device, with seamless sync.
            </p>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-lg">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-base-content mb-2">Smart Search</h3>
            <p className="text-base-content/70">
              Find your memories instantly with powerful search capabilities.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-base-200 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-base-content mb-6 text-center">Built With Modern Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-primary">R</span>
              </div>
              <h3 className="text-sm font-semibold text-base-content">React</h3>
              <p className="text-xs text-base-content/60">Frontend</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-primary">N</span>
              </div>
              <h3 className="text-sm font-semibold text-base-content">Node.js</h3>
              <p className="text-xs text-base-content/60">Backend</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-primary">M</span>
              </div>
              <h3 className="text-sm font-semibold text-base-content">MongoDB</h3>
              <p className="text-xs text-base-content/60">Database</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-primary">T</span>
              </div>
              <h3 className="text-sm font-semibold text-base-content">Tailwind</h3>
              <p className="text-xs text-base-content/60">Styling</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-base-content/80 mb-6">
            Ready to start your digital journaling journey?
          </p>
          <a 
            href="https://github.com/ashish7472/Memoir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-primary-content font-medium rounded-lg hover:bg-primary-focus transition-colors duration-200"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
