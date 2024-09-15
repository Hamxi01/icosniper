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
              Find DeFi tokens and coins that will take you to the Moon!
            </CardTitle>
          </CardContent>
          <CardFooter>
            <CardDescription>
              CoinMooner is a platform that aims to make cryptocurrencies more
              accessible, easy, and fun to use. CoinMooner provides entertaining
              features, crypto-related news, tutorials, as well as other
              valuable materials and tools.
              <br />
              <br />
              We want to keep up with the latest trends and provide our visitors
              with the most relevant information. We are a team of crypto
              enthusiasts who believe that cryptocurrencies are the future of
              the financial world. We are here to help you find the best
              projects and opportunities that will take you to the Moon!
              <br />
              <br />
              We are constantly working on improving our website and adding new
              features. If you have any suggestions or ideas, feel free to
              contact us.
            </CardDescription>
          </CardFooter>
        </Card>
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
            <CardTitle className="mb-5">
              CoinMooner - the place where you can find the best crypto
              projects!
            </CardTitle>
            <CardDescription>
              We are a popular cryptocurrency listing and ranking website.
              Together with our community and our partners, we work hard to
              ensure the information on our website is up-to-date and
              accessible.
              <br />
              <br />
              Most of the cryptocurrencies can be found on CoinMooner before
              they are listed on CoinMarketCap & CoinGecko.
            </CardDescription>
            <CardTitle className="my-5">How does CoinMooner work?</CardTitle>
            <CardDescription>
              New cryptocurrency projects can be submitted using our Submit
              Token form. Once the project is successfully submitted, it gets
              listed under NEW COINS tab on our front page, and the project`s
              community can start voting. Votes are very important to the
              overall success of the project. The higher the vote count, the
              higher the project will be ranked on our website, thus increasing
              its visibility.
              <br />
              <br />
              We monitor new projects every day without exceptions, and if
              anything seems wrong, we will contact the token owner. Our
              competent support is monitoring new information and updates daily
              - 24/7. We are always ready to help you with any questions you may
              have.
            </CardDescription>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default InfoBox;
