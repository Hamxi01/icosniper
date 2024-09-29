import React from "react";
import BlogCard from "./blogCard";

const AltcoinsBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "Sologenic - A Sleeping Giant?",
      img: "https://img.coinmooner.com/EXhz_hJxwOSl3zw3aVEVVDf4vis=/512x0/https%3A//cdn.coinmooner.com/article/158.png%3Fv%3D3",
      category: "",
      date: "October 12, 2022",
      timeToRead: "4 min read",
    },
    {
      id: 2,
      title:
        "Where to Buy Altcoins in 2022 | Best Place to Buy Altcoins Safely",
      img: "https://img.coinmooner.com/xOV9YFnIxu12FS8FzXjnrwioSoc=/512x0/https%3A//cdn.coinmooner.com/article/61.png%3Fv%3D2",
      category: "",
      date: "April 24, 2022",
      timeToRead: "9 min read",
    },
    {
      id: 3,
      title:
        "What Are The Types Of Altcoins | Examples Of Most Popular Altcoin Types",
      img: "https://img.coinmooner.com/hsLd61twazCSNv0KtlM0ix51U4Y=/512x0/https%3A//cdn.coinmooner.com/article/60.png%3Fv%3D1",
      category: "",
      date: "April 24, 2022",
      timeToRead: "11 min read",
    },
    {
      id: 4,
      title:
        "Best Exchanges for Altcoins in 2022 | How to Choose the Best Altcoin Exchange",
      img: "https://img.coinmooner.com/vqx8-L_2gm2qhbJLeD5DvVtACBM=/512x0/https%3A//cdn.coinmooner.com/article/59.png%3Fv%3D1",
      category: "",
      date: "April 24, 2022",
      timeToRead: "12 min read",
    },
    {
      id: 5,
      title:
        "What Is a Meme Coin? | All You Need to Know About Meme Crypto Coins",
      img: "https://img.coinmooner.com/cQBZF1hVFD-LPEZAy19Zhn2NcCA=/512x0/https%3A//cdn.coinmooner.com/article/57.png%3Fv%3D1",
      category: "",
      date: "April 24, 2022",
      timeToRead: "11 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">Altcoins</h2>
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

export default AltcoinsBlog;
