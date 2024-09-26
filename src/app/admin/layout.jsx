"use client";

import AdminSidebar from "@/components/common/adminSidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter

const Layout = ({ children }) => {
  const { setTheme } = useTheme();
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  // Extracting the current page name from the pathname
  const currentPage = pathname.split("/").pop().toLowerCase();

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
