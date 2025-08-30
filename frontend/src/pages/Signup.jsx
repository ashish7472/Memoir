import { useState } from "react";
import { Link, Navigate, replace, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../redux/api/usersApiSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../redux/features/userSlice";

const Signup = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signup, { isLoading }] = useSignupMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData).unwrap();
      dispatch(userInfo(response));
      navigate("/", replace);
      toast.success(
        `${response.data.firstName}, your account is created and you're logged in!`
      );
    } catch (error) {
      toast.error(error?.data?.message || "An unexpected error occurred!");
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-base-200 rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-base-content mb-2">Join Memoir</h1>
            <p className="text-base-content/70">
              Create your account and start your digital journaling journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-base-content mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="w-full px-4 py-3 bg-base-100 border border-base-300 rounded-lg text-base-content placeholder-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="First name"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-base-content mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="w-full px-4 py-3 bg-base-100 border border-base-300 rounded-lg text-base-content placeholder-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Last name"
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-base-content mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-base-100 border border-base-300 rounded-lg text-base-content placeholder-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
                onChange={handleChange}
                value={formData.email}
                required
                autoComplete="on"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-base-content mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="w-full px-4 py-3 bg-base-100 border border-base-300 rounded-lg text-base-content placeholder-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Create a password"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-6 bg-primary text-primary-content font-medium rounded-lg hover:bg-primary-focus transition-colors duration-200 shadow-sm disabled:opacity-50"
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-base-content/70">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:text-primary-focus font-semibold transition-colors duration-200">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
