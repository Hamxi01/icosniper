"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MenuIcon, Moon, PlusCircle, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Header = () => {
  const { setTheme } = useTheme();

  const ThemeChange = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="dark:text-white dark:border-slate-500"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="bg-gradient-to-b to-[#6254d42e] from-[#0b162700] py-3 ">
      <section className="mx-auto container w-full max-w-[1366px] flex items-center justify-between gap-8">
        <Link href={"/"}>
          <Image
            src={"/img/logo.webp"}
            alt="Logo"
            width={200}
            height={200}
            className="w-full max-w-[220px] h-fit"
          />
        </Link>
        <Menubar className="dark:text-white dark:border-slate-500 lg:flex hidden">
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href={"/"}>Coins</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarSeparator />
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href={"/airdrops"}>Airdrops</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarSeparator />
          <MenubarMenu>
            <MenubarTrigger>Blog</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href={"/blog"}>Latest</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/blog?News"}>News</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/blog?Finance"}>Finance</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/blog?DeFi news"}>DeFi news</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/blog?Dapps"}>Dapps</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/blog?GameFi"}>GameFi</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/blog?Exchange news"}>Exchange news</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/blog?Launchpad news"}>Launchpad news</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/blog?Altcoins"}>Altcoins</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/blog?NFT"}>NFT</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/blog?Tutorials"}>Tutorials</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarSeparator />
          <MenubarMenu>
            <MenubarTrigger>Company</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href={"/contact-us"}>Contact Us</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/ads"}>Advertise</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/partners"}>Partners</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarSeparator />
        </Menubar>
        <div className="flex items-center gap-5">
          <Button asChild size="sm" className="sm:flex hidden">
            <Link
              href={"/add-coin"}
              className="flex gap-2 !bg-[#4c3cce] text-white hover:!bg-[#6857f3]"
            >
              <span>Add Coin</span>
              <PlusCircle className="w-4" />
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger className="dark:text-white lg:hidden flex">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className="text-white">
              <SheetHeader>
                <SheetTitle>Something</SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="items-center gap-2 text-sm lg:flex hidden">
            <Link
              href={"/sign-in"}
              className="text-[#a78bfa] hover:text-[#8b5cf6]"
            >
              Login
            </Link>
            <Link
              href={"/sign-up"}
              className="text-[#a78bfa] hover:text-[#8b5cf6]"
            >
              Register
            </Link>
          </div>
          <ThemeChange />
        </div>
      </section>
    </header>
  );
};

export default Header;
