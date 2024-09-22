import { Button } from "@/components/ui/button";
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
import { EditIcon, PlusCircleIcon, TrashIcon } from "lucide-react";
import React from "react";

const page = () => {
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
                <Button className="gap-3">
                  Add New Coin <PlusCircleIcon className="w-5" />
                </Button>
              </div>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
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
                        <EditIcon className="cursor-pointer text-sky-500 hover:text-sky-600" />
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
                        <EditIcon className="cursor-pointer text-sky-500 hover:text-sky-600" />
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
                        <EditIcon className="cursor-pointer text-sky-500 hover:text-sky-600" />
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
    </>
  );
};

export default page;
