import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Minus } from "lucide-react";
import React from "react";

const PromotedCoins = () => {
  const promotedCoins = [
    {
      id: 1,
      name: "Pepe Unchained",
      shortName: "PEPU",
      img: "https://cdn.coinmooner.com/logo/42683.webp?v=0",
      chain: "https://coinmooner.com/v3/chains/ethereum.svg",
      marketCap: 0,
      price: 0,
      volume: 0,
      launchDate: "in 24 hours",
      votes: 250238,
    },
    {
      id: 2,
      name: "The Meme Games",
      shortName: "MGMES",
      img: "https://cdn.coinmooner.com/logo/43452.webp?v=0",
      chain: "https://coinmooner.com/v3/chains/ethereum.svg",
      marketCap: 0,
      price: 0,
      volume: 0,
      launchDate: "in 3 days",
      votes: 250238,
    },
    {
      id: 3,
      name: "Pepe Unchained",
      shortName: "PEPU",
      img: "https://cdn.coinmooner.com/logo/42683.webp?v=0",
      chain: "https://coinmooner.com/v3/chains/ethereum.svg",
      marketCap: 0,
      price: 0,
      volume: 0,
      launchDate: "in 24 hours",
      votes: 250238,
    },
    {
      id: 4,
      name: "Pepe Unchained",
      shortName: "PEPU",
      img: "https://cdn.coinmooner.com/logo/42683.webp?v=0",
      chain: "https://coinmooner.com/v3/chains/ethereum.svg",
      marketCap: 0,
      price: 0,
      volume: 0,
      launchDate: "in 24 hours",
      votes: 250238,
    },
    {
      id: 5,
      name: "Pepe Unchained",
      shortName: "PEPU",
      img: "https://cdn.coinmooner.com/logo/42683.webp?v=0",
      chain: "https://coinmooner.com/v3/chains/ethereum.svg",
      marketCap: 0,
      price: 0,
      volume: 0,
      launchDate: "in 24 hours",
      votes: 250238,
    },
    {
      id: 6,
      name: "Pepe Unchained",
      shortName: "PEPU",
      img: "https://cdn.coinmooner.com/logo/42683.webp?v=0",
      chain: "https://coinmooner.com/v3/chains/ethereum.svg",
      marketCap: 0,
      price: 0,
      volume: 0,
      launchDate: "in 24 hours",
      votes: 250238,
    },
    {
      id: 7,
      name: "Pepe Unchained",
      shortName: "PEPU",
      img: "https://cdn.coinmooner.com/logo/42683.webp?v=0",
      chain: "https://coinmooner.com/v3/chains/ethereum.svg",
      marketCap: 0,
      price: 0,
      volume: 0,
      launchDate: "in 24 hours",
      votes: 250238,
    },
    {
      id: 8,
      name: "Pepe Unchained",
      shortName: "PEPU",
      img: "https://cdn.coinmooner.com/logo/42683.webp?v=0",
      chain: "https://coinmooner.com/v3/chains/ethereum.svg",
      marketCap: 0,
      price: 0,
      volume: 0,
      launchDate: "in 24 hours",
      votes: 250238,
    },
    {
      id: 9,
      name: "Pepe Unchained",
      shortName: "PEPU",
      img: "https://cdn.coinmooner.com/logo/42683.webp?v=0",
      chain: "https://coinmooner.com/v3/chains/ethereum.svg",
      marketCap: 0,
      price: 0,
      volume: 0,
      launchDate: "in 24 hours",
      votes: 250238,
    },
    {
      id: 10,
      name: "Pepe Unchained",
      shortName: "PEPU",
      img: "https://cdn.coinmooner.com/logo/42683.webp?v=0",
      chain: "https://coinmooner.com/v3/chains/ethereum.svg",
      marketCap: 0,
      price: 0,
      volume: 0,
      launchDate: "in 24 hours",
      votes: 250238,
    },
  ];

  return (
    <section className="lg:px-0 px-2 py-5">
      <div
        className="container mx-auto rounded p-2 w-full max-w-[1366px] border border-[#4c3cce66]"
        style={{
          boxShadow: "0 0 #0000, 0 0 #0000, 0 0 20px #4c3cce60",
        }}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Chain</TableHead>
              <TableHead>Market Cap </TableHead>
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
            {promotedCoins?.map((coin) => (
              <TableRow key={coin?.id}>
                <TableCell>{coin?.id}</TableCell>
                <TableCell>
                  <img src={coin?.img} alt="" className="max-w-[35px]" />
                </TableCell>
                <TableCell>
                  <p className="font-bold text-white">{coin?.name}</p>
                  <span className="text-xs text-[#a3a3a3]">
                    {coin?.shortName}
                  </span>
                </TableCell>
                <TableCell>
                  <img src={coin?.chain} alt="" className="w-[20px]" />
                </TableCell>
                <TableCell>
                  {coin?.marketCap < 1 ? (
                    <>
                      <div className="flex items-center gap-1">
                        <img
                          src="https://coinmooner.com/v3/spinner.svg"
                          alt=""
                          className="w-[25px]"
                        />
                        <span>Presale</span>
                      </div>
                    </>
                  ) : (
                    $(coin?.marketCap)
                  )}
                </TableCell>
                <TableCell>
                  {coin?.price < 1 ? (
                    <div className="bg-[#ffffff26] w-6 h-6 rounded text-neutral-400 opacity-90 flex items-center justify-center">
                      <Minus className="w-4" />
                    </div>
                  ) : (
                    $(coin?.price)
                  )}
                </TableCell>
                <TableCell>
                  {coin?.volume < 1 ? (
                    <div className="bg-[#ffffff26] w-6 h-6 rounded text-neutral-400 opacity-90 flex items-center justify-center">
                      <Minus className="w-4" />
                    </div>
                  ) : (
                    $(coin?.volume)
                  )}
                </TableCell>
                <TableCell>
                  <div className="bg-[#ffffff26] w-6 h-6 rounded text-neutral-400 opacity-90 flex items-center justify-center">
                    <Minus className="w-4" />
                  </div>
                </TableCell>
                <TableCell>{coin?.launchDate}</TableCell>
                <TableCell>{coin?.votes}</TableCell>
                <TableCell>1</TableCell>
                <TableCell>
                  <Button
                    size="xs"
                    className="py-1 px-3 bg-[#4c3cce] hover:bg-[#6857f3] border-2 border-[#6857f3] text-white"
                  >
                    Vote
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default PromotedCoins;
