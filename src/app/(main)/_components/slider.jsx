"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Link from "next/link";

const Slider = () => {
  return (
    <section className="lg:px-0 px-2">
      {/* <div className="container mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <Card>
          <CardHeader>
            <Image
              src={"/img/pages/home/slider-1.jpg"}
              alt="Slider 1"
              width={300}
              height={300}
              className="w-full h-fit rounded-lg"
            />
          </CardHeader>
          <CardContent>
            <CardDescription>Published August 30, 2024</CardDescription>
            <CardTitle className="text-md">
              New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
            </CardTitle>
          </CardContent>
          <CardFooter>
            <Badge className="rounded dark:bg-gray-600 dark:text-white">
              News
            </Badge>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Image
              src={"/img/pages/home/slider-1.jpg"}
              alt="Slider 1"
              width={300}
              height={300}
              className="w-full h-fit rounded-lg"
            />
          </CardHeader>
          <CardContent>
            <CardDescription>Published August 30, 2024</CardDescription>
            <CardTitle className="text-md">
              New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
            </CardTitle>
          </CardContent>
          <CardFooter>
            <Badge className="rounded dark:bg-gray-600 dark:text-white">
              News
            </Badge>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Image
              src={"/img/pages/home/slider-1.jpg"}
              alt="Slider 1"
              width={300}
              height={300}
              className="w-full h-fit rounded-lg"
            />
          </CardHeader>
          <CardContent>
            <CardDescription>Published August 30, 2024</CardDescription>
            <CardTitle className="text-md">
              New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
            </CardTitle>
          </CardContent>
          <CardFooter>
            <Badge className="rounded dark:bg-gray-600 dark:text-white">
              News
            </Badge>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Image
              src={"/img/pages/home/slider-1.jpg"}
              alt="Slider 1"
              width={300}
              height={300}
              className="w-full h-fit rounded-lg"
            />
          </CardHeader>
          <CardContent>
            <CardDescription>Published August 30, 2024</CardDescription>
            <CardTitle className="text-md">
              New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
            </CardTitle>
          </CardContent>
          <CardFooter>
            <Badge className="rounded dark:bg-gray-600 dark:text-white">
              News
            </Badge>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Image
              src={"/img/pages/home/slider-1.jpg"}
              alt="Slider 1"
              width={300}
              height={300}
              className="w-full h-fit rounded-lg"
            />
          </CardHeader>
          <CardContent>
            <CardDescription>Published August 30, 2024</CardDescription>
            <CardTitle className="text-md">
              New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
            </CardTitle>
          </CardContent>
          <CardFooter>
            <Badge className="rounded dark:bg-gray-600 dark:text-white">
              News
            </Badge>
          </CardFooter>
        </Card>
      </div> */}
      <div className="container mx-auto w-full max-w-[1366px]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 1000, // Slide delay in milliseconds
            disableOnInteraction: false, // Keep autoplay running even after user interaction
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // when window width is >= 640px (for mobile devices)
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px (for tablets)
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px (for small laptops)
            1024: {
              slidesPerView: 4,
            },
            // when window width is >= 1280px (for large screens)
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <Card>
              <CardHeader className="p-0 pb-3">
                <Image
                  src={"/img/pages/home/slider-2.webp"}
                  alt="Slider 1"
                  width={300}
                  height={150}
                  className="w-full h-fit max-h-[160px] object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent className="pb-3 px-3">
                <CardDescription className="text-xs">
                  Published August 30, 2024
                </CardDescription>
                <CardTitle className="w-full rounded-md text-sm font-normal leading-8 hover:text-silver lg:text-base">
                  <Link href={"/blog/1"}>
                    New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
                  </Link>
                </CardTitle>
              </CardContent>
              <CardFooter className="pb-3 px-3">
                <Badge className="rounded dark:bg-gray-600 dark:text-white">
                  News
                </Badge>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardHeader className="p-0 pb-3">
                <Image
                  src={"/img/pages/home/slider-3.webp"}
                  alt="Slider 1"
                  width={300}
                  height={150}
                  className="w-full h-fit max-h-[160px] object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent className="pb-3 px-3">
                <CardDescription className="text-xs">
                  Published August 30, 2024
                </CardDescription>
                <CardTitle className="w-full rounded-md text-sm font-normal leading-8 hover:text-silver lg:text-base">
                  <Link href={"/blog/1"}>
                    New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
                  </Link>
                </CardTitle>
              </CardContent>
              <CardFooter className="pb-3 px-3">
                <Badge className="rounded dark:bg-gray-600 dark:text-white">
                  News
                </Badge>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardHeader className="p-0 pb-3">
                <Image
                  src={"/img/pages/home/slider-1.webp"}
                  alt="Slider 1"
                  width={300}
                  height={150}
                  className="w-full h-fit max-h-[160px] object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent className="pb-3 px-3">
                <CardDescription className="text-xs">
                  Published August 30, 2024
                </CardDescription>
                <CardTitle className="w-full rounded-md text-sm font-normal leading-8 hover:text-silver lg:text-base">
                  <Link href={"/blog/1"}>
                    New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
                  </Link>
                </CardTitle>
              </CardContent>
              <CardFooter className="pb-3 px-3">
                <Badge className="rounded dark:bg-gray-600 dark:text-white">
                  News
                </Badge>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardHeader className="p-0 pb-3">
                <Image
                  src={"/img/pages/home/slider-2.webp"}
                  alt="Slider 1"
                  width={300}
                  height={150}
                  className="w-full h-fit max-h-[160px] object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent className="pb-3 px-3">
                <CardDescription className="text-xs">
                  Published August 30, 2024
                </CardDescription>
                <CardTitle className="w-full rounded-md text-sm font-normal leading-8 hover:text-silver lg:text-base">
                  <Link href={"/blog/1"}>
                    New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
                  </Link>
                </CardTitle>
              </CardContent>
              <CardFooter className="pb-3 px-3">
                <Badge className="rounded dark:bg-gray-600 dark:text-white">
                  News
                </Badge>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardHeader className="p-0 pb-3">
                <Image
                  src={"/img/pages/home/slider-1.webp"}
                  alt="Slider 1"
                  width={300}
                  height={150}
                  className="w-full h-fit max-h-[160px] object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent className="pb-3 px-3">
                <CardDescription className="text-xs">
                  Published August 30, 2024
                </CardDescription>
                <CardTitle className="w-full rounded-md text-sm font-normal leading-8 hover:text-silver lg:text-base">
                  <Link href={"/blog/1"}>
                    New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
                  </Link>
                </CardTitle>
              </CardContent>
              <CardFooter className="pb-3 px-3">
                <Badge className="rounded dark:bg-gray-600 dark:text-white">
                  News
                </Badge>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardHeader className="p-0 pb-3">
                <Image
                  src={"/img/pages/home/slider-3.webp"}
                  alt="Slider 1"
                  width={300}
                  height={150}
                  className="w-full h-fit max-h-[160px] object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent className="pb-3 px-3">
                <CardDescription className="text-xs">
                  Published August 30, 2024
                </CardDescription>
                <CardTitle className="w-full rounded-md text-sm font-normal leading-8 hover:text-silver lg:text-base">
                  <Link href={"/blog/1"}>
                    New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
                  </Link>
                </CardTitle>
              </CardContent>
              <CardFooter className="pb-3 px-3">
                <Badge className="rounded dark:bg-gray-600 dark:text-white">
                  News
                </Badge>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardHeader className="p-0 pb-3">
                <Image
                  src={"/img/pages/home/slider-1.webp"}
                  alt="Slider 1"
                  width={300}
                  height={150}
                  className="w-full h-fit max-h-[160px] object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent className="pb-3 px-3">
                <CardDescription className="text-xs">
                  Published August 30, 2024
                </CardDescription>
                <CardTitle className="w-full rounded-md text-sm font-normal leading-8 hover:text-silver lg:text-base">
                  <Link href={"/blog/1"}>
                    New Meme Coin ‘The Meme Games’ Kicks Off Crypto...
                  </Link>
                </CardTitle>
              </CardContent>
              <CardFooter className="pb-3 px-3">
                <Badge className="rounded dark:bg-gray-600 dark:text-white">
                  News
                </Badge>
              </CardFooter>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
