import React from "react";
import { formatDate } from "../../../news/_components/utils";

const CoinComponent = ({ coin }) => {
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
        <div className="mt-2 flex gap-2 md:hidden">
          <button className="flex w-full items-center justify-center gap-1 rounded-md bg-panel-bg p-2 sm:gap-2">
            <img
              src="https://coinmooner.com/v3/socials/telegram.svg"
              alt="Socials"
            />
            <div className="text-xs font-medium text-white">Socials</div>
            <svg className="h-3 w-3">
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#icon-arrow-bottom"
              />
            </svg>
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-md bg-panel-bg p-2">
            <img
              alt="metamask logo"
              loading="lazy"
              width="22"
              height="22"
              decoding="async"
              data-nimg="1"
              src="/img/meta-mask.jpg"
              style={{ color: "transparent" }}
            />
            <span className="text-xs font-medium text-white">
              Add to MetaMask
            </span>
          </button>
        </div>
        <div className="hidden mt-5 flex flex-wrap gap-2 md:flex">
          <a
            className="flex items-center rounded bg-panel-bg px-2 py-3 text-xs font-light text-white transition-colors hover:bg-gray-500"
            href={coin?.socials?.telegram}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img
              className="mr-2 h-6 w-6"
              src="https://coinmooner.com/v3/socials/telegram.svg"
              alt="Telegram logo"
            />
            <span>Telegram</span>
          </a>
          <a
            className="flex items-center rounded bg-panel-bg px-2 py-3 text-xs font-light text-white transition-colors hover:bg-gray-500"
            href={coin?.socials?.twitter}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img
              className="mr-2 h-6 w-6"
              src="https://coinmooner.com/v3/socials/twitter.svg"
              alt="Twitter logo"
            />
            <span>Twitter</span>
          </a>
          <a
            className="flex items-center rounded bg-panel-bg px-2 py-3 text-xs font-light text-white transition-colors hover:bg-gray-500"
            href={coin?.socials?.website}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img
              className="mr-2 h-6 w-6"
              src="https://coinmooner.com/v3/socials/web.svg"
              alt="Website icon"
            />
            <span>Website</span>
          </a>
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
            <div className="truncate font-bold text-white">N/A</div>
            <div className="mt-2 flex items-center gap-2 md:mt-0">
              <button className="flex w-full items-center justify-center gap-1 rounded bg-violet-400/10 p-2 text-violet-400 transition-colors hover:bg-violet-400/20 md:w-auto">
                <svg className="h-3 w-3">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#icon-copy"
                  />
                </svg>
                <span>Copy Link</span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:mt-8 md:grid md:grid-cols-2 md:gap-2 lg:flex lg:w-full"></div>
        <div className="mt-12">
          <button className="mt-5 flex w-full items-center justify-center rounded-md bg-panel-bg p-4 text-sm font-bold text-white transition-colors hover:bg-gray-500">
            Hide
          </button>
        </div>
        <div className="relative mt-8 overflow-hidden rounded-md bg-panel-bg p-5">
          {coin?.description}
        </div>
      </div>
    </>
  );
};

export default CoinComponent;
