import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/Authprovider";

const Login = () => {
  const [error, seterror] = useState("");
  const { signwithlogin } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handlesingin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signwithlogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        seterror("Error:password does not match!");
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-black pb-28">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold  mb-8 text-pink-700">
              Login now!
            </h1>
            <h3 className="text-1xl   text-blue-600">{error}</h3>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-lg shadow-pink-700">
            <form onSubmit={handlesingin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl text-pink-700">
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered bg-pink-700"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl text-pink-700">
                    Password
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered bg-pink-700"
                />
                <label className="label ">
                  <a
                    href="#"
                    className="label-text-alt text-1xl text-pink-700  link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black text-pink-white hover:bg-pink-700">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
