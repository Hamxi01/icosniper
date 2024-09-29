import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";

const AdminSidebar = ({ currentPage }) => {
  // Accept currentPage as a prop
  const pages = [
    { name: "Dashboard", link: "/" },
    { name: "Coins", link: "/coins" },
    { name: "News", link: "/news" },
    { name: "Users", link: "/users" },
    { name: "Partners", link: "/partners" },
    { name: "ICO-Scams", link: "/ico-scams" },
    { name: "Banners", link: "/banners" },
    { name: "Promoted", link: "/promoted" },
    { name: "Hottest-Pairs", link: "/hottest-pairs" },
  ];

  return (
    <aside className="w-full h-full flex flex-col justify-between gap-5 p-4 bg-gray-900 text-gray-200">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          {pages?.map((page) => (
            <Link
              key={page.name}
              href={`/admin${page.link}`}
              className={`py-2 px-4 text-center w-full rounded transition-colors duration-300 ${
                page.name.toLowerCase() === currentPage
                  ? "bg-violet-800 text-white"
                  : "bg-transparent text-gray-200 hover:bg-violet-700"
              }`}
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div>
      <Button className="w-full gap-3">
        <LogOutIcon />
        Logout
      </Button>
    </aside>
  );
};

export default AdminSidebar;
