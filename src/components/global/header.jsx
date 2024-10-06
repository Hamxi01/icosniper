"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import { MenuIcon, Moon, PlusCircle, SearchIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useRouter } from "next/navigation";
import "./header.css";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";

const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("tv3623315"));
    setUser(userData);
  }, []);

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

  const handleLogout = async () => {
    await signOut(auth);

    localStorage.removeItem("tv3623315");
    router.refresh();
    router.push("/sign-in");
  };
  // bg-gradient-to-b to-[#6254d42e] from-[#0b162700]

  return (
    <header className="!bg-[#223645] pb-3 ">
      {/* <div className="container mx-auto w-full max-w-[1366px] lg:px-0 px-2 border-white border-opacity-10 py-1.5 lg:border-b">
        <div class="swiper-wrapper text-xs flex flex-wrap">
          <div class="space-x-1 mr-[20px]">
            <span class="text-[#8e9197]">Market Cap:</span>
            <span class="text-white">$2.18T</span>
            <span class="text-[#10b981]">(+1.71%)</span>
          </div>
          <div class="space-x-1 mr-[20px]">
            <span class="text-[#8e9197]">24h Volume:</span>
            <span class="text-white">$91.32B</span>
          </div>
          <div class="space-x-1 mr-[20px] sm:block hidden">
            <span class="text-[#8e9197]">BTC:</span>
            <span class="text-white">$60469</span>
            <span class="text-[#10b981]">(+3.77%)</span>
          </div>
          <div class="space-x-1 mr-[20px] sm:block hidden">
            <span class="text-[#8e9197]">ETH:</span>
            <span class="text-white">$2327.15</span>
            <span class="text-[#10b981]">(+1.68%)</span>
          </div>
          <div class="space-x-1 mr-[20px] md:block hidden">
            <span class="text-[#8e9197]">BNB:</span>
            <span class="text-white">$546.24</span>
            <span class="text-[#10b981]">(+1.96%)</span>
          </div>
          <div class="space-x-1 mr-[20px] lg:block hidden">
            <span class="text-[#8e9197]">BTC Dominance:</span>
            <span class="text-white">54.92%</span>
          </div>
          <div class="space-x-1 mr-[20px] xl:block hidden">
            <span class="text-[#8e9197]">Cryptocurrencies listed:</span>
            <span class="text-white">44605</span>
          </div>
          <div class="space-x-1 mr-[20px] xl:block hidden">
            <span class="text-[#8e9197]">Total Airdrops:</span>
            <span class="text-white">2009</span>
          </div>
        </div>
      </div> */}
      <section className="w-full">
        <script src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"></script>
        <gecko-coin-price-marquee-widget
          locale="en"
          dark-mode="true"
          coin-ids=""
          initial-currency="usd"
          className="!bg-transparent"
        ></gecko-coin-price-marquee-widget>
        <style jsx>{`
          .gecko-widget.gecko-dark {
            background: transparent !important;
          }
        `}</style>
      </section>
      <section className="mx-auto container w-full max-w-[1366px] flex items-center justify-between gap-8 pt-3">
        <Link href={"/"}>
          <Image
            src={"/img/logo-with-white.png"}
            alt="Logo"
            width={200}
            height={200}
            className="w-full max-w-[230px] h-fit"
          />
        </Link>
        <Menubar className="dark:text-white dark:border-slate-500 lg:flex hidden border-0">
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href={"/"} className="text-[1rem]">
                Coins
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarSeparator />
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href={"/airdrops"} className="text-[1rem]">
                ICO Scam
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarSeparator />
          <MenubarMenu>
            <MenubarTrigger className="text-[1rem]">News</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href={"/news"} className="text-sm">
                  Latest
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/news?category=News"} className="text-sm">
                  News
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/news?category=Finance"} className="text-sm">
                  Finance
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/news?category=DeFi news"} className="text-sm">
                  DeFi news
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/news?category=Dapps"} className="text-sm">
                  Dapps
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/news?category=GameFi"} className="text-sm">
                  GameFi
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/news?category=Exchange news"} className="text-sm">
                  Exchange news
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link
                  href={"/news?category=Launchpad news"}
                  className="text-sm"
                >
                  Launchpad news
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/news?category=Altcoins"} className="text-sm">
                  Altcoins
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/news?category=NFT"} className="text-sm">
                  NFT
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/news?category=Tutorials"} className="text-sm">
                  Tutorials
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarSeparator />
          <MenubarMenu>
            <MenubarTrigger className="text-[1rem]">About Us</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href={"/contact-us"} className="text-sm">
                  Contact Us
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/ads"} className="text-sm">
                  Advertise
                </Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={"/partners"} className="text-sm">
                  Partners
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarSeparator />
        </Menubar>
        <div className="flex items-center gap-5">
          <form class="hidden sm:flex relative h-10 w-full items-center space-x-1 rounded-md border bg-[#1e2338] p-3 border-[#1e2338]">
            <SearchIcon className="text-[#8e9197]" />
            <input
              class="w-full bg-[#1e2338] text-sm text-[#8e9197] placeholder-[#8e9197] outline-none xl:text-base "
              id="header-search-input-1"
              type="text"
              placeholder="Search"
            />
            <button class="w-3" type="button" aria-label="Clear Search">
              <img src="/v3/x-icon.svg" class="h-3 w-full hidden" alt="Reset" />
            </button>
          </form>
          <Button asChild size="sm" className="sm:flex hidden">
            <Link
              href={"/add-coin"}
              className="flex gap-2 !bg-[#2498d6] text-white hover:!bg-[#2498d6]"
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
          {user ? (
            <>
              <div className="items-center gap-2 text-sm lg:flex hidden">
                <Link
                  href={"/dashboard"}
                  className="text-[#2498d6] hover:text-[#2498d6]"
                >
                  Dashboard
                </Link>
                <Button
                  variant="ghost"
                  className="text-[#2498d6] hover:text-[#2498d6]"
                  onClick={() => handleLogout()}
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="items-center gap-2 text-sm lg:flex hidden">
                <Link
                  href={"/sign-in"}
                  className="text-[#2498d6] hover:text-[#2498d6]"
                >
                  Login
                </Link>
                <Link
                  href={"/sign-up"}
                  className="text-[#2498d6] hover:text-[#2498d6]"
                >
                  Register
                </Link>
              </div>
            </>
          )}

          <ThemeChange />
        </div>
      </section>
    </header>
  );
};

export default Header;
