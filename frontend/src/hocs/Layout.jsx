import React, { useEffect } from "react";
import { Navbar, Footer } from "../components";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";
import Sidebar from "../components/Sidebar";
const Layout = (props) => {
  useEffect(() => {
    props.checkAuthenticated();
    props.load_user();
  }, []);
  return (
    <>
      <Navbar />
      <div className='flex flex-row gap-2'>
        <Sidebar user={true}/>
        {props.children}
      </div>
      <Footer />
    </>
  );
};
export default connect(null, { checkAuthenticated, load_user })(Layout);
