import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../HeroSection/Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
