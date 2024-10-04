"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useToast } from "@/components/global/use-toast";
import React from "react";
import Link from "next/link";
import ChainIcons from "@/components/global/chain-icons";

const TrendingCoins = () => {
  const [user, setUser] = useState(null);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("tv3623315"));
    setUser(response);
  }, []);

  useEffect(() => {
    fetchCoins();
  }, [page, search, user]);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      // Create params object with required parameters
      const params = {
        page,
        search,
        ...(user?.id && { votedUserId: user.id }), // Only add votedUserId if user.id exists
      };

      const { data } = await axios.get(`/api/coins`, { params });

      setCoins(data.coins);
      setTotalPages(data.totalPages);
    } catch (error) {
      addToast({ title: "Error fetching coins", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const formatRelativeTime = (date) => {
    const now = new Date();
    const secondsDiff = Math.floor((date - now) / 1000);

    // If the difference is negative, use absolute value and indicate it's in the past
    const absSecondsDiff = Math.abs(secondsDiff);

    const minutesDiff = Math.floor(absSecondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);
    const monthsDiff = Math.floor(daysDiff / 30);

    // Define the time direction based on the original difference
    const direction = secondsDiff >= 0 ? "in" : "ago";

    if (absSecondsDiff < 60) return `${direction} ${absSecondsDiff} seconds`;
    if (minutesDiff < 60) return `${direction} ${minutesDiff} minutes`;
    if (hoursDiff < 24) return `${direction} ${hoursDiff} hours`;
    if (daysDiff < 30) return `${direction} ${daysDiff} days`;
    if (monthsDiff < 12) return `${direction} ${monthsDiff} months`;

    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleAddVote = async (coin) => {
    if (user?.id) {
      try {
        const response = await fetch(`/api/votes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" }, // Corrected header key
          body: JSON.stringify({ userId: user?.id, coinId: coin?.id }),
        });

        if (response.ok) {
          addToast({ title: "Vote Added Successfully" });
          fetchCoins(); // Assuming you want to refresh all coins, not just promoted ones
        } else {
          // Handle error response
          const errorData = await response.json();
          addToast({
            title: "Error Adding Vote",
            description: errorData.message || "Something went wrong",
          });
        }
      } catch (error) {
        // Catch any other errors (network, etc.)
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

  const chainIconRes = (chain) => {
    const res = ChainIcons.find((item) => item.name === chain);
    return res ? res.icon : null; // Return the icon if found, otherwise return null
  };

  return (
    <>
      <section className="lg:px-0 px-2 py-3">
        <div className="container mx-auto rounded border p-2 w-full max-w-[1366px]">
          <h2 className="lg:text-3xl text-xl font-semibold dark:text-white mb-4">
            Trending
          </h2>

          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Chain</TableHead>
                    <TableHead className="text-center">Market Cap</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>24h</TableHead>
                    <TableHead className="text-center">Launch Date</TableHead>
                    <TableHead className="text-center">Votes</TableHead>
                    <TableHead className="text-center">Votes 24</TableHead>
                    <TableHead className="text-right">Vote</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coins?.map((coin) => (
                    <TableRow key={coin?.id}>
                      <TableCell>{coin?.id}</TableCell>
                      <TableCell>
                        <Link href={`/coins/single?id=${coin?.id}`}>
                          <img
                            src={coin?.logo}
                            alt=""
                            className="max-w-[50px]"
                          />
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link href={`/coins/single?id=${coin?.id}`}>
                          <p className="font-bold text-white">{coin?.name}</p>
                          <span className="text-xs text-[#a3a3a3]">
                            {coin?.symbol}
                          </span>
                        </Link>
                      </TableCell>
                      <TableCell>
                        {coin?.tokenContractAddress?.length > 0 ? (
                          <img
                            src={chainIconRes(
                              coin?.tokenContractAddress[0]?.Chain
                            )}
                            alt=""
                            className="w-[20px]"
                          />
                        ) : (
                          "N/A"
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {coin?.marketcap ? (
                          coin?.marketcap < 1 ? (
                            <span>Presale</span>
                          ) : (
                            `$(coin?.marketcap)`
                          )
                        ) : (
                          <img
                            src="/img/Loading.gif"
                            alt=""
                            className="w-[25px] mx-auto"
                          />
                        )}
                      </TableCell>
                      <TableCell>
                        {coin?.price < 1 ? <span>-</span> : `$(coin?.price)`}
                      </TableCell>
                      <TableCell>
                        {coin?.volume < 1 ? <span>-</span> : `$(coin?.volume)`}
                      </TableCell>
                      <TableCell>
                        <span>-</span>
                      </TableCell>
                      <TableCell className="text-center">
                        {formatRelativeTime(new Date(coin?.launchDate))}
                      </TableCell>
                      <TableCell className="text-center">
                        {coin?.voteCount}
                      </TableCell>
                      <TableCell className="text-center">
                        {coin?.last24HourVotesCount}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="xs"
                          className="py-1 px-3 bg-[#2498d6] hover:bg-[#223645] border-2 border-[#1f6193] text-white"
                          onClick={() => handleAddVote(coin)}
                          disabled={coin?.hasVoted}
                        >
                          {coin?.hasVoted ? "Voted" : "Vote"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="mt-4 flex justify-between items-center">
                <Button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                >
                  <ChevronLeft /> Previous
                </Button>

                <div className="flex items-center">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                      key={index + 1}
                      onClick={() => setPage(index + 1)}
                      className={`mx-1 ${
                        page === index + 1 ? "bg-blue-500 text-white" : ""
                      }`}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={() =>
                    setPage((prev) => (prev < totalPages ? prev + 1 : prev))
                  }
                  disabled={page === totalPages}
                >
                  Next <ChevronRight />
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default TrendingCoins;
