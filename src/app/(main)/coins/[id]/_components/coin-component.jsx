import React, { useState } from "react";
import { formatDate } from "../../../news/_components/utils";

// Predefined list of social icons
const socialIcons = [
  {
    name: "Website",
    key: "website",
    icon: "https://coinmooner.com/v3/socials/web.svg",
  },
  {
    name: "Telegram",
    key: "telegram",
    icon: "https://coinmooner.com/v3/socials/telegram.svg",
  },
  {
    name: "Twitter",
    key: "twitter",
    icon: "https://coinmooner.com/v3/socials/twitter.svg",
  },
  {
    name: "CoinMarketCap",
    key: "coinmarketcap",
    icon: "https://coinmooner.com/v3/socials/market.png",
  },
  {
    name: "CoinGecko",
    key: "coingecko",
    icon: "https://coinmooner.com/v3/socials/cg.svg",
  },
  {
    name: "Reddit",
    key: "reddit",
    icon: "https://coinmooner.com/v3/socials/reddit.svg",
  },
  {
    name: "Discord",
    key: "discord",
    icon: "https://coinmooner.com/v3/socials/discord.svg",
  },
  {
    name: "GitHub",
    key: "github",
    icon: "https://coinmooner.com/v3/socials/github.svg",
  },
  {
    name: "Youtube",
    key: "youtube",
    icon: "https://coinmooner.com/v3/socials/youtube.svg",
  },
  {
    name: "TikTok",
    key: "tiktok",
    icon: "https://coinmooner.com/v3/socials/tiktok.svg",
  },
  {
    name: "Medium",
    key: "medium",
    icon: "https://coinmooner.com/v3/socials/medium.svg",
  },
  {
    name: "Instagram",
    key: "instagram",
    icon: "https://coinmooner.com/v3/socials/instagram.svg",
  },
];

const CoinComponent = ({ coin }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address).then(() => {
      setIsCopied(true);

      // Hide the "Copied" message after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };
  return (
    <>
      <div className="items-center justify-center">
        <div className="flex items-center gap-2 md:flex md:justify-start md:gap-3 md:pl-0">
          <picture>
            <source srcSet={coin?.logo} type="image/webp" />
            <source srcSet={coin?.logo} type="image/png" />
            <img
              className="h-12 w-12 rounded"
              src={coin?.logo}
              alt={coin?.name}
            />
          </picture>

          <div className="flex flex-col">
            <div className="flex items-start gap-5">
              <h1 className="text-sm font-bold text-white md:text-xl md:font-bold">
                {coin?.name}
              </h1>
              <span className="flex-col items-center justify-center rounded-lg bg-teal-950 px-2.5 py-1.5 text-center text-xs text-emerald-300">
                {coin?.symbol}
              </span>
            </div>
          </div>
        </div>

        {/* Dynamically rendered socials */}
        <div className="hidden mt-5 flex flex-wrap gap-2 md:flex">
          {socialIcons.map((social) => {
            const link = coin?.socials[social.key];
            if (link) {
              return (
                <a
                  key={social.key}
                  className="flex items-center rounded bg-panel-bg px-2 py-3 text-xs font-light text-white transition-colors hover:bg-gray-500"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <img
                    className="mr-2 h-6 w-6"
                    src={social.icon}
                    alt={`${social.name} logo`}
                  />
                  <span>{social.name}</span>
                </a>
              );
            }
            return null; // Don't render if the social link is not available
          })}
          <button className="flex items-center rounded bg-panel-bg px-2 py-3 text-xs font-light text-white transition-colors hover:bg-gray-500 3xs:hidden md:flex">
            <img
              alt="metamask logo"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="mr-2"
              src="/img/meta-mask.jpg"
              style={{ color: "transparent" }}
            />
            <span>Add to MetaMask</span>
          </button>
        </div>

        <div className="mt-6 flex h-14 w-full items-center justify-between border-t border-stone-400 text-sm font-light text-neutral-400">
          <div>Launch Date</div>
          <div>{formatDate(coin?.launchDate)}</div>
        </div>

        <div className="flex h-20 w-full items-center justify-between gap-2 border-b border-t border-stone-400 text-sm font-light text-neutral-400 md:h-14">
          <div>{coin?.symbol}:</div>
          <div className="min-w-0 items-center md:flex md:min-w-[auto] md:gap-2">
            <div className="truncate font-bold text-white">
              {
                coin?.tokenContractAddress?.length > 0
                  ? coin.tokenContractAddress[0].Address // Display the first contract address
                  : "N/A" // Fallback if no address is available
              }
            </div>

            {/* Copy button */}
            {coin?.tokenContractAddress?.length > 0 && (
              <div className="mt-2 flex items-center gap-2 md:mt-0">
                <button
                  className="flex w-full items-center justify-center gap-1 rounded bg-violet-400/10 p-2 text-violet-400 transition-colors hover:bg-violet-400/20 md:w-auto"
                  onClick={() =>
                    handleCopy(coin.tokenContractAddress[0].Address)
                  }
                >
                  <svg className="h-3 w-3">
                    <use xlinkHref="#icon-copy" />
                  </svg>
                  <span>Copy Address</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Copied Popup */}
        {isCopied && (
          <div
            className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-md shadow-lg z-[999] transition-opacity duration-300"
            style={{ opacity: isCopied ? 1 : 0 }}
          >
            Address copied to clipboard!
          </div>
        )}

        <div className="md:mt-8 md:grid md:grid-cols-2 md:gap-2 lg:flex lg:w-full"></div>
        <div className="mt-12">
          <button className="mt-5 flex w-full items-center justify-center rounded-md bg-panel-bg p-4 text-sm font-bold text-white transition-colors hover:bg-gray-500">
            Hide
          </button>
        </div>
        <div className="relative mt-8 overflow-hidden rounded-md bg-panel-bg p-5">
          <div style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
            {coin?.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinComponent;
