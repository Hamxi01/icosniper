import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import AllCoins from "./_components/allCoins";
import SubmitedRequestCoins from "./_components/submitedRequestCoin";

const page = () => {
  return (
    <>
      <main>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="submited-request">Submited Request</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <AllCoins />
          </TabsContent>
          <TabsContent value="submited-request">
            <div>
              <h2 className="text-xl font-semibold">Submited Coin Request</h2>
            </div>
            <SubmitedRequestCoins />
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
};

export default page;
