import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
// import { reset_password } from "../actions/auth";

const ResetPassword = ({ reset_password }) => {
  const navigate = useNavigate();
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
    navigate("/");
  }
  return (
    <div className="flex justify-around items-center">
      <div>
        <h2 className="text-3xl font-bold my-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          Request Password Reset
        </h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@domaine.com"
              value={email}
              name="email"
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Reset Password
          </button>
        </form>
      </div>
      <div>
        <img className="z-20 w-[500px] relative" src="/images/bg3.svg" alt="" />
      </div>
    </div>
  );
};

// export default connect(null, { reset_password })(ResetPassword);
export default ResetPassword;
