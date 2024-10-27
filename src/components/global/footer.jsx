import { MessageCircleDashed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-transparent py-10 bg-slate-100 lg:px-0 px-2">
      <section className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full max-w-[1366px]">
        <div>
          <h3 className="text-md mb-4">CRYPTOCURRENCY RANKING</h3>
          <div className="flex flex-col gap-2 text-sm mb-7">
            <Link
              href={"/"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              List of all coins
            </Link>
            <Link
              href={"/add-coin"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Submit a coin
            </Link>
            <Link
              href={"/contact-us"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Request a token update
            </Link>
          </div>
          <h3 className="text-md mb-4">ADD ASSETS</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href={"/add-coin"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Submit a coin
            </Link>
            <Link
              href={"/add-coin"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Submit a presale coin
            </Link>
            <Link
              href={"/contact-us"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Request an update
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-md mb-4">ADVERTISING</h3>
          <div className="flex flex-col gap-2 text-sm mb-7">
            <Link
              href={"/ads"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Ads
            </Link>
            <Link
              href={"/ads"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Marketing services
            </Link>
            <Link
              href={"/ads"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Email promotion
            </Link>
          </div>
          <h3 className="text-md mb-4">ICO SCAM</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href={"/airdrops"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              COMPLAIN
            </Link>
            <Link
              href={"/airdrops"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              UNDER REVIEW
            </Link>
            <Link
              href={"/airdrops"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              SCAM ICO
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-md mb-4">NEWS</h3>
          <div className="flex flex-col gap-2 text-sm mb-7">
            <Link
           href={"/news?category=News"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              News
            </Link>
            <Link
              href={"/blog?Finance"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Finance
            </Link>
            <Link
              href={"/news?category=DeFi news"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              DeFi news
            </Link>
            <Link
              href={"/news?category=Dapps"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Dapps
            </Link>
            <Link
              href={"/news?category=GameFi"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              GameFi
            </Link>
            <Link
              href={"/news?category=Exchange news"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Exchange news
            </Link>
            <Link
              href={"/news?category=Launchpad news"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Launchpad news
            </Link>
            <Link
              href={"/news?category=Altcoins"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Altcoins
            </Link>
            <Link
              href={"/news?category=NFT"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              NFT
            </Link>
            <Link
              href={"/news?category=Tutorials"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Tutorials
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-md mb-4">Company</h3>
          <div className="flex flex-col gap-2 text-sm mb-7">
            <Link
              href={"/partners"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Partners
            </Link>
            <Link
              href={"/media-kit"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Media kit
            </Link>
            <Link
              href={"/contact-us"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Contact us
            </Link>
          </div>
          <h3 className="text-md mb-4">LEGAL</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href={"/terms-conditions"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Terms & Conditions
            </Link>
            <Link
              href={"/privacy-policy"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Privacy policy
            </Link>
            <Link
              href={"/cookie-statement"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Cookie statement
            </Link>
            <Link
              href={"/disclaimer"}
              className="text-[#a3a3a3] dark:hover:text-white hover:text-black"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-7 w-full max-w-[1366px]">
        <Link href={"/"}>
          <Image
            src="/img/logo-with-white.png"
            alt="Logo"
            width={300}
            height={300}
            className="w-full h-fit max-w-[230px]"
          />
        </Link>
        <div className="flex items-center justify-center">
          <p className="text-center text-xs text-[#a3a3a3]">ICOSNIPER © 2024</p>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <MessageCircleDashed className="w-8 h-fit text-[#a3a3a3]" />
          <div className="text-xs">
            <p className="text-[#a3a3a3]">Any questions?</p>
            <Link href={"/contact-us"} className="text-[#a88bfa]">
              Get in touch with us
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
