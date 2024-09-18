import { UploadCloudIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <main className="container mx-auto max-w-[1366px] w-full">
        <form class="mb-10">
          <h1 class="text-4xl font-bold text-white">Add Coin</h1>
          <div class="mt-5 flex w-full flex-col gap-5 lg:flex lg:flex-row lg:gap-6">
            <div class="flex w-full flex-col gap-4 lg:w-3/4">
              <div class="bg-panel-bg rounded-lg p-8">
                <div class="text-2xl font-bold text-white">Coin Info</div>
                <div class="md:grid-cols-2 mt-3 gap-5 grid grid-col-1">
                  <div class="flex w-full flex-col">
                    <label class="text-white text-base mb-2 block">
                      Name
                      <span class="text-violet-500 text-base font-bold">*</span>
                    </label>
                    <input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white focus:outline-none focus:outline-indigo-700"
                      type="text"
                      placeholder="e.g. Bitcoin"
                      name="name"
                      required=""
                    />
                  </div>
                  <div>
                    <div class="flex w-full items-center gap-2.5">
                      <div class="flex w-1/2 flex-col">
                        <label class="text-white text-base mb-2 block">
                          Logo
                          <span class="text-violet-500 text-base font-bold">
                            *
                          </span>
                        </label>
                        <button
                          type="button"
                          role="button"
                          tabindex="0"
                          class="flex h-14 items-center justify-center gap-1 rounded-md bg-indigo-700 p-5 transition-colors hover:bg-indigo-600 cursor-pointer"
                        >
                          <input
                            accept="image/jpeg,image/jpg,image/png,image/webp"
                            type="file"
                            autocomplete="off"
                            tabindex="-1"
                            style={{ display: "none" }}
                          />
                          <UploadCloudIcon />
                          <div>Upload</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full flex-col">
                    <label class="text-white text-base mb-2 block">
                      Symbol
                      <span class="text-violet-500 text-base font-bold">*</span>
                    </label>
                    <input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white"
                      type="text"
                      placeholder="e.g. BTC"
                      required=""
                      name="symbol"
                    />
                  </div>
                  <div class="flex w-full flex-col">
                    <label class="text-white text-base mb-2 block">
                      Launch date
                      <span class="text-violet-500 text-base font-bold">*</span>
                    </label>
                    <input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white color-scheme-dark"
                      type="date"
                      placeholder="10/05/2023"
                      name="launchDate"
                      required=""
                    />
                  </div>
                  <div class="flex w-full flex-col">
                    <label class="text-white text-base mb-2 block">
                      Audit Link
                    </label>
                    <input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white"
                      type="text"
                      placeholder="e.g. https://..."
                      name="audit"
                    />
                  </div>
                  <div class="flex w-full flex-col">
                    <label class="text-white text-base mb-2 block">
                      Is your team Doxxed?
                    </label>
                    <input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white"
                      type="text"
                      placeholder="e.g. Link to the proof / youtube video / sources"
                      name="doxxedLink"
                    />
                  </div>
                </div>
              </div>
              <div class="bg-panel-bg rounded-lg p-8">
                <div class="text-2xl font-bold text-white">
                  Token Contract Address
                </div>
                <div class="md:grid-cols-2 mt-3 gap-5 grid grid-col-1 items-center">
                  <div class="flex w-full flex-col">
                    <label class="text-white text-base mb-2 block mb-[1px]">
                      Chain
                      <span class="text-violet-500 text-base font-bold">*</span>
                    </label>
                    <div class="mt-2 css-b62m3t-container">
                      <span
                        id="react-select-2-live-region"
                        class="css-7pg0cj-a11yText"
                      ></span>
                      <span
                        aria-live="polite"
                        aria-atomic="false"
                        aria-relevant="additions text"
                        role="log"
                        class="css-7pg0cj-a11yText"
                      ></span>
                      <div class=" css-3d21zu-control">
                        <div class=" css-hlgwow">
                          <div
                            class=" css-1jqq78o-placeholder"
                            id="react-select-2-placeholder"
                          >
                            Select...
                          </div>
                          <div class=" css-1yt0726" data-value="">
                            <input
                              class=""
                              autocapitalize="none"
                              autocomplete="off"
                              autocorrect="off"
                              id="react-select-2-input"
                              spellcheck="false"
                              tabindex="0"
                              type="text"
                              aria-autocomplete="list"
                              aria-expanded="false"
                              aria-haspopup="true"
                              role="combobox"
                              aria-describedby="react-select-2-placeholder"
                              value=""
                              style={{
                                color: "inherit",
                                background: "0px center",
                                opacity: 1,
                                width: "100%",
                                gridArea: "1 / 2",
                                font: "inherit",
                                minWidth: "2px",
                                border: "0px",
                                margin: "0px",
                                outline: "0px",
                                padding: "0px",
                              }}
                            />
                          </div>
                        </div>
                        <div class=" css-1wy0on6">
                          <span class=" css-1u9des2-indicatorSeparator"></span>
                          <div
                            class=" css-1xc3v61-indicatorContainer"
                            aria-hidden="true"
                          >
                            {/* <svg
                              height="20"
                              width="20"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              class="css-8mmkcg"
                            >
                              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                            </svg> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full flex-col">
                    <label class="text-white text-base mb-2 block mb-0 flex w-full justify-between">
                      <div>
                        Address
                        <span class="text-violet-500 text-base font-bold">
                          *
                        </span>
                      </div>
                    </label>
                    <input
                      type="text"
                      name="contractAddresses.0.address"
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white"
                    />
                  </div>
                </div>
                <div class="md:grid-cols-2 mt-3 gap-5 grid grid-col-1">
                  <div class="">
                    <button
                      type="button"
                      class="h-20 w-full rounded-lg bg-gray-600 transition-colors hover:bg-gray-500"
                    >
                      <span class="flex items-center justify-center text-sm font-bold  text-violet-400">
                        {/* <svg class="h-4 w-4">
                          <use
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xlink:href="#icon-plus"
                          ></use>
                        </svg> */}
                        Add another contract address
                      </span>
                      <p class="text-xs font-normal text-neutral-400">
                        In case of multi-chain tokens or multiple contracts
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-panel-bg rounded-lg p-8">
                <div class="text-2xl font-bold text-white ">
                  Presale Information
                </div>
                <label class="text-white text-base mb-2 block mt-3 flex">
                  Do you have a presale?
                </label>
                <div class="flex gap-16">
                  <label class="flex items-center">
                    <input class="hidden" type="radio" />
                    <span class="relative flex h-6 w-6 items-center p-1 transition-colors border-neutral-400   rounded-full border-2 ">
                      <span class="false"></span>
                    </span>
                    <span class="ml-2 text-white">Yes</span>
                  </label>
                  <label class="flex items-center">
                    <input class="hidden" type="radio" checked="" />
                    <span class="relative flex h-6 w-6 items-center p-1 border-violet-500 rounded-full border-2 ">
                      <span class="inline-block h-3 w-3 rounded-full bg-violet-500"></span>
                    </span>
                    <span class="ml-2 text-white">No</span>
                  </label>
                </div>
              </div>
              <div class="bg-panel-bg rounded-lg p-8">
                <div class="text-2xl font-bold text-white">
                  Project description
                </div>
                <div class="text-white text-base mb-2 block mt-3 flex">
                  Tell us MORE about your project and your team.
                  <span class="text-violet-500 text-base font-bold">*</span>
                </div>
                <div class="flex flex-col">
                  <textarea
                    class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white h-32"
                    placeholder="Overall description"
                    name="description"
                    required=""
                  ></textarea>
                </div>
              </div>
              <div class="bg-panel-bg rounded-lg p-8">
                <div class="text-2xl font-bold text-white">Socials</div>
                <div class="grid-col-1 mt-3 grid gap-9 md:grid-cols-2">
                  <div class="flex flex-col">
                    <label class="text-white text-base mb-2 block flex justify-between">
                      <div>
                        Website
                        <span class="text-violet-500 text-base font-bold">
                          *
                        </span>
                      </div>
                    </label>
                    <input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white  pl-10"
                      type="text"
                      placeholder="e.g. https://..."
                      name="socials.0.link"
                    />
                    <img
                      class="-mt-[2.3rem] ml-3 h-5 w-5"
                      src="./v3/socials/web.svg"
                      alt="Website"
                    />
                  </div>
                  <div class="flex flex-col">
                    <label class="text-white text-base mb-2 block flex justify-between">
                      <div>
                        Telegram{" "}
                        <span class="text-violet-500 text-base font-bold">
                          *
                        </span>
                      </div>
                    </label>
                    <input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white  pl-10"
                      type="text"
                      placeholder="e.g. https://..."
                      name="socials.1.link"
                    />
                    <img
                      class="-mt-[2.3rem] ml-3 h-5 w-5"
                      src="./v3/socials/telegram.svg"
                      alt="Telegram"
                    />
                  </div>
                  <div class="flex flex-col">
                    <label class="text-white text-base mb-2 block flex justify-between">
                      <div>
                        Twitter{" "}
                        <span class="text-violet-500 text-base font-bold">
                          *
                        </span>
                      </div>
                    </label>
                    <input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white  pl-10"
                      type="text"
                      placeholder="e.g. https://..."
                      name="socials.2.link"
                    />
                    <img
                      class="-mt-[2.3rem] ml-3 h-5 w-5"
                      src="./v3/socials/twitter.svg"
                      alt="Twitter"
                    />
                  </div>
                  <div class="flex flex-col">
                    <label class="text-white text-base mb-2 block flex justify-between">
                      <div>CoinMarketCap </div>
                    </label>
                    <input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white  pl-10"
                      type="text"
                      placeholder="e.g. https://..."
                      name="socials.3.link"
                    />
                    <img
                      class="-mt-[2.3rem] ml-3 h-5 w-5"
                      src="./v3/socials/market.png"
                      alt="CoinMarketCap"
                    />
                  </div>
                </div>
                <div class="mt-14 flex flex-col gap-2">
                  <span>Add More Socials</span>
                  <div class="flex flex-wrap gap-2">
                    <button
                      class="flex w-auto items-center justify-center gap-2 rounded-lg bg-gray-600 p-3 transition-colors hover:bg-gray-500"
                      type="button"
                    >
                      <img class="h-5 w-5" src="./v3/socials/cg.svg" alt="" />
                      CoinGecko
                    </button>
                    <button
                      class="flex w-auto items-center justify-center gap-2 rounded-lg bg-gray-600 p-3 transition-colors hover:bg-gray-500"
                      type="button"
                    >
                      <img
                        class="h-5 w-5"
                        src="./v3/socials/reddit.svg"
                        alt=""
                      />
                      Reddit
                    </button>
                    <button
                      class="flex w-auto items-center justify-center gap-2 rounded-lg bg-gray-600 p-3 transition-colors hover:bg-gray-500"
                      type="button"
                    >
                      <img
                        class="h-5 w-5"
                        src="./v3/socials/discord.svg"
                        alt=""
                      />
                      Discord
                    </button>
                    <button
                      class="flex w-auto items-center justify-center gap-2 rounded-lg bg-gray-600 p-3 transition-colors hover:bg-gray-500"
                      type="button"
                    >
                      <img
                        class="h-5 w-5"
                        src="./v3/socials/github.svg"
                        alt=""
                      />
                      GitHub
                    </button>
                    <button
                      class="flex w-auto items-center justify-center gap-2 rounded-lg bg-gray-600 p-3 transition-colors hover:bg-gray-500"
                      type="button"
                    >
                      <img
                        class="h-5 w-5"
                        src="./v3/socials/youtube.svg"
                        alt=""
                      />
                      Youtube
                    </button>
                    <button
                      class="flex w-auto items-center justify-center gap-2 rounded-lg bg-gray-600 p-3 transition-colors hover:bg-gray-500"
                      type="button"
                    >
                      <img
                        class="h-5 w-5"
                        src="./v3/socials/tiktok.svg"
                        alt=""
                      />
                      TikTok
                    </button>
                    <button
                      class="flex w-auto items-center justify-center gap-2 rounded-lg bg-gray-600 p-3 transition-colors hover:bg-gray-500"
                      type="button"
                    >
                      <img
                        class="h-5 w-5"
                        src="./v3/socials/medium.svg"
                        alt=""
                      />
                      Medium
                    </button>
                    <button
                      class="flex w-auto items-center justify-center gap-2 rounded-lg bg-gray-600 p-3 transition-colors hover:bg-gray-500"
                      type="button"
                    >
                      <img
                        class="h-5 w-5"
                        src="./v3/socials/instagram.svg"
                        alt=""
                      />
                      Instagram
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-panel-bg rounded-lg p-8">
                <div class="text-2xl font-bold text-white">
                  Contact Information
                </div>
                <div class="md:grid-cols-2 mt-3 gap-5 grid grid-col-1">
                  <div class="flex w-full flex-col">
                    <label class="text-white text-base mb-2 block">
                      Email{" "}
                      <span class="text-violet-500 text-base font-bold">
                        {" "}
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      required=""
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white"
                      placeholder="contact@coinmooner.com"
                      name="email"
                    />
                  </div>
                  <div class="flex w-full flex-col">
                    <label class="text-white text-base mb-2 block">
                      Contact Telegram
                      <span class="text-violet-500 text-base font-bold">
                        {" "}
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      required=""
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white"
                      placeholder="@CoinMoonerAdverts"
                      name="contactTelegram"
                    />
                  </div>
                </div>
              </div>
              <div class="bg-panel-bg rounded-lg p-8">
                <div class="text-2xl font-bold text-white">Confirmation</div>
                <div class="md:grid-cols-2 mt-3 gap-5 grid grid-col-1">
                  <div class="flex h-full flex-col justify-center gap-2">
                    <div class="flex w-full items-center gap-2">
                      <input
                        type="checkbox"
                        class="h-5 w-5 rounded-md bg-gray-600"
                        required=""
                        name="isTermsAccepted"
                      />
                      <span class="text-base text-white">
                        I agree to the{" "}
                        <a
                          class="text-violet-400 hover:text-violet-500"
                          href="/terms-and-conditions"
                          target="_blank"
                          rel=""
                        >
                          Terms and Conditions
                        </a>
                      </span>
                    </div>
                  </div>
                  <div class="flex w-full flex-col">
                    <div class="rounded">
                      <div>
                        <div style={{ width: "304px", height: "78px" }}>
                          <div>
                            <iframe
                              title="reCAPTCHA"
                              width="304"
                              height="78"
                              role="presentation"
                              name="a-9zw9z061ahop"
                              frameborder="0"
                              scrolling="no"
                              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                              src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdI0IYcAAAAAGv8KRiJG7JXSm1W3pMEMkF6Y3bw&amp;co=aHR0cHM6Ly9jb2lubW9vbmVyLmNvbTo0NDM.&amp;hl=en-GB&amp;type=image&amp;v=WV-mUKO4xoWKy9M4ZzRyNrP_&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=7iw76duzxz3r"
                            ></iframe>
                          </div>
                          <textarea
                            id="g-recaptcha-response-1"
                            name="g-recaptcha-response"
                            class="g-recaptcha-response"
                            style={{
                              width: "250px",
                              height: "40px",
                              border: "1px solid rgb(193, 193, 193)",
                              margin: "10px 25px",
                              padding: "0px",
                              resize: "none",
                              display: "none",
                            }}
                          ></textarea>
                        </div>
                        <iframe style={{ display: "none" }}></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 flex flex-col items-center">
                <button
                  class="rounded-md border-2 border-purple-100 bg-mediumslateblue-200 px-10 py-3 text-xl text-white backdrop-blur-[50px] transition-colors hover:bg-purple-100"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
            <div class="w-full lg:w-1/4">
              <div class="sticky top-0 flex flex-col gap-5 rounded-lg bg-panel-bg p-4 font-medium text-white  md:flex-row md:text-lg lg:flex-col lg:text-xl">
                <div>
                  <div class="w-full text-lg font-medium text-white">
                    If you have any questions <br /> contact us directly on
                    Telegram:
                  </div>
                  <div class="flex items-center gap-1 md:mt-2">
                    <div class="h-2 w-2 rounded-full bg-green-500"></div>
                    <span class="text-base text-white md:text-xs">
                      We are online
                    </span>
                  </div>
                </div>
                <a
                  class="flex items-center justify-center gap-2 rounded bg-cyan-600  px-3 py-3 text-xs text-white transition-colors hover:bg-cyan-500 md:h-16 lg:text-sm  lg:font-bold"
                  href="https://t.me/CoinMoonerAdverts/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {/* <svg class="h-5 w-5 md:h-4 md:w-4">
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#icon-telegram"
                    ></use>
                  </svg> */}
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default page;
