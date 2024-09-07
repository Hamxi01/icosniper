import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  const partnersList = [
    {
      id: 1,
      title: "Arken",
      description:
        "Arken Finance offers the all-in-one trading tool for DEX traders to monitor tokens and synthetic assets, forecast market movement, and trade at the BEST RATE. Arken aggregates multiple DEXs into a single platform and tackles the principal vulnerability of today’s DEXs. Our tool incorporates a real-time trading view, offers users a single point of entry for managing digital assets efficiently, and can be customized with over 160+ technical indicators and unique specialty charts for the advanced trader.",
      img: "https://coinmooner.com/_next/static/media/arken-logo.4198259b.png",
      link: "https://arken.finance/",
      category: "referencing",
    },
    {
      id: 2,
      title: "Staysafu",
      description:
        "The security leader for the BNB Chain. Protecting millions of crypto investors with the SAFU Scanner, securing millions of USD worth of assets with the SAFU Audits & KYC. The SAFU Scanner allows you to evaluate in a matter of seconds the possibilities that owners of a token can scam you through a study of its liquidity, smart-contract code, holders, and numerous other factors.",
      img: "https://coinmooner.com/_next/static/media/staysafu.9c605b25.png",
      link: "https://www.staysafu.org/",
      category: "referencing",
    },
    {
      id: 3,
      title: "GemPad",
      description:
        "GemPad is a frontline protocol for users and project-owners designed to help to launch their projects and tokens in the easiest way possible. We support Seed Sales, Private Sales, Partial Raises, Presales, Fair Launches and Stealth Launches which no other launchpad out there supports at the moment. Gempad is also the first launchpad to offer raising funds in any crypto token.",
      img: "https://coinmooner.com/_next/static/media/gempad-horizontal.028398d4.png",
      link: "https://gempad.app/",
      category: "technical",
    },
    {
      id: 4,
      title: "MoonScan",
      description:
        "MoonScan is the first tracking tool that combines tracking of reflections with token price and burn information. Also, MoonScan can track individual solutions for token rewards. If a token missing, simply request to add.",
      img: "https://coinmooner.com/_next/static/media/gempad-horizontal.028398d4.png",
      link: "https://moonscan.com/",
      category: "referencing",
    },
    {
      id: 5,
      title: "Mobula",
      description:
        "Mobula is the first decentralized data aggregator. It is often presented as the Web3 version of Coinmarketcap. With the particularity of offering real-time and on-chain data, Mobula is also a suite of tools allowing you to do precise searches with the Advanced search feature or to monitor your assets with the Wallet Analysis. Join the adventure.",
      img: "https://coinmooner.com/_next/static/media/mobula.8b24bb8a.png",
      link: "https://mobula.fi/",
      category: "technical",
    },
    {
      id: 6,
      title: "BSCheck",
      description:
        "BSCheck is a free token analyzer that offers and helps to determine if a smart contract/project could be a scam. Without any guarantees, one should always DYOR. bscheck.eu team is trying their best to detect all the scams and malicious contracts. Always be careful with the projects that you invest in, we are trying harder each and every day to make crypto space safer for everyone. Recently, Dogechain and Fantom have been implemented on our websites. More to come soon.",
      img: "https://coinmooner.com/_next/static/media/bsccheck.a6f98ccc.png",
      link: "https://bscheck.eu",
      category: "technical",
    },
    {
      id: 7,
      title: "Bogged",
      description:
        "Bogged is a DeFi tool suite for the Binance Smart Chain powered by the BOG token. Project aims to develop a one-stop trading platform for BSC with all the tools normally available only to Centralised Exchange (CEX) users.",
      img: "https://coinmooner.com/_next/static/media/bogged.f95d37a8.png",
      link: "https://www.bogged.finance/",
      category: "technical",
    },
  ];

  return (
    <section className="py-10 lg:px-0 px-2">
      <div className="container mx-auto">
        <h1 className="lg:text-4xl text-2xl font-semibold dark:text-white mb-4">
          Our Partners
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 shadow rounded py-10 px-16 border dark:bg-gradient-to-t to-[#272535] from-[#11141b] mb-8">
          <div>
            <h2 className="lg:text-2xl text-xl dark:text-white">
              Vibrant Data Aggregator <br />
              Surrounded By a Vibrant Ecosystem
            </h2>
          </div>
          <div>
            <p className="dark:text-[#a3a3a3]">
              CoinMooner aims to deliver the most accurate and up-to-date data
              on the crypto market. We are surrounded by a vibrant ecosystem of
              partners and crypto enthusiasts that help us achieve this goal.
            </p>
          </div>
        </div>
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Categories</TabsTrigger>
            <TabsTrigger value="referencing">Referencing</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
          </TabsList>
          <TabsContent
            value="all"
            className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7"
          >
            {partnersList?.map((partner) => (
              <Card>
                <CardHeader>
                  <img
                    src={partner?.img}
                    alt={partner.title}
                    className="w-full h-fit max-h-[100px] object-contain"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-4">
                    {partner?.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {partner?.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href={partner?.link}
                    className="w-full flex items-center justify-between gap-5 text-[#8b5cf6] hover:text-[#7c3aed]"
                  >
                    <div className="flex items-center gap-3">
                      <LinkIcon />
                      <span>{partner?.link}</span>
                    </div>
                    <ChevronRight />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          <TabsContent
            value="referencing"
            className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7"
          >
            {partnersList?.map((partner) =>
              partner?.category === "referencing" ? (
                <Card>
                  <CardHeader>
                    <img
                      src={partner?.img}
                      alt={partner.title}
                      className="w-full h-fit max-h-[100px] object-contain"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl">{partner?.title}</CardTitle>
                    <CardDescription className="text-xs">
                      {partner?.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={partner?.link}
                      className="w-full flex items-center justify-between gap-5 text-[#8b5cf6]"
                    >
                      <div className="flex items-center gap-3">
                        <LinkIcon />
                        <span>{partner?.link}</span>
                      </div>
                      <ChevronRight />
                    </Link>
                  </CardFooter>
                </Card>
              ) : (
                <></>
              )
            )}
          </TabsContent>
          <TabsContent
            value="technical"
            className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7"
          >
            {partnersList?.map((partner) =>
              partner?.category === "technical" ? (
                <Card>
                  <CardHeader>
                    <img
                      src={partner?.img}
                      alt={partner.title}
                      className="w-full h-fit max-h-[100px] object-contain"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl">{partner?.title}</CardTitle>
                    <CardDescription className="text-xs">
                      {partner?.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={partner?.link}
                      className="w-full flex items-center justify-between gap-5 text-[#8b5cf6]"
                    >
                      <div className="flex items-center gap-3">
                        <LinkIcon />
                        <span>{partner?.link}</span>
                      </div>
                      <ChevronRight />
                    </Link>
                  </CardFooter>
                </Card>
              ) : (
                <></>
              )
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default page;
