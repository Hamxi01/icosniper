"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlogCard from "./blogCard";

import { fetchBlogs, truncateText } from "./utils";

const LatestBlog = () => {
  const [news, setNews] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchNews = async () => {
      const data = await fetchBlogs(); // Await the fetching
      console.log("Fetched blogs:", data);
      setNews(data);
    };
    fetchNews();
  }, []);

  // Ensure we only render if news is available and non-empty
  if (!news || news.length === 0) return null;

  return (
    <section>
      <h2 className="lg:text-3xl text-2xl font-semibold my-3">
        Latest Articles
      </h2>
      <div className="rounded-lg p-4 mb-4 flex lg:flex-row flex-col gap-6 bg-gray-300 dark:bg-gradient-to-br from-[#272535] to-[#11141b]">
        {/* Show the first blog prominently */}
        {news[0] && (
          <div className="flex-1 w-full">
            <img
              src={news[0]?.thumbnail}
              alt=""
              className="w-full rounded h-fit max-h-[750px]"
            />
            <h2 className="lg:text-4xl text-2xl font-semibold mt-5">
              <Link href={`/news/${news[0]?.id}`}>{news[0]?.title}</Link>
            </h2>
            {/* Render truncated description */}
            <div className="text-lg mt-6">
              {/* Use truncateText function to limit description */}
              {news[0]?.description ? (
                <div>
                  {truncateText(news[0]?.description, 30)}{" "}
                  {/* Limit to 30 words */}
                </div>
              ) : null}
            </div>
            {/* <p className="text-lg mt-6">{news[0]?.description}</p> */}
            <div className="flex items-center justify-between gap-5 mt-4">
              <div className="flex items-center gap-3 text-[#8e9197] uppercase">
                <span className="block w-2 h-2 rounded-xs bg-[#6857f3]"></span>
                <span>{news[0]?.timeToRead}</span>
              </div>
              <Badge className="rounded bg-[#45464e] text-white">
                {news[0]?.categories}
              </Badge>
            </div>
          </div>
        )}

        {/* Show the next 2 blogs using BlogCard */}
        <div className="flex flex-col gap-1 lg:w-[319px] w-full">
          {news.slice(1, 3).map((blog) => (
            <BlogCard
              key={blog.id}
              blog={{
                thumbnail: blog.thumbnail,
                title: blog.title,
                category: blog.categories,
                date: blog.date, // Assuming you have a date field
                timeToRead: blog?.timeToRead, // Add your logic for reading time if necessary
              }}
              headingClass={"lg:text-[1rem] text-sm"}
              cardClass={"bg-transparent"}
              imgClass={"mx-auto w-full h-full max-h-[250px]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
