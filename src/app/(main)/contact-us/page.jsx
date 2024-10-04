import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronRight,
  GithubIcon,
  MailIcon,
  SendIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="py-10 lg:px-0 px-2">
      <div className="container mx-auto w-full max-w-[1366px]">
        <h1 className="lg:text-4xl text-2xl font-semibold darKtext-white mb-4">
          Contact Us
        </h1>
        <p className="mb-8 text-[#a3a3a3]">
          If you need to get in touch with us, please feel free to use any
          messaging platform of your choice or complete the feedback form.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="">
            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5">
              <Link href={"https://t.me/ICOSNIPERAD"}>
                <Card className="dark:bg-[#141620]">
                  <CardHeader className="flex items-center flex-row gap-2">
                    <SendIcon /> Telegram
                  </CardHeader>
                  <CardContent>
                    <CardDescription>https://t.me/ICOSNIPERAD</CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href={"/"}>
                <Card className="dark:bg-[#141620]">
                  <CardHeader className="flex items-center flex-row gap-2">
                    <MailIcon /> Email
                  </CardHeader>
                  <CardContent>
                    <CardDescription>contact@coinmooner.com</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <Card className="dark:bg-[#141620] mt-4">
              <CardHeader>
                <CardTitle className="mb-4">Follow Us</CardTitle>
                <div className="flex items-center gap-3">
                  <Link href={"/"}>
                    <TwitterIcon />
                  </Link>
                  <Link href={"/"}>
                    <YoutubeIcon />
                  </Link>
                  <Link href={"/"}>
                    <GithubIcon />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mt-4">
                  If you have any questions <br /> contact us directly on
                  Telegram:
                </CardTitle>
                <div className="flex items-center gap-2 mt-5">
                  <Badge className="w-1 p-1 bg-green-500"></Badge>
                  <span className="dark:text-white">Online</span>
                </div>
                <Button className="gap-2 mt-3 bg-[#1d7eba] hover:bg-[#06b6d4] text-white">
                  <SendIcon />
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
          <Card className="lg:col-span-2 col-span-1 dark:bg-[#141620]">
            <CardHeader>
              <CardTitle>Fill out the form</CardTitle>
            </CardHeader>
            <CardContent>
              <Form>
                <Input
                  name="email"
                  className="w-full py-6 border-[#797c82] mb-3"
                  placeholder="Your e-mail"
                />
                <Textarea
                  className="w-full py-6 border-[#797c82] mb-3"
                  placeholder="Your Message"
                ></Textarea>
                <div className="flex items-center space-x-2 mt-3 mb-7">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-xs">
                    You can always unsubscribe. Check ourTerms of useandPrivacy
                    Policyhere
                  </Label>
                </div>
                <Button className="bg-[#4c3cce] border-[#6857f3] hover:bg-[#6857f3] text-white">
                  Submit <ChevronRight />
                </Button>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default page;
