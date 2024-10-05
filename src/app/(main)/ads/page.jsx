import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MailIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="py-10 lg:px-0 px-2">
      <div className="container mx-auto w-full max-w-[1366px]">
        <h1 className="lg:text-4xl text-2xl font-semibold dark:text-white mb-7">
          COINSNIPER is different from other listings services
        </h1>
        <h2 className="lg:text-2xl text-xl dark:text-white mb-4">
          Here is Why?
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <Card className="dark:bg-[#141620]">
            <CardHeader>
              <img
                src="/img/pages/ads/users-icon.svg"
                alt="Users icon"
                className="h-fit mx-auto w-full max-w-[50px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">AVTIVE members</CardTitle>
              <CardDescription>
                Daily giveaway and bounty program
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="dark:bg-[#141620]">
            <CardHeader>
              <img
                src="/img/pages/ads/votes.svg"
                alt="Users icon"
                className="h-fit mx-auto w-full max-w-[50px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">Not a just listing</CardTitle>
              <CardDescription>Massive exposure in our members</CardDescription>
            </CardContent>
          </Card>
          <Card className="dark:bg-[#141620]">
            <CardHeader>
              <img
                src="/img/pages/ads/listed.svg"
                alt="Users icon"
                className="h-fit mx-auto w-full max-w-[50px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">REAL MARKETING</CardTitle>
              <CardDescription>
                FREE BLOG POST , SNS shout-out ETC….
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="dark:bg-[#141620]">
            <CardHeader>
              <img
                src="/img/pages/ads/infinity.svg"
                alt="Users icon"
                className="h-fit mx-auto w-full max-w-[50px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">FIXED ADS PRICE</CardTitle>
              <CardDescription>Make simple to start</CardDescription>
            </CardContent>
          </Card>
        </div>
        <h2 className="lg:text-2xl text-xl dark:text-white mb-4 mt-7">
          Website Ads
        </h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10">
          <Card className="dark:bg-[#141620]">
            <CardHeader>
              <Image
                src="/img/pages/ads/rotating-banner-ads.png"
                alt="Users icon"
                width={300}
                height={300}
                className="h-fit mx-auto w-full max-w-[250px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">Rotating Banner Ads</CardTitle>
              <CardDescription>
                One of the spots in our rotating banner section. <br />
                Traffic is shared. Any video or image format.
              </CardDescription>
              <div className="flex items-center gap-4 mx-auto w-full max-w-[270px] mt-4 mb-7 flex-wrap">
                <div className="py-1 px-3 rounded border border-gray-400 text-sm">
                  Desktop 728x90
                </div>
                <div className="py-1 px-3 rounded border border-gray-400 text-sm">
                  Mobile 640x120
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <CardTitle>$150 / day</CardTitle>
            </CardFooter>
          </Card>
          <Card className="dark:bg-[#141620]">
            <CardHeader>
              <Image
                src="/img/pages/ads/premium-banner-ads.png"
                alt="Users icon"
                width={300}
                height={300}
                className="h-fit mx-auto w-full max-w-[250px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">Premium Banner Ads</CardTitle>
              <CardDescription>
                Premium banner spot at the top of our website. <br />
                Dedicated spot. Any video or image format.
              </CardDescription>
              <div className="flex items-center gap-4 mx-auto w-full max-w-[280px] mt-4 mb-7 flex-wrap">
                <div className="py-1 px-3 rounded border border-gray-400 text-sm">
                  Desktop 1440x90
                </div>
                <div className="py-1 px-3 rounded border border-gray-400 text-sm">
                  Mobile 640x200
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <CardTitle>$375 / day</CardTitle>
            </CardFooter>
          </Card>
          <Card className="dark:bg-[#141620]">
            <CardHeader>
              <Image
                src="/img/pages/ads/promoted-spot.png"
                alt="Users icon"
                width={300}
                height={300}
                className="h-fit mx-auto w-full max-w-[250px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">Promoted Spot</CardTitle>
              <CardDescription>
                Your project is always shown on our main page.
                <br />
                Immediate massive exposure for your coin.
                <br />
                No additional media needed.
              </CardDescription>
            </CardContent>
            <CardFooter className="justify-center">
              <CardTitle>$300 / day</CardTitle>
            </CardFooter>
          </Card>

          {/* <Card className="dark:bg-[#141620]">
            <CardHeader>
              <Image
                src="/img/pages/ads/rotating-banner-ads.png"
                alt="Users icon"
                width={300}
                height={300}
                className="h-fit mx-auto w-full max-w-[250px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">HOT PRESALE</CardTitle>
              <CardDescription>
                One of the spots in our rotating banner section. <br />
                Traffic is shared. Any video or image format.
              </CardDescription>
              <div className="flex items-center gap-4 mx-auto w-full max-w-[270px] mt-4 mb-7 flex-wrap">
                <div className="py-1 px-3 rounded border border-gray-400 text-sm">
                  Desktop 728x90
                </div>
                <div className="py-1 px-3 rounded border border-gray-400 text-sm">
                  Mobile 640x120
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <CardTitle>$150 / day</CardTitle>
            </CardFooter>
          </Card>
          <Card className="dark:bg-[#141620]">
            <CardHeader>
              <Image
                src="/img/pages/ads/premium-banner-ads.png"
                alt="Users icon"
                width={300}
                height={300}
                className="h-fit mx-auto w-full max-w-[250px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">Premium Banner Ads</CardTitle>
              <CardDescription>
                Premium banner spot at the top of our website. <br />
                Dedicated spot. Any video or image format.
              </CardDescription>
              <div className="flex items-center gap-4 mx-auto w-full max-w-[280px] mt-4 mb-7 flex-wrap">
                <div className="py-1 px-3 rounded border border-gray-400 text-sm">
                  Desktop 1440x90
                </div>
                <div className="py-1 px-3 rounded border border-gray-400 text-sm">
                  Mobile 640x200
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <CardTitle>$375 / day</CardTitle>
            </CardFooter>
          </Card>
          <Card className="dark:bg-[#141620]">
            <CardHeader>
              <Image
                src="/img/pages/ads/promoted-spot.png"
                alt="Users icon"
                width={300}
                height={300}
                className="h-fit mx-auto w-full max-w-[250px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">Promoted Spot</CardTitle>
              <CardDescription>
                Your project is always shown on our main page.
                <br />
                Immediate massive exposure for your coin.
                <br />
                No additional media needed.
              </CardDescription>
            </CardContent>
            <CardFooter className="justify-center">
              <CardTitle>$300 / day</CardTitle>
            </CardFooter>
          </Card> */}
        </div>
        <div className="my-10 mx-auto text-center">
          <Button
            asChild
            className="bg-[#4c3cce] hover:bg-[#6857f3] border-[#6857f3] py-7 px-12 text-lg dark:text-white mx-auto"
          >
            <Link href="">START ADVERTISING</Link>
          </Button>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 mb-10">
          <Card className="dark:bg-[#141620]">
            <CardHeader className="text-center mb-5">
              <CardTitle>Discounts</CardTitle>
            </CardHeader>
            <CardContent className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
              <div className="flex flex-col gap-3">
                <Card className="dark:bg-[#272535]">
                  <CardContent className="text-center pt-4 px-0">
                    <CardTitle className="text-md">3+ days</CardTitle>
                    <CardDescription className="text-xs">
                      of any ad booked
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="dark:bg-[#272535]">
                  <CardContent className="text-center pt-4 px-0">
                    <CardTitle className="text-md">
                      10%{" "}
                      <CardDescription className="text-xs">off</CardDescription>
                    </CardTitle>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col gap-3">
                <Card className="dark:bg-[#272535]">
                  <CardContent className="text-center pt-4 px-0">
                    <CardTitle className="text-md">7+ days</CardTitle>
                    <CardDescription className="text-xs">
                      of any ad booked
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="dark:bg-[#272535]">
                  <CardContent className="text-center pt-4 px-0">
                    <CardTitle className="text-md">
                      20%
                      <CardDescription className="text-xs">off</CardDescription>
                    </CardTitle>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col gap-3">
                <Card className="dark:bg-[#272535]">
                  <CardContent className="text-center pt-4 px-0">
                    <CardTitle className="text-md">15+ days</CardTitle>
                    <CardDescription className="text-xs">
                      of any ad booked
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="dark:bg-[#272535]">
                  <CardContent className="text-center pt-4 px-0">
                    <CardTitle className="text-md">
                      35%
                      <CardDescription className="text-xs">off</CardDescription>
                    </CardTitle>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          <Card className="dark:bg-[#141620]">
            <CardHeader>
              <Image
                src="/img/pages/ads/email-blast.png"
                alt="Users icon"
                width={300}
                height={300}
                className="h-fit mx-auto w-full max-w-[130px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">Email Blast</CardTitle>
              <CardDescription>
                Send your message to our 30,000+ email subscribers.
                <br />
                Your message will be sent in a dedicated email.
              </CardDescription>
            </CardContent>
            <CardFooter className="justify-center">
              <CardTitle>Request a quote</CardTitle>
            </CardFooter>
          </Card>
          <Card className="dark:bg-[#141620]">
            <CardHeader>
              <Image
                src="/img/pages/ads/contract-audit.png"
                alt="Users icon"
                width={300}
                height={300}
                className="h-fit mx-auto w-full max-w-[130px]"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">Contract Audit</CardTitle>
              <CardDescription>
                We will audit your smart contract for security vulnerabilities.
                <br />A report will be provided to share with your community.
              </CardDescription>
            </CardContent>
            <CardFooter className="justify-center">
              <CardTitle>From $400</CardTitle>
            </CardFooter>
          </Card>
        </div>
        <h1 className="lg:text-4xl text-2xl font-semibold darKtext-white mb-1 text-center">
          Contact Us
        </h1>
        <p className="mb-8 text-[#a3a3a3] text-center">
          Reach out to us on Telegram or email to get started.
        </p>
        <div className="w-full max-w-md grid md:grid-cols-2 grid-cols-1 gap-5 mx-auto">
          <Link href={"/"}>
            <Card className="dark:bg-[#141620]">
              <CardHeader className="flex items-center flex-row gap-2">
                <SendIcon /> Telegram
              </CardHeader>
              <CardContent>
                <CardDescription>@CoinMoonerAdverts</CardDescription>
              </CardContent>
            </Card>
          </Link>
          <Link href={"/"}>
            <Card className="dark:bg-[#141620]">
              <CardHeader className="flex items-center flex-row gap-2">
                <MailIcon /> Email
              </CardHeader>
              <CardContent>
                <CardDescription>contact@coinmooner.com</CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
