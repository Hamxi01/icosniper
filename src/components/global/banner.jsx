"use client";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [mainBanner, setMainBanner] = useState(null);
  const [rotatingBanners, setRotatingBanners] = useState([]);

  const pathname = usePathname(); // Detect path changes
  const searchParams = useSearchParams(); // Detect query parameters

  const fetchBanners = async () => {
    try {
      // Fetch the main banner (placement: 'main')
      const mainRes = await fetch("/api/banners?placement=main");
      const mainData = await mainRes.json();
      setMainBanner(mainData[0]); // Expecting 1 banner for main

      // Fetch the rotating banners (placement: 'rotating')
      const rotatingRes = await fetch("/api/banners?placement=rotating");
      const rotatingData = await rotatingRes.json();

      // Check if rotatingData is an array
      if (Array.isArray(rotatingData)) {
        setRotatingBanners(rotatingData); // Store all rotating banners
      } else {
        console.error("Rotating banners data is not an array:", rotatingData);
        setRotatingBanners([]); // Reset to an empty array if not an array
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
      setRotatingBanners([]); // Reset to an empty array on error
    }
  };

  // Fetch banners when the component mounts or when pathname or query parameters change
  useEffect(() => {
    fetchBanners();
  }, [pathname, searchParams]); // Listen for changes in both pathname and searchParams

  if (rotatingBanners.length < 1) return "Loading...";

  return (
    <section className="pb-4 pt-2 lg:px-0 px-2">
      <div className="container mx-auto w-full max-w-[1366px]">
        <div className="mb-3">
          {/* Render the main banner */}
          {mainBanner && (
            <a href={mainBanner.url} target="_blank" rel="noopener noreferrer">
              {mainBanner.mediaType === "image" ? (
                <Image
                  src={mainBanner.media}
                  alt={mainBanner.alt || "Main Banner"}
                  width={1000}
                  height={200}
                  className="w-full h-fit object-cover rounded max-h-[110px]"
                />
              ) : (
                <video
                  src={mainBanner.media}
                  className="w-full h-fit object-cover rounded max-h-[110px]"
                  autoPlay
                  loop
                  muted
                ></video>
              )}
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 lg:gap-3 gap-1">
          {/* Render the rotating banners */}
          {rotatingBanners.slice(0, 2).map((banner, index) => (
            <a
              key={index}
              href={banner.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {banner.mediaType === "image" ? (
                <Image
                  src={banner.media}
                  alt={banner.alt || `Rotating Banner ${index + 1}`}
                  width={1000}
                  height={150}
                  className="w-full h-fit object-cover rounded max-h-[85px]"
                />
              ) : (
                <video
                  src={banner.media}
                  className="w-full h-fit object-cover rounded max-h-[85px]"
                  autoPlay
                  loop
                  muted
                ></video>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
