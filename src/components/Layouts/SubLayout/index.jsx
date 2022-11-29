import React from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const SubLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default SubLayout;
