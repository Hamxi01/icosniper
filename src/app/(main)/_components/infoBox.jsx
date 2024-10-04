import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const InfoBox = () => {
  return (
    <section className="py-7 lg:px-0 px-2">
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 w-full max-w-[1366px]">
        <Card className="p-10">
          <CardHeader>
            <Image
              src={"/img/pages/home/infobox-1.jpg"}
              alt="InfoBox 1"
              width={500}
              height={500}
              className="w-full h-fit rounded-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="">
              Discover DeFi tokens and coins that could rocket you to the Moon!
            </CardTitle>
          </CardContent>
          <CardFooter>
            <CardDescription>
              ICOSniper is a platform designed to make cryptocurrencies more
              accessible, user-friendly, and enjoyable. We offer a variety of
              engaging features, including the latest crypto news, tutorials,
              and other valuable resources and tools.
              <br />
              <br />
              Our mission is to stay ahead of emerging trends and provide our
              audience with the most up-to-date information. As passionate
              crypto enthusiasts, we believe cryptocurrencies are the future of
              finance, and we're here to help you discover the best projects and
              opportunities to propel you to the Moon!
              <br />
              <br />
              We're continually enhancing our site and adding new features. If
              you have any suggestions or ideas, don't hesitate to reach out!
            </CardDescription>
          </CardFooter>
        </Card>
        <Card className="p-10">
          <CardHeader>
            <Image
              src={"/img/logo-with-white.png"}
              alt="InfoBox 1"
              width={500}
              height={500}
              className="w-full h-fit rounded-lg mb-8"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-5">
              ICOSniper – Truly community driven crypto ICO listing
            </CardTitle>
            <CardDescription>
              We are a leading cryptocurrency listing and ranking platform. In
              collaboration with our community and partners, we strive to keep
              the information on our site accurate and easily accessible.
              <br />
              <br />
              Many cryptocurrencies appear on ICOSniper before being listed on
              platforms like CoinMarketCap .
            </CardDescription>
            <CardTitle className="my-5">
              How does ICOSniper work for ICO and Community?
            </CardTitle>
            <CardDescription>
              New cryptocurrency projects can be submitted through our Submit
              Token form. Once your project is successfully submitted, it will
              appear under the "NEW COINS" tab on our homepage, allowing the
              community to start voting. These votes are crucial to the
              project's success; higher vote counts lead to better rankings on
              our site, increasing visibility.
              <br />
              <br />
              We review new projects daily and will reach out to the token owner
              if any issues arise. Our dedicated support team monitors updates
              around the clock, 24/7, and is always available to assist with any
              questions you may have.
            </CardDescription>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default InfoBox;
