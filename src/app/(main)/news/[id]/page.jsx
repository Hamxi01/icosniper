"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  FacebookIcon,
  LinkedinIcon,
  MailIcon,
  SendIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogCard from "../_components/blogCard";

const page = () => {
  const sliderBlogs = [
    {
      id: 1,
      title: "Crypto Giants to Gather: What to Expect from October's...",
      img: "https://img.coinmooner.com/MfCcDkmoRV2a6uWPelkTVTvTD2g=/512x0/https%3A//cdn.coinmooner.com/article/393.png%3Fv%3D3",
      date: "September 11, 2024",
    },
    {
      id: 2,
      title: "How TON Blockchain Is Winning Over Users from Solana with It...",
      img: "https://img.coinmooner.com/DVbZC2snbbWfkvKcF_P_eCR6Fvk=/512x0/https%3A//cdn.coinmooner.com/article/392.png%3Fv%3D1",
      date: "September 11, 2024",
    },
    {
      id: 3,
      title:
        "Breaking Down the Best in Crypto Derivatives: Three Centralized...",
      img: "https://img.coinmooner.com/tN6POy2N3YSu7i1ZUctXCZEzI3A=/512x0/https%3A//cdn.coinmooner.com/article/391.png%3Fv%3D1",
      date: "September 09, 2024",
    },
    {
      id: 4,
      title: "Inter Miami Scores Big: Polkadot Logo to Grace Lionel Messi's...",
      img: "https://img.coinmooner.com/VcD0sO4KsotWvaR8Ket-j0vHcTU=/512x0/https%3A//cdn.coinmooner.com/article/390.png%3Fv%3D1",
      date: "September 07, 2024",
    },
    {
      id: 5,
      title: "Knife Attack on Haru Invest CEO Exposes the Physical Dangers...",
      img: "https://img.coinmooner.com/cHmaKpQt_52qZXh9cKsARbTKU6I=/512x0/https%3A//cdn.coinmooner.com/article/389.png%3Fv%3D1",
      date: "August 30, 2024",
    },
    {
      id: 6,
      title: "New Meme Coin ‘The Meme Games’ Kicks Off Crypto...",
      img: "https://img.coinmooner.com/9atVMIFrdHKTh3oTbR99BnYjDIc=/512x0/https%3A//cdn.coinmooner.com/article/388.png%3Fv%3D1",
      date: "August 30, 2024",
    },
  ];

  return (
    <main className="container mx-auto w-full max-w-[1366px]">
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-xs text-[#a78bfa]">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-xs text-[#a78bfa]">
                News
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xs">
                why 90 of crypto companies are failing fca standards a deep dive
                into rejections
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-8 flex-col lg:flex-row mb-8">
        <div className="w-full lg:basis-3/4">
          <div class="flex w-full flex-col gap-5 lg:basis-3/4">
            <div class="rounded-lg bg-panel-bg flex flex-col">
              <div class="flex flex-col gap-3.5 p-6">
                <div class="flex items-center gap-3">
                  <span class="text-sm uppercase text-neutral-400">
                    Published September 15, 2024
                  </span>
                  <span class="mt-0.5 inline-block h-2 w-2 rounded-xs bg-[#6857f3]"></span>
                  <span class="text-sm uppercase text-neutral-400">
                    2 min read
                  </span>
                </div>
                <h1 class="text-3xl font-bold">
                  Crypto Industry Faces Hurdles: FCA Report Shows High Rejection
                  Rate Due to AML Failures
                </h1>
              </div>
              <label for="" class="border-b"></label>
              <div class="flex justify-between p-6">
                <div class="flex items-center gap-3.5">
                  <picture>
                    <source
                      srcset="https://cdn.coinmooner.com/article-author/6.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="https://cdn.coinmooner.com/article-author/6.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.coinmooner.com/article-author/6.png"
                      width="40"
                      height="40"
                      alt="coinmooner logo"
                    />
                  </picture>
                  <div>
                    <div class="text-bold font-sm uppercase">CoinMooner</div>
                    <div class="text-xs font-medium text-neutral-400">
                      Publisher
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-lg bg-panel-bg overflow-hidden">
              <picture>
                <source
                  srcset="https://cdn.coinmooner.com/article/396.webp?v=2"
                  type="image/webp"
                />
                <source
                  srcset="https://cdn.coinmooner.com/article/396.png?v=2"
                  type="image/png"
                />
                <img
                  class="w-full object-cover"
                  src="https://cdn.coinmooner.com/article/396.png?v=2"
                  alt="artwork image for: Why 90% of Crypto Companies Are Failing FCA Standards: A Deep Dive into Rejections"
                />
              </picture>
            </div>
            <div class="rounded-lg bg-panel-bg p-6">
              <p class="my-5 text-base font-light leading-[1.7]">
                <span>As we know, the bull market in the </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/from-web2-web3-the-transformative-power-of-blockchain-in-esports"
                >
                  Web3
                </a>
                <span>
                  industry still hasn’t arrived, sparking many debates and
                  discussions among crypto enthusiasts, analysts, and well-known
                  media figures. Each group gives different predictions about
                  when this rally might start, which raises even more questions
                  and uncertainty. However, changes in this rapidly evolving
                  financial space are already noticeable, especially from{" "}
                </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/scandal-around-okk-south-korean-regulation-target-largest-cryptocurrency-exchange"
                >
                  regulators
                </a>
                <span>
                  {" "}
                  actively working on introducing new rules and guidelines.
                </span>
              </p>
              <p class="my-5 text-base font-light leading-[1.7]">
                <span>In today’s news article, </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/"
                >
                  Coinmooner
                </a>
                <span>
                  {" "}
                  would like to share important information about the actions of
                  one of the most influential{" "}
                </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/scandal-around-okk-south-korean-regulation-target-largest-cryptocurrency-exchange"
                >
                  regulators
                </a>
                <span> in the </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/xapo-bank-breaks-ground-with-first-uk-combined-fiat-and-bitcoin-interest-accounts"
                >
                  UK
                </a>
                <span>
                  . This authority recently published a report containing data
                  on many rejected applications from crypto companies. The main
                  reason for these rejections is the lack of critical components
                  needed for a complete and thorough assessment of the
                  applications, highlighting the strict standards set by the
                  regulator.
                </span>
              </p>
              <p class="my-5 text-base font-light leading-[1.7]">
                <span>
                  According to the 2024 Financial Conduct Authority (FCA)
                  report, over 90% of cryptocurrency companies failed to meet
                  the required standards, including anti-money laundering (AML)
                  regulations. Only four of 35 submitted registration
                  applications were approved, while the rest were rejected. The
                  main reason for the refusals was insufficient measures to
                  combat money laundering through crypto platforms, showing how
                  seriously the regulator takes financial transparency and{" "}
                </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/bybit-launches-erupee-in-india-enhancing-security-and-expanding-financial-markets"
                >
                  security
                </a>
                <span> in the crypto industry.</span>
              </p>
              <p class="my-5 text-base font-light leading-[1.7]"></p>
              <p class="my-5 text-base font-light leading-[1.7]"></p>
              <div class="my-2 flex justify-center">
                <img
                  loading="lazy"
                  class="rounded-md"
                  src="https://cdn.coinmooner.com/article-image/1861.png"
                  alt="image"
                />
              </div>
              <p class="text-center text-sm text-gray-100">
                UK’s FCA Enhances Crypto Regulations: Stricter Application
                Process and Fraud Awareness
              </p>
              <p class="my-5 text-base font-light leading-[1.7]"></p>
              <p class="my-5 text-base font-light leading-[1.7]">
                <span>
                  As is well known, the FCA (Financial Conduct Authority) is the
                  financial regulator in the{" "}
                </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/xapo-bank-breaks-ground-with-first-uk-combined-fiat-and-bitcoin-interest-accounts"
                >
                  UK
                </a>
                <span>
                  , responsible for overseeing financial markets, monitoring
                  financial institutions, and protecting consumers. The FCA
                  regulates various financial services, including{" "}
                </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/banking-revolution-itau-unibanco-opens-access-to-cryptocurrency-trading"
                >
                  banks
                </a>
                <span>
                  , investment companies, insurers, and, more recently,
                  cryptocurrency companies. The organization's primary goal is
                  to ensure fairness and transparency in the financial market,
                  protect consumer rights, and prevent financial crimes such as
                  money laundering and fraud.
                </span>
              </p>
              <p class="my-5 text-base font-light leading-[1.7]">
                <span></span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/"
                >
                  Coinmooner
                </a>
                <span>
                  {" "}
                  decided to explore more essential details about this event. We
                  learned that in June 2023, the authority introduced rules for
                  promoting cryptocurrency services, requiring companies to
                  publish risk warnings. This ensures that digital asset
                  advertising in the{" "}
                </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/xapo-bank-breaks-ground-with-first-uk-combined-fiat-and-bitcoin-interest-accounts"
                >
                  UK
                </a>
                <span> will be fair and won't mislead investors.</span>
              </p>
              <p class="my-5 text-base font-light leading-[1.7]">
                <span>The regulator also noted that the </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/xapo-bank-breaks-ground-with-first-uk-combined-fiat-and-bitcoin-interest-accounts"
                >
                  British
                </a>
                <span>
                  {" "}
                  public has become more aware of crypto-related scams: 63% of
                  consumers reported fraud before investing in a crypto project.
                  This is 5% more than the previous year. According to recent
                  data from the law firm Reed Smith, over the past three years,
                  the number of registration applications submitted to the FCA
                  by crypto exchanges has dropped by 51%. Experts pointed out
                  that the authority is taking too long to process applications
                  from crypto companies.
                </span>
              </p>
              <p class="my-5 text-base font-light leading-[1.7]">
                <span>
                  This report shows that verifying companies for integrity is
                  essential for{" "}
                </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/scandal-around-okk-south-korean-regulation-target-largest-cryptocurrency-exchange"
                >
                  regulators
                </a>
                <span>, which is a genuinely positive step in making the </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/from-web2-web3-the-transformative-power-of-blockchain-in-esports"
                >
                  Web3
                </a>
                <span>
                  {" "}
                  industry safer for everyday users. Despite this, we urge our
                  readers to always use the most{" "}
                </span>
                <a
                  class="text-[#aa73ff] hover:underline"
                  rel=""
                  href="https://coinmooner.com/news/secure-investments-in-web3-latest-trends-and-end-of-2023-news"
                >
                  advanced protection methods
                </a>
                <span>
                  {" "}
                  in the crypto industry, ensuring safer use of this financial
                  sector and its opportunities.
                </span>
              </p>
              <p class="my-5 text-base font-light leading-[1.7]"></p>
              <p class="my-5 text-base font-light leading-[1.7]"></p>
            </div>
          </div>
        </div>
        <div className="w-full lg:basis-1/4">
          <div className="sticky top-0 flex flex-col gap-4">
            <div className="rounded-lg bg-gray-200 dark:bg-[#141620] p-6 flex flex-col gap-4">
              <div class="text-lg font-bold">Share This Article</div>
              <div class="flex justify-between">
                <Link
                  class="bg-blue-500 hover:bg-blue-600 flex h-10 w-10 items-center justify-center rounded-full transition duration-300 ease-in-out"
                  href="https://t.me/share/url?url=%2Fnews%2Fwhy-90-of-crypto-companies-are-failing-fca-standards-a-deep-dive-into-rejections"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <SendIcon />
                </Link>
                <Link
                  class="bg-blue-400 hover:bg-blue-500 flex h-10 w-10 items-center justify-center rounded-full transition duration-300 ease-in-out"
                  href="https://twitter.com/intent/tweet?url=%2Fnews%2Fwhy-90-of-crypto-companies-are-failing-fca-standards-a-deep-dive-into-rejections"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <TwitterIcon />
                </Link>
                <Link
                  class="bg-blue-800 hover:bg-blue-900 flex h-10 w-10 items-center justify-center rounded-full transition duration-300 ease-in-out"
                  href="https://www.linkedin.com/sharing/share-offsite/?url=%2Fnews%2Fwhy-90-of-crypto-companies-are-failing-fca-standards-a-deep-dive-into-rejections"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <LinkedinIcon />
                </Link>
                <Link
                  class="bg-blue-700 hover:bg-blue-800 flex h-10 w-10 items-center justify-center rounded-full transition duration-300 ease-in-out"
                  href="https://www.facebook.com/sharer/sharer.php?u=%2Fnews%2Fwhy-90-of-crypto-companies-are-failing-fca-standards-a-deep-dive-into-rejections"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FacebookIcon />
                </Link>
              </div>
            </div>
            <div class="rounded-lg bg-gray-200 dark:bg-[#141620] pt-6">
              <span class="mx-6 text-lg font-bold">Contents</span>
              <div class="my-2"></div>
            </div>
            <form className="rounded-lg bg-gray-200 dark:bg-[#141620] hidden p-6 lg:flex lg:flex-col lg:gap-4">
              <div class="text-lg font-bold capitalize">
                Subscribe to Our Newsletter
              </div>
              <div class="relative flex h-10 w-full items-center justify-around gap-2 space-x-1 rounded-md border bg-secondary-bg-100 p-3 border-neutral-400">
                <MailIcon class="h-3.5 w-4 rounded-md text-neutral-400" />
                <input
                  class="w-full bg-secondary-bg-100 text-sm text-gray-100 placeholder-gray-100 outline-none xl:text-base"
                  id="header-search-input"
                  type="text"
                  placeholder="Your e-mail"
                  name="email"
                />
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="mr-2 h-4 w-4 rounded-sm border border-gray-700"
                  name="isPrivacyPolicyAccepted"
                />
                <span class="text-xs font-light">
                  You can always unsubscribe. Check our
                  <a
                    class="text-violet-400 hover:text-violet-500 transition-colors mx-1 text-xs font-light underline"
                    href="/terms-and-conditions"
                  >
                    Terms of use
                  </a>
                  and
                  <a
                    class="text-violet-400 hover:text-violet-500 transition-colors mx-1 text-xs font-light underline "
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </a>
                  here
                </span>
              </div>
              <div class="flex w-full justify-center">
                <button
                  class="border-2 bg-[#4c3cce] border-[#6857f3] hover:bg-[#6857f3] active:bg-[#493cb5] transition-colors rounded-md text-white h-7 w-full whitespace-nowrap px-4 py-1 text-xs font-bold lg:h-10 lg:w-24"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <section className="mb-8 lg:px-0 px-2">
        <h2 class="text-left text-2xl font-bold capitalize mb-4">
          Keep learning
        </h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {sliderBlogs?.map((blog) => (
            <SwiperSlide>
              <BlogCard
                blog={{
                  id: 1,
                  title: blog?.title,
                  date: `Published ${blog?.date}`,
                  img: blog?.img,
                }}
                hideBadge={true}
                headingClass={
                  "text-sm font-normal leading-8 hover:text-silver lg:text-base"
                }
                cardHeaderClass={"p-0"}
                cardContentClass={"p-2"}
                imgClass={"max-h-[146px] h-full"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default page;
