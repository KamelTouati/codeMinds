import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Landing,
  Login,
  Register,
  Profile,
  ResetPassword,
  ResetPasswordConfirm,
  DashboardAdmin,
  DashboardMeetingMinutes,
  AdminAnnouncement,
  AdminScheduleList,
  Announcement,
  AdminScheduler,
  AdminStudent,
} from "./containers";

import Layout from "./hocs/Layout";
import { Provider } from "react-redux";
import store from "./store";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Landing />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route
                path="/dashboard-admin"
                exact
                element={<DashboardAdmin />}
              />
              <Route
                path="/admin-announcement"
                exact
                element={<AdminAnnouncement />}
              />
              <Route
                path="/admin-schedule-list"
                exact
                element={<AdminScheduleList />}
              />
              <Route path="/announcement" exact element={<Announcement />} />
              <Route
                path="/admin-scheduler"
                exact
                element={<AdminScheduler />}
              />
              <Route path="/admin-student" exact element={<AdminStudent />} />
              <Route
                path="/dashboard-meeting-minutes"
                exact
                element={<DashboardMeetingMinutes />}
              />
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
