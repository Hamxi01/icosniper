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
import React, { useEffect, useState, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogCard from "../_components/blogCard";
import {
  calculateReadingTime,
  fetchBlogs,
  formatDate,
} from "../_components/utils";
import { useSearchParams } from "next/navigation";
import "./resetStyles.css"; // Adjust the path as necessary

const MainComponent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Access the 'id' query parameter
  const [news, setNews] = useState([]); // Initialize with an empty array
  const [singleNews, setSingleNews] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchNews = async () => {
      const data = await fetchBlogs(); // Await the fetching

      setNews(data);
    };
    fetchNews();

    if (id) {
      const fetchSingleNews = async () => {
        const data = await fetch(`/api/news/single?id=${id}`); // Await the fetching
        if (data.ok) {
          console.log("Fetched news:", data);
          setSingleNews(await data.json());
        }
      };
      fetchSingleNews();
    }
  }, [id]);

  // Ensure we only render if news is available and non-empty
  if (!news || !singleNews || news.length === 0) return null;

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
              <BreadcrumbLink href="/news" className="text-xs text-[#a78bfa]">
                News
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xs">
                {singleNews?.title}
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
                    Published {singleNews?.date && formatDate(singleNews?.date)}
                  </span>
                  <span class="mt-0.5 inline-block h-2 w-2 rounded-xs bg-[#6857f3]"></span>
                  <span class="text-sm uppercase text-neutral-400">
                    {singleNews?.description &&
                      calculateReadingTime(singleNews?.description)}
                  </span>
                </div>
                <h1 class="text-3xl font-bold">{singleNews?.title}</h1>
              </div>
              <label for="" class="border-b"></label>
              <div class="flex justify-between p-6">
                <div class="flex items-center gap-3.5">
                  <picture>
                    <img
                      loading="lazy"
                      src="/img/favicon.png"
                      width="40"
                      height="40"
                      alt="coinmooner logo"
                    />
                  </picture>
                  <div>
                    <div class="text-bold font-sm uppercase">COINSNIPER</div>
                    <div class="text-xs font-medium text-neutral-400">
                      Publisher
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-lg bg-panel-bg overflow-hidden">
              <picture>
                {/* <source
                  srcset="https://cdn.coinmooner.com/article/396.webp?v=2"
                  type="image/webp"
                /> */}
                <source srcset={singleNews?.thumbnail} type="image/png" />
                <img
                  class="w-full object-fill max-h-[560px]"
                  src={singleNews?.thumbnail}
                  alt="New Thumbnail"
                />
              </picture>
            </div>
            <div class="rounded-lg bg-panel-bg p-6">
              {/* Render Quill description as HTML */}
              {singleNews?.description && (
                <div
                  className="reset-headings ql-editor"
                  dangerouslySetInnerHTML={{
                    __html: singleNews?.description,
                  }}
                />
              )}
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
          {news?.map((blog) => (
            <SwiperSlide>
              <BlogCard
                blog={{
                  id: 1,
                  title: blog?.title,
                  date: blog?.date,
                  thumbnail: blog?.thumbnail,
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

const NewsSinglePage = () => (
  <Suspense
    fallback={
      <div className="container mx-auto max-w-[1366px] w-full text-center">
        Loading...
      </div>
    }
  >
    <MainComponent />
  </Suspense>
);

export default NewsSinglePage;
