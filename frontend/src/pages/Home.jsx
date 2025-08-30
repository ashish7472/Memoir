import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Home = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Memoir
          </h1>
          
          <p className="text-xl md:text-2xl text-base-content/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your personal space for capturing thoughts, memories, and experiences. 
            Simple, secure, and always accessible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {user ? (
              <Link to="/entries">
                <button className="px-8 py-3 bg-primary text-primary-content font-medium rounded-lg hover:bg-primary-focus transition-colors duration-200 shadow-sm">
                  View My Entries
                </button>
              </Link>
            ) : (
              <>
                <Link to="/signup">
                  <button className="px-8 py-3 bg-primary text-primary-content font-medium rounded-lg hover:bg-primary-focus transition-colors duration-200 shadow-sm">
                    Get Started
                  </button>
                </Link>
                <Link to="/login">
                  <button className="px-8 py-3 border border-base-content/20 text-base-content font-medium rounded-lg hover:bg-base-200 transition-colors duration-200">
                    Sign In
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✍️</span>
            </div>
            <h3 className="text-lg font-semibold text-base-content mb-3">Write Freely</h3>
            <p className="text-base-content/70 leading-relaxed">
              Clean, distraction-free interface designed for focused writing and reflection.
            </p>
          </div>
          
          <div className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-base-content mb-3">Secure & Private</h3>
            <p className="text-base-content/70 leading-relaxed">
              Your memories are protected with encryption and secure authentication.
            </p>
          </div>
          
          <div className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-base-content mb-3">Access Anywhere</h3>
            <p className="text-base-content/70 leading-relaxed">
              Your journal syncs across all devices, ensuring your thoughts are always within reach.
            </p>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="mt-20 flex justify-center gap-12 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-1">10K+</div>
            <div className="text-base-content/60 text-sm">Active Users</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-1">1M+</div>
            <div className="text-base-content/60 text-sm">Entries Created</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
            <div className="text-base-content/60 text-sm">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
