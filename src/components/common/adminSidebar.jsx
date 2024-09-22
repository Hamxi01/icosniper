import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";

const AdminSidebar = () => {
  const currentPage = "Dashboard";

  const pages = [
    { name: "Dashboard", link: "/" },
    { name: "Ads", link: "/ads" },
    { name: "Coins", link: "/coins" },
    { name: "Blogs", link: "/blogs" },
    { name: "Users", link: "/users" },
  ];

  return (
    <aside className="w-full h-full flex flex-col justify-between gap-5 p-4">
      <div className="flex flex-col gap-5">
        {/* <Link href={"/admin"} className="block">
          <Image
            src={"/img/logo-with-white.png"}
            alt="Logo"
            width={250}
            height={150}
            className="w-full h-fit border-b border-b-violet-600 pb-5"
          />
        </Link> */}
        <div className="flex flex-col gap-2">
          {pages?.map((page) => (
            <Link
              href={`/admin${page.link}`}
              className={`bg-transparent py-2 px-4 text-center w-full border-b ${
                page.name === currentPage ? "bg-violet-800 text-white" : ""
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
