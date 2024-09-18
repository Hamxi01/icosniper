import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
