import { useEffect, useState } from "react";
import { userAPI } from "../../api/user";
import { useUser } from "../../context/UserContext";
import { toast } from "react-toastify";

const Profile = ({ close }) => {
  const { user, updateUser } = useUser();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (user) {
      setEmail(user?.email);
      setFirstName(user?.firstName);
      setLastName(user?.lastName);
    }
  }, [user, close]);

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await userAPI.updateProfile({ firstName, lastName });
      updateUser(response.data);
      toast.success(response.message);
      close();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card-body">
      <h2 className="card-title block text-center text-lg mb-2">
        Profile Information
      </h2>

      <p className="text-center text-error">{email}</p>
      <div className="text-center my-3">
        <p>You can update your first and last name directly on this page.</p>
        <p>And please note that your email address cannot be changed here.</p>
        <p>
          Once you've made changes to your name, click the 'Save Changes' button
          below.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-5 justify-center items-center">
          <div>
            <label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input rounded-lg my-3"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input rounded-lg my-3"
              placeholder="Optional"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full rounded-lg mt-3"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};
export default Profile;
