import React, { useEffect } from "react";
import { Navbar, Footer } from "../components";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";
const Layout = (props) => {
  useEffect(() => {
    props.checkAuthenticated();
    props.load_user();
  }, []);
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};
export default connect(null, { checkAuthenticated, load_user })(Layout);
