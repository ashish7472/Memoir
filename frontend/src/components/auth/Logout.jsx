import { useState } from "react";
import { authAPI } from "../../api/auth";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = ({ close }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const response = await authAPI.logout();
      logout();
      navigate("/");
      close();
      toast.success(response.message);
    } catch (error) {
      console.error(error);
      toast.error("Logout failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-lg">Are you sure you want to log out?</h1>
      <div className="modal-action">
        <button onClick={close} className="btn btn-success">
          Cancel
        </button>
        <button
          onClick={handleLogout}
          className="btn btn-error"
          disabled={isLoading}
        >
          {isLoading ? "Logging out..." : "Confirm"}
        </button>
      </div>
    </div>
  );
};
export default Logout;
