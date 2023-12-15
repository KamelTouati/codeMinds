import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";

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
      <img
        className="absolute right-0 top-[50px] my-5 -z-1"
        src="/images/bg.svg"
        alt=""
      />
      <div className="hidden md:block md:w-1/2 ">
        <img
          src="/images/login.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 p-8 flex items-center justify-center relative">
        <div className="w-full max-w-md">
          <h2 className="text-xl font-lg my-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
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
            className="w-fit border border-white hover:bg-grat-600 hover:border-gray-600 text-gray-800 p-2 rounded-md flex items-center justify-center"
            onClick={continueWithGoogle}
            type="button"
          >
            <img
              src="/images/google.svg"
              alt="Gmail Logo"
              className="w-6 h-6 mr-2  "
            />
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

export default connect(mapStateToProps, { login })(Login);
