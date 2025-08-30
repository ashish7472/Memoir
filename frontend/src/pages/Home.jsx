import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Memoir
        </h1>
        
        <p className="text-xl mb-8">
          Your personal digital sanctuary for capturing life's precious moments, 
          thoughts, and experiences. Start your journey of self-reflection today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/signup">
            <button className="btn btn-primary btn-lg">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className="btn btn-outline btn-lg">
              Sign In
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title justify-center">📝</h3>
              <h3 className="card-title justify-center">Write Freely</h3>
              <p>Express your thoughts without any distractions in a clean, focused environment.</p>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title justify-center">🔒</h3>
              <h3 className="card-title justify-center">Secure & Private</h3>
              <p>Your memories are protected with advanced security and encryption.</p>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title justify-center">📱</h3>
              <h3 className="card-title justify-center">Access Anywhere</h3>
              <p>Your journal is always accessible across all your devices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
