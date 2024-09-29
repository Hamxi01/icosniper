"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const MainComponent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Access the 'id' query parameter

  const [icoScam, setIcoScam] = useState([]); // Initialize with an empty array

  useEffect(() => {
    if (id) {
      const fetchSingleIcoScam = async () => {
        const data = await fetch(`/api/ico-scams/single?id=${id}`); // Await the fetching
        if (data.ok) {
          setIcoScam(await data.json());
        }
      };
      fetchSingleIcoScam();
    }
  }, [id]);

  // Ensure we only render if news is available and non-empty
  if (!icoScam || !id) return null;

  return (
    <section className="py-10 lg:px-0 px-2">
      <div className="container mx-auto grid xl:grid-cols-3 grid-cols-1 gap-8 w-full max-w-[1366px]">
        <Card>
          <CardHeader></CardHeader>
          <CardContent className="flex items-center gap-3">
            <img
              src={icoScam.logo}
              alt={icoScam.title}
              className="w-full max-w-[100px]"
            />
            <div>
              <h2 className="xl:text-xl text-lg dark:text-white">
                {icoScam.title}
              </h2>
            </div>
          </CardContent>
        </Card>
        <Card className="xl:col-span-2 col-span-1">
          <CardHeader></CardHeader>
          <CardContent>
            <CardTitle className="lg:text-2xl text-xl mb-4">
              {icoScam.title} Description:
            </CardTitle>
            <CardDescription className="text-md">
              {icoScam.description}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const AirdropSinglePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <MainComponent />
  </Suspense>
);

export default AirdropSinglePage;
