import { EyeOffIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <main class="container mx-auto flex flex-col items-center px-1 py-20">
        <div class="bg-gray-200 dark:bg-[#141620] rounded-lg p-8">
          <form>
            <h1 class="mb-8 w-80 text-3xl text-white">Log In</h1>
            <div class="flex flex-col">
              <label class="text-white text-base mb-2 block" for="username">
                Email
              </label>
              <input
                class="border rounded-md focus:border-[#7a7c82] focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-[#7a7c82] focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-[#141620] p-4 placeholder-neutral-400 text-white -mt-1"
                name="username"
              />
            </div>
            <div class="mt-5 flex flex-col">
              <label class="text-white text-base mb-2 block" for="password">
                Password
              </label>
              <div class="border rounded-md focus:border-[#7a7c82] focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-[#7a7c82] focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-[#141620] p-4 placeholder-neutral-400 text-white -mt-1 flex items-center justify-center">
                <input
                  class="w-full bg-[#141620]  outline-none"
                  type="password"
                  autocomplete="password"
                />
                <button class="p-1" type="button">
                  <EyeOffIcon className="w-5" />
                </button>
              </div>
            </div>
            <a
              class="text-violet-400 hover:text-violet-500 transition-colors text-sm"
              href="/forgot-password"
            >
              Forgot password?
            </a>
            <button
              class="border-2 bg-[#4c3cce] border-[#6857f3] hover:bg-[#6857f3] active:bg-[#6857f3] transition-colors rounded-md text-white mt-5 w-full px-4 py-2"
              type="submit"
            >
              Log In
            </button>
            <p class="mt-5 text-center text-red-500"></p>
          </form>
          <div class="my-5 flex items-center justify-between">
            <div class="h-[1px] w-full bg-white"></div>
            <div class="mx-5">OR</div>
            <div class="h-[1px] w-full bg-white"></div>
          </div>
          <div
            id="google-button-container"
            class="flex justify-center min-h-[44px]"
          ></div>
        </div>
        <div class="mt-5 flex justify-center">
          <Link
            class="text-violet-400 hover:text-violet-500 transition-colors text-sm"
            href="/sign-up"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </main>
    </>
  );
};

export default page;
