import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock3Icon, FireExtinguisher } from "lucide-react";
import Image from "next/image";
import React from "react";

const ThreeBox = () => {
  return (
    <section className="lg:px-0 px-2 py-10">
      <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-7">
        <Card className="bg-[#1b1f31]">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <span>ADS</span>
              <Clock3Icon className="bg-[#7c4eff] rounded-full text-black" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <span></span>
                <span className="text-[#a3a3a3] text-sm">Submitted</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">1</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">Pawganja Coin</p>
                  <span className="text-xs text-[#a3a3a3]">PAW</span>
                </div>
                <span className="dark:text-white text-sm">3 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">2</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">FUN</p>
                  <span className="text-xs text-[#a3a3a3]">$FUN</span>
                </div>
                <span className="dark:text-white text-sm">10 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">3</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">AGCOIN</p>
                  <span className="text-xs text-[#a3a3a3]">AGCOINBR</span>
                </div>
                <span className="dark:text-white text-sm">16 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">4</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">BOING</p>
                  <span className="text-xs text-[#a3a3a3]">$BNG</span>
                </div>
                <span className="dark:text-white text-sm">18 hours ago</span>
              </div>
            </div> */}
          </CardContent>
        </Card>
        <Card className="bg-[#1b1f31]">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <span>New Coins</span>
              <Clock3Icon className="bg-[#7c4eff] rounded-full text-black" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <span></span>
                <span className="text-[#a3a3a3] text-sm">Submitted</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">1</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">Pawganja Coin</p>
                  <span className="text-xs text-[#a3a3a3]">PAW</span>
                </div>
                <span className="dark:text-white text-sm">3 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">2</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">FUN</p>
                  <span className="text-xs text-[#a3a3a3]">$FUN</span>
                </div>
                <span className="dark:text-white text-sm">10 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">3</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">AGCOIN</p>
                  <span className="text-xs text-[#a3a3a3]">AGCOINBR</span>
                </div>
                <span className="dark:text-white text-sm">16 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">4</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">BOING</p>
                  <span className="text-xs text-[#a3a3a3]">$BNG</span>
                </div>
                <span className="dark:text-white text-sm">18 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1b1f31]">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <span>Hottest Pairs</span>
              <FireExtinguisher className="bg-[#7c4eff] rounded-full text-black" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <span></span>
                <span className="text-[#a3a3a3] text-sm">Volume</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">1</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">Pawganja Coin</p>
                  <span className="text-xs text-[#a3a3a3]">PAW</span>
                </div>
                <span className="dark:text-white text-sm">3 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">2</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">FUN</p>
                  <span className="text-xs text-[#a3a3a3]">$FUN</span>
                </div>
                <span className="dark:text-white text-sm">10 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">3</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">AGCOIN</p>
                  <span className="text-xs text-[#a3a3a3]">AGCOINBR</span>
                </div>
                <span className="dark:text-white text-sm">16 hours ago</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#a3a3a3] font-semibold">4</span>
                  <Image
                    src={"/img/pages/home/"}
                    alt="Image"
                    width={40}
                    height={40}
                    className="w-[30px] h-fit rounded-full"
                  />
                  <p className="dark:text-white">BOING</p>
                  <span className="text-xs text-[#a3a3a3]">$BNG</span>
                </div>
                <span className="dark:text-white text-sm">18 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ThreeBox;
