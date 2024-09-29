import React from "react";
import MyBreadcrumb from "./_components/breadcrumb";
import LatestBlog from "./_components/latestBlog";
import NFTBlog from "./_components/nftBlog";
import DeFiBlog from "./_components/defiBlog";
import DappsBlog from "./_components/dappsBlog";
import AltcoinsBlog from "./_components/altcoinsBlog";
import GameFiBlog from "./_components/gameFiBlog";
import ExchangeBlog from "./_components/exchangeBlog";
import LaunchpadBlog from "./_components/launchpadBlog";
import NewsBlog from "./_components/newsBlog";
import SponsoredBlog from "./_components/sponsoredBlog";
import FinanceBlog from "./_components/financeBlog";
import InterviewBlog from "./_components/interviewBlog";

const page = () => {
  const currentCategory = "";

  return (
    <main className="container mx-auto w-full max-w-[1366px]">
      <div className="mb-4">
        <MyBreadcrumb />
      </div>
      <LatestBlog />
      <hr className="my-4" />
      <NFTBlog />
      <hr className="mt-6 mb-4" />
      <DeFiBlog />
      <hr className="mt-6 mb-4" />
      <DappsBlog />
      <hr className="mt-6 mb-4" />
      <AltcoinsBlog />
      <hr className="mt-6 mb-4" />
      <GameFiBlog />
      <hr className="mt-6 mb-4" />
      <ExchangeBlog />
      <hr className="mt-6 mb-4" />
      <LaunchpadBlog />
      <hr className="mt-6 mb-4" />
      <NewsBlog />
      <hr className="mt-6 mb-4" />
      <SponsoredBlog />
      <div className="mb-10"></div>
      <FinanceBlog />
      <div className="mb-10"></div>
      <InterviewBlog />
      <div className="mb-10"></div>
    </main>
  );
};

export default page;
