import React from "react";
import BlogCard from "./blogCard";

const GameFiBlog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Crypto Games | All You Need to Know About Playing Blockchain Games",
      img: "https://img.coinmooner.com/LPsA_p8sJiMygT3xe-MJVpwz9mg=/512x0/https%3A//cdn.coinmooner.com/article/86.png%3Fv%3D1",
      category: "",
      date: "April 27, 2022",
      timeToRead: "8 min read",
    },
    {
      id: 2,
      title:
        "Best Crypto Games on iOS 2022 | Cryptocurrency Games for iOS Users In 2022",
      img: "https://img.coinmooner.com/C5Qp0RkaTF43GcOeXEp2JUVNdXs=/512x0/https%3A//cdn.coinmooner.com/article/54.png%3Fv%3D1",
      category: "",
      date: "April 24, 2022",
      timeToRead: "8 min read",
    },
    {
      id: 3,
      title:
        "What Is Crypto Games For Android | Best Cryptocurrency Games For Android 2022",
      img: "https://img.coinmooner.com/ZHLfhCktKcMV-BoeJyABUyz36LM=/512x0/https%3A//cdn.coinmooner.com/article/53.png%3Fv%3D1",
      category: "",
      date: "April 24, 2022",
      timeToRead: "8 min read",
    },
    {
      id: 4,
      title: "Best Crypto Games 2022 | Top BlockChain Games to Earn Crypto",
      img: "https://img.coinmooner.com/PCpwDo3-HvU7qM70znsJ8jhQ8Rc=/512x0/https%3A//cdn.coinmooner.com/article/52.png%3Fv%3D1",
      category: "",
      date: "April 24, 2022",
      timeToRead: "10 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">GameFi</h2>
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

export default GameFiBlog;
