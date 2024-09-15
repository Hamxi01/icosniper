import React from "react";
import BlogCard from "./blogCard";

const NFTBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "What Is an NFT? | A Complete Guide About NFT Meaning",
      img: "https://img.coinmooner.com/y2CChfMJR3DHMOygNzdkeZKW6lU=/512x0/https%3A//cdn.coinmooner.com/article/68.png%3Fv%3D4",
      category: "",
      date: "April 24, 2022",
      timeToRead: "11 min read",
    },
    {
      id: 2,
      title:
        "What Is NFT Marketplace | A Complete Guide For Understanding A NFT Marketplace",
      img: "https://img.coinmooner.com/3OQs9HyTag0dMpUWW6f3SOjHdzM=/512x0/https%3A//cdn.coinmooner.com/article/67.png%3Fv%3D2",
      category: "",
      date: "April 24, 2022",
      timeToRead: "13 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">NFT</h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {blogs?.map((blog) => (
          <BlogCard key={blog?.id} blog={blog} hideBadge={true} />
        ))}
      </div>
    </section>
  );
};

export default NFTBlog;
