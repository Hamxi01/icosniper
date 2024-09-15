import React from "react";
import MyBreadcrumb from "./_components/breadcrumb";
import LatestBlog from "./_components/latestBlog";
import NFTBlog from "./_components/nftBlog";

const page = () => {
  return (
    <main className="container mx-auto w-full max-w-[1366px]">
      <div className="mb-4">
        <MyBreadcrumb />
      </div>
      <LatestBlog />
      <hr className="my-4" />
      <NFTBlog />
    </main>
  );
};

export default page;
