import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const Subscription = () => {
  return (
    <section className="lg:px-0 px-2">
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 border-2 lg:py-16 py-10 lg:px-12 px-8 rounded-lg border-white/20 bg-gradient-to-tr from-[#0d1016] to-[#160d5c] w-full max-w-[1366px]">
        <div>
          <h2 className="lg:text-3xl text-xl font-semibold text-white mb-6">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-slate-100 ">
            Get the relevant crypto news and promising coins straight to your
            inbox
          </p>
        </div>
        <div>
          <form action="" className="w-full">
            <div className="flex w-full items-center space-x-2">
              <Input
                type="email"
                placeholder="Your e-mail"
                className="flex-1 dark:border-[#a3a3a3]"
              />
              <Button
                type="submit"
                className="dark:bg-[#4c3cce] dark:text-white border-[#6857f3] border-2"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex items-center space-x-2 mt-3 text-white">
              <Checkbox id="terms" className="border-white" />
              <Label htmlFor="terms">
                You can always unsubscribe. Check ourTerms of useandPrivacy
                Policyhere
              </Label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
