import React, { useEffect, useState } from "react";

const MoreCoins = () => {
  const [moreCoins, setMoreCoins] = useState([]);

  useEffect(() => {
    const fetchMoreCoins = async () => {
      // Fetch more coins
      const moreCoinsResponse = await fetch(`/api/coins?limit=4`);
      if (moreCoinsResponse.ok) {
        const coinsData = await moreCoinsResponse.json();
        setMoreCoins(coinsData.coins);
      }
    };
    fetchMoreCoins();
  }, []);

  return (
    <>
      <div className="mt-6 w-full">
        <h2 className="mb-2 text-2xl font-bold text-white">More Coins</h2>
        <div className="grid grid-cols-2 items-center gap-2.5 md:grid-cols-3 2xl:grid-cols-6">
          {moreCoins?.length > 0 ? (
            moreCoins?.map((coin) => (
              <a className="w-full" href={`/coins/single?id=${coin?.id}`}>
                <div className="flex w-full flex-col rounded-lg bg-panel-bg px-2 py-4 transition-colors hover:bg-gray-500">
                  <div className="flex w-full items-center gap-2.5">
                    <picture>
                      <source srcSet={coin?.logo} type="image/webp" />
                      <source srcSet={coin?.logo} type="image/png" />
                      <img
                        loading="lazy"
                        className="h-8 w-8 rounded"
                        src={coin?.logo}
                        alt={coin?.name}
                      />
                    </picture>
                    <span className="shrink text-xs font-normal text-white">
                      {coin?.name}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="rounded bg-teal-950 p-1 text-xs font-normal text-emerald-300">
                      {coin?.symbol}
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default MoreCoins;
