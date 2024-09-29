import React from "react";
import BlogCard from "./blogCard";

const ExchangeBlog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Coinmooner Reveals the Top 3 Global Cryptocurrency Derivatives Exchanges: Traders Choice in 2024",
      img: "https://img.coinmooner.com/WQ5IOungMlUV_kZpISkTFM7GFww=/512x0/https%3A//cdn.coinmooner.com/article/271.png%3Fv%3D1",
      category: "",
      date: "March 12, 2024",
      timeToRead: "6 min read",
    },
    {
      id: 2,
      title: "What Is a Crypto Scam and How to Identify It?",
      img: "https://img.coinmooner.com/zIBc0Ryh5gChVdW2DoUmkUST7FQ=/512x0/https%3A//cdn.coinmooner.com/article/85.png%3Fv%3D1",
      category: "",
      date: "April 27, 2022",
      timeToRead: "13 min read",
    },
    {
      id: 3,
      title: "Best Anonymous Cryptocurrency Exchanges 2022",
      img: "https://img.coinmooner.com/ohcO2DSz3AiaJTdQh8sq1GrUn4E=/512x0/https%3A//cdn.coinmooner.com/article/84.png%3Fv%3D3",
      category: "",
      date: "April 27, 2022",
      timeToRead: "8 min read",
    },
    {
      id: 4,
      title:
        "Decentralized Crypto Exchanges Explained | Using DEX Crypto Exchanges",
      img: "https://img.coinmooner.com/R9jK2ivyM6kdYDszZ1SIT9ol5f4=/512x0/https%3A//cdn.coinmooner.com/article/83.png%3Fv%3D1",
      category: "",
      date: "April 27, 2022",
      timeToRead: "12 min read",
    },
    {
      id: 5,
      title: "What Is Crypto Burning | How Token Burning Impacts Investors",
      img: "https://img.coinmooner.com/RVExW9y7f7_oqb7dyF4w0-mU5Uc=/512x0/https%3A//cdn.coinmooner.com/article/78.png%3Fv%3D1",
      category: "",
      date: "April 27, 2022",
      timeToRead: "8 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">Exchange</h2>
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

export default ExchangeBlog;
