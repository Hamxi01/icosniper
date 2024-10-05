"use client";
import ChainIcons from "@/components/global/chain-icons";
import { useToast } from "@/components/global/use-toast";
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
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PromotedCoins = () => {
  const [user, setUser] = useState(null);
  const [promotedCoins, setPromotedCoins] = useState([]);
  const { addToast } = useToast();

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("tv3623315"));
    setUser(response);
  }, []);

  const fetchPromotedCoins = async () => {
    const data = await fetch(`/api/promoted-coins?votedUserId=${user?.id}`);
    if (data.ok) {
      const { promotedCoins } = await data.json();
      setPromotedCoins(promotedCoins);
    }
  };
  useEffect(() => {
    fetchPromotedCoins();
  }, [user]);

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

  const formatDate = (dateString) => {
    const launchDate = new Date(dateString);
    const now = new Date();
    const differenceInSeconds = Math.floor((now - launchDate) / 1000);

    let timeAgo = "";

    if (differenceInSeconds < 0) {
      const futureDifferenceInSeconds = Math.abs(differenceInSeconds);

      if (futureDifferenceInSeconds < 60) {
        timeAgo = `in ${futureDifferenceInSeconds} second${
          futureDifferenceInSeconds !== 1 ? "s" : ""
        }`;
      } else if (futureDifferenceInSeconds < 3600) {
        const minutes = Math.floor(futureDifferenceInSeconds / 60);
        timeAgo = `in ${minutes} minute${minutes !== 1 ? "s" : ""}`;
      } else if (futureDifferenceInSeconds < 86400) {
        const hours = Math.floor(futureDifferenceInSeconds / 3600);
        timeAgo = `in ${hours} hour${hours !== 1 ? "s" : ""}`;
      } else if (futureDifferenceInSeconds < 604800) {
        // 7 days
        const days = Math.floor(futureDifferenceInSeconds / 86400);
        timeAgo = `in ${days} day${days !== 1 ? "s" : ""}`;
      } else if (futureDifferenceInSeconds < 2419200) {
        // 30 days
        const weeks = Math.floor(futureDifferenceInSeconds / 604800);
        timeAgo = `in ${weeks} week${weeks !== 1 ? "s" : ""}`;
      } else if (futureDifferenceInSeconds < 29030400) {
        // 365 days
        const months = Math.floor(futureDifferenceInSeconds / 2419200);
        timeAgo = `in ${months} month${months !== 1 ? "s" : ""}`;
      } else {
        const years = Math.floor(futureDifferenceInSeconds / 29030400);
        timeAgo = `in ${years} year${years !== 1 ? "s" : ""}`;
      }
    } else {
      if (differenceInSeconds < 60) {
        timeAgo = `${differenceInSeconds} second${
          differenceInSeconds !== 1 ? "s" : ""
        } ago`;
      } else if (differenceInSeconds < 3600) {
        const minutes = Math.floor(differenceInSeconds / 60);
        timeAgo = `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
      } else if (differenceInSeconds < 86400) {
        const hours = Math.floor(differenceInSeconds / 3600);
        timeAgo = `${hours} hour${hours !== 1 ? "s" : ""} ago`;
      } else if (differenceInSeconds < 604800) {
        // 7 days
        const days = Math.floor(differenceInSeconds / 86400);
        timeAgo = `${days} day${days !== 1 ? "s" : ""} ago`;
      } else if (differenceInSeconds < 2419200) {
        // 30 days
        const weeks = Math.floor(differenceInSeconds / 604800);
        timeAgo = `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
      } else if (differenceInSeconds < 29030400) {
        // 365 days
        const months = Math.floor(differenceInSeconds / 2419200);
        timeAgo = `${months} month${months !== 1 ? "s" : ""} ago`;
      } else {
        const years = Math.floor(differenceInSeconds / 29030400);
        timeAgo = `${years} year${years !== 1 ? "s" : ""} ago`;
      }
    }

    return timeAgo;
  };

  const handleAddVote = async (coin) => {
    if (user?.id) {
      try {
        const response = await fetch(`/api/votes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" }, // Corrected header key
          body: JSON.stringify({ userId: user?.id, coinId: coin?.id }),
        });

        if (response.ok) {
          addToast({ title: "Vote Added Successfully" });
          fetchCoins(); // Assuming you want to refresh all coins, not just promoted ones
        } else {
          // Handle error response
          const errorData = await response.json();
          addToast({
            title: "Error Adding Vote",
            description: errorData.message || "Something went wrong",
          });
        }
      } catch (error) {
        // Catch any other errors (network, etc.)
        addToast({
          title: "Error Adding Vote",
          description: error.message,
        });
      }
    } else {
      addToast({
        title: "Please Login To Add A Vote",
      });
    }
  };

  const chainIconRes = (chain) => {
    const res = ChainIcons.find((item) => item.name === chain);
    return res ? res.icon : null; // Return the icon if found, otherwise return null
  };

  return (
    <section className="lg:px-0 px-2 py-5">
      <div
        className="container mx-auto rounded p-2 w-full max-w-[1366px] border border-[#223645]"
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
              <TableHead className="text-center">Market Cap </TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-center">Volume</TableHead>
              <TableHead className="text-center">24h</TableHead>
              <TableHead className="text-center">Launch Date</TableHead>
              <TableHead className="text-center">Votes</TableHead>
              <TableHead className="text-center">Votes 24</TableHead>
              <TableHead className="text-right">Vote</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {promotedCoins?.map((promotedCoin) => (
              <TableRow key={promotedCoin.coin?.id}>
                <TableCell>{promotedCoin.coin?.id}</TableCell>
                <TableCell>
                  <Link href={`/coins/single?id=${promotedCoin?.coin?.id}`}>
                    <img
                      src={promotedCoin.coin?.logo}
                      alt=""
                      className="max-w-[50px]"
                    />
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/coins/single?id=${promotedCoin?.coin?.id}`}>
                    <p className="font-bold text-white">
                      {promotedCoin.coin?.name}
                    </p>
                    <span className="text-xs text-[#a3a3a3]">
                      {promotedCoin.coin?.symbol}
                    </span>
                  </Link>
                </TableCell>
                <TableCell className="text-center">
                  {promotedCoin.coin?.tokenContractAddress?.length > 0 ? (
                    <img
                      src={chainIconRes(
                        promotedCoin.coin?.tokenContractAddress[0]?.Chain
                      )}
                      alt=""
                      className="w-[30px]"
                    />
                  ) : (
                    "N/A"
                  )}
                </TableCell>
                <TableCell>
                  {promotedCoin.coin?.marketCap < 1 ? (
                    <>
                      <div className="flex items-center gap-1 justify-center">
                        <img
                          src="/img/Loading.gif"
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
                    <div className="bg-[#ffffff26] w-6 h-6 rounded text-neutral-400 opacity-90 flex items-center justify-center mx-auto">
                      <Minus className="w-4" />
                    </div>
                  ) : (
                    $(promotedCoin.coin?.price)
                  )}
                </TableCell>
                <TableCell>
                  {promotedCoin.coin?.volume < 1 ? (
                    <div className="bg-[#ffffff26] w-6 h-6 rounded text-neutral-400 opacity-90 flex items-center justify-center mx-auto">
                      <Minus className="w-4" />
                    </div>
                  ) : (
                    $(promotedCoin.coin?.volume)
                  )}
                </TableCell>
                <TableCell>
                  <div className="bg-[#ffffff26] w-6 h-6 rounded text-neutral-400 opacity-90 flex items-center justify-center mx-auto">
                    <Minus className="w-4" />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {formatDate(new Date(promotedCoin.coin?.launchDate))}
                </TableCell>
                <TableCell className="text-center">
                  {promotedCoin.coin?.voteCount}
                </TableCell>
                <TableCell className="text-center">
                  {promotedCoin?.coin?.last24HourVotesCount}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    size="xs"
                    className="py-1 px-3 bg-[#2498d6] hover:bg-[#223645] border-2 border-[#1f6193] text-white"
                    onClick={() => handleAddVote(promotedCoin?.coin)}
                    disabled={promotedCoin?.coin?.hasVoted}
                  >
                    {promotedCoin?.coin?.hasVoted ? "Voted" : "Vote"}
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
