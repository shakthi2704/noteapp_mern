import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../slices/user/usersApiSlice";
import { logout } from "../../slices/user/authSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMoonFill, RiSunFill, RiLogoutBoxRLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  const location = useLocation();
  const currentRouteName = location.pathname.replace("/", "");
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <header className="bg-white shadow p-4 sticky bg-opacity-75">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Welcome to the <span className="text-navy">NoteApp </span>-{" "}
          <span className=" text-primeBlue">
            {userInfo ? userInfo.name : "User"}
          </span>
        </h2>
      </div>
      <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl ">
        <div className="ml-[6px]">
          <div className="h-6 w-[224px] pt-1">
            <a
              className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
              href=" "
            />
            Main
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700">
              {" "}
              /{" "}
            </span>
            <Link className="text-sm font-normal capitalize" to="#">
              {currentRouteName}
            </Link>
          </div>
        </div>
        <div className="ml-[6px]">
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center">
              <FiSearch className="absolute left-3 h-5 w-5 text-primeBlue font-semibold" />
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-10 rounded-md bg-lightPrimary text-sm text-navy-700 outline-none placeholder-gray-400 focus:outline-none focus:ring focus:ring-primeBlue dark:bg-navy-900 dark:text-white dark:placeholder-gray-600"
              />
            </div>
            <div className="cursor-pointer ">
              <RiSunFill className="h-5 w-5 text-primeBlue " />
            </div>
            <div className="cursor-pointer ">
              <RiLogoutBoxRLine
                className="h-5 w-5 text-primeBlue "
                onClick={logoutHandler}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
