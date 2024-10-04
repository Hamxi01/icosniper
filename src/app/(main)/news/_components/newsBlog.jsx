"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./blogCard";
import { fetchBlogs } from "./utils";

const NewsBlog = () => {
  const [news, setNews] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchNews = async () => {
      const data = await fetchBlogs("News"); // Await the fetching
      console.log("Fetched news:", data);
      setNews(data);
    };
    fetchNews();
  }, []);

  // Ensure we only render if news is available and non-empty
  if (!news || news.length === 0) return null;

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">News</h2>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
        {news?.map((blog) => (
          <BlogCard
            key={blog?.id}
            blog={blog}
            hideBadge={true}
            headingClass="text-md"
            cardHeaderClass={"p-0"}
            imgClass={"h-[160px] rounded"}
            cardContentClass="px-3 pt-2"
          />
        ))}
      </div>
      <hr className="my-4" />
    </section>
  );
};

export default NewsBlog;
