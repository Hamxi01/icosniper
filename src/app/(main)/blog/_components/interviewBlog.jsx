import React from "react";
import BlogCard from "./blogCard";

const InterviewBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "An Interview with EroVerse",
      img: "https://img.coinmooner.com/LMS3Pf7FgeUqPQI4eFpPn3ur9oQ=/512x0/https%3A//cdn.coinmooner.com/article/157.png%3Fv%3D13",
      category: "",
      date: "October 11, 2022",
      timeToRead: "11 min read",
    },
  ];

  return (
    <section>
      <h2 className="lg:text-2xl text-xl font-semibold mb-3">INTERVIEW</h2>
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

export default InterviewBlog;
