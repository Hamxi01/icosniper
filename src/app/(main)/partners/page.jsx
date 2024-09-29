"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, LinkIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [partners, setPartners] = useState();

  useEffect(() => {
    const fetchPartners = async () => {
      const data = await fetch(`/api/partners`);
      if (data.ok) {
        const { partners } = await data.json();
        setPartners(partners);
      }
    };
    fetchPartners();
  }, []);

  return (
    <section className="py-10 lg:px-0 px-2">
      <div className="container mx-auto w-full max-w-[1366px]">
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
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {partners?.map((partner) => (
            <Card>
              <CardHeader>
                <img
                  src={partner?.logo}
                  alt={partner.title}
                  className="w-full h-fit max-h-[100px] object-contain"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-4">{partner?.title}</CardTitle>
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
        </div>
      </div>
    </section>
  );
};

export default page;
