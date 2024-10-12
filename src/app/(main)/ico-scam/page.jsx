"use client";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { message } from "antd";
import { BoxIcon, DeleteIcon, Grid2X2Icon, Loader } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [icoscams, setIcoScams] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentIcoScamTab, setCurrentIcoScamTab] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");

  const fetchIcoScams = async (page, limit, query, currentIcoScamTab) => {
    try {
      const res = await fetch(
        `/api/ico-scams?page=${page}&limit=${limit}&query=${query}&status=${currentIcoScamTab}`
      );
      const data = await res.json();
      setIcoScams(data.icoScams);
      setTotal(data.total);
    } catch (error) {
      message.error("Failed to fetch ICO scams.");
    } finally {
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  useEffect(() => {
    fetchIcoScams(page, limit, query, currentIcoScamTab);
  }, [page, limit, query, currentIcoScamTab]);

  const totalPages = Math.ceil(total / limit); // Calculate total pages

  return (
    <>
      <section className="lg:px-0 px-2 py-10">
        <div className="container mx-auto rounded border p-2 w-full max-w-[1366px]">
          <Tabs defaultValue="all">
            <TabsList className="w-full grid grid-cols-4 h-fit">
              <TabsTrigger
                value="all"
                className="border-r-2 border-white rounded-r-none"
                onClick={() => setCurrentIcoScamTab("")}
              >
                <div className="flex items-center gap-3">
                  {/* <Grid2X2Icon /> */}
                  <img
                    src="/img/Staff.gif"
                    alt=""
                    className="w-full max-w-[30px]"
                  />
                  All
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="complain"
                className="border-r-2 border-white rounded-r-none"
                onClick={() => setCurrentIcoScamTab("COMPLAIN")}
              >
                <div className="flex items-center gap-3">
                  {/* <BoxIcon /> */}
                  <img
                    src="/img/reports.gif"
                    alt=""
                    className="w-full max-w-[30px]"
                  />
                  Complain
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="under review"
                className="border-r-2 border-white rounded-r-none"
                onClick={() => setCurrentIcoScamTab("UNDER_REVIEW")}
              >
                <div className="flex items-center gap-3">
                  {/* <Loader /> */}
                  <img
                    src="/img/Downloading-Progress.gif"
                    alt=""
                    className="w-full max-w-[30px]"
                  />
                  Under Review
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="scam ICO"
                onClick={() => setCurrentIcoScamTab("SCAM_ICO")}
              >
                <div className="flex items-center gap-3">
                  {/* <DeleteIcon /> */}
                  <img
                    src="/img/Thumb-Down.gif"
                    alt=""
                    className="w-full max-w-[30px]"
                  />
                  Scam ICO
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {icoscams?.map((coin) => (
                    <TableRow key={coin?.id}>
                      <TableCell>{coin?.id}</TableCell>
                      <TableCell>
                        <Link href={`/airdrops/single?id=${coin?.id}`}>
                          <img
                            src={coin?.logo}
                            alt=""
                            className="max-w-[50px]"
                          />
                        </Link>
                      </TableCell>
                      <TableCell className="w-full">
                        <Link href={`/airdrops/single?id=${coin?.id}`}>
                          <p className="font-bold text-white">{coin?.title}</p>
                          <div className="text-xs text-[#a3a3a3]">
                            {truncateText(coin?.description, 50)}
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell className="text-right min-w-[150px]">
                        {coin?.status === "COMPLAIN" && (
                          <Badge className="bg-yellow-500 text-white">
                            Complain
                          </Badge>
                        )}
                        {coin?.status === "UNDER_REVIEW" && (
                          <Badge className="bg-orange-500 text-white">
                            Under Review
                          </Badge>
                        )}
                        {coin?.status === "SCAM_ICO" && (
                          <Badge className="bg-red-500 text-white">
                            Scam ICO
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="complain">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {icoscams?.map((coin) => (
                    <TableRow key={coin?.id}>
                      <TableCell>{coin?.id}</TableCell>
                      <TableCell>
                        <Link href={`/airdrops/single?id=${coin?.id}`}>
                          <img
                            src={coin?.logo}
                            alt=""
                            className="max-w-[50px]"
                          />
                        </Link>
                      </TableCell>
                      <TableCell className="w-full">
                        <Link href={`/airdrops/single?id=${coin?.id}`}>
                          <p className="font-bold text-white">{coin?.title}</p>
                          <div className="text-xs text-[#a3a3a3]">
                            {truncateText(coin?.description, 50)}
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell className="text-right min-w-[150px]">
                        <Badge className="bg-yellow-500 text-white">
                          Complain
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="under review">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {icoscams?.map((coin) => (
                    <TableRow key={coin?.id}>
                      <TableCell>{coin?.id}</TableCell>
                      <TableCell>
                        <Link href={`/airdrops/single?id=${coin?.id}`}>
                          <img
                            src={coin?.logo}
                            alt=""
                            className="max-w-[50px]"
                          />
                        </Link>
                      </TableCell>
                      <TableCell className="w-full">
                        <Link href={`/airdrops/single?id=${coin?.id}`}>
                          <p className="font-bold text-white">{coin?.title}</p>
                          <div className="text-xs text-[#a3a3a3]">
                            {truncateText(coin?.description, 50)}
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell className="text-right min-w-[150px]">
                        <Badge className="bg-orange-500 text-white">
                          Under Review
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="scam ICO">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {icoscams?.map((coin) => (
                    <TableRow key={coin?.id}>
                      <TableCell>{coin?.id}</TableCell>
                      <TableCell>
                        <Link href={`/airdrops/single?id=${coin?.id}`}>
                          <img
                            src={coin?.logo}
                            alt=""
                            className="max-w-[50px]"
                          />
                        </Link>
                      </TableCell>
                      <TableCell className="w-full">
                        <Link href={`/airdrops/single?id=${coin?.id}`}>
                          <p className="font-bold text-white">{coin?.title}</p>
                          <div className="text-xs text-[#a3a3a3]">
                            {truncateText(coin?.description, 50)}
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell className="text-right min-w-[150px]">
                        <Badge className="bg-red-500 text-white">
                          Scam ICO
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
          <Pagination className="mt-5">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (page > 1) setPage((prev) => prev - 1);
                  }}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index + 1}>
                  <PaginationLink
                    href="#"
                    isActive={page === index + 1}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(index + 1);
                    }}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (page < totalPages) setPage((prev) => prev + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </>
  );
};

export default page;
