"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const FooterStickyBanner = () => {
  const HIDE_DURATION = 1000 * 60 * 60 * 24 * 3; // 3 days in milliseconds
  const [showBanner, setShowBanner] = useState(true);
  const [bannerContent, setBannerContent] = useState(null);

  useEffect(() => {
    // Check local storage for the banner closed timestamp
    const closedTimestamp = localStorage.getItem("footerBannerClosedTimestamp");
    const now = Date.now();

    // If the banner was closed, check the duration
    if (closedTimestamp && now - Number(closedTimestamp) < HIDE_DURATION) {
      setShowBanner(false);
    } else {
      // Fetch banner content from the API if the banner should be shown
      fetchBannerContent();
    }
  }, []);

  const fetchBannerContent = async () => {
    try {
      const response = await fetch("/api/banners?placement=footer"); // Update to your API endpoint
      const data = await response.json();

      if (data && data.length > 0) {
        setBannerContent(data[0]); // Assuming you want the first banner
      }
    } catch (error) {
      console.error("Error fetching banner content:", error);
    }
  };

  const handleClose = () => {
    // Close the banner and store the current timestamp in local storage
    setShowBanner(false);
    localStorage.setItem("footerBannerClosedTimestamp", Date.now().toString());
  };

  return (
    <>
      {showBanner && bannerContent && (
        <div className="bg-gray-100 w-full h-[48px] fixed bottom-0 left-0 right-0 flex items-center justify-between px-2 shadow-md z-50">
          {/* Banner content */}
          {bannerContent && (
            <a
              href={bannerContent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full"
            >
              {bannerContent.mediaType === "image" ? (
                <Image
                  src={bannerContent.media}
                  alt={bannerContent.alt || "Footer Banner"}
                  width={1000}
                  height={200}
                  className="w-full h-full object-cover rounded max-h-[110px]"
                />
              ) : (
                <video
                  src={bannerContent.media}
                  className="w-full h-full object-cover rounded max-h-[110px]"
                  autoPlay
                  loop
                  muted
                ></video>
              )}
            </a>
          )}
          {/* Close button */}
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Close banner"
          >
            &#10005; {/* Cross icon (close) */}
          </button>
        </div>
      )}
    </>
  );
};

export default FooterStickyBanner;
