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
import { Grid2X2Icon, Loader } from "lucide-react";
import Link from "next/link";
import React from "react";

export const airDropsList = [
  {
    id: 1,
    title: "Crypto Robots City Free Mint Giveaway",
    description:
      "Robocity CRC is a token made to reward p2e, give passive income and unlock special minting options.",
    img: "https://cdn.coinmooner.com/logo/a2552.webp?v=0",
    status: "complain",
  },
  {
    id: 2,
    title: "THE $BYIN AIRDROP",
    description: "The $Byin Airdrop Lunch",
    img: "https://cdn.coinmooner.com/logo/a2550.webp?v=0",
    status: "complain",
  },
  {
    id: 3,
    title: "Hoxo logo",
    description:
      "Hoxo trading memes & pools https://explorer.perawallet.app/asset/737045660/",
    img: "https://cdn.coinmooner.com/logo/a2548.webp?v=0",
    status: "under review",
  },
  {
    id: 4,
    title: "Cuckoo AI logo",
    description:
      "Cuckoo AI Cuckoo AI is an Onchain Creative Platform for Creators and Builders",
    img: "https://cdn.coinmooner.com/logo/a2541.webp?v=0",
    status: "scam ICO",
  },
  {
    id: 5,
    title: "MEME FARMING logo",
    description:
      "MEME FARMING Complete quests and receive free rewards in tokens and USDT/USDC",
    img: "https://cdn.coinmooner.com/logo/a2539.webp?v=0",
    status: "under review",
  },
  {
    id: 6,
    title: "LATAM COIN TOKEN logo",
    description:
      "LATAM COIN TOKEN Revolutionizing financial inclusion and growth in Latin America with stability and commitment.",
    img: "https://cdn.coinmooner.com/logo/a2537.webp?v=0",
    status: "scam ICO",
  },
  {
    id: 7,
    title: "MicroBnb Airdrop logo",
    description:
      "MicroBnb Airdrop Empowering the Micro-Economy with Seamless Crypto Payments.",
    img: "https://cdn.coinmooner.com/logo/a2536.webp?v=0",
    status: "complain",
  },
  {
    id: 8,
    title: "Invites logo",
    description:
      "Invites Invites token (symbol: NVIT) on BASE Chain. Utility token of Inviteny APP. Listing Date: 28 Sep",
    img: "https://cdn.coinmooner.com/logo/a2532.webp?v=0",
    status: "under review",
  },
];

const page = () => {
  return (
    <>
      <section className="lg:px-0 px-2 py-10">
        <div className="container mx-auto rounded border p-2 w-full max-w-[1366px]">
          <Tabs defaultValue="all">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="all">
                <div className="flex items-center gap-3">
                  <Grid2X2Icon /> All
                </div>
              </TabsTrigger>
              <TabsTrigger value="complain">
                <div className="flex items-center gap-3">Complain</div>
              </TabsTrigger>
              <TabsTrigger value="under review">
                <div className="flex items-center gap-3">
                  <Loader />
                  Under Review
                </div>
              </TabsTrigger>
              <TabsTrigger value="scam ICO">Scam ICO</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {airDropsList?.map((coin) => (
                    <TableRow key={coin?.id}>
                      <TableCell>{coin?.id}</TableCell>
                      <TableCell>
                        <Link href={`/airdrops/${coin?.id}`}>
                          <img
                            src={coin?.img}
                            alt=""
                            className="max-w-[25px]"
                          />
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link href={`/airdrops/${coin?.id}`}>
                          <p className="font-bold text-white">{coin?.title}</p>
                          <span className="text-xs text-[#a3a3a3]">
                            {coin?.description}
                          </span>
                        </Link>
                      </TableCell>
                      <TableCell>
                        {coin?.status === "complain" && (
                          <Badge className="bg-yellow-500 text-white">
                            Complain
                          </Badge>
                        )}
                        {coin?.status === "under review" && (
                          <Badge className="bg-orange-500 text-white">
                            Under Review
                          </Badge>
                        )}
                        {coin?.status === "scam ICO" && (
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
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {airDropsList?.map((coin) =>
                    coin?.status === "complain" ? (
                      <TableRow key={coin?.id}>
                        <TableCell>{coin?.id}</TableCell>
                        <TableCell>
                          <Link href={`/airdrops/${coin?.id}`}>
                            <img
                              src={coin?.img}
                              alt=""
                              className="max-w-[25px]"
                            />
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Link href={`/airdrops/${coin?.id}`}>
                            <p className="font-bold text-white">
                              {coin?.title}
                            </p>
                            <span className="text-xs text-[#a3a3a3]">
                              {coin?.description}
                            </span>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-500 text-white">
                            Complain
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ) : (
                      <></>
                    )
                  )}
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
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {airDropsList?.map((coin) =>
                    coin?.status === "under review" ? (
                      <TableRow key={coin?.id}>
                        <TableCell>{coin?.id}</TableCell>
                        <TableCell>
                          <Link href={`/airdrops/${coin?.id}`}>
                            <img
                              src={coin?.img}
                              alt=""
                              className="max-w-[25px]"
                            />
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Link href={`/airdrops/${coin?.id}`}>
                            <p className="font-bold text-white">
                              {coin?.title}
                            </p>
                            <span className="text-xs text-[#a3a3a3]">
                              {coin?.description}
                            </span>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-orange-500 text-white">
                            Under Review
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ) : (
                      <></>
                    )
                  )}
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
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {airDropsList?.map((coin) =>
                    coin?.status === "scam ICO" ? (
                      <TableRow key={coin?.id}>
                        <TableCell>{coin?.id}</TableCell>
                        <TableCell>
                          <Link href={`/airdrops/${coin?.id}`}>
                            <img
                              src={coin?.img}
                              alt=""
                              className="max-w-[25px]"
                            />
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Link href={`/airdrops/${coin?.id}`}>
                            <p className="font-bold text-white">
                              {coin?.title}
                            </p>
                            <span className="text-xs text-[#a3a3a3]">
                              {coin?.description}
                            </span>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-red-500 text-white">
                            Scam ICO
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ) : (
                      <></>
                    )
                  )}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
          <Pagination className="mt-5">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </>
  );
};

export default page;
