"use client";
import React, { Suspense } from "react";
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
import { useSearchParams } from "next/navigation"; // Import the hook

const MainComponent = () => {
  const searchParams = useSearchParams(); // Use the hook to get search parameters
  const currentCategory = searchParams.get("category"); // Get specific query parameter

  // Mapping of categories to their respective components
  const categoryComponents = {
    NFT: <NFTBlog />,
    DeFi: <DeFiBlog />,
    Dapps: <DappsBlog />,
    Altcoins: <AltcoinsBlog />,
    GameFi: <GameFiBlog />,
    Exchange: <ExchangeBlog />,
    Launchpad: <LaunchpadBlog />,
    News: <NewsBlog />,
    Sponsored: <SponsoredBlog />,
    Finance: <FinanceBlog />,
    Tutorials: <TutorialsBlog />,
  };

  return (
    <main className="container mx-auto w-full max-w-[1366px]">
      <div className="mb-4">
        <MyBreadcrumb currentCategory={currentCategory} />{" "}
        {/* Pass category if needed */}
      </div>
      {/* Conditionally render components based on the current category */}
      {currentCategory ? (
        // If there is a current category, render only that category's component if it exists
        categoryComponents[currentCategory] || (
          <div>No blogs available for this category.</div>
        )
      ) : (
        // If no category, render all components
        <>
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
        </>
      )}
    </main>
  );
};

const News = () => (
  <Suspense
    fallback={
      <div className="container mx-auto max-w-[1366px] w-full text-center">
        Loading...
      </div>
    }
  >
    <MainComponent />
  </Suspense>
);

export default News;
