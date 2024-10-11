"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/global/use-toast";
// import TwitterPosts from "./twitter-post";

const RightSideComponent = ({ user, coin }) => {
  const { addToast } = useToast();
  const [watchlist, setWatchlist] = useState();

  const fetchWatchlist = async () => {
    // Fetch watchlist if coin data exists
    if (coin) {
      const watchlistResponse = await fetch(
        user
          ? `/api/watchlist/count?userId=${user.id}&coinId=${coin.id}`
          : `/api/watchlist/count?coinId=${coin.id}`
      );
      if (watchlistResponse.ok) {
        const watchlistData = await watchlistResponse.json();
        setWatchlist(watchlistData);
      }
    }
  };

  useEffect(() => {
    if (coin) {
      fetchWatchlist();
    }
  }, [coin, user]);

  const addToWatchlist = async () => {
    if (!user) {
      alert("You need to be logged in to add to your watchlist.");
      return; // Exit if user is not defined
    }

    try {
      const response = await fetch(`/api/watchlist`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ coinId: coin.id, userId: user.id }),
      });

      if (response.ok) {
        alert("Added To Watchlist Successfully");
        // Optionally refresh the watchlist state after adding
        await fetchWatchlist();
      } else {
        console.error("Failed to add to watchlist:", response.statusText);
        alert("Failed to add to watchlist.");
      }
    } catch (error) {
      console.error("Error adding to watchlist:", error);
      alert("Error adding to watchlist.");
    }
  };

  const handleAddVote = async () => {
    if (user?.id) {
      try {
        const response = await fetch(`/api/votes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user?.id, coinId: coin?.id }),
        });

        if (response.ok) {
          addToast({ title: "Vote Added Successfully" });
          fetchCoins(); // Assuming you want to refresh all coins, not just promoted ones
        } else {
          const errorData = await response.json();
          addToast({
            title: "Error Adding Vote",
            description: errorData.message || "Something went wrong",
          });
        }
      } catch (error) {
        addToast({
          title: "Error Adding Vote",
          description: error.message,
        });
      }
    } else {
      addToast({
        title: "Please Login To Add A Vote",
      });
    }
  };

  return (
    <>
      <div className="hidden lg:block lg:w-1/4">
        <div className="mt-10 flex flex-col gap-4">
          <div className="w-full rounded-lg bg-panel-bg p-5">
            <div className="text-sm font-bold leading-snug text-white">
              Coin Rank
            </div>
            <div className="my-3 flex justify-between">
              <span className="text-xs font-medium text-neutral-400">
                Overall rank
              </span>
              <span className="text-xs font-medium text-white">
                {coin?.overallRank}
              </span>
            </div>
            <div className="my-3 flex justify-between">
              <span className="text-xs font-medium text-neutral-400">
                Daily rank
              </span>
              <span className="text-xs font-medium text-white">
                {coin?.dailyRank}
              </span>
            </div>
            <div className="my-3 flex items-center justify-between">
              <div className="flex flex-col justify-center text-center text-xs font-medium text-neutral-400">
                <div className="mb-2 text-2xl font-bold text-white">
                  {coin?.voteCount}
                </div>
                <p>Total Votes</p>
              </div>
              <div className="flex flex-col justify-center text-center text-xs font-medium text-neutral-400">
                <div className="mb-2 text-2xl font-bold text-white">
                  {coin?.last24HourVotesCount}
                </div>
                <p>Votes Today</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="border-2 bg-mediumslateblue-200 border-purple-100 hover:bg-purple-100 active:bg-purple-200 transition-colors rounded-md text-white px-4 py-1 w-24"
                disabled={coin?.hasVoted}
                onClick={handleAddVote}
              >
                {coin?.hasVoted ? "Voted" : "Vote"}
              </button>
            </div>
            <div className="mt-2.5 text-center text-xs font-medium text-neutral-400">
              You can vote once a day
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 rounded-lg bg-panel-bg p-5">
            <div className="my-3 flex items-center justify-between">
              <div className="flex flex-col items-center gap-2 text-center text-xs font-medium text-neutral-400">
                <p>Add to watchlist</p>
                <Button
                  type="button"
                  onClick={addToWatchlist}
                  disabled={watchlist?.hasAdded}
                >
                  {watchlist?.hasAdded
                    ? "Added To Watchlist"
                    : "Add To Watchlist"}
                </Button>
              </div>
              <div className="flex flex-col justify-center text-center text-xs font-medium text-neutral-400">
                <p>Watchlisted</p>
                <div className="text-2xl font-bold text-white">
                  {watchlist?.totalWatchlistedCoins}
                </div>
                <p>times</p>
              </div>
            </div>
          </div>
        </div>
        {/* {coin && <TwitterPosts username={coin?.socials?.twitter} coin={coin} />} */}
      </div>
    </>
  );
};

export default RightSideComponent;
