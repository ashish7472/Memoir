import Navbar from "./navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useProfileQuery } from "../redux/api/usersApiSlice";
import { useDispatch } from "react-redux";
import { removeUserInfo, userInfo } from "../redux/features/userSlice";
import Loader from "./Loader";
import NavLinks from "./navbar/NavLinks";
import SearchBox from "./navbar/SearchBox";
import logo from "../assets/logo.svg";

const Layout = () => {
  const { data: profile, isError, isLoading } = useProfileQuery(undefined, {
    skip: true // Skip the query initially
  });
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggle = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    // Only set ready state immediately, don't fetch profile here
    setIsReady(true);
  }, []);

  if (!isReady) {
    const getTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "dark";
    return (
      <div
        data-theme={getTheme}
        className="flex justify-center items-center min-h-[calc(100dvh)]"
      >
        <Loader />
      </div>
    );
  }

  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={toggle}
      />
      <div className="drawer-content">
        <Navbar />
        <Outlet />
        <Footer />
      </div>

      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-screen w-80 p-4">
          <div className="py-4 pb-5">
            <Link
              className="btn btn-ghost text-2xl p-0"
              to="/"
              onClick={toggle}
            >
              <img className="w-10 h-10" src={logo} alt="logo" />
              Memoir
            </Link>
          </div>
          <SearchBox toggle={toggle} />
          <NavLinks toggle={toggle} />
        </ul>
      </div>
    </div>
  );
};
export default Layout;
