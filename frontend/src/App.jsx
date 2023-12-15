import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Landing,
  Login,
  Register,
  Profile,
  ResetPassword,
  ResetPasswordConfirm,
} from "./containers";

import Layout from "./hocs/Layout";
import { Provider } from "react-redux";
import store from "./store";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AdminLanding from "./containers/admin/AdminLanding";
// ..
AOS.init();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          l;kpok
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Landing />} />
              <Route path="/login" exact element={<Login />} />
              {/* <Route path="/fields" exact element={<Fields />} /> */}
              <Route path="/register" exact element={<Register />} />
              {/* <Route path="/quiz" exact element={<Quiz />} /> */}
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/admin" exact element={<AdminLanding />} />
              <Route path="/dashboard" exact element={<AdminLanding />} />
              {/* <Route path="/create-project" exact element={<CreateProject />} /> */}
              {/* <Route path="/user-search" exact element={<UserSearch />} /> */}
              {/* <Route path="/activate" exact element={<Activate />} /> */}
              {/* <Route
                path="/project-details"
                exact
                element={<ProjectDetails />}
              /> */}
              <Route path="/reset-password" exact element={<ResetPassword />} />
              <Route
                path="/reset-password-confirm"
                exact
                element={<ResetPasswordConfirm />}
              />
            </Routes>
          </div>
        </Layout>
      </Router>
    </Provider>
  );
}
