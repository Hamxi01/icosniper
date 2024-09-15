import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <section className="py-10 lg:px-0 px-2">
      <div className="container mx-auto grid xl:grid-cols-3 grid-cols-1 gap-8 w-full max-w-[1366px]">
        <Card>
          <CardHeader></CardHeader>
          <CardContent className="flex items-center gap-3">
            <img
              src={"https://cdn.coinmooner.com/logo/a2552.webp?v=0"}
              alt=""
              className="w-full max-w-[100px]"
            />
            <div>
              <h2 className="xl:text-xl text-lg dark:text-white">
                Crypto Robots City Free Mint Giveaway
              </h2>
            </div>
          </CardContent>
        </Card>
        <Card className="xl:col-span-2 col-span-1">
          <CardHeader></CardHeader>
          <CardContent>
            <CardTitle className="lg:text-2xl text-xl mb-4">
              Crypto Robots City Free Mint Giveaway Airdrop Description:
            </CardTitle>
            <CardDescription className="text-md">
              CRC Free Mint Giveaway! 🚀 🔥 Mint Price: 1 Matic 🔥 Get 1,000 CRC
              tokens per nft minted 🔥 Presale/Liquidity: 18/10/2024 🔗 Mint
              now: https://mint.cryptorobotscity.com 🔗 Join Discord and verify
              nft: https://discord.gg/fSdE5sEpkd
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default page;
