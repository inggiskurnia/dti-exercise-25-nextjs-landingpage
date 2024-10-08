import { FC } from "react";
import HeroImg from '@/assets/hero-img.svg';
import Image from 'next/image';
import Header from "./Header";

const Hero: FC = () => {
    return (
        <div className="h-[700px] bg-[#C7D0D9]">
            <Header />
            <div className="flex flex-col items-center relative overflow-hidden">
                <Image src={HeroImg} alt="hero" />
                <div className="absolute bottom-[98px] text-white text-[150px] whitespace-nowrap animate-marqueeLeft">
                    <span>Webflow Developer - UI/UX Designer</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
