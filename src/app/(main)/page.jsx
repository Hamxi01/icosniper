import Image from "next/image";
import Slider from "./_components/slider";
import PromotedCoins from "./_components/promotedCoins";
import TrendingCoins from "./_components/trendingCoins";
import InfoBox from "./_components/infoBox";
import ThreeBox from "./_components/threeBox";

export default function Home() {
  return (
    <>
      <ThreeBox />
      <PromotedCoins />
      <Slider />
      <TrendingCoins />
      <InfoBox />
    </>
  );
}
