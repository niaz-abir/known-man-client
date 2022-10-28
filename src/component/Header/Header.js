import React, { createContext, useContext } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Authcontext } from "../../context/Authprovider";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(Authcontext);

  const handlesignout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handletoggle = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    console.log("abir");
  };
  return (
    <div>
      <div className="navbar text-pink-700 font-bold bg-black  shadow-2xl shadow-lg shadow-pink-700 h-32  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-40"
            >
              <li>
                <a className="text-1xl hover:border-2 hover:border-pink-700 hover:bg-gray-600 hover:text-white">
                  Home
                </a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  <li tabIndex={0}>
                    <Link
                      to="/man"
                      className="text-1xl  hover:border-2 hover:border-pink-700 hover:bg-gray-600 hover:text-white"
                    >
                      Person
                    </Link>
                  </li>
                </a>
              </li>
              {user ? (
                <button
                  onClick={handlesignout}
                  className="text-2xl  p-2 hover:rounded-md hover:border-2 hover:bg-gray-600 hover:text-white hover:border-pink-700"
                >
                  Signout
                </button>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="text-1xl  hover:border-2 hover:border-pink-700 hover:bg-gray-600 hover:text-white"
                  >
                    login
                  </Link>

                  <Link
                    to="/register"
                    className="text-1xl  hover:border-2 hover:border-pink-700 hover:bg-gray-600 hover:text-white"
                  >
                    Register
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className=" p-3 rounded-lg text-1xl lg:text-3xl border-2 border-pink-700"
          >
            AUTOBIOGRAPHY
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link
                to="/home"
                className="text-2xl  hover:border-2 hover:border-pink-700 hover:bg-gray-600 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link
                to="/man"
                className="text-2xl  hover:border-2 hover:border-pink-700 hover:bg-gray-600 hover:text-white"
              >
                Person
              </Link>
            </li>
            {user ? (
              <button
                onClick={handlesignout}
                className="text-2xl  p-2 hover:rounded-md hover:border-2 hover:bg-gray-600 hover:text-white hover:border-pink-700"
              >
                Signout
              </button>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-2xl  hover:border-2 hover:border-pink-700 hover:bg-gray-600 hover:text-white"
                >
                  login
                </Link>

                <Link
                  to="/register"
                  className="text-2xl  hover:border-2   hover:bg-gray-600 hover:text-white hover:border-pink-700"
                >
                  Register
                </Link>
                <button
                  onClick={handletoggle}
                  className="text-2xl  hover:border-2   hover:bg-gray-600 hover:text-white hover:border-pink-700"
                >
                  Toogle
                </button>
              </li>
            )}
          </ul>
        </div>
        <div></div>
        <div className="navbar-end">
          <img
            className=" rounded-lg w-8 lg:w-8 mr-2"
            src={user?.photoURL}
          ></img>
          <span className="text-1xl  text-pink-700 border-y-2  border-gray-600  ">
            {user?.email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
