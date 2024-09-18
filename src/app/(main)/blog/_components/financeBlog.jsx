import React from "react";
import BlogCard from "./blogCard";

const FinanceBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "Gaming in the Metaverse: Blurring Reality",
      img: "https://img.coinmooner.com/nRudoMU3z9sQe5icphJvKXZ1cTk=/512x0/https%3A//cdn.coinmooner.com/article/202.png%3Fv%3D2",
      category: "",
      date: "December 01, 2023",
      timeToRead: "10 min read",
    },
    {
      id: 2,
      title:
        "A Complete Beginner’s Guide to Immediate Connect Cryptocurrency Trading",
      img: "https://img.coinmooner.com/hyYTOclktxpFnbvSG4NuTVuxhqM=/512x0/https%3A//cdn.coinmooner.com/article/193.png%3Fv%3D4",
      category: "",
      date: "November 21, 2023",
      timeToRead: "8 min read",
    },
    {
      id: 3,
      title:
        "VC Spectra (SPCT) - A Fresh New Cryptocurrency Project via Which You Can Invest in Diversified, High-Yielding Portfolios",
      img: "https://img.coinmooner.com/URIa4q8ygcfP9IhJJ-tMfBA6Zyo=/512x0/https%3A//cdn.coinmooner.com/article/192.png%3Fv%3D1",
      category: "",
      date: "July 29, 2023",
      timeToRead: "7 min read",
    },
    {
      id: 4,
      title: "Here’s All You Need to Know Before Joining Stake.com",
      img: "https://img.coinmooner.com/Rk_jXGOgVHlw2MRxoWJJVvTG4xk=/512x0/https%3A//cdn.coinmooner.com/article/191.png%3Fv%3D4",
      category: "",
      date: "July 23, 2023",
      timeToRead: "7 min read",
    },
    {
      id: 5,
      title: "Top 5 problems with Crypto Trading in July",
      img: "https://img.coinmooner.com/t4JtqR1aNHMkSgncCy6Yt6WQd88=/512x0/https%3A//cdn.coinmooner.com/article/189.png%3Fv%3D3",
      category: "",
      date: "June 29, 2023",
      timeToRead: "11 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">Finance</h2>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
        {blogs?.map((blog) => (
          <BlogCard
            key={blog?.id}
            blog={blog}
            hideBadge={true}
            headingClass="text-md"
          />
        ))}
      </div>
    </section>
  );
};

export default FinanceBlog;
