import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-7 p-5">
      <Card>
        <CardHeader>
          <CardTitle>Total Coins</CardTitle>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-4xl">1000</CardTitle>
          <CardDescription>Your total Coins</CardDescription>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={"/admin/coins"}>Go to Coins</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-4xl">1000</CardTitle>
          <CardDescription>Your total Users</CardDescription>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={"/admin/coins"}>Go to Users</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total News</CardTitle>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-4xl">1000</CardTitle>
          <CardDescription>Your total News</CardDescription>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={"/admin/coins"}>Go to News</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Visitors</CardTitle>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-4xl">1000</CardTitle>
          <CardDescription>Your total visitors</CardDescription>
        </CardContent>
        <CardFooter>
          <Button asChild>
            {/* <Link href={"/admin/coins"}>Go to News</Link> */}
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;
