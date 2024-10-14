import { FC } from "react";
import HeroImg from "@/assets/hero-img.svg";
import Image from "next/image";
import Header from "./Header";

const Hero: FC = () => {
  return (
    <div className="w-full h-[700px] bg-[#C7D0D9]">
      <Header />
      <div className="flex flex-col items-center relative overflow-hidden">
        <Image src={HeroImg} alt="hero" />
        <div className="absolute bottom-24 flex text-[150px] text-white overflow-hidden w-full gap-16">
          <div className="flex animate-marqueeLeft whitespace-nowrap">
            Webflow Developer - UI/UX Designer
          </div>
          <div className="flex animate-marqueeLeft whitespace-nowrap">
            Webflow Developer - UI/UX Designer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
