import React, { useEffect } from "react";
import { Navbar, Footer, Sidebar } from "../components";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";
const Layout = (props) => {
  useEffect(() => {
    props.checkAuthenticated();
    props.load_user();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-row gap-2">
        {/* <Sidebar/> */}
        {props.children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
