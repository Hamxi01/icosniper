import React from "react";
import BlogCard from "./blogCard";

const SponsoredBlog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "New Meme Coin ‘The Meme Games’ Kicks Off Crypto Olympics With a Trending...",
      img: "https://img.coinmooner.com/9atVMIFrdHKTh3oTbR99BnYjDIc=/512x0/https%3A//cdn.coinmooner.com/article/388.png%3Fv%3D1",
      category: "",
      date: "August 30, 2024",
      timeToRead: "4 min read",
    },
    {
      id: 2,
      title: "Can You Predict How Successful A Cryptocurrency Will Be?",
      img: "https://img.coinmooner.com/QVZnVMt6U463okzFC9-AVc1_D4k=/512x0/https%3A//cdn.coinmooner.com/article/384.png%3Fv%3D2",
      category: "",
      date: "August 26, 2024",
      timeToRead: "7 min read",
    },
    {
      id: 3,
      title:
        "Is It Time For The FCA To Reconsider The Ban On Crypto Assets For Retail Investors?",
      img: "https://img.coinmooner.com/Zx2fSYwcoEkrteP15m6JSR2P76Q=/512x0/https%3A//cdn.coinmooner.com/article/381.png%3Fv%3D2",
      category: "",
      date: "August 22, 2024",
      timeToRead: "3 min read",
    },
    {
      id: 4,
      title: "How To Choose The Best Crypto Presale To Invest In",
      img: "https://img.coinmooner.com/EqZgeoVSjieao1Ll3RYivqfv4_g=/512x0/https%3A//cdn.coinmooner.com/article/373.png%3Fv%3D3",
      category: "",
      date: "September 15, 2024",
      timeToRead: "7 min read",
    },
    {
      id: 5,
      title: "How to Manage Risks in Bitcoin to Fiat Conversion",
      img: "https://img.coinmooner.com/jLoUCEn1E5pZmNptzuVoNBkEYSg=/512x0/https%3A//cdn.coinmooner.com/article/364.png%3Fv%3D1",
      category: "",
      date: "August 07, 2024",
      timeToRead: "6 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">Sponsored</h2>
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

export default SponsoredBlog;
