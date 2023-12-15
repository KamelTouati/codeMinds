import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
import axios from "axios";

const Register = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  if (accountCreated) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="flex h-screen">
      <img
        className="absolute right-0 top-[50px] my-5 -z-1"
        src="/images/bg.svg"
        alt=""
      />
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center relative">
        <div className="w-full max-w-md">
          <h2 className="text-xl font-lg my-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Create your account now
          </h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded-md py-2 px-3 mb-3"
              value={email}
              onChange={(e) => onChange(e)}
            />
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
            <input
              type="password"
              placeholder="Repeat your password"
              className="w-full border rounded-md py-2 px-3 mb-3"
              value={email}
              onChange={(e) => onChange(e)}
            />

            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Collaborator
              </label>
            </div>
            <div className="flex items-center my-5">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Project manager
              </label>
            </div>
          </form>
          <button
            type="submit"
            className="px-10 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mb-3"
          >
            Sign up
          </button>
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
          <p className="py-2">
            If you already have an account, log in
            <Link to="/login">
              <span className="text-blue-400"> here</span>
            </Link>
          </p>
          <p className="py-2">
            Forgot you password ?
            <Link to="/reset-password">
              <span className="text-blue-400"> Reset Password</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src="/images/register.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Register);
