import Banner from "@/components/global/banner";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import Subscription from "@/components/global/subscription";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Banner />
      <main>{children}</main>
      <Subscription />
      <Footer />
    </>
  );
};

export default MainLayout;
