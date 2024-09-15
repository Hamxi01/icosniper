import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="pb-10 pt-2">
      <div className="container mx-auto w-full max-w-[1366px]">
        <div className="mb-4">
          <Image
            src={"/img/banner-1.webp"}
            alt="Banner 2"
            width={1000}
            height={200}
            className="w-full h-fit object-cover rounded-lg max-h-[110px]"
          />
        </div>
        <div className="grid grid-cols-2 lg:gap-5 gap-3">
          <Image
            src={"/img/banner-2.webp"}
            alt="Banner 2"
            width={1000}
            height={150}
            className="w-full h-fit object-cover rounded-lg max-h-[85px]"
          />
          <video
            src="/img/banner-3.mp4"
            className="w-full h-fit object-cover rounded-lg max-h-[85px]"
            // controls
            autoPlay
            loop
          ></video>
          {/* <Image
            src={"/img/banner-3.mp4"}
            alt="Banner 2"
            width={1000}
            height={150}
            className="w-full h-fit object-cover rounded-lg max-h-[850px]"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
