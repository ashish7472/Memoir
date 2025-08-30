import { Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaInfo } from "react-icons/fa";

const NavLinks = ({ toggle }) => {
  return (
    <>
      <li onClick={toggle}>
        <Link to="/" className="hover:bg-base-200 rounded-lg transition-colors duration-200">
          <FaHome className="text-primary" />
          <span className="font-medium">Home</span>
        </Link>
      </li>
      <li onClick={toggle}>
        <Link to="/entries" className="hover:bg-base-200 rounded-lg transition-colors duration-200">
          <FaBookOpen className="text-primary" />
          <span className="font-medium">Your Entries</span>
        </Link>
      </li>
      <li onClick={toggle}>
        <Link to="/about" className="hover:bg-base-200 rounded-lg transition-colors duration-200">
          <FaInfo className="text-primary" />
          <span className="font-medium">About</span>
        </Link>
      </li>
    </>
  );
};
export default NavLinks;
