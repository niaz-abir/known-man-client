import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/Authprovider";

const Register = () => {
  const { signwithregister, signwithgoogle } = useContext(Authcontext);

  const gogleprovider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleregister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signwithregister(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        // navigate("/Home");
        navigate(-1);
      })
      .catch((error) => console.error(error));
  };
  const handlegoogle = () => {
    signwithgoogle(gogleprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-black  pb-52 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-8 text-pink-700 ">
              Register now!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-2xl shadow-lg shadow-pink-700 ">
            <form onSubmit={handleregister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl text-pink-700">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered bg-pink-700"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl text-pink-700">
                    Email
                  </span>
                </label>
                <input
                  type="email"
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
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered bg-pink-700"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt text-1xl text-pink-700  link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn bg-black hover:bg-pink-700 ">
                  Register
                </button>
              </div>
              <div className="form-control mt-4">
                <button
                  onClick={handlegoogle}
                  className="btn  bg-black hover:bg-pink-700 
                "
                >
                  Sign with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
