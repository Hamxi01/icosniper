import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const NewCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    try {
      const response = await fetch(
        `/api/coins/new-coins?timestamp=${Date.now()}`,
        {
          cache: "no-store", // Force no caching in the fetch request
        }
      ); // Update the API endpoint accordingly
      const data = await response.json();

      if (data.coins) {
        setCoins(data.coins || []);
      }
    } catch (error) {
      console.error("Error fetching Coins:", error);
    }
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

  return (
    <>
      <Card className="bg-[#223645]">
        <CardHeader className="pb-0 pt-3">
          <CardTitle className="flex items-center gap-4 text-lg">
            <span>New Coins</span>
            <img src="/img/plus.gif" alt="" className="w-full max-w-[40px]" />
            {/* <Clock3Icon className="bg-[#7c4eff] rounded-full text-black w-5 h-5" /> */}
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-4">
              <span></span>
              <span className="text-[#a3a3a3] text-sm">Submited</span>
            </div>
            {coins?.slice(0, 4).map((coin, index) => (
              <a
                key={coin.id}
                href={`/coins/${coin.id}`}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">
                    {index + 1}
                  </span>
                  <Image
                    src={coin.logo} // Assuming coin logo is in the hottestPair object
                    alt={coin.name}
                    width={40}
                    height={40}
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <p className="dark:text-white">{coin.name}</p>
                  <span className="text-xs text-[#a3a3a3]">{coin.symbol}</span>
                </div>
                <span className="dark:text-white text-sm">
                  {formatDate(coin.launchDate)}
                </span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default NewCoins;
