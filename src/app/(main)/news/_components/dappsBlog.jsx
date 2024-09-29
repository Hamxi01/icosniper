import React from "react";
import BlogCard from "./blogCard";

const DappsBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "How Do DApps Make Money | How to Make Money with DApps",
      img: "https://img.coinmooner.com/CdEveDI5CLuIjkzAbz1ZL0jI2PY=/512x0/https%3A//cdn.coinmooner.com/article/62.png%3Fv%3D1",
      category: "",
      date: "April 24, 2022",
      timeToRead: "6 min read",
    },
    {
      id: 2,
      title:
        "How to Get DApps on Trust Wallet | Enable DApp Browser on Trust Wallet",
      img: "https://img.coinmooner.com/zuXplLa1j4_US1y40Vvje8Lmihk=/512x0/https%3A//cdn.coinmooner.com/article/37.png%3Fv%3D1",
      category: "",
      date: "April 24, 2022",
      timeToRead: "9 min read",
    },
    {
      id: 3,
      title: "How to Build a DApp in 2022 | Best Tutorial on How to Make DApps",
      img: "https://img.coinmooner.com/e_cfHpu0vuhRfbLc15wZJIjf8LU=/512x0/https%3A//cdn.coinmooner.com/article/36.png%3Fv%3D2",
      category: "",
      date: "April 23, 2022",
      timeToRead: "14 min read",
    },
    {
      id: 4,
      title:
        "DApps vs. Smart Contract | Difference between Smart Contract and DApp",
      img: "https://img.coinmooner.com/SpuKwiC8qEoFstuRz5aN-8IFTwE=/512x0/https%3A//cdn.coinmooner.com/article/35.png%3Fv%3D1",
      category: "",
      date: "April 23, 2022",
      timeToRead: "7 min read",
    },
    {
      id: 5,
      title: "How to Get DApps on Trust Wallet on iOS & Android",
      img: "https://img.coinmooner.com/WnNVmTIKIaX4kiebpRbO6nEbvbs=/512x0/https%3A//cdn.coinmooner.com/article/33.png%3Fv%3D1",
      category: "",
      date: "April 23, 2022",
      timeToRead: "8 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">Dapps</h2>
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

export default DappsBlog;
