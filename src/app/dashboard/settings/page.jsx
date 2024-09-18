import { ChevronRight, EyeOffIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <main class="container mx-auto w-full max-w-[1366px] mb-28 flex flex-col items-center p-1">
        <section class="w-full">
          <nav
            aria-label="Breadcrumb"
            class="mb-6 mt-6 flex items-center text-xs font-normal"
          >
            <a
              class="text-violet-400 hover:text-violet-500 transition-colors"
              href="/"
            >
              Home
            </a>
            <ChevronRight />
            <a
              class=" capitalize text-neutral-400 transition-colors hover:text-white"
              href="/settings"
            >
              settings
            </a>
          </nav>
          <div class="flex items-center justify-between">
            <h1 class="mb-6 text-3xl font-medium">Account Settings</h1>
            <a
              class="text-violet-400 hover:text-violet-500 transition-colors"
              href="/dashboard"
            >
              Back to Dashboard
            </a>
          </div>
          <div class="flex flex-col justify-evenly gap-6 md:flex-row">
            <div class="bg-gray-200 dark:bg-[#141620] rounded-lg p-8 flex w-full ">
              <form class="w-80" autocomplete="off">
                <h2 class="mb-6 text-2xl font-medium">Change password</h2>
                <label
                  class="text-white text-base mb-2 block mb-2 block"
                  for="currentPassword"
                >
                  Current password
                </label>
                <div class="border rounded-md focus:border-[#141620] focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-[#141620] focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-[#141620] p-4 placeholder-neutral-400 text-white -mt-1 flex items-center justify-center">
                  <input
                    class="w-full dark:bg-[#141620]  outline-none"
                    type="password"
                    autocomplete="current-password"
                  />
                  <button class="p-1" type="button">
                    <EyeOffIcon />
                  </button>
                </div>
                <label
                  class="text-white text-base mb-2 block my-2 block"
                  for="newPassword"
                >
                  New password
                  <span class="text-sm text-gray-200">(min. 8 characters)</span>
                </label>
                <div class="border rounded-md focus:border-[#141620] focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-[#141620] focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-[#141620] p-4 placeholder-neutral-400 text-white -mt-1 flex items-center justify-center">
                  <input
                    class="w-full dark:bg-[#141620]  outline-none"
                    type="password"
                    autocomplete="new-password"
                  />
                  <button class="p-1" type="button">
                    <EyeOffIcon />
                  </button>
                </div>
                <label
                  class="text-white text-base mb-2 block my-2 block"
                  for="newPasswordConfirmation"
                >
                  Confirm new password
                </label>
                <div class="border rounded-md focus:border-[#141620] focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-[#141620] focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-[#141620] p-4 placeholder-neutral-400 text-white -mt-1 flex items-center justify-center">
                  <input
                    class="w-full dark:bg-[#141620]  outline-none"
                    type="password"
                    autocomplete="new-password"
                  />
                  <button class="p-1" type="button">
                    <EyeOffIcon />
                  </button>
                </div>
                <div class="flex w-full justify-center">
                  <button
                    class="border-2 bg-[#4c3cce] border-[#6857f3] hover:bg-[#6857f3] active:bg-[#493cb5] transition-colors rounded-md text-white mt-5 px-2 py-1"
                    type="submit"
                  >
                    Change password
                  </button>
                </div>
              </form>
            </div>
            <div class="bg-gray-200 dark:bg-[#141620] rounded-lg p-8 flex w-full ">
              <div class="w-80">
                <h2 class="mb-6 text-2xl font-medium">Delete Account</h2>
                <div class="h-24">
                  <button
                    class="border-2 bg-[#4c3cce] border-[#6857f3] hover:bg-[#6857f3] active:bg-[#493cb5] transition-colors rounded-md text-white mt-5 px-2 py-1"
                    type="button"
                  >
                    Delete account
                  </button>
                </div>
                <p class="mt-5 md:whitespace-nowrap">
                  Note: This will NOT delete any submitted projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
