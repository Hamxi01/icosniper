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
import React, { useEffect, useState } from "react";

import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Link from "next/link";

const Slider = () => {
  const [news, setNews] = useState([]); // State to store fetched news
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch news data from the API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news?showPublishedOnly=true"); // Adjust this URL to your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNews(data.news); // Assuming the API returns an object with a news property
      } catch (error) {
        setError(error.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchNews();
  }, []);

  // Show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="lg:px-0 px-2">
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
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {news.slice(0, 6).map(
            (
              item,
              index // Show first 6 news items
            ) => (
              <SwiperSlide key={item.id}>
                <Card>
                  <CardHeader className="p-0 pb-3">
                    <Image
                      src={item.thumbnail} // Assuming the news item has an image property
                      alt={item.title} // Assuming the news item has a title property
                      width={300}
                      height={150}
                      className="w-full h-fit max-h-[160px] object-cover rounded-lg"
                    />
                  </CardHeader>
                  <CardContent className="pb-3 px-3">
                    <CardDescription className="text-xs">
                      Published{" "}
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </CardDescription>
                    <CardTitle className="w-full rounded-md text-sm font-normal leading-8 hover:text-silver lg:text-base">
                      <Link href={`/news/single?id=${item.id}`}>
                        {" "}
                        {/* Adjust link to your news detail page */}
                        {item.title}
                      </Link>
                    </CardTitle>
                  </CardContent>
                  <CardFooter className="pb-3 px-3">
                    <Badge className="rounded dark:bg-gray-600 dark:text-white">
                      {item.categories}
                    </Badge>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
