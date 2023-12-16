import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
// import { login } from "../actions/auth";
import { FaGoogle } from "react-icons/fa";

const Login = ({ login, isAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    login(email, password);
  };

  if (isAuthenticated) {
    navigate("/");
  }

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };
  return (
    <div className="flex h-screen">
      <div className="hidden md:block md:w-1/2 ">
        <img
          src="/images/bg1.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 p-8 flex items-center justify-center relative">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold my-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Login to your account
          </h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-md py-2 px-3 mb-3"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-md py-2 px-3 mb-3"
              value={password}
              onChange={(e) => onChange(e)}
            />
            <button
              type="submit"
              className="w-full px-10 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mb-3"
            >
              Login
            </button>
          </form>
          <p className="py-2">
            If you don't have an account, join us
            <Link to="/register">
              <span className="text-blue-400"> here</span>
            </Link>
          </p>
          <p className="py-2">
            Forgot you password ?
            <Link to="/reset-password">
              <span className="text-blue-400"> Reset Password</span>
            </Link>
          </p>
          <button
            type="button"
            onClick={continueWithGoogle}
            class="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          >
            <svg
              class="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fill-rule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// export default connect(mapStateToProps, { login })(Login);
export default Login;
