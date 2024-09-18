import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const page = () => {
  return (
    <>
      <main class="container mx-auto w-full max-w-[1366px] mb-28 flex flex-col items-center p-1">
        <section class="flex w-full flex-col">
          <nav
            aria-label="Breadcrumb"
            class="mb-6 mt-6 flex items-center text-xs font-normal"
          >
            <a
              class="text-violet-400 hover:text-violet-500 transition-colors"
              href="/"
            >
              Home
            </a>
            {/* <svg class="mx-1 mt-1 h-4 w-4">
              <use xlink:href="#breadcrumb-arrow"></use>
            </svg> */}
            <a
              class=" capitalize text-neutral-400 transition-colors hover:text-white"
              href="/dashboard"
            >
              dashboard
            </a>
          </nav>
          <div class="flex md:h-16 pb-4 justify-between">
            <h1 class="text-3xl font-medium">Dashboard</h1>
            <div class="flex flex-col md:flex-row items-center gap-2">
              <a
                class="border-2 bg-mediumslateblue-200 border-purple-100 hover:bg-purple-100 active:bg-purple-200 transition-colors rounded-md text-white p-1"
                href="/settings"
              >
                Account Settings
              </a>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex justify-between gap-5 ">
              <h2 class="whitespace-nowrap text-xl">Your Watchlist</h2>
              <form class="mb-2 flex max-w-[320px] relative h-10 w-full items-center space-x-1 rounded-md border bg-secondary-bg-100 p-3 border-secondary-bg-100">
                <img class="h-6 w-6" src="/v3/search-icon.svg" alt="Search" />
                <input
                  class="w-full bg-secondary-bg-100 text-sm text-gray-100 placeholder-gray-100 outline-none xl:text-base "
                  id="header-search-input-1"
                  type="text"
                  placeholder="Search"
                  value=""
                />
                <button class="w-3" type="button" aria-label="Clear Search">
                  <img
                    src="/v3/x-icon.svg"
                    class="h-3 w-full hidden"
                    alt="Reset"
                  />
                </button>
              </form>
            </div>
            <div class="overflow-x-auto undefined">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Chain</TableHead>
                    <TableHead>Market Cap</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>24h</TableHead>
                    <TableHead>Launch Date</TableHead>
                    <TableHead>Votes</TableHead>
                    <TableHead>Votes 24</TableHead>
                    <TableHead>Vote</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <img
                        src="https://cdn.coinmooner.com/logo/42683.png?v=0"
                        alt=""
                        className="w-10"
                      />
                    </TableCell>
                    <TableCell>
                      <h4>Pepe Unchained</h4>
                      <p>PEPU</p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <img
                          src="https://coinmooner.com/v3/chains/ethereum.svg"
                          alt=""
                          className="w-5"
                        />
                        <span>ETH</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <img
                          src="https://coinmooner.com/v3/spinner.svg"
                          alt=""
                          className="w-5"
                        />
                        <span>Presale</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="rounded py-0 text-xl dark:bg-gray-700 dark:text-slate-200">
                        -
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="rounded py-0 text-xl dark:bg-gray-700 dark:text-slate-200">
                        -
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="rounded py-0 text-xl dark:bg-gray-700 dark:text-slate-200">
                        -
                      </Badge>
                    </TableCell>
                    <TableCell>In 13 Days</TableCell>
                    <TableCell>250,256 </TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        className="!py-1 px-4 bg-[#4c3cce] border-2 border-[#6857f3] text-white hover:bg-[#6857f3] h-fit"
                      >
                        Vote
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div class="mt-10">
            <div class="flex items-center justify-between gap-5 ">
              <h2 class="mb-5 whitespace-nowrap text-xl">Your Coins</h2>
              <span class="text-xs text-gray-200">
                To request changes, or if you cannot see your submitted coin
                here, please
                <a
                  class="text-violet-400 hover:text-violet-500 transition-colors"
                  href="/contact-us"
                >
                  Contact Us.
                </a>
              </span>
            </div>
            <div class="overflow-x-auto undefined">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Chain</TableHead>
                    <TableHead>Market Cap</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>24h</TableHead>
                    <TableHead>Launch Date</TableHead>
                    <TableHead>Votes</TableHead>
                    <TableHead>Votes 24</TableHead>
                    <TableHead>Vote</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow></TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
