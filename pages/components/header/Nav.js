import React from "react";
import { useAuth } from "../../../context/AuthContext";

const Nav = () => {
  const { user, logout } = useAuth();

  const handleSignout = logout;

  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <h1 className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
          Ferns and Petals
        </h1>
      </div>
      <div>
        <a
          href="http://localhost:3000"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Home
        </a>
        <a
          href="/components/user/Register"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Register
        </a>
        <a
          href="/components/user/login"
          classNameName="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 p-5"
        >
          <span className="text-green-500 p-5">
            {user && user ? (
              <button
                color="primary"
                component="a"
                onClick={() => {
                  handleSignout();
                }}
                variant="contained"
              >
                LOGOUT
              </button>
            ) : (
              "LOGIN"
            )}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
