"use client";
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
import React, { useEffect, useState } from "react";

const PromotedCoins = () => {
  const [promotedCoins, setPromotedCoins] = useState([]);

  useEffect(() => {
    const fetchPromotedCoins = async () => {
      const data = await fetch(`/api/promoted-coins`);
      if (data.ok) {
        const { promotedCoins } = await data.json();
        setPromotedCoins(promotedCoins);
      }
    };
    fetchPromotedCoins();
  }, []);

  const formatRelativeTime = (date) => {
    const now = new Date();
    const secondsDiff = Math.floor((date - now) / 1000);

    // If the difference is negative, use absolute value and indicate it's in the past
    const absSecondsDiff = Math.abs(secondsDiff);

    const minutesDiff = Math.floor(absSecondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);
    const monthsDiff = Math.floor(daysDiff / 30);

    // Define the time direction based on the original difference
    const direction = secondsDiff >= 0 ? "in" : "ago";

    if (absSecondsDiff < 60) return `${direction} ${absSecondsDiff} seconds`;
    if (minutesDiff < 60) return `${direction} ${minutesDiff} minutes`;
    if (hoursDiff < 24) return `${direction} ${hoursDiff} hours`;
    if (daysDiff < 30) return `${direction} ${daysDiff} days`;
    if (monthsDiff < 12) return `${direction} ${monthsDiff} months`;

    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

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
            {promotedCoins?.map((promotedCoin) => (
              <TableRow key={promotedCoin.coin?.id}>
                <TableCell>{promotedCoin.coin?.id}</TableCell>
                <TableCell>
                  <img
                    src={promotedCoin.coin?.logo}
                    alt=""
                    className="max-w-[35px]"
                  />
                </TableCell>
                <TableCell>
                  <p className="font-bold text-white">
                    {promotedCoin.coin?.name}
                  </p>
                  <span className="text-xs text-[#a3a3a3]">
                    {promotedCoin.coin?.chain}
                  </span>
                </TableCell>
                <TableCell>
                  <img
                    src={promotedCoin.coin?.chain}
                    alt=""
                    className="w-[20px]"
                  />
                </TableCell>
                <TableCell>
                  {promotedCoin.coin?.marketCap < 1 ? (
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
                    $(promotedCoin.coin?.marketCap)
                  )}
                </TableCell>
                <TableCell>
                  {promotedCoin.coin?.price < 1 ? (
                    <div className="bg-[#ffffff26] w-6 h-6 rounded text-neutral-400 opacity-90 flex items-center justify-center">
                      <Minus className="w-4" />
                    </div>
                  ) : (
                    $(promotedCoin.coin?.price)
                  )}
                </TableCell>
                <TableCell>
                  {promotedCoin.coin?.volume < 1 ? (
                    <div className="bg-[#ffffff26] w-6 h-6 rounded text-neutral-400 opacity-90 flex items-center justify-center">
                      <Minus className="w-4" />
                    </div>
                  ) : (
                    $(promotedCoin.coin?.volume)
                  )}
                </TableCell>
                <TableCell>
                  <div className="bg-[#ffffff26] w-6 h-6 rounded text-neutral-400 opacity-90 flex items-center justify-center">
                    <Minus className="w-4" />
                  </div>
                </TableCell>
                <TableCell>
                  {formatRelativeTime(new Date(promotedCoin.coin?.launchDate))}
                </TableCell>
                <TableCell>{promotedCoin.coin?.votes}</TableCell>
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
