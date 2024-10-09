"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { UploadCloudIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/firebaseConfig"; // Make sure you import your firebase config
import SuccessModal from "./_components/successModal";
import { handleFileUpload } from "@/lib/firebaseFileManage";
import ChainIcons from "@/components/global/chain-icons";

const socialOptions = [
  { name: "CoinGecko", icon: "https://coinmooner.com/v3/socials/cg.svg" },
  { name: "Reddit", icon: "https://coinmooner.com/v3/socials/reddit.svg" },
  { name: "Discord", icon: "https://coinmooner.com/v3/socials/discord.svg" },
  { name: "GitHub", icon: "https://coinmooner.com/v3/socials/github.svg" },
  { name: "Youtube", icon: "https://coinmooner.com/v3/socials/youtube.svg" },
  { name: "TikTok", icon: "https://coinmooner.com/v3/socials/tiktok.svg" },
  { name: "Medium", icon: "https://coinmooner.com/v3/socials/medium.svg" },
  {
    name: "Instagram",
    icon: "https://coinmooner.com/v3/socials/instagram.svg",
  },
];

const page = () => {
  const [user, setUser] = useState(undefined); // Initially undefined to differentiate between 'not yet checked' and 'null'
  const router = useRouter();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Logics for adding Coins
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      socials: [
        {
          link: "",
          name: "Website",
          icon: "https://coinmooner.com/v3/socials/web.svg",
        },
        {
          link: "",
          name: "Telegram",
          icon: "https://coinmooner.com/v3/socials/telegram.svg",
        },
        {
          link: "",
          name: "Twitter",
          icon: "https://coinmooner.com/v3/socials/twitter.svg",
        },
        {
          link: "",
          name: "CoinMarketCap",
          icon: "https://coinmooner.com/v3/socials/market.png",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "socials",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [hasPresale, setHasPresale] = useState("no");
  const [isWhitelist, setIsWhitelist] = useState("no");
  const [availableSocials, setAvailableSocials] = useState(socialOptions);

  const handleAddSocial = (socialName) => {
    const selectedSocial = socialOptions.find(
      (social) => social.name === socialName
    );
    if (selectedSocial) {
      append({
        link: "",
        name: selectedSocial.name,
        icon: selectedSocial.icon,
      });
      setAvailableSocials(
        availableSocials.filter((social) => social.name !== socialName)
      );
    }
  };

  const handleRemoveSocial = (index) => {
    const removedSocial = fields[index].name;
    remove(index);
    setAvailableSocials((prev) => [
      ...prev,
      socialOptions.find((social) => social.name === removedSocial),
    ]);
  };

  const [contractAddresses, setContractAddresses] = useState([
    { Chain: "Ethereum", Address: "" }, // Initial fixed address
  ]);

  // Handler to add another contract address
  const addContractAddress = () => {
    setContractAddresses([...contractAddresses, { Chain: "", Address: "" }]);
  };

  // Handler to update chain or address for a specific contract
  const handleChange = (index, field, value) => {
    const updatedAddresses = [...contractAddresses];
    updatedAddresses[index][field] = value;
    setContractAddresses(updatedAddresses);
  };

  // Handler to remove a specific contract address
  const removeContractAddress = (index) => {
    const updatedAddresses = contractAddresses.filter((_, i) => i !== index);
    setContractAddresses(updatedAddresses);
  };

  // ================ Logo Upload Things
  const [newLogo, setNewLogo] = useState(null); // State to hold the new logo file
  const [uploading, setUploading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    let logoUrl = "";

    // If a new logo is selected, upload it to Firebase
    if (newLogo) {
      try {
        const uploadedUrl = await handleFileUpload(newLogo, "logos/");
        if (uploadedUrl) {
          logoUrl = uploadedUrl;
        }
      } catch (error) {
        alert("Error uploading logo");
        return;
      }
    }

    // Convert the existing social media structure to the desired format
    const formattedSocials = data.socials.reduce((acc, social) => {
      acc[social.name.toLowerCase()] = social.link;
      return acc;
    }, {});

    const isWhitelistBoolean = isWhitelist === "yes" ? true : false;

    const formatedData = {
      ...data,
      logo: logoUrl,
      tokenContractAddresses: contractAddresses,
      socials: formattedSocials,
      whitelist: isWhitelistBoolean,
      softcap: parseFloat(data.softcap),
      hardcap: parseFloat(data.hardcap),
      userId: parseInt(data?.userId),
    };
    console.log("Form submitted", formatedData); // Log the submitted data
    setErrorMessage(""); // Clear any previous error message

    try {
      const response = await fetch("/api/coins/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formatedData),
      });
      console.log(formatedData);
      if (response.ok) {
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 4000);
        router.refresh(); // Redirect to sign-in page on success
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Coin Creation failed. Please try again."
        );
        console.error("Coin Creation failed", errorData);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
    setLoading(false);
  };

  // ================== Logics For Redirect if not loggedIn
  useEffect(() => {
    // Get user data from localStorage and set it in state
    const userData = localStorage.getItem("tv3623315");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null); // Explicitly set to null if no user data found
    }
  }, []);

  useEffect(() => {
    // Redirect to sign-in page if user is null (i.e., not logged in)
    if (user === null) {
      router.push("/sign-in");
    }
  }, [user, router]);

  if (user === undefined) {
    // Still checking for user data, show a loading state
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="container mx-auto max-w-[1366px] w-full">
        <form class="mb-10" onSubmit={handleSubmit(onSubmit)}>
          <h1 class="text-4xl font-bold text-white">Add Coin</h1>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <Input
            {...register("userId")}
            value={user?.id}
            name="userId"
            type="hidden"
          />

          <div class="mt-5 flex w-full flex-col gap-5 lg:flex lg:flex-row lg:gap-6">
            <div class="flex w-full flex-col gap-4 lg:w-3/4">
              <div class="bg-panel-bg rounded-lg p-8">
                <div class="text-2xl font-bold text-white">Coin Info</div>
                <div class="md:grid-cols-2 mt-3 gap-5 grid grid-col-1">
                  <div class="flex w-full flex-col">
                    <Label class="text-white text-base mb-2 block">
                      Name
                      <span class="text-violet-500 text-base font-bold">*</span>
                    </Label>
                    <Input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white focus:outline-none focus:outline-indigo-700"
                      type="text"
                      placeholder="e.g. Bitcoin"
                      name="name"
                      required=""
                      {...register("name", { required: "Name is required" })}
                    />
                  </div>
                  <div>
                    <div class="flex w-full items-center gap-2.5">
                      <div class="flex w-1/2 flex-col">
                        <Label class="text-white text-base mb-2 block">
                          Logo
                          <span class="text-violet-500 text-base font-bold">
                            *
                          </span>
                        </Label>
                        <Button
                          type="button"
                          role="button"
                          tabindex="0"
                          class="flex h-14 items-center justify-center gap-1 rounded-md bg-indigo-700 p-5 transition-colors hover:bg-indigo-600 cursor-pointer"
                          asChild
                        >
                          <Label htmlFor="logo">
                            <Input
                              id="logo"
                              type="file"
                              accept="image/*"
                              onChange={(e) => setNewLogo(e.target.files[0])}
                              style={{ display: "none" }}
                            />
                            {newLogo && (
                              <img
                                src={URL.createObjectURL(newLogo)}
                                alt="New Logo Preview"
                                className="w-full max-w-[40px] h-fit rounded"
                              />
                            )}
                            {uploading && <p>Uploading logo...</p>}
                            <UploadCloudIcon />
                            <div>Upload</div>
                          </Label>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full flex-col">
                    <Label class="text-white text-base mb-2 block">
                      Symbol
                      <span class="text-violet-500 text-base font-bold">*</span>
                    </Label>
                    <Input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white"
                      type="text"
                      placeholder="e.g. BTC"
                      required=""
                      name="symbol"
                      {...register("symbol", {
                        required: "Symbol is required",
                      })}
                    />
                  </div>
                  <div class="flex w-full flex-col">
                    <Label class="text-white text-base mb-2 block">
                      Launch date
                      <span class="text-violet-500 text-base font-bold">*</span>
                    </Label>
                    <Input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white color-scheme-dark"
                      type="date"
                      placeholder="10/05/2023"
                      name="launchDate"
                      required=""
                      {...register("launchDate", {
                        required: "Launch Date is required",
                      })}
                    />
                  </div>
                  <div class="flex w-full flex-col">
                    <Label class="text-white text-base mb-2 block">
                      Audit Link
                    </Label>
                    <Input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white"
                      type="text"
                      placeholder="e.g. https://..."
                      name="audit"
                      {...register("auditLink")}
                    />
                  </div>
                  <div class="flex w-full flex-col">
                    <Label class="text-white text-base mb-2 block">
                      Is your team Doxxed?
                    </Label>
                    <Input
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white"
                      type="text"
                      placeholder="e.g. Link to the proof / youtube video / sources"
                      name="doxxedLink"
                      {...register("teamDoxxed")}
                    />
                  </div>
                </div>
              </div>

              {/* Token Contract Address */}
              <div className="bg-panel-bg rounded-lg p-8">
                <div className="text-2xl font-bold text-white">
                  Token Contract Address
                </div>

                {/* Fixed first contract address input */}
                <div className="md:grid-cols-2 mt-3 gap-5 grid grid-col-1 items-center">
                  <div className="flex w-full flex-col">
                    <Label className="text-white text-base mb-2 block mb-[1px]">
                      Chain{" "}
                      <span className="text-violet-500 text-base font-bold">
                        *
                      </span>
                    </Label>
                    <div className="mt-2">
                      <select
                        value={contractAddresses[0].Chain}
                        onChange={(e) =>
                          handleChange(0, "Chain", e.target.value)
                        }
                        className="h-14 w-full bg-panel-bg text-white placeholder-neutral-400 border rounded-md focus:border-panel-bg focus:outline-indigo-700 p-4"
                      >
                        {/* Add more chain options here */}
                        {ChainIcons.map((icon) => (
                          <option key={icon.id} value={icon.name}>
                            {icon.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex w-full flex-col">
                    <Label className="text-white text-base mb-2 block mb-0">
                      Address{" "}
                      <span className="text-violet-500 text-base font-bold">
                        *
                      </span>
                    </Label>
                    <Input
                      type="text"
                      value={contractAddresses[0].Address}
                      onChange={(e) =>
                        handleChange(0, "Address", e.target.value)
                      }
                      placeholder="Enter contract address"
                      className="h-14 bg-panel-bg text-white placeholder-neutral-400 border rounded-md focus:border-panel-bg focus:outline-indigo-700 p-4"
                    />
                  </div>
                </div>

                {/* Dynamic form for additional contract addresses */}
                {contractAddresses.slice(1).map((contract, index) => (
                  <div
                    className="md:grid-cols-2 mt-3 gap-5 grid grid-col-1 items-center relative" // Add relative positioning
                    key={index + 1} // Adjust key for subsequent items
                  >
                    {/* Remove Button for subsequent addresses */}
                    <div className="absolute top-2 right-2">
                      <button
                        type="button"
                        onClick={() => removeContractAddress(index + 1)} // Adjust index
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>

                    {/* Chain */}
                    <div className="flex w-full flex-col">
                      <Label className="text-white text-base mb-2 block mb-[1px]">
                        Chain{" "}
                        <span className="text-violet-500 text-base font-bold">
                          *
                        </span>
                      </Label>
                      <div className="mt-2">
                        <select
                          value={contract.Chain}
                          onChange={(e) =>
                            handleChange(index + 1, "Chain", e.target.value)
                          } // Adjust index
                          className="h-14 w-full bg-panel-bg text-white placeholder-neutral-400 border rounded-md focus:border-panel-bg focus:outline-indigo-700 p-4"
                        >
                          {ChainIcons.map((icon) => (
                            <option key={icon.id} value={icon.name}>
                              {icon.name}
                            </option>
                          ))}
                          {/* Add more chain options here */}
                        </select>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex w-full flex-col">
                      <Label className="text-white text-base mb-2 block mb-0">
                        Address{" "}
                        <span className="text-violet-500 text-base font-bold">
                          *
                        </span>
                      </Label>
                      <Input
                        type="text"
                        value={contract.Address}
                        onChange={(e) =>
                          handleChange(index + 1, "Address", e.target.value)
                        } // Adjust index
                        placeholder="Enter contract address"
                        className="h-14 bg-panel-bg text-white placeholder-neutral-400 border rounded-md focus:border-panel-bg focus:outline-indigo-700 p-4"
                      />
                    </div>
                  </div>
                ))}

                {/* Button to add more contract addresses */}
                <div className="md:grid-cols-2 mt-3 gap-5 grid grid-col-1">
                  <div>
                    <button
                      type="button"
                      onClick={addContractAddress}
                      className="h-20 w-full rounded-lg bg-gray-600 transition-colors hover:bg-gray-500"
                    >
                      <span className="flex items-center justify-center text-sm font-bold text-violet-400">
                        <svg className="h-4 w-4" viewBox="0 0 20 20">
                          <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
                        </svg>
                        Add another contract address
                      </span>
                      <p className="text-xs font-normal text-neutral-400">
                        In case of multi-chain tokens or multiple contracts
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              {/* Token Contract Address */}

              {/* Presale Information */}
              <div className="bg-panel-bg rounded-lg p-8">
                <div className="text-2xl font-bold text-white">
                  Presale Information
                </div>

                {/* Do you have a presale? */}
                <Label className="mt-3 mb-2 text-white text-base flex">
                  Do you have a presale?
                </Label>
                <div className="flex gap-16">
                  <Label className="flex items-center">
                    <Input
                      type="radio"
                      name="hasPresale"
                      value="yes"
                      checked={hasPresale === "yes"}
                      onChange={(e) => setHasPresale(e.target.value)}
                      className="hidden"
                    />
                    <span className="relative flex h-6 w-6 items-center p-1 transition-colors border-violet-500 rounded-full border-2">
                      {hasPresale === "yes" && (
                        <span className="inline-block h-3 w-3 rounded-full bg-violet-500"></span>
                      )}
                    </span>
                    <span className="ml-2 text-white">Yes</span>
                  </Label>
                  <Label className="flex items-center">
                    <Input
                      type="radio"
                      name="hasPresale"
                      value="no"
                      checked={hasPresale === "no"}
                      onChange={(e) => setHasPresale(e.target.value)}
                      className="hidden"
                    />
                    <span className="relative flex h-6 w-6 items-center p-1 border-neutral-400 rounded-full border-2">
                      {hasPresale === "no" && (
                        <span className="inline-block h-3 w-3 rounded-full bg-violet-500"></span>
                      )}
                    </span>
                    <span className="ml-2 text-white">No</span>
                  </Label>
                </div>

                {/* Presale Details */}
                {hasPresale === "yes" && (
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Softcap */}
                    <div className="flex flex-col w-full">
                      <Label className="mb-2 text-white text-base">
                        Softcap{" "}
                        <span className="text-violet-500 font-bold">*</span>
                      </Label>
                      <Input
                        type="number"
                        name="softCap"
                        placeholder="e.g. 100 BNB"
                        className="h-14 bg-panel-bg text-white placeholder-neutral-400 border rounded-md focus:border-panel-bg focus:outline-indigo-700 p-4"
                        {...register("softcap")}
                      />
                    </div>

                    {/* Presale Link */}
                    <div className="flex flex-col w-full">
                      <Label className="mb-2 text-white text-base">
                        Presale Link{" "}
                        <span className="text-violet-500 font-bold">*</span>
                      </Label>
                      <Input
                        type="text"
                        name="presaleLink"
                        placeholder="e.g. https://presale.com/12313123"
                        className="h-14 bg-panel-bg text-white placeholder-neutral-400 border rounded-md focus:border-panel-bg focus:outline-indigo-700 p-4"
                        {...register("presaleLink")}
                      />
                    </div>

                    {/* Hardcap */}
                    <div className="flex flex-col w-full">
                      <Label className="mb-2 text-white text-base">
                        Hardcap{" "}
                        <span className="text-violet-500 font-bold">*</span>
                      </Label>
                      <Input
                        type="number"
                        name="hardCap"
                        placeholder="e.g. 500 BNB"
                        className="h-14 bg-panel-bg text-white placeholder-neutral-400 border rounded-md focus:border-panel-bg focus:outline-indigo-700 p-4"
                        {...register("hardcap")}
                      />
                    </div>

                    {/* Presale Date */}
                    <div className="flex flex-col w-full">
                      <Label className="mb-2 text-white text-base">
                        Presale Date{" "}
                        <span className="text-violet-500 font-bold">*</span>
                      </Label>
                      <Input
                        type="date"
                        name="presaleStart"
                        className="h-14 bg-panel-bg text-white placeholder-neutral-400 border rounded-md focus:border-panel-bg focus:outline-indigo-700 p-4"
                        {...register("presaleDate")}
                      />
                    </div>

                    {/* Is there a whitelist? */}
                    <div className="flex flex-col w-full">
                      <Label className="mb-2 text-white text-base">
                        Is there a whitelist?{" "}
                        <span className="text-neutral-400 font-bold">*</span>
                      </Label>
                      <div className="flex gap-16">
                        <Label className="flex items-center">
                          <Input
                            type="radio"
                            name="isWhitelist"
                            value="yes"
                            checked={isWhitelist === "yes"}
                            onChange={(e) => setIsWhitelist(e.target.value)}
                            className="hidden"
                          />
                          <span className="relative flex h-6 w-6 items-center p-1 border-neutral-400 rounded-full border-2">
                            {isWhitelist === "yes" && (
                              <span className="inline-block h-3 w-3 rounded-full bg-violet-500"></span>
                            )}
                          </span>
                          <span className="ml-2 text-white">Yes</span>
                        </Label>
                        <Label className="flex items-center">
                          <Input
                            type="radio"
                            name="isWhitelist"
                            value="no"
                            checked={isWhitelist === "no"}
                            onChange={(e) => setIsWhitelist(e.target.value)}
                            className="hidden"
                          />
                          <span className="relative flex h-6 w-6 items-center p-1 border-violet-500 rounded-full border-2">
                            {isWhitelist === "no" && (
                              <span className="inline-block h-3 w-3 rounded-full bg-violet-500"></span>
                            )}
                          </span>
                          <span className="ml-2 text-white">No</span>
                        </Label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Presale Information */}

              <div class="bg-panel-bg rounded-lg p-8">
                <div class="text-2xl font-bold text-white">
                  Project description
                </div>
                <div class="text-white text-base mb-2 block mt-3 flex">
                  Tell us MORE about your project and your team.
                  <span class="text-violet-500 text-base font-bold">*</span>
                </div>
                <div class="flex flex-col">
                  <Textarea
                    class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white h-32"
                    placeholder="Overall description"
                    name="description"
                    required=""
                    {...register("description", {
                      required: "Description is required",
                    })}
                  ></Textarea>
                </div>
              </div>

              {/* Socials */}
              <div className="bg-panel-bg rounded-lg p-8">
                <div className="text-2xl font-bold text-white">Socials</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-3 grid gap-9 md:grid-cols-2">
                    {/* Fixed social inputs */}
                    {fields.slice(0, 4).map((item, index) => (
                      <div key={item.id} className="flex flex-col">
                        <label className="text-white text-base mb-2 block flex justify-between">
                          <div>
                            {item.name}{" "}
                            <span className="text-violet-500 text-base font-bold">
                              {/* * */}
                            </span>
                          </div>
                        </label>
                        <input
                          {...register(`socials.${index}.link`, {
                            // required: item.name !== "CoinMarketCap", // required only if it's not CoinMarketCap
                          })}
                          className="border rounded-md focus:border-panel-bg focus:outline-indigo-700 h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white pl-10"
                          type="text"
                          placeholder="e.g. https://..."
                        />
                        <img
                          className="-mt-[2.3rem] ml-3 h-5 w-5"
                          src={`${item.icon}`}
                          alt={item.name}
                        />
                      </div>
                    ))}

                    {/* Additional social inputs */}
                    {fields.slice(4).map((item, index) => (
                      <div key={item.id} className="flex flex-col relative">
                        <label className="text-white text-base mb-2 block flex justify-between">
                          <div>{item.name}</div>
                        </label>
                        <input
                          {...register(`socials.${index + 4}.link`)}
                          className="border rounded-md focus:border-panel-bg focus:outline-indigo-700 h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white pl-10"
                          type="text"
                          placeholder="e.g. https://..."
                        />
                        <img
                          className="-mt-[2.3rem] ml-3 h-5 w-5"
                          src={`${item.icon}`}
                          alt={item.name}
                        />
                        <button
                          type="button"
                          className="absolute top-0 right-0 text-red-500 mt-2"
                          onClick={() => handleRemoveSocial(index + 4)}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Additional Socials Section */}
                  <div className="mt-8">
                    <span className="text-white mb-2 block">
                      Add More Socials:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {availableSocials.map((social) => (
                        <button
                          key={social.name}
                          type="button"
                          className="flex items-center justify-center gap-2 rounded-lg bg-gray-600 p-2 transition-colors hover:bg-gray-500"
                          onClick={() => handleAddSocial(social.name)}
                        >
                          <img
                            className="h-5 w-5"
                            src={`${social.icon}`}
                            alt={social.name}
                          />
                          {social.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </form>
              </div>
              {/* Socials */}

              <div class="bg-panel-bg rounded-lg p-8">
                <div class="text-2xl font-bold text-white">
                  Contact Information
                </div>
                <div class="md:grid-cols-2 mt-3 gap-5 grid grid-col-1">
                  <div class="flex w-full flex-col">
                    <Label class="text-white text-base mb-2 block">
                      Email{" "}
                      <span class="text-violet-500 text-base font-bold">
                        {" "}
                        *
                      </span>
                    </Label>
                    <Input
                      type="email"
                      required=""
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white"
                      placeholder="contact@coinmooner.com"
                      name="email"
                      {...register("contactEmail", {
                        required: "Email is required",
                      })}
                    />
                  </div>
                  <div class="flex w-full flex-col">
                    <Label class="text-white text-base mb-2 block">
                      Contact Telegram
                      <span class="text-violet-500 text-base font-bold">
                        {" "}
                        *
                      </span>
                    </Label>
                    <Input
                      type="text"
                      required=""
                      class="border rounded-md focus:border-panel-bg focus:outline-indigo-700 focus:outline-offset-0 focus:outline-none focus-within:border-panel-bg focus-within:outline-indigo-700 focus-within:outline-offset-0 focus-within:outline-none h-14 bg-panel-bg p-4 placeholder-neutral-400 text-white"
                      placeholder="@CoinMoonerAdverts"
                      name="contactTelegram"
                      {...register("contactTelegram", {
                        required: "Contact Telegram is required",
                      })}
                    />
                  </div>
                </div>
              </div>
              <div class="bg-panel-bg rounded-lg p-8">
                <div class="text-2xl font-bold text-white">Confirmation</div>
                <div class="md:grid-cols-2 mt-3 gap-5 grid grid-col-1">
                  <div class="flex h-full flex-col justify-center gap-2">
                    <div class="flex w-full items-center gap-2">
                      <Input
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
                  {/* <div class="flex w-full flex-col">
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
                  </div> */}
                </div>
              </div>
              <div class="mt-4 flex flex-col items-center">
                <Button
                  class="rounded-md border-2 border-purple-100 bg-mediumslateblue-200 px-10 py-3 text-xl text-white backdrop-blur-[50px] transition-colors hover:bg-purple-100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
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
      <SuccessModal
        visible={showSuccessModal}
        onClose={() => setShowSuccessModal(false)} // Close the modal
      />
    </>
  );
};

export default page;
