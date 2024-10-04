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
import TutorialsBlog from "./_components/tutorialsBlog";

const page = () => {
  const currentCategory = "";

  return (
    <main className="container mx-auto w-full max-w-[1366px]">
      <div className="mb-4">
        <MyBreadcrumb />
      </div>
      <LatestBlog />

      <NFTBlog />

      <DeFiBlog />

      <DappsBlog />

      <AltcoinsBlog />

      <GameFiBlog />

      <ExchangeBlog />

      <LaunchpadBlog />

      <NewsBlog />

      <SponsoredBlog />

      <FinanceBlog />

      <TutorialsBlog />
    </main>
  );
};

export default page;
