import React from "react";
import BlogCard from "./blogCard";

const LaunchpadBlog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "What is Polkastarter (POLS) | How Does Polkastarter Launchpad Work",
      img: "https://img.coinmooner.com/KOgjFu9dGKz6gGOjOl4KxJBLdMg=/512x0/https%3A//cdn.coinmooner.com/article/89.png%3Fv%3D1",
      category: "",
      date: "April 29, 2022",
      timeToRead: "11 min read",
    },
    {
      id: 2,
      title: "What Is TrustSwap (SWAP) | How Does TrustSwap Launchpad Work",
      img: "https://img.coinmooner.com/XhtNz7BcplbzUBCaSAzvatOEveU=/512x0/https%3A//cdn.coinmooner.com/article/88.png%3Fv%3D1",
      category: "",
      date: "April 28, 2022",
      timeToRead: "10 min read",
    },
    {
      id: 3,
      title:
        "What Is a Launchpad Crypto? | How to Use Launchpads for Crypto in 2022",
      img: "https://img.coinmooner.com/XhtNz7BcplbzUBCaSAzvatOEveU=/512x0/https%3A//cdn.coinmooner.com/article/88.png%3Fv%3D1",
      category: "",
      date: "April 28, 2022",
      timeToRead: "8 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">Lanuchpad</h2>
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

export default LaunchpadBlog;
