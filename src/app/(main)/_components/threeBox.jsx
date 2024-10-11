"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const ThreeBox = () => {
  const [boxBanner, setBoxBanner] = useState(null); // State for the box banner
  const [coins, setCoins] = useState([]);
  const [hottestPairs, setHottestPairs] = useState([]);

  useEffect(() => {
    fetchBanners();
    fetchCoins();
    fetchHottestPairs();
  }, []);

  // Fetch banners from the API
  const fetchBanners = async () => {
    try {
      // Fetch the box banner (placement: 'box')
      const boxRes = await fetch("/api/banners?placement=box", {
        cache: "no-store", // Force no caching in the fetch request
      });
      const boxData = await boxRes.json();
      setBoxBanner(boxData[0]); // Expecting 1 banner for box
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  const fetchCoins = async () => {
    try {
      const response = await fetch("/api/coins/new-coins", {
        cache: "no-store", // Force no caching in the fetch request
      }); // Update the API endpoint accordingly
      const data = await response.json();

      if (data.coins) {
        setCoins(data.coins);
      }
    } catch (error) {
      console.error("Error fetching Coins:", error);
    }
  };

  const fetchHottestPairs = async () => {
    try {
      const response = await fetch("/api/hottest-pairs", {
        cache: "no-store", // Force no caching in the fetch request
      }); // Update the API endpoint accordingly
      const data = await response.json();

      if (data.hottestPairs) {
        setHottestPairs(data.hottestPairs);
      }
    } catch (error) {
      console.error("Error fetching hottest pairs:", error);
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
    <section className="lg:px-0 px-2 py-3">
      <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-5 w-full max-w-[1366px] min-h-[235px]">
        {/* Box Banner */}
        <Card className="bg-[#223645] !p-0">
          {/* <CardHeader>
            <CardTitle className="flex items-center gap-4 text-lg">
              <span>ADS</span>
              <img src="/img/time.gif" alt="" className="w-full max-w-[40px]" />
              <Clock3Icon className="bg-[#7c4eff] rounded-full text-black w-5 h-5" />
            </CardTitle>
          </CardHeader> */}
          <CardContent className="p-1 h-full">
            {/* Render the box banner */}
            {boxBanner && (
              <a
                href={boxBanner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full"
              >
                {boxBanner.mediaType === "image" ? (
                  <Image
                    src={boxBanner.media}
                    alt={boxBanner.alt || "Box Banner"}
                    width={300}
                    height={100}
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <video
                    src={boxBanner.media}
                    className="w-full h-full object-cover rounded"
                    autoPlay
                    loop
                    muted
                  ></video>
                )}
              </a>
            )}
          </CardContent>
        </Card>
        {/* <Card className="bg-[#1b1f31]">
          <CardHeader className="pb-0 pt-3">
            <CardTitle className="flex items-center gap-4 text-lg">
              <span>New Coins</span>
              <Clock3Icon className="bg-[#7c4eff] rounded-full text-black w-5 h-5" />
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-4">
                <span></span>
                <span className="text-[#a3a3a3] text-sm">Submitted</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">1</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">Pawganja Coin</p>
                  <span className="text-xs text-[#a3a3a3]">PAW</span>
                </div>
                <span className="dark:text-white text-sm">3 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">2</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">FUN</p>
                  <span className="text-xs text-[#a3a3a3]">$FUN</span>
                </div>
                <span className="dark:text-white text-sm">10 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">3</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">AGCOIN</p>
                  <span className="text-xs text-[#a3a3a3]">AGCOINBR</span>
                </div>
                <span className="dark:text-white text-sm">16 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">4</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">BOING</p>
                  <span className="text-xs text-[#a3a3a3]">$BNG</span>
                </div>
                <span className="dark:text-white text-sm">18 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card> */}
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
                    <span className="text-xs text-[#a3a3a3]">
                      {coin.symbol}
                    </span>
                  </div>
                  <span className="dark:text-white text-sm">
                    {formatDate(coin.launchDate)}
                  </span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#223645]">
          <CardHeader className="pb-0 pt-3">
            <CardTitle className="flex items-center gap-4 text-lg">
              <span>Hottest Pairs</span>
              <img
                src="/img/Badge.gif"
                alt=""
                className="w-full max-w-[40px]"
              />
              {/* <FireExtinguisher className="bg-[#7c4eff] rounded-full text-black w-5 h-5" /> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-4">
                <span></span>
                <span className="text-[#a3a3a3] text-sm">Volume</span>
              </div>
              {hottestPairs.slice(0, 4).map((pair, index) => (
                <a
                  key={pair.id}
                  href={`/coins/${pair.id}`}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#a3a3a3] font-semibold">
                      {index + 1}
                    </span>
                    <Image
                      src={pair.coin.logo} // Assuming coin logo is in the hottestPair object
                      alt={pair.coin.name}
                      width={40}
                      height={40}
                      className="w-[30px] h-[30px] rounded-full"
                    />
                    <p className="dark:text-white">{pair.coin.name}</p>
                    <span className="text-xs text-[#a3a3a3]">
                      {pair.coin.symbol}
                    </span>
                  </div>
                  <span className="dark:text-white text-sm">
                    {pair.coin.volumn ? pair.coin.volumn : "N/A"}
                  </span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ThreeBox;
