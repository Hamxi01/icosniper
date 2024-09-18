import React from "react";
import BlogCard from "./blogCard";

const DeFiBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "DeFi Presale: What Is It and How Does It Work?",
      img: "https://img.coinmooner.com/LRYImiKx6hBNh4GvPUEAyJF8sE8=/512x0/https%3A//cdn.coinmooner.com/article/359.png%3Fv%3D3",
      category: "",
      date: "July 29, 2024",
      timeToRead: "9 min read",
    },
    {
      id: 2,
      title: "What Is a DeFi Wallet and How To Use It?",
      img: "https://img.coinmooner.com/uC7IgYgdkIoxpOo5b9rpY-PHDUE=/512x0/https%3A//cdn.coinmooner.com/article/354.png%3Fv%3D2",
      category: "",
      date: "July 22, 2024",
      timeToRead: "7 min read",
    },
    {
      id: 3,
      title: "How to Make Passive Income with DeFi In 2024",
      img: "https://img.coinmooner.com/PiTPnQkYWRvgwvn3ufpFkljq_3Y=/512x0/https%3A//cdn.coinmooner.com/article/353.png%3Fv%3D7",
      category: "",
      date: "July 21, 2024",
      timeToRead: "7 min read",
    },
    {
      id: 4,
      title: "Best DeFi Coins to Invest In 2024",
      img: "https://img.coinmooner.com/Xn2LYpF_nFgMbl_mV09Fnd7WHFs=/512x0/https%3A//cdn.coinmooner.com/article/352.png%3Fv%3D2",
      category: "",
      date: "July 21, 2024",
      timeToRead: "15 min read",
    },
    {
      id: 5,
      title: "How to Use DxSale TrustWallet Walletconnect",
      img: "https://img.coinmooner.com/9eV5Een3-WrrXnBqwsiIWhJEt9M=/512x0/https%3A//cdn.coinmooner.com/article/257.png%3Fv%3D1",
      category: "",
      date: "February 18, 2024",
      timeToRead: "2 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">DeFi</h2>
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

export default DeFiBlog;
