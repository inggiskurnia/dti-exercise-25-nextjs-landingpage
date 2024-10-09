import About from "@/components/About";
import CarouselPage from "@/components/CarouselPage";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import RecentWorks from "@/components/RecentWorks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <RecentWorks></RecentWorks>
      <CarouselPage></CarouselPage>
      <Testimonials></Testimonials>
      <GetInTouch></GetInTouch>

      <div className="w-full relative h-40">
        <div className="text-[100px] absolute left-full animate-marqueeLeft flex">
          <span>Text 1</span>
          <span>Text 2</span>
          <span>Text 3</span>
          <span>Text 4</span>
        </div>
      </div>
    </>
  );
}
