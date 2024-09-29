import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import BlogCard from "./blogCard";

const LatestBlog = () => {
  return (
    <section>
      <h2 className="lg:text-3xl text-2xl font-semibold my-3">
        Latest Articles
      </h2>
      <div
        className="rounded-lg p-4 mb-4 flex lg:flex-row flex-col gap-6 bg-gray-300 dark:bg-gradient-to-br from-[#272535] to-[#11141b]"
        // style={{
        //   backgroundImage:
        //     "radial-gradient(181.38% 120.28% at 99.49% -6.14%,#272535 0,#11141b 100%)",
        // }}
      >
        <div className="flex-1 w-full">
          <img
            src="https://cdn.coinmooner.com/article/396.png?v=2"
            alt=""
            className="w-full rounded"
          />
          <h2 className="lg:text-4xl text-2xl font-semibold mt-5">
            <Link href={"/"}>
              Why 90% of Crypto Companies Are Failing FCA Standards: A Deep Dive
              into Rejections
            </Link>
          </h2>
          <p className="text-lg mt-6">
            2024 FCA Report: 90% of Crypto Companies Rejected Over Compliance
            Failures
          </p>
          <div className="flex items-center justify-between gap-5 mt-4 ">
            <div className="flex items-center gap-3 text-[#8e9197] uppercase">
              <span>September 15, 2024</span>
              <span className="block w-2 h-2 rounded-xs bg-[#6857f3]"></span>
              <span>3 min read</span>
            </div>
            <Badge className="rounded bg-[#45464e] text-white">News</Badge>
          </div>
        </div>
        <div className="flex flex-col gap-1 lg:w-[319px] w-full">
          <BlogCard
            blog={{
              img: "https://img.coinmooner.com/onF6HuSlLyRLF-c8qJhy8ye9iAw=/512x0/https%3A//cdn.coinmooner.com/article/395.webp%3Fv%3D2",
              title:
                "Crypto ATMs Under Scrutiny: New Regulations Aim to Protect Users in California",
              category: "News",
              date: "September 15",
              timeToRead: "3 min read",
            }}
            headingClass={"lg:text-[1rem] text-sm"}
            cardClass={"bg-transparent"}
            imgClass={"mx-auto w-full"}
          />
          <BlogCard
            blog={{
              img: "https://img.coinmooner.com/MfCcDkmoRV2a6uWPelkTVTvTD2g=/512x0/https%3A//cdn.coinmooner.com/article/393.png%3Fv%3D3",
              title:
                "Crypto Giants to Gather: What to Expect from October's International Cryptocurrency Forum",
              category: "News",
              date: "September 11",
              timeToRead: "3 min read",
            }}
            headingClass={"lg:text-[1rem] text-sm"}
            cardClass={"bg-transparent"}
            imgClass={"mx-auto w-full"}
          />
          <BlogCard
            blog={{
              img: "https://img.coinmooner.com/MfCcDkmoRV2a6uWPelkTVTvTD2g=/512x0/https%3A//cdn.coinmooner.com/article/393.png%3Fv%3D3",
              title:
                "Crypto Giants to Gather: What to Expect from October's International Cryptocurrency Forum",
              category: "News",
              date: "September 11",
              timeToRead: "3 min read",
            }}
            headingClass={"lg:text-[1rem] text-sm"}
            cardClass={"bg-transparent"}
            imgClass={"mx-auto w-full"}
          />
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
