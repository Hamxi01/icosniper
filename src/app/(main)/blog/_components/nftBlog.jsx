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
        "What Is NFT Marketplace | A Complete Guide For Understanding A NFT...",
      img: "https://img.coinmooner.com/3OQs9HyTag0dMpUWW6f3SOjHdzM=/512x0/https%3A//cdn.coinmooner.com/article/67.png%3Fv%3D2",
      category: "",
      date: "April 24, 2022",
      timeToRead: "13 min read",
    },
    {
      id: 3,
      title: "Best NFT to Invest In | Best NFT Stocks to Buy in 2022",
      img: "https://img.coinmooner.com/H8OwqhqjkZQrPsf6tYorToc6wkA=/512x0/https%3A//cdn.coinmooner.com/article/66.png%3Fv%3D4",
      category: "",
      date: "April 24, 2022",
      timeToRead: "11 min read",
    },
    {
      id: 4,
      title: "What Is NFT Farming and How Does It Work? Guide 2022",
      img: "https://img.coinmooner.com/qa7wmi0ar51tZGESD4xtM7hSvZo=/512x0/https%3A//cdn.coinmooner.com/article/56.png%3Fv%3D3",
      category: "",
      date: "April 24, 2022",
      timeToRead: "8 min read",
    },
    {
      id: 5,
      title: "NFT vs. Crypto | Differences Between Crypto and NFT",
      img: "https://img.coinmooner.com/9oPnOO8Gg21bQXTl3iVLdSThyho=/512x0/https%3A//cdn.coinmooner.com/article/27.png%3Fv%3D5",
      category: "",
      date: "April 22, 2022",
      timeToRead: "7 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">NFT</h2>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
        {blogs?.map((blog) => (
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
    </section>
  );
};

export default NFTBlog;
