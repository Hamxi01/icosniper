"use client";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [user, setUser] = useState(undefined); // Initially undefined to differentiate between 'not yet checked' and 'null'
  const router = useRouter();

  useEffect(() => {
    // Get user data from localStorage and set it in state
    const userData = localStorage.getItem("tv3623315");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null); // Explicitly set to null if no user data found
    }
  }, []);

  useEffect(() => {
    // Redirect to sign-in page if user is null (i.e., not logged in)
    if (user === null) {
      router.push("/sign-in");
    }
  }, [user, router]);

  if (user === undefined) {
    // Still checking for user data, show a loading state
    return (
      <div className="container mx-auto max-w-[1366px] w-full text-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
