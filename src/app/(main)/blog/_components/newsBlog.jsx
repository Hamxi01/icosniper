import React from "react";
import BlogCard from "./blogCard";

const NewsBlog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Why 90% of Crypto Companies Are Failing FCA Standards: A Deep Dive into Rejections",
      img: "https://img.coinmooner.com/W-gBPkdw_ADUarKeIq8Vb6qu63s=/512x0/https%3A//cdn.coinmooner.com/article/396.png%3Fv%3D2",
      category: "",
      date: "September 15, 2024",
      timeToRead: "3 min read",
    },
    {
      id: 2,
      title:
        "Crypto ATMs Under Scrutiny: New Regulations Aim to Protect Users in California",
      img: "https://img.coinmooner.com/6H-3qtE4PKafZZlV2xrdvDhG_dM=/512x0/https%3A//cdn.coinmooner.com/article/395.png%3Fv%3D2",
      category: "",
      date: "September 15, 2024",
      timeToRead: "3 min read",
    },
    {
      id: 3,
      title:
        "Crypto Giants to Gather: What to Expect from October's International Cryptocurrency Forum",
      img: "https://img.coinmooner.com/MfCcDkmoRV2a6uWPelkTVTvTD2g=/512x0/https%3A//cdn.coinmooner.com/article/393.png%3Fv%3D3",
      category: "",
      date: "September 11, 2024",
      timeToRead: "3 min read",
    },
    {
      id: 4,
      title:
        "How TON Blockchain Is Winning Over Users from Solana with Its Unique Ecosystem",
      img: "https://img.coinmooner.com/DVbZC2snbbWfkvKcF_P_eCR6Fvk=/512x0/https%3A//cdn.coinmooner.com/article/392.png%3Fv%3D1",
      category: "",
      date: "September 11, 2024",
      timeToRead: "4 min read",
    },
    {
      id: 5,
      title:
        "Inter Miami Scores Big: Polkadot Logo to Grace Lionel Messi's Training Gear",
      img: "https://img.coinmooner.com/VcD0sO4KsotWvaR8Ket-j0vHcTU=/512x0/https%3A//cdn.coinmooner.com/article/390.png%3Fv%3D1",
      category: "",
      date: "September 07, 2024",
      timeToRead: "3 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">News</h2>
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

export default NewsBlog;
