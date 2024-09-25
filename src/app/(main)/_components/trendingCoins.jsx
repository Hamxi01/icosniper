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

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  useEffect(() => {
    fetchCoins();
  }, [page, search]);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/coins", {
        params: { page, search },
      });
      setCoins(data.coins);
      setTotalPages(data.totalPages);
    } catch (error) {
      addToast({ title: "Error fetching coins", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
                    <TableHead>Market Cap</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>24h</TableHead>
                    <TableHead>Launch Date</TableHead>
                    <TableHead>Votes</TableHead>
                    <TableHead>Votes 24</TableHead>
                    <TableHead>Vote</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coins?.map((coin) => (
                    <TableRow key={coin?.id}>
                      <TableCell>{coin?.id}</TableCell>
                      <TableCell>
                        <img src={coin?.logo} alt="" className="max-w-[35px]" />
                      </TableCell>
                      <TableCell>
                        <p className="font-bold text-white">{coin?.name}</p>
                        <span className="text-xs text-[#a3a3a3]">
                          {coin?.symbol}
                        </span>
                      </TableCell>
                      <TableCell>
                        <img src={coin?.chain} alt="" className="w-[20px]" />
                      </TableCell>
                      <TableCell>
                        {coin?.marketcap ? (
                          coin?.marketcap < 1 ? (
                            <span>Presale</span>
                          ) : (
                            `$(coin?.marketcap)`
                          )
                        ) : (
                          "N/A"
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
                      <TableCell>
                        {formatRelativeTime(new Date(coin?.launchDate))}
                      </TableCell>
                      <TableCell>{coin?.votes}</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>
                        <Button
                          size="xs"
                          className="py-1 px-3 bg-[#4c3cce] hover:bg-[#6857f3] border-2 border-[#6857f3] text-white"
                        >
                          Vote
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
