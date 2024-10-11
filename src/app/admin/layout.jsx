"use client";
import { useState } from "react";
import AdminSidebar from "@/components/common/adminSidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const [user, setUser] = useState(undefined); // Initially undefined to differentiate between 'not yet checked' and 'null'
  const [loading, setLoading] = useState(true); // Loading state

  const { setTheme } = useTheme();
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter();

  useEffect(() => {
    // Get user data from localStorage and set it in state
    const userData = localStorage.getItem("tv3623315");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null); // Explicitly set to null if no user data found
    }
    setLoading(false); // Set loading to false after checking localStorage
  }, []);

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  // Extracting the current page name from the pathname
  const currentPage = pathname.split("/").pop().toLowerCase();

  // if (!user) {
  //   return <div className="container mx-auto max-w-[1366px]">Loading...</div>;
  // }
  // Redirect based on user role
  useEffect(() => {
    if (loading) return; // Do not redirect while loading
    if (!user || (user && user.role !== "admin")) {
      router.push("/"); // Redirect if user is not logged in or not an admin
    }
  }, [loading, user, router]); // Add dependencies

  // Show a loading state until the user is checked
  if (loading) {
    return <div className="container mx-auto max-w-[1366px]">Loading...</div>;
  }

  return (
    <main className="min-h-screen flex flex-col w-full h-full">
      <div className="border-b border-b-gray-300 py-3 px-4 flex justify-between items-center gap-5">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger className="lg:invisible visible">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left">
              <AdminSidebar currentPage={currentPage} />{" "}
              {/* Pass currentPage as a prop */}
            </SheetContent>
          </Sheet>
          <Link href={"/admin"}>
            <Image
              src={"/img/logo-with-white.png"}
              alt="Logo"
              width={250}
              height={150}
              className="w-full max-w-[220px] h-fit"
            />
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>
      </div>
      <div className="flex w-full h-full flex-1">
        <div className="lg:w-[250px] w-0 hidden lg:block h-auto border-r border-r-violet-700">
          <AdminSidebar currentPage={currentPage} />{" "}
          {/* Pass currentPage as a prop */}
        </div>
        <div className="flex-1 p-4">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
