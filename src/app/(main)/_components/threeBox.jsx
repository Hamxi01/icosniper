"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import NewCoins from "./_components/new-coins";

const ThreeBox = () => {
  const [boxBanner, setBoxBanner] = useState(null); // State for the box banner

  const [hottestPairs, setHottestPairs] = useState([]);

  useEffect(() => {
    fetchBanners();
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
        <NewCoins />
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
