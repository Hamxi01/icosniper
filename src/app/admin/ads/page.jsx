"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  EditIcon,
  PlusCircleIcon,
  TrashIcon,
} from "lucide-react";
import React, { useState } from "react";
import { format } from "date-fns";

const page = () => {
  const [date, setDate] = useState();

  const [dialogOpen, setDialogOpen] = useState(false);

  const [editCoin, setEditCoin] = useState();

  return (
    <>
      <section className="">
        <h2 className="text-xl font-semibold text-center mb-5">
          Your Banners Ads and Promoted can control from here
        </h2>
        <Tabs defaultValue="banner-1" className="w-full">
          <TabsList className="w-full grid grid-cols-5">
            <TabsTrigger
              value="banner-1"
              className="border-r-2 border-r-black rounded-r-none"
            >
              Banner 1
            </TabsTrigger>
            <TabsTrigger
              value="banner-2"
              className="border-r-2 border-r-black rounded-none"
            >
              Banner 2
            </TabsTrigger>
            <TabsTrigger
              value="banner-3"
              className="border-r-2 border-r-black rounded-none"
            >
              Banner 3
            </TabsTrigger>
            <TabsTrigger
              value="ads-box"
              className="border-r-2 border-r-black rounded-none"
            >
              Ads Box
            </TabsTrigger>
            <TabsTrigger value="promoted-coins" className="rounded-l-none">
              Promoted Coins
            </TabsTrigger>
          </TabsList>
          <TabsContent value="banner-1" className="bg-gray-200">
            <div className="mx-auto w-full max-w-lg py-8">
              <h3 className="text-xl mb-4 underline underline-offset-4">
                Current Banner
              </h3>
              <div>
                <img
                  src="/img/banner-1.webp"
                  alt=""
                  className="w-full mb-2 border-2 border-violet-200 rounded-lg p-1"
                />
                <p>
                  End Date: <strong>20/10/2024</strong>
                </p>
              </div>
              <h3 className="text-xl mb-4 underline underline-offset-4 mt-8">
                Update Banner
              </h3>
              <form action="">
                <label
                  htmlFor="banner-1"
                  className="flex flex-col border border-black border-dashed rounded p-2 mb-2"
                >
                  Upload New Image
                  <input type="file" id="banner-1" className="mt-2" />
                </label>
                <label
                  htmlFor="banner-1-date"
                  className="flex flex-col border border-black border-dashed rounded p-2 mb-2"
                >
                  Select End Date:{" "}
                  <input type="date" id="banner-1-date" className="py-1 px-3" />
                </label>
                <Button>Update Now</Button>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="banner-2" className="bg-gray-100">
            <div className="mx-auto w-full max-w-lg py-8">
              <h3 className="text-xl mb-4 underline underline-offset-4">
                Current Banner
              </h3>
              <div>
                <img
                  src="/img/banner-2.webp"
                  alt=""
                  className="w-full mb-2 border-2 border-violet-200 rounded-lg p-1"
                />
                <p>
                  End Date: <strong>20/10/2024</strong>
                </p>
              </div>
              <h3 className="text-xl mb-4 underline underline-offset-4 mt-8">
                Update Banner
              </h3>
              <form action="">
                <label
                  htmlFor="banner-2"
                  className="flex flex-col border border-black border-dashed rounded p-2 mb-2"
                >
                  Upload New Image
                  <input type="file" id="banner-2" className="mt-2" />
                </label>
                <label
                  htmlFor="banner-2-date"
                  className="flex flex-col border border-black border-dashed rounded p-2 mb-2"
                >
                  Select End Date:{" "}
                  <input type="date" id="banner-2-date" className="py-1 px-3" />
                </label>
                <Button>Update Now</Button>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="banner-3" className="bg-slate-100">
            <div className="mx-auto w-full max-w-lg py-8">
              <h3 className="text-xl mb-4 underline underline-offset-4">
                Current Banner
              </h3>
              <div>
                {/* <img
                  src="/img/banner-2.webp"
                  alt=""
                  className="w-full mb-2 border-2 border-violet-200 rounded-lg p-1"
                /> */}
                <video
                  controls
                  className="w-full h-40 object-cover mb-2 border-2 border-violet-200 rounded-lg p-1"
                >
                  <source src="/img/banner-3.mp4" />
                </video>
                <p>
                  End Date: <strong>20/10/2024</strong>
                </p>
              </div>
              <h3 className="text-xl mb-4 underline underline-offset-4 mt-8">
                Update Banner
              </h3>
              <form action="">
                <label
                  htmlFor="banner-2"
                  className="flex flex-col border border-black border-dashed rounded p-2 mb-2"
                >
                  Upload New Image
                  <input type="file" id="banner-2" className="mt-2" />
                </label>
                <label
                  htmlFor="banner-2-date"
                  className="flex flex-col border border-black border-dashed rounded p-2 mb-2"
                >
                  Select End Date:{" "}
                  <input type="date" id="banner-2-date" className="py-1 px-3" />
                </label>
                <Button>Update Now</Button>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="ads-box" className="bg-slate-200">
            <div className="mx-auto w-full max-w-lg py-8">
              <h3 className="text-xl mb-4 underline underline-offset-4">
                Current Ads
              </h3>
              <div>
                <img
                  src="https://www.adspeed.com/placeholder-300x250.gif"
                  alt=""
                  className="w-full mb-2 border-2 border-violet-200 rounded-lg p-1"
                />
                <p>
                  End Date: <strong>20/10/2024</strong>
                </p>
              </div>
              <h3 className="text-xl mb-4 underline underline-offset-4 mt-8">
                Update Ads
              </h3>
              <form action="">
                <label
                  htmlFor="banner-2"
                  className="flex flex-col border border-black border-dashed rounded p-2 mb-2"
                >
                  Upload New Image/Video
                  <input type="file" id="banner-2" className="mt-2" />
                </label>
                <label
                  htmlFor="banner-2-date"
                  className="flex flex-col border border-black border-dashed rounded p-2 mb-2"
                >
                  Select End Date:{" "}
                  <input type="date" id="banner-2-date" className="py-1 px-3" />
                </label>
                <Button>Update Now</Button>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="promoted-coins" className="bg-slate-100">
            <div className="p-5">
              <div className="flex justify-end items-center">
                <Button
                  className="gap-3"
                  onClick={() => {
                    setDialogOpen(true);
                    setEditCoin();
                  }}
                >
                  Add Coin for Ads <PlusCircleIcon className="w-5" />
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">124</TableCell>
                    <TableCell>Bit Coin</TableCell>
                    <TableCell>20/10/2024</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <EditIcon
                          className="cursor-pointer text-sky-500 hover:text-sky-600"
                          onClick={() => {
                            setDialogOpen(true);
                            setEditCoin({ id: 1 });
                          }}
                        />
                        <TrashIcon className="cursor-pointer text-red-500 hover:text-red-600" />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">124</TableCell>
                    <TableCell>Bit Coin</TableCell>
                    <TableCell>20/10/2024</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <EditIcon
                          className="cursor-pointer text-sky-500 hover:text-sky-600"
                          onClick={() => {
                            setDialogOpen(true);
                            setEditCoin({ id: 1 });
                          }}
                        />
                        <TrashIcon className="cursor-pointer text-red-500 hover:text-red-600" />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">124</TableCell>
                    <TableCell>Bit Coin</TableCell>
                    <TableCell>20/10/2024</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <EditIcon
                          className="cursor-pointer text-sky-500 hover:text-sky-600"
                          onClick={() => {
                            setDialogOpen(true);
                            setEditCoin({ id: 1 });
                          }}
                        />
                        <TrashIcon className="cursor-pointer text-red-500 hover:text-red-600" />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">124</TableCell>
                    <TableCell>Bit Coin</TableCell>
                    <TableCell>20/10/2024</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <EditIcon
                          className="cursor-pointer text-sky-500 hover:text-sky-600"
                          onClick={() => {
                            setDialogOpen(true);
                            setEditCoin({ id: 1 });
                          }}
                        />
                        <TrashIcon className="cursor-pointer text-red-500 hover:text-red-600" />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(!dialogOpen)}>
        <DialogContent className="bg-slate-50">
          <DialogHeader>
            <DialogTitle>{editCoin ? "Edit" : "Add "} Coin</DialogTitle>
            <form action="" className="flex flex-col gap-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="--- Status ---" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="run">Run</SelectItem>
                  <SelectItem value="stop">Stop</SelectItem>
                </SelectContent>
              </Select>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <div>
                <Button>Update Coin</Button>
              </div>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default page;
